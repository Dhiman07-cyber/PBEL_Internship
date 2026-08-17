/*******************************************************************************************************
 * *************************************** GENAI CONTROLLER LOGIC (DAY 31) *****************************
 *
 * New Topics Covered in Day 31:
 * - Asynchronous API integration using async/await and fetch calls
 * - Managing UI loading indicators and result fields dynamically using classList configurations
 * - Direct client-side downloads using memory-allocated virtual anchors (a element triggers)
 * - Prompt templates setup using switch structures (template injections)
 *
 * Cross-File & Architecture References:
 * - Embedded by: `index.html`
 * - Connected Backend Endpoint: POST HTTP requests sent to Node Express server (http://localhost:5000/generate)
 *******************************************************************************************************/

/**
 * Handles client-side submission of prompt parameters to backend API and updates visual containers.
 */
async function generateContent() {
  // Extract inputs and visibility elements
  const prompt = document.getElementById("prompt").value;
  const paraEl = document.getElementById("generatedContent");
  const loading = document.getElementById("loading");
  const downloadBtn = document.getElementById("downloadBtn");

  // Validate prompt existence
  if (!prompt) {
    alert("Please enter a prompt!");
    return;
  }

  // 1. STATE CONFIGURATION (Show loading indicator, hide results/triggers)
  loading.classList.remove("hidden");
  paraEl.classList.add("hidden");
  downloadBtn.classList.add("hidden");

  try {
    // 2. DISPATCH ASYNCHRONOUS POST OPERATION TO NODE.JS SERVER
    const response = await fetch("http://localhost:5000/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ prompt })
    });

    const data = await response.json();

    console.log("API Response:", data);

    // 3. HANDLE RECEIVED DATASET
    if (data) {
      // Map generated text string into paragraph container
      paraEl.innerText = data.output;
      paraEl.classList.remove("hidden");
    } else {
      alert("No content generated");
    }

  } catch (error) {
    console.error(error);
    alert("Failed to connect to server");
  }

  // 4. CLEANUP LOADING INDICATORS
  loading.classList.add("hidden");
}

/**
 * Creates temporary download triggers to download base64-encoded image files directly from client side.
 */
function downloadImage() {
  const imageEl = document.getElementById("generatedImage");

  if (!imageEl.src) {
    alert("No image to download!");
    return;
  }

  // Create virtual hidden anchor
  const link = document.createElement("a");
  // Set source URL to local base64 dataset
  link.href = imageEl.src;
  // Declare target download filename
  link.download = "generated-image.png";
  // Emulate user click operation to prompt browser save dialog
  link.click();
}

/**
 * Injects predefined prompt templates into textarea input field based on preset labels.
 * @param {string} type - Preset key identifier ('resume', 'blog', 'linkedin')
 */
function useTemplate(type) {
  const promptBox = document.getElementById("prompt");

  if (type === "resume") {
    promptBox.value = "Write one resume summary based on Full Stack Developer profile";
  } 
  else if (type === "blog") {
    promptBox.value = "Write a blog on A futuristic AI robot";
  } 
  else if (type === "linkedin") {
    promptBox.value = "Write a compelling LinkedIn 'About' section for a Full Stack Developer with 4+ years of experience in Software development, specializing in JavaScript, NOdeJS, React.js. Keep the tone professional yet approachable, highlight my passion for Building scalable application and AI driver portals, and end with a call to connect.";
  }
}