import { useState } from "react";
import FooterSection from "../components/FooterSection";
import Navbar from "../components/Navbar";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Contact() {
  AOS.init();

  // State untuk input form
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  // State untuk validasi email
  const [emailError, setEmailError] = useState("");

  // Fungsi validasi email
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Event handler untuk email input
  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);

    if (!validateEmail(newEmail)) {
      setEmailError("Email tidak valid");
    } else {
      setEmailError("");
    }
  };

  // Fungsi untuk mengirim pesan ke WhatsApp
  const sendMessageToWhatsApp = () => {
    if (!name || !email || !subject || !message) {
      alert("Harap isi semua bidang sebelum mengirim pesan.");
      return;
    }

    if (emailError) {
      alert("Harap masukkan email yang valid.");
      return;
    }

    const phoneNumber = "6285642369177"; // Ganti dengan nomor WhatsApp tujuan

    // Encode URI agar karakter khusus tidak bermasalah
    const whatsappMessage = encodeURIComponent(
      `Halo, saya ${name}.\nEmail: ${email}\n\n*${subject}*\n${message}`
    );

    // Buat URL WhatsApp
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;

    // Arahkan ke WhatsApp
    window.open(whatsappURL, "_blank");
  };

  return (
    <>
      <Navbar />
      <section>
        <div className="relative">
          <div className="container py-44 min-h-screen after:content-[''] after:size-full after:bg-black/25 after:absolute after:top-0 after:left-0 after:-z-10 flex items-end">
            <div className="text-white" data-aos="fade-right">
              <h1 className="text-[12vw] md:text-[7vw] font-light text-white leading-[0.9] mb-8 fade-in"
                style={{ animationDelay: '0.8s' }}>
                CONTACT US
              </h1>
              <p className="text-lg sm:text-xl font-light tracking-wide text-white/80 max-w-xl mb-16 fade-in leading-relaxed"
                style={{ animationDelay: '1.5s' }}>
                Kami akan melayani anda dengan sepenuh hati
              </p>
            </div>
            <img src="assets/foto contact us.jpg" alt="" className="absolute top-0 left-0 w-full h-full object-cover -z-10" />
          </div>
        </div>
      </section>

      <div className="h-screen bg-black">
        <div className="pt-10 md:pt-20">
          <div className="p-4 md:p-8">
            <p className="text-white/70 leading-relaxed text-base sm:text-lg">
              Apakah Anda memiliki pertanyaan tentang bengkel kami atau mobil kami? Silakan kirimkan pesan kepada kami atau email kami di
            </p>
            <p className="text-white/70 leading-relaxed text-base sm:text-lg">
              Info @BorobudurAuto.com
            </p>
            <br />
            <form className="flex flex-col items-center" onSubmit={(e) => e.preventDefault()}>
              <div className="md:w-3/4 lg:w-2/3 xl:w-1/2">
                <div className="flex flex-col md:flex-row">
                  <input
                    id="name"
                    type="text"
                    className="my-2 py-2 px-4 bg-black outline-slate-500 text-gray-300 w-full md:w-1/2 md:mr-2 outline-none focus:ring-2 focus:ring-blue-600"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <div className="relative w-full md:w-1/2 md:ml-2">
                    <input
                      id="email"
                      type="email"
                      className="my-2 py-2 px-4 bg-black outline-slate-500 text-gray-300 w-full outline-none focus:ring-2 focus:ring-blue-600"
                      placeholder="Email"
                      value={email}
                      onChange={handleEmailChange}
                    />
                    {emailError && <p className="text-red-500 text-sm absolute mt-1">{emailError}</p>}
                  </div>
                </div>
                <input
                  id="subject"
                  type="text"
                  placeholder="Subject"
                  className="my-2 py-2 px-4 bg-black outline-slate-500 text-gray-300 w-full outline-none focus:ring-2 focus:ring-blue-600"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                />
                <textarea
                  id="message"
                  rows="5"
                  placeholder="Say Something"
                  className="my-2 py-2 px-4 bg-black outline-slate-500 text-gray-300 w-full outline-none focus:ring-2 focus:ring-blue-600"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </div>
              <button
                type="button"
                onClick={sendMessageToWhatsApp}
                className="group w-full sm:w-auto px-8 sm:px-12 py-4 border text-white border-white hover:bg-white hover:text-black transition-all duration-500 text-xs tracking-[0.2em] fade-in flex items-center justify-center sm:justify-start gap-4 disabled:opacity-50 disabled:cursor-not-allowed"
                style={{ animationDelay: '1.8s' }}
                disabled={!name || !email || !subject || !message || emailError}
              >
                SEND MESSAGE
                <span className="h-[1px] w-8 bg-current transform transition-transform group-hover:translate-x-2"></span>
              </button>
            </form>
          </div>
        </div>
      </div>
      <FooterSection />
    </>
  );
}
