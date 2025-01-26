import FooterSection from "../components/FooterSection";
import Navbar from "../components/Navbar";
import { Link } from "react-router";

const AutumnWinterSection = () => {
  // eslint-disable-next-line no-unused-vars
  const toggleMenu = () => {
    const menu = document.querySelector(".mobile-menu");
    menu.classList.toggle("active");

    const menuButton = document.querySelector("nav button");
    const spans = menuButton.querySelectorAll("span");

    spans.forEach((span, index) => {
      if (menu.classList.contains("active")) {
        span.style.transform = index === 0 ? "rotate(-45deg)" : "rotate(45deg)";
      } else {
        span.style.transform = "none";
      }
    });
  };

  return (
    <>
    <Navbar />
    <section className="py-20 sm:py-40 px-4 sm:px-8 bg-black">
      <div className="max-w-[2000px] mx-auto bg-black grid grid-cols-1 md:grid-cols-2 gap-12 sm:gap-20">
        {/* Left Section */}
        <div className="space-y-8 sm:space-y-12 self-center">
          <div className="space-y-4">
            <p className="text-sm tracking-[0.2em] text-white/60">TENTANG KAMI</p>
            <h2 className="text-4xl text-white sm:text-5xl font-light tracking-wide">
              Borobudur 
              <br />
              Auto 77
            </h2>
          </div>
          <p className="text-white/70 leading-relaxed text-base sm:text-lg">
          Selamat datang di Borobudur Auto, dimana anda dapat menemukan mobil terbaik dengan harga terjangkau! Borobudur Auto mengkurasi mobil-mobil second dengan tenaga dan ahli yang berpengalaman, sehingga dapat dipercaya sebagai pilihan anda. Berbagai pilihan mobil second dalam berbagai jenis dan merk tersedia untuk anda. Seluruh mobil yang kami tawarkan telah melalui proses pemeriksaan dan perawatan yang memastikan mobil-mobil tersebut dalam keadaan terbaiknya sebelum sampai di tangan anda. 
          <br />
          Percaya Borobudur Auto, Auto jadi Percaya Diri!


          </p>
          
          <Link to="/Stock" className="group w-full sm:w-auto px-8 sm:px-12 py-4 border text-white border-white hover:bg-white hover:text-black transition-all duration-500 text-xs tracking-[0.2em] fade-in flex items-center justify-center sm:justify-start gap-4"
            style={{ animationDelay: '1.8s' }} >
           
            VIEW COLLECTION
            <span className="h-[1px] w-8 bg-current transform transition-transform group-hover:translate-x-2"></span>
          </Link>
        </div>
        {/* Right Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <img
            src="src/assets/car-dashboard-2667434_1280.jpg"
            alt="Suit Detail"
            className="w-full aspect-[3/4] object-cover hover:scale-[1.02] transition-transform duration-700" />
          <img
            src="src/assets/Koenigsegg_Regera_Road_MJ_13939.jpg"
            alt="Suit Detail"
            className="w-full aspect-[3/4] object-cover sm:mt-20 hover:scale-[1.02] transition-transform duration-700" />
        </div>
      </div>
    </section>
    <FooterSection />
    </>
  );
};

export default AutumnWinterSection;
