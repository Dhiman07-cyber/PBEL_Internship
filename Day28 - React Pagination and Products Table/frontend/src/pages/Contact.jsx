import { Input } from "@chakra-ui/react"

const Contact = () => {
    return (
        <div>
            <h2>Contact Us</h2>
            <p>This is the contact page content.</p>
            <form>
                <label htmlFor="name">Name:</label>
                <Input type="text" id="name" name="name" />
                <br />
                <label htmlFor="email">Email:</label>
                <Input type="email" id="email" name="email" />
                <br />
                <label htmlFor="message">Message:</label>
                <Input type="textarea" id="message" name="message" />
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Contact