import Image from 'next/image';
import Link from 'next/link';
import service1 from '../../../public/images/service-1.jpg';
import service2 from '../../../public/images/service-2.jpg';
import service3 from '../../../public/images/service-3.jpg';

function ServiceItem({ imageSrc, title }) {
  return (
    <div className="flex flex-col justify-center items-center gap-5">
      <Image src={imageSrc} alt={title} width={250} height={300} />
      <p className="text-3xl font-semibold">{title}</p>
      <Link href="/">
        <p className="uppercase text-xs text-yellow-500">View Menu</p>
      </Link>
    </div>
  );
}

function WeOffer() {
  return (
    <div className="py-24 p-3">
      <div className="text-center mb-8 text-white ">
        <p className="text-xs md:text-sm font-bold text-orange-400 mb-5">FLAVORS OF ROYALTY</p>
        <p className="text-4xl md:text-6xl font-bold">We Offer...</p>
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        <p className="mt-4 text-lg text-gray-200 ">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
           <br />
          {/* eslint-disable-next-line react/no-unescaped-entities */}
           Lorem Ipsum has been the industry's standard dummy text ever.
        </p>
      </div>

      <div className="container mx-auto px-8 sm:px-10">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto text-white text-2xl font-bold my-10">
          <ServiceItem imageSrc={service1} title="Breakfast" />
          <ServiceItem imageSrc={service2} title="Appetizers"/>
          <ServiceItem imageSrc={service3} title="Drinks" />
        </div>
      </div>
    </div>
  );
}

export default WeOffer;
