import '../globals.css';

function Contact() {
  return (
    <div className="bg-neutral-900 min-h-96 flex items-center justify-center">
      <div className="bg-black p-8 rounded-lg shadow-lg w-full md:max-w-4xl mx-4 md:mx-auto" style={{ position: "relative", top: "-100px" }}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 mx-auto w-full">
          <form className="space-y-4">
        <h2 className="text-3xl font-semibold text-white mb-6 text-center">Online Reservation</h2>
        <p className='text-white text-center'>Booking request <span className='text-orange-400'> +88-123-123456</span> or fill out the order form</p>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-100">Your Name</label>
              <input type="text" id="name" name="name" placeholder="John Doe" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" required />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-100">Your Email</label>
              <input type="email" id="email" name="email" placeholder="john.doe@example.com" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" required />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-100">Message</label>
              <textarea id="message" name="message" rows="4" placeholder="Your message..." className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"></textarea>
            </div>
            <div>
              <button type="submit" className="w-full bg-orange-400 hover:bg-orange-600 text-orange-900 font-semibold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50">Submit</button>
            </div>
          </form>
          <div className="text-white mx-10">
        <h2 className="text-2xl font-semibold text-white mb-6 text-center">Contact Us</h2>

            
            <p className='text-2xl my-3'>Location</p>
            <p>
              Restaurant St, Delicious City,
              London 9578, UK
            </p>
            <p className='text-2xl my-3'>Lunch Time:</p>
            <p>Monday to Sunday<br />11.00 am - 2.30 pm</p>
            <p className='text-2xl my-3'>Dinner Time:</p>
            <p>Monday to Sunday<br />05.00 pm - 10.00 pm</p>
            <p className="text-orange-400 my-3">Booking Request</p>
            <p className='text-orange-300'>+88-123-123456</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
