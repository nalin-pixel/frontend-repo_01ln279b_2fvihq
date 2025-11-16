import { Facebook, Linkedin, Instagram, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-black text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid md:grid-cols-4 gap-8">
        <div>
          <div className="text-2xl font-extrabold">INNOVA</div>
          <p className="mt-2 text-white/70">Advanced Automotive Mounting & NVH Solutions.</p>
        </div>
        <div>
          <div className="font-semibold mb-3">Quick Links</div>
          <ul className="space-y-2 text-white/80">
            {['About','Products','Industries','Why Innova','Clients','Contact'].map(l => (
              <li key={l}><a href={`#${l.toLowerCase().replace(/ /g,'')}`} className="hover:text-[#7B1E1E]">{l}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <div className="font-semibold mb-3">Products</div>
          <ul className="space-y-2 text-white/80">
            {['Engine Mounts','Powertrain Mounts','Body Mounts','Vibration Absorbers','Bushes','Exhaust Hangers','Propeller Mountings'].map(l => (
              <li key={l} className="hover:text-[#7B1E1E]">{l}</li>
            ))}
          </ul>
        </div>
        <div>
          <div className="font-semibold mb-3">Connect</div>
          <div className="flex gap-3">
            {[Facebook, Linkedin, Instagram, Mail].map((Icon,i) => (
              <a key={i} href="#" className="p-2 rounded-md bg-white/5 hover:bg-white/10"><Icon size={18} /></a>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-white/60 text-sm">© {new Date().getFullYear()} Innova Automotive. All rights reserved.</div>
    </footer>
  )
}
