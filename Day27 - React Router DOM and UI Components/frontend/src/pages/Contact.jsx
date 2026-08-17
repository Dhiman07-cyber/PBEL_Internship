/*******************************************************************************************************
 *************************************** CONTACT FORM PAGE COMPONENT (`Contact.jsx`) ********************
 *
 * New Topics & Key Concepts Covered in Day 27:
 * - Integrating Chakra UI Form Elements (`Input` from `@chakra-ui/react`)
 * - HTML5 Form Controls & Accessible Label Binding (`htmlFor` attribute matching input `id`)
 * - Form Data Input Types (`text`, `email`, `textarea`)
 *
 * Differences & Architectural Progression (Day 25 / Day 26 vs Day 27):
 * - Day 25 & Day 26: Had plain HTML form inputs without design framework integration.
 * - Day 27: Integrated Chakra UI v3 `<Input>` primitives into the form, providing theme-aware styling, focus rings,
 *   and automatic dark/light mode adjustment!
 *
 * Cross-File & Execution Flow:
 * 1. Mounted dynamically by `AllRoutes.jsx` when URL path is `/contact`.
 * 2. `<Input>` primitives inherit Chakra UI system styling from `<Provider>` in `main.jsx`.
 *******************************************************************************************************/

// =========================================================================================
// IMPORTS
// =========================================================================================
// 1. Import Chakra UI Input component primitive for accessible styled form fields
import { Input } from "@chakra-ui/react"

// =========================================================================================
// CONTACT FORM COMPONENT
// =========================================================================================
const Contact = () => {
    return (
        <div>
            <h2>Contact Us</h2>
            <p>This is the contact page content.</p>

            {/* User Feedback Contact Form */}
            <form>
                {/* 1. Name Input Field */}
                <label htmlFor="name">Name:</label>
                <Input type="text" id="name" name="name" />
                <br />

                {/* 2. Email Input Field */}
                <label htmlFor="email">Email:</label>
                <Input type="email" id="email" name="email" />
                <br />

                {/* 3. Message Area Input Field */}
                <label htmlFor="message">Message:</label>
                <Input type="textarea" id="message" name="message" />
                <br />

                {/* Submit Form Button */}
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

// Export Contact component for routing in AllRoutes.jsx
export default Contact