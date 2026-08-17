"""
FLUX IMAGE GENERATION BACKEND (DAY 31)

New Topics Covered in Day 31:
- Setting up Python-based REST APIs using FastAPI
- Loading local pre-trained Diffusion models and VAE decoders (FLUX.2-small-decoder & FLUX.2-klein-4B)
- Device-aware execution optimizations using CUDA and bfloat16/float32 data types
- CPU offloading structures for local system performance optimizations (enable_model_cpu_offload)
- Encoding in-memory Pillow images into Base64 formats for web transmission

Cross-File & Architecture References:
- Accessed by: Potential frontend clients or testing scripts
- Connected Libraries: diffusers (Hugging Face pipelines), torch (PyTorch backend)
"""

from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware

import torch
from diffusers import Flux2KleinPipeline, AutoencoderKLFlux2
import base64
from io import BytesIO
import logging

# -----------------------------
# App Config
# -----------------------------
app = FastAPI()

# Enable CORS (Cross-Origin Resource Sharing) to authorize browser requests
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allow all sources in development environment
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Initialize logging to output execution details to console
logging.basicConfig(level=logging.INFO)

# -----------------------------
# Device Setup
# -----------------------------
# Select hardware acceleration runtime: CUDA if Nvidia graphics card is present, otherwise fallback to CPU
device = "cuda" if torch.cuda.is_available() else "cpu"
# Use half-precision float16/bfloat16 for graphics card, full-precision float32 for CPU
dtype = torch.bfloat16 if device == "cuda" else torch.float32

logging.info(f"Using device: {device}")

# -----------------------------
# Load Model ONCE (Cached in memory)
# -----------------------------
pipe = None

def get_pipeline():
    global pipe
    if pipe is not None:
        return pipe

    try:
        logging.info("Loading VAE decoder...")
        # Load VAE small decoder to process visual outputs
        vae = AutoencoderKLFlux2.from_pretrained(
            "black-forest-labs/FLUX.2-small-decoder",
            torch_dtype=dtype
        )

        logging.info("Loading Flux pipeline...")
        # Load 4-billion parameter FLUX.2 Klein model
        pipe = Flux2KleinPipeline.from_pretrained(
            "black-forest-labs/FLUX.2-klein-4B",
            vae=vae,
            torch_dtype=dtype
        )

        # Apply performance strategies based on device
        if device == "cuda":
            # Offload pipeline sub-modules to CPU memory when idle to reduce VRAM load
            pipe.enable_model_cpu_offload()
        else:
            pipe.to("cpu")

        logging.info("Model loaded successfully!")
        return pipe

    except Exception as e:
        logging.error(f"Model loading failed: {str(e)}")
        raise e

# -----------------------------
# Request Schema
# -----------------------------
# Define model schemas for request parameter validation using Pydantic
class PromptRequest(BaseModel):
    prompt: str
    height: int = 1024
    width: int = 1024
    steps: int = 4
    seed: int = 0


# -----------------------------
# Routes
# -----------------------------
@app.get("/")
def root():
    return {
        "message": "FLUX Image API is running 🚀",
        "device": device,
        "model_status": "ready" if pipe is not None else "standby (will load on first request)"
    }


@app.post("/generate")
def generate_image(req: PromptRequest):
    try:
        logging.info(f"Prompt: {req.prompt}")

        pipeline = get_pipeline()

        # 1. GENERATE IMAGE VIA FLUX PIPELINE
        image = pipeline(
            prompt=req.prompt,
            height=req.height,
            width=req.width,
            guidance_scale=1.0,
            num_inference_steps=req.steps,
            # Fix random seed to enforce deterministic output generations
            generator=torch.Generator(device="cpu").manual_seed(req.seed)
        ).images[0]

        # 2. CONVERT IMAGE OUTPUT TO BASE64 REPRESENTATION
        # BytesIO acts as virtual in-memory file container
        buffered = BytesIO()
        # Save Pillow image in PNG format into stream
        image.save(buffered, format="PNG")
        # Encode binary data to base64, and decode to UTF-8 string format
        img_base64 = base64.b64encode(buffered.getvalue()).decode()

        # 3. RETURN BASE64 DATA URL FOR DIRECT BROWSER RENDERING
        return {
            "success": True,
            "image": f"data:image/png;base64,{img_base64}"
        }

    except Exception as e:
        logging.error(f"Error: {str(e)}")
        raise HTTPException(status_code=500, detail=str(e))


if __name__ == "__main__":
    import uvicorn
    uvicorn.run("app:app", host="0.0.0.0", port=8000, reload=True)