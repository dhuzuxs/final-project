export default function FooterSection() {
  return (
    <footer className="bg-black text-white">
      <div className="px-4 py-16 mx-auto max-w-screen-xl md:px-8">
        <div className="grid gap-12 row-gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand & Description */}
          <div className="sm:col-span-2">
            <a href="/" className="flex items-center mb-4">
              <svg className="w-8 text-deep-purple-accent-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <rect x="3" y="1" width="7" height="12" />
                <rect x="3" y="17" width="7" height="6" />
                <rect x="14" y="1" width="7" height="6" />
                <rect x="14" y="11" width="7" height="12" />
              </svg>
              <span className="ml-2 text-xl font-bold uppercase">Borobudur Auto</span>
            </a>
            <p className="text-sm mb-3">
              Membeli mobil bekas seharusnya tetap memberikan rasa aman. Karena itu, kami hanya menawarkan mobil dengan jarak tempuh rendah dan kondisi sangat baik.
            </p>
            <p className="text-sm">
              Setiap unit telah melalui proses inspeksi menyeluruh agar Anda bisa mendapatkan kendaraan yang siap pakai, nyaman, dan penuh percaya diri.
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-2 text-sm">
            <h2 className="text-base font-bold">Kontak</h2>
            <div className="flex gap-1">
              <span>Phone:</span>
              <a href="tel:+6285642369177" className="hover:text-deep-purple-400 transition">+62-856-4236-9177</a>
            </div>
            <div className="flex gap-1">
              <span>Email:</span>
              <a href="mailto:info@BorobudurAuto.com" className="hover:text-deep-purple-400 transition">info@BorobudurAuto.com</a>
            </div>
            <div className="flex gap-1">
              <span>Alamat:</span>
              <a href="https://maps.app.goo.gl/3bkB59CdsmL2G4HB7" target="_blank" rel="noopener noreferrer" className="hover:text-deep-purple-400 transition">
                Ngrajek II, Mungkid, Magelang
              </a>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h2 className="text-base font-bold mb-2">Social</h2>
            <div className="flex space-x-4">
              <a href="/" aria-label="Instagram" className="hover:text-deep-purple-accent-400 transition">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  {/* Instagram path */}
                  <path d="M12 2.2c3.2 0 3.6 0 4.8.1..." />
                </svg>
              </a>
              <a href="/" aria-label="TikTok" className="hover:text-deep-purple-accent-400 transition">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  {/* TikTok path */}
                  <path d="M12.2 2c.5 0 1 .4 1 1..." />
                </svg>
              </a>
              <a href="/" aria-label="Facebook" className="hover:text-deep-purple-accent-400 transition">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  {/* Facebook path */}
                  <path d="M22.7 0H1.3C.6 0 0 .6..." />
                </svg>
              </a>
            </div>
            <p className="mt-4 text-sm">Temukan kami di media sosial untuk info terbaru dan promo menarik.</p>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col-reverse items-center justify-between pt-6 mt-10 border-t border-gray-800 lg:flex-row">
          <p className="text-sm">© {new Date().getFullYear()} Borobudur Auto. All rights reserved.</p>
          <ul className="flex flex-col sm:flex-row sm:space-x-6 space-y-2 sm:space-y-0 mb-4 lg:mb-0">
            <li><a href="/" className="text-sm hover:text-deep-purple-accent-400 transition">F.A.Q</a></li>
            <li><a href="/" className="text-sm hover:text-deep-purple-accent-400 transition">Privacy Policy</a></li>
            <li><a href="/" className="text-sm hover:text-deep-purple-accent-400 transition">Terms & Conditions</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
