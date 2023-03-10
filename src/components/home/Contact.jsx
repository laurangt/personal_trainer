import React, {useRef} from 'react'
import emailjs from '@emailjs/browser';

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault()
    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        e.target,
        'sjPajrIm2IKTbHccg',
      )
      .then((result) => {
        console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      alert("Your email has been sent")
      e.target.reset()
  }

  return (
    <section className="bg-programme-blue">
      <div className="mx-8 lg:mx-auto py-10 lg:py-16 lg:w-1/2 text-lg">
          <h2 className="mb-8 lg:mx-40 text-2xl font-bold text-center text-white">Contact Me</h2>
          <p className="mb-8 font-light lg:text-xl text-justify text-white">Do you have further questions about any of the programs or 1-1 coaching? Is there anything else you want to ask me? Feel free to fill out this contact form.</p>
          <form ref={form} onSubmit={sendEmail} className="space-y-8">
              <div>
                  <label htmlFor="name" className="block mb-2 font-medium text-white">Name</label>
                  <input type="text" name="name" className="shadow-sm bg-gray-50 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5" placeholder="Enter your name" required />
              </div>
              <div>
                  <label htmlFor="email" className="block mb-2 font-medium text-white">Your email</label>
                  <input type="email" name="email" className="shadow-sm bg-gray-50 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5" placeholder="name@email.com" required />
              </div>
              <div className="sm:col-span-2">
                  <label htmlFor="message" className="block mb-2 font-medium text-white">Your message</label>
                  <textarea name="message" rows="6" className="block p-2.5 w-full bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 " placeholder="Leave your enquiry..."></textarea>
              </div>
              <button type="submit" className="hover:font-bold py-3 px-5  text-center rounded-lg bg-yellow sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300">Send message</button>
          </form>
      </div>
    </section>
  )
}

export default Contact
