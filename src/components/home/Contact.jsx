import React from 'react'

function Contact() {
  return (
    <section className="bg-programme-blue">
      <div className="mx-8 lg:mx-auto py-10 lg:py-16 lg:w-1/2">
          <h2 className="mb-8 lg:mx-40 text-2xl font-bold text-center text-white">Contact Me</h2>
          <p className="mb-8 font-light lg:text-xl text-justify text-white">Do you have further questions about any of the program or 1-1 coaching? Is there anything else you want to ask me? Feel free to fill out this contact form.</p>
          <form action="#" className="space-y-8">
              <div>
                  <label htmlFor="email" className="block mb-2 font-medium text-white">Your email</label>
                  <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-white rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5" placeholder="name@email.com" required />
              </div>
              <div>
                  <label htmlFor="subject" className="block mb-2 font-medium text-white">Subject</label>
                  <input type="text" id="subject" className="block p-3 w-full text-white bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500" placeholder="Let me know how I can help you" />
              </div>
              <div className="sm:col-span-2">
                  <label htmlFor="message" className="block mb-2 font-medium text-white">Your message</label>
                  <textarea id="message" rows="6" className="block p-2.5 w-full text-white bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 " placeholder="Leave your enquiry..."></textarea>
              </div>
              <button type="submit" className="py-3 px-5 font-bold text-center rounded-lg bg-yellow sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300">Send message</button>
          </form>
      </div>
    </section>
  )
}

export default Contact
