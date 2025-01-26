import { Link } from "react-router";
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
              <p className="text-3xl font-bold dark:text-gray-100">${price}</p>
            </div>
          </div>
          <div className="block mt-4">
            <div className="absolute bottom-2 left-5">
              <button className="bg-red-600 text-gray-100 font-medium py-2.5 px-4 rounded-xl opacity-90 hover:opacity-100">
                <Link to="/Product">
                Add to cart
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const CardGrid = () => {
  const cards = [
    {
      imageSrc:
      "src/assets/Innova.jpg",
      title: "INNOVA REBORN 2016",
      description: "Type G, Automatic",
      price: 160,
    },
    {
      imageSrc:
      "src/assets/Hilux.jpg",
      title: "Toyota Hilux 2020",
      description: "Type G, Automatic",
      price: 200,
    },
    {
      imageSrc:
        "src/assets/Fortuner.jpg",
      title: "Toyota Fortuner VRZ 2022",
      description: "2.8 GR Sport, Automatic",
      price: 530,
    },
  ];

  return (
    <>
    <Navbar />
    <div className="bg-black w-screen p-8 sm:p-16 dark:bg-gray-900">
      <div className="p-4 mb-4 text-lg text-center leading-tight first-letter:capitalize font-medium dark:text-gray-100">
        <h3>Hover through the cards to see magic</h3>
      </div>
      <div className="mx-auto w-fit grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 gap-6">
        {cards.map((card, index) => (
          <Card
            key={index}
            imageSrc={card.imageSrc}
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
