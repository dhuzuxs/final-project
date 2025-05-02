
export default function FooterSection() {
  return (
    <div className="bg-black">
    <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 ">
      <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
        <div className="sm:col-span-2">
          <a href="/" aria-label="Go home" title="Borobudur Auto" className="inline-flex items-center">
            <svg
              className="w-8 text-deep-purple-accent-400"
              viewBox="0 0 24 24"
              strokeLinejoin="round"
              strokeWidth="2"
              strokeLinecap="round"
              strokeMiterlimit="10"
              stroke="currentColor"
              fill="none"
            >
              <rect x="3" y="1" width="7" height="12"></rect>
              <rect x="3" y="17" width="7" height="6"></rect>
              <rect x="14" y="1" width="7" height="6"></rect>
              <rect x="14" y="11" width="7" height="12"></rect>
            </svg>
            <span className="ml-2 text-xl font-bold tracking-wide text-white uppercase">Borobudur Auto</span>
          </a>
          <div className="mt-6 lg:max-w-sm">
            <p className="text-sm text-white">
            Membeli mobil bekas seharusnya tetap memberikan rasa aman. Karena itu, kami hanya menawarkan mobil dengan jarak tempuh rendah dan kondisi yang masih sangat baik. Setiap unit telah melalui proses inspeksi menyeluruh agar Anda bisa mendapatkan kendaraan yang siap pakai tanpa khawatir.
            </p>
            <p className="mt-4 text-sm text-white">
            Kami percaya, mobil bekas yang berkualitas tinggi dapat menjadi pilihan cerdas. Dengan riwayat servis yang jelas dan performa mesin yang terjaga, mobil pilihan kami siap menemani perjalanan Anda dengan nyaman dan percaya diri.
            </p>
          </div>
        </div>
        <div className="space-y-2 text-sm">
          <p className="text-base font-bold tracking-wide text-white">Contacts</p>
          <div className="flex">
            <p className="mr-1 text-white">Phone:</p>
            <a
              href="tel:+62-856-4236-9177"
              aria-label="Our phone"
              title="Our phone"
              className="transition-colors duration-300 text-white hover:text-deep-purple-800"
            >
              +62-856-4236-9177
            </a>
          </div>
          <div className="flex">
            <p className="mr-1 text-white">Email:</p>
            <a
              href="mailto:info@lorem.mail"
              aria-label="Our email"
              title="Our email"
              className="transition-colors duration-300 text-white hover:text-deep-purple-800"
            >
              info@BorobudurAuto@gmail.com
            </a>
          </div>
          <div className="flex">
            <p className="mr-1 text-white">Address:</p>
            <a
              href="https://maps.app.goo.gl/3bkB59CdsmL2G4HB7"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Our address"
              title="Our address"
              className="transition-colors duration-300 text-white hover:text-deep-purple-800"
            >
              Ngrajek II, Ngrajek, Mungkid, Magelang Regency, Central Java
            </a>
          </div>
        </div>
        <div>
        <span className="text-base font-bold tracking-wide text-white">Social</span>
<div className="flex items-center mt-1 space-x-3">
  {/* Instagram */}
  <a href="/" className="text-white transition-colors duration-300 hover:text-deep-purple-accent-400">
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
      <path d="M12 2.2c3.2 0 3.6 0 4.8.1 1.2.1 1.8.3 2.2.5.5.2.9.5 1.3 1 .4.4.7.8 1 1.3.2.4.4 1 .5 2.2.1 1.2.1 1.6.1 4.8s0 3.6-.1 4.8c-.1 1.2-.3 1.8-.5 2.2-.2.5-.5.9-1 1.3-.4.4-.8.7-1.3 1-.4.2-1 .4-2.2.5-1.2.1-1.6.1-4.8.1s-3.6 0-4.8-.1c-1.2-.1-1.8-.3-2.2-.5a3.5 3.5 0 0 1-1.3-1c-.4-.4-.7-.8-1-1.3-.2-.4-.4-1-.5-2.2-.1-1.2-.1-1.6-.1-4.8s0-3.6.1-4.8c.1-1.2.3-1.8.5-2.2.2-.5.5-.9 1-1.3.4-.4.8-.7 1.3-1 .4-.2 1-.4 2.2-.5 1.2-.1 1.6-.1 4.8-.1zm0-2.2c-3.3 0-3.7 0-5 .1-1.3.1-2.2.3-3 .7a5.7 5.7 0 0 0-2.1 1.4 5.7 5.7 0 0 0-1.4 2.1c-.4.8-.6 1.7-.7 3C.2 8.3.2 8.7.2 12s0 3.7.1 5c.1 1.3.3 2.2.7 3 .4.8.9 1.5 1.4 2.1a5.7 5.7 0 0 0 2.1 1.4c.8.4 1.7.6 3 .7 1.3.1 1.7.1 5 .1s3.7 0 5-.1c1.3-.1 2.2-.3 3-.7a5.7 5.7 0 0 0 2.1-1.4 5.7 5.7 0 0 0 1.4-2.1c.4-.8.6-1.7.7-3 .1-1.3.1-1.7.1-5s0-3.7-.1-5c-.1-1.3-.3-2.2-.7-3a5.7 5.7 0 0 0-1.4-2.1 5.7 5.7 0 0 0-2.1-1.4c-.8-.4-1.7-.6-3-.7-1.3-.1-1.7-.1-5-.1zM12 5.8a6.2 6.2 0 1 0 0 12.4 6.2 6.2 0 0 0 0-12.4zm0 10.2a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.4-10.8a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z"/>
    </svg>
  </a>

  {/* TikTok */}
  <a href="/" className="text-white transition-colors duration-300 hover:text-deep-purple-accent-400">
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
      <path d="M12.2 2c.5 0 1 .4 1 1v2.2c0 .6.4 1.1 1 1.2 1.2.3 2.5.3 3.6 0V9c-1.1-.2-2.2-.6-3.2-1.1v6.5c0 2.6-2.2 4.8-4.8 4.8s-4.8-2.2-4.8-4.8S7.2 9.6 9.8 9.6c.2 0 .5 0 .7.1v2.6c-.2 0-.4-.1-.6-.1-1.2 0-2.2 1-2.2 2.2S8.7 16.6 9.9 16.6s2.2-1 2.2-2.2V2.9c0-.5.4-.9.9-.9h.2z"/>
    </svg>
  </a>

  {/* Facebook */}
  <a href="/" className="text-white transition-colors duration-300 hover:text-deep-purple-accent-400">
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
      <path d="M22.7 0H1.3C.6 0 0 .6 0 1.3v21.3C0 23.4.6 24 1.3 24H12v-9.3H9.3V11h2.7V8.3c0-2.7 1.6-4.2 4.1-4.2 1.2 0 2.4.2 2.4.2v2.6h-1.4c-1.4 0-1.9.9-1.9 1.8V11H19l-.4 3.7h-2.6V24h6.7c.7 0 1.3-.6 1.3-1.3V1.3C24 .6 23.4 0 22.7 0z"/>
    </svg>
  </a>
</div>

          <p className="mt-4 text-sm text-white">
            Bacon ipsum dolor amet short ribs pig sausage prosciutto chicken spare ribs salami.
          </p>
        </div>
      </div>
      <div className="flex flex-col-reverse justify-between pt-5 pb-10 border-t lg:flex-row">
        <p className="text-sm text-white">© Copyright 2020 Lorem Inc. All rights reserved.</p>
        <ul className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
          <li>
            <a href="/" className="text-sm text-white transition-colors duration-300 hover:text-deep-purple-accent-400">
              F.A.Q
            </a>
          </li>
          <li>
            <a href="/" className="text-sm text-white transition-colors duration-300 hover:text-deep-purple-accent-400">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="/" className="text-sm text-white transition-colors duration-300 hover:text-deep-purple-accent-400">
              Terms &amp; Conditions
            </a>
          </li>
        </ul>
      </div>
    </div>
    </div>
  
  )
}
