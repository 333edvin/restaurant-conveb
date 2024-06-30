import Image from 'next/image'
import tortellini from '../../../public/images/tortellini.jpg'

function Special() {
  return (
    <>
     <div className=" mx-auto   text-white bg-neutral-900">
        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2  mx-auto">
           
            <div>
                <Image src={tortellini} alt="oru image" className="w-full  story-img object-cover" />
            </div> 
            <div className="flex flex-col items-center justify-center">
              <div className='px-8 md:px-14 text-center my-10'>

                <p className='text-md text-orange-400'>Special Dish</p>
                <p className='text-5xl'>Lobster Tortellini</p>

                <p className="my-5">Lorem Ipsum is simply dummy text of the printingand typesetting industry lorem Ipsum has been the industrys standard dummy text ever since the when an unknown printer took a galley of type and scrambled it to make a type specimen book It has survived not only five centuries, but also the leap into.</p>

                <p className="text-orange-400">$ 20.00</p>
                <button className="uppercase border-2 border-orange-400 p-3 mt-5">View All Menu</button>
              </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Special