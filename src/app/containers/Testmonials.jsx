import testimonial from '../../../public/images/testimonial-bg.jpg';
import male from '../../../public/images/Male.jpeg';
import Image from 'next/image';
function Testmonials() {
  return (
    <>
 <div className="relative h-screen">
     
        <Image src={testimonial} alt="das" className="w-full h-screen object-cover" />
      
      <div className="absolute inset-0 flex items-center justify-center">
        {/* Review content */}
        <div className="shadow-md bg-opacity-75 p-8 rounded-lg text-center max-w-md mx-auto">
          <Image className="h-24 w-24 rounded-full mx-auto object-cover" src={male} alt="Customer" />
          <p className="mt-4 text-2xl font-semibold text-white">John Doe</p>
          <div className="mt-6 text-white">
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            <p>"Fantastic dining experience at BurnUp! Amazing food, great service, and wonderful ambiance. Will definitely be back!"</p>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Testmonials