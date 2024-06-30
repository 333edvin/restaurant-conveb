import Image from "next/image";
import menu1 from '../../../public/images/menu-1.png';
import menu2 from '../../../public/images/menu-2.png';
import menu3 from '../../../public/images/menu-3.png';
import menu4 from '../../../public/images/menu-4.png';
import menu5 from '../../../public/images/menu-5.png';
import menu6 from '../../../public/images/menu-6.png';

function Menu() {
  const menuItems = [
    { title: 'Greek Salad', price: '25.50', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', imageSrc: menu1 },
    { title: 'Butternut Pumpkin', price: '30.00', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', imageSrc: menu2 },
    { title: 'Olivas Rellenas', price: '20.00', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', imageSrc: menu3 },
    { title: 'Lasagne', price: '15.00', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', imageSrc: menu4 },
    { title: 'Tokusen Wagyu', price: '18.00', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', imageSrc: menu5},
    { title: 'Opu Fish', price: '22.50', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', imageSrc: menu6 },
  ];

  return (
    <div className=" py-20 p-5 text-white">
      <p className="text-md font-bold text-center mt-10 text-orange-400">SPECIAL SELECTION</p>
      <p className="text-5xl text-center mb-10">Delicious Menu</p>
      <div className="container mx-auto text-white p-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {menuItems.map((item, index) => (
            <div key={index} className="flex flex-col mb-6 md:mx-5">
              <div className="flex">
                <Image src={item.imageSrc} alt={`${item.title} image`} className="w-28 h-28 rounded-xl" />
                <div className="flex flex-col ml-4">
                  <div className="flex justify-between">
                    <h2 className="text-xl font-bold">{item.title}</h2>
                    <p className="text-lg font-semibold">${item.price}</p>
                  </div>
                  <p className="text-gray-400">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
        <p>During winter daily from <span className="text-orange-400"> 7:00 pm</span> to <span className="text-orange-400">9:00 pm</span> </p>
          <button className="border-orange-400 border-2 p-3 mt-5">View All Menu</button>
        </div>
      </div>
    </div>
  );
}

export default Menu;
