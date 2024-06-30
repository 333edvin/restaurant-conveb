import Image from "next/image"
import aboutbanner from '../../../public/images/about-banner.jpg'
import '../globals.css'
function OurStory() {
  return (
    <>
    <div className="  mx-auto   text-white bg-neutral-900" >
        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2  mx-auto ">
            <div className="flex flex-col items-center justify-center order-2 md:order-1">
              <div className="px-8 md:px-14 text-center my-10">

                <p className="text-md text-orange-400">Our Story</p>
                <p className="text-5xl">We Tells a Story</p>

                <p className="my-5">Lorem Ipsum is simply dummy text of the printingand typesetting industry lorem Ipsum has been the industrys standard dummy text ever since the when an unknown printer took a galley of type and scrambled it to make a type specimen book It has survived not only five centuries, but also the leap into.</p>

                <p>Book Through Call</p>
                <p className="text-orange-400">+91 1234-567-890</p>
                <button className="uppercase border-2 border-orange-400 p-3 mt-5">Read More</button>
            </div>
              </div>
            <div className="order-1 md:order-2">
                <Image src={aboutbanner} alt="oru image" className="w-full story-img object-cover"/>
            </div>
        </div>
    </div>
    </>
  )
}

export default OurStory