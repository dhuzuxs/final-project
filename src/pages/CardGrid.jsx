import { useState, useEffect } from "react";
import FooterSection from "../components/FooterSection";
import Navbar from "../components/Navbar";

const Card = ({ imageSrc, title, description, price }) => {
  return (
    <div className="relative group bg-white shadow-lg rounded-xl overflow-hidden transform transition duration-300 hover:scale-105">
      <img
        className="w-full h-60 object-cover"
        src={imageSrc}
        alt={title}
      />
      <div className="p-4 bg-gray-100 dark:bg-gray-800">
        <h2 className="text-xl font-bold text-red-600">{title}</h2>
        <p className="text-gray-600 dark:text-gray-300">{description}</p>
        <p className="text-2xl font-semibold mt-2 text-gray-900 dark:text-gray-100">{price}</p>
        <div className="mt-4">
          <a 
            href={`https://wa.me/6285642369177?text=Hello%20I'm%20interested%20in%20the%20${encodeURIComponent(title)}`}
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-red-600 text-white font-medium py-2 px-4 rounded-lg hover:bg-red-700 transition"
          >
            Buy Now!
          </a>
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
      <div className="bg-gray-100 dark:bg-gray-900 min-h-screen p-8 sm:p-16">
        <div className="p-4 mb-6 text-lg text-center font-medium dark:text-gray-100">
          <h3>Hover over the cards to see the effect</h3>
        </div>
        <div className="mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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