import PaginationComp from '@/components/PaginationComp'
import { Input, Textarea } from '@chakra-ui/react'
import React from 'react'

const Contact = () => {
  return (
    <div>

        <h2>Contact Us</h2>
        <p>If you have any questions or inquiries, please feel free to reach out to us.</p>
        <form>
            <label htmlFor="name">Name:</label>
            <Input type="text" id="name" name="name" required />
            <br />
            <label htmlFor="email">Email:</label>
            <Input type="email" id="email" name="email" required />
            <br />
            <label htmlFor="message">Message:</label>
            <Textarea id="message" name="message" required></Textarea>
            <br />
            <button type="submit">Submit</button>
        </form>
        <PaginationComp />
    </div>
  )
}

export default Contact