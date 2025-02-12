import { useState, useEffect } from "react";
import FooterSection from "../components/FooterSection";
import Navbar from "../components/Navbar";

// eslint-disable-next-line react/prop-types
const Card = ({ imageSrc, title, description, price }) => {
  return (
    <div className="relative group bg-gray-200 h-[400px] shadow-lg rounded-2xl overflow-hidden">
      <img
        className="w-full h-full group-hover:h-64 object-cover rounded-2xl transition-all delay-150 duration-300 ease"
        src={imageSrc}
        alt={title}
      />
      <div className="bg-gray-100 dark:bg-gray-700 w-full h-40 absolute left-0 bottom-0 -mb-44 group-hover:mb-0 rounded-b-2xl transition-all delay-150 duration-300 ease">
        <div className="p-6">
          <div className="capitalize flex items-center justify-between gap-4">
            <div>
              <h2 className="text-red-600 text-lg font-bold">{title}</h2>
              <p className="dark:text-gray-100">{description}</p>
            </div>
            <div>
              <p className="text-3xl font-bold dark:text-gray-100">{price}</p>
            </div>
          </div>
          <div className="block mt-4">
            <div className="absolute bottom-2 left-5">
              <a 
                href={`https://wa.me/6285642369177?text=Hello%20I'm%20interested%20in%20the%20${encodeURIComponent(title)}`}
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-red-600 text-gray-100 font-medium py-2.5 px-4 rounded-xl opacity-90 hover:opacity-100"
              >
                Buy Now!
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const CardGrid = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch("https://script.google.com/macros/s/AKfycbxw6mIZMvoHk852UpoVO9aYl2Nz5eCYSkAUqA31jkSgAqg0XczL-qOzxpoPpGhT4EMolw/exec")
      .then(response => response.json())
      .then(data => setCards(data))
      .catch(error => console.error("Error fetching data:", error));
  }, []);

  return (
    <>
      <Navbar />
      <div className="bg-black w-screen p-8 sm:p-16 dark:bg-gray-900">
        <div className="p-4 mb-4 text-lg text-center leading-tight first-letter:capitalize font-medium dark:text-gray-100">
          <h3>Hover through the cards to see magic</h3>
        </div>
        <div className="mx-auto w-fit grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 gap-6">
          {cards.map((card) => (
            <Card
              key={card.id}
              imageSrc={card.image}
              title={card.title}
              description={card.description}
              price={card.price} />
          ))}
        </div>
      </div>
      <FooterSection />
    </>
  );
};

export default CardGrid;
