import FooterSection from "../components/FooterSection";
import Navbar from "../components/Navbar";
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function HomePage() {
  AOS.init();
  return (
    <>
    <Navbar />
    <section className="min-h-screen relative flex items-center">
      <div className="absolute inset-0">
        <img
          src="src/assets/vadimk_77_97007_a_luxury_car_showroom_with_supercars_and_luxu_11764726-2781-45a2-a58b-765080f74604_0.webp"
          alt="Elegant luxury suit displayed in a bright atelier"
          className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
      </div>
      <div className="relative z-10 max-w-[2000px] mx-auto px-4 sm:px-8 pt-32" data-aos="fade-right">
        <div className="max-w-4xl">
          <p
            className="text-sm text-white tracking-[0.3em] mb-8 fade-in"
            style={{ animationDelay: '0.5s' }}
          >
            BOROBUDUR AUTO 77
          </p>
          <h1
            className="text-[12vw] md:text-[7vw] font-light text-white leading-[0.9] mb-8 fade-in"
            style={{ animationDelay: '0.8s' }}
          >
            QUALITY IS OUR
            <br />
            PRIORITY
          </h1>
          <div
            className="h-[1px] w-32 bg-white reveal-line mb-12"
            style={{ animationDelay: '1.2s' }}
          ></div>
          <p
            className="text-lg sm:text-xl font-light tracking-wide text-white/80 max-w-xl mb-16 fade-in leading-relaxed"
            style={{ animationDelay: '1.5s' }}
          >
            Kami selalu mengutamakan kualitas unit dan tentunya dengan harga yang terjangkau
          </p>
          <button
            className="group w-full sm:w-auto px-8 sm:px-12 py-4 border text-white border-white hover:bg-white hover:text-black transition-all duration-500 text-xs tracking-[0.2em] fade-in flex items-center justify-center sm:justify-start gap-4"
            style={{ animationDelay: '1.8s' }}
          >
            EXPLORE UNIT STOCK
            <span className="h-[1px] w-8 bg-current transform transition-transform group-hover:translate-x-2"></span>
          </button>
        </div>
      </div>
    </section>
    <FooterSection />
    </>
    

)
}
