import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="relative bg-black text-white py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_90%_10%,rgba(123,30,30,0.25),transparent_35%)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold">Get in touch</h2>
            <p className="mt-2 text-white/70">We would love to collaborate on your next platform. Reach out for quotes, prototypes, or technical support.</p>
            <div className="mt-8 space-y-3 text-white/80">
              <div className="flex items-center gap-3"><Phone size={18} className="text-[#7B1E1E]" /> +1 (000) 111-2222</div>
              <div className="flex items-center gap-3"><Mail size={18} className="text-[#7B1E1E]" /> sales@innova-auto.com</div>
              <div className="flex items-start gap-3"><MapPin size={18} className="text-[#7B1E1E] mt-1" /> 123 Industrial Park, Tech City</div>
            </div>
          </div>

          <form className="p-6 rounded-xl bg-white/5 ring-1 ring-white/10 grid grid-cols-1 gap-4">
            <input placeholder="Name" className="px-4 py-3 rounded-md bg-black/40 ring-1 ring-white/10 focus:ring-[#7B1E1E] outline-none" />
            <input placeholder="Company" className="px-4 py-3 rounded-md bg-black/40 ring-1 ring-white/10 focus:ring-[#7B1E1E] outline-none" />
            <div className="grid sm:grid-cols-2 gap-4">
              <input placeholder="Email" className="px-4 py-3 rounded-md bg-black/40 ring-1 ring-white/10 focus:ring-[#7B1E1E] outline-none" />
              <input placeholder="Phone" className="px-4 py-3 rounded-md bg-black/40 ring-1 ring-white/10 focus:ring-[#7B1E1E] outline-none" />
            </div>
            <textarea rows={5} placeholder="Project details" className="px-4 py-3 rounded-md bg-black/40 ring-1 ring-white/10 focus:ring-[#7B1E1E] outline-none" />
            <button className="mt-2 px-6 py-3 rounded-md bg-[#7B1E1E] hover:bg-[#8B1F1F]">Send Message</button>
          </form>
        </div>
      </div>

      <a href="https://wa.me/10001112222" target="_blank" className="fixed bottom-6 right-6 inline-flex items-center gap-2 px-4 py-3 rounded-full bg-[#7B1E1E] text-white shadow-xl hover:scale-105 transition will-change-transform">
        <MessageCircle size={18} /> Chat on WhatsApp
      </a>
    </section>
  )
}
