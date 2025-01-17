
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
    <section className="py-20 sm:py-40 px-4 sm:px-8 bg-black">
      <div className="max-w-[2000px] mx-auto bg-black grid grid-cols-1 md:grid-cols-2 gap-12 sm:gap-20">
        {/* Left Section */}
        <div className="space-y-8 sm:space-y-12 self-center">
          <div className="space-y-4">
            <p className="text-sm tracking-[0.2em] text-white/60">2024 COLLECTION</p>
            <h2 className="text-4xl sm:text-5xl font-light tracking-wide">
              AUTUMN /
              <br />
              WINTER
            </h2>
          </div>
          <p className="text-white/70 leading-relaxed text-base sm:text-lg">
            Our latest collection embodies the perfect fusion of traditional
            craftsmanship and contemporary design. Each piece is meticulously
            crafted to stand the test of time.
          </p>
          <button className="group w-full text-white sm:w-auto text-sm tracking-[0.2em] hover:text-white/50 transition-colors flex items-center justify-center sm:justify-start gap-6">
            VIEW COLLECTION
            <span className="h-[1px] w-12 bg-current transform transition-transform group-hover:translate-x-4"></span>
          </button>
        </div>
        {/* Right Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <img
            src="src/assets/car-dashboard-2667434_1280.jpg"
            alt="Suit Detail"
            className="w-full aspect-[3/4] object-cover hover:scale-[1.02] transition-transform duration-700"
          />
          <img
            src="src/assets/Koenigsegg_Regera_Road_MJ_13939.jpg"
            alt="Suit Detail"
            className="w-full aspect-[3/4] object-cover sm:mt-20 hover:scale-[1.02] transition-transform duration-700"
          />
        </div>
      </div>
    </section>
  );
};

export default AutumnWinterSection;
