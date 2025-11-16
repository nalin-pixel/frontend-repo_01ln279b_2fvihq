import { useState, useEffect } from 'react'
import { Menu, X, Phone, Mail } from 'lucide-react'

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Products', href: '#products' },
  { label: 'Industries', href: '#industries' },
  { label: 'Why Innova', href: '#why' },
  { label: 'Clients', href: '#clients' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all ${scrolled ? 'backdrop-blur-md bg-black/60 shadow-[0_1px_0_0_rgba(255,255,255,0.06)]' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-md bg-gradient-to-br from-[#7B1E1E] to-[#800000] ring-1 ring-white/10 grid place-items-center text-white font-black">IN</div>
            <div>
              <div className="text-white font-extrabold tracking-wider leading-none">INNOVA</div>
              <div className="text-xs text-white/60 -mt-0.5">Automotive Mounting Solutions</div>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="px-3 py-2 text-sm font-medium text-white/80 hover:text-white transition-colors">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href="#contact" className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-[#7B1E1E] text-white hover:bg-[#861f1f] transition-colors">
              <Phone size={16} /> Contact
            </a>
            <a href="#contact" className="p-2 rounded-md ring-1 ring-white/15 text-white/80 hover:text-white hover:bg-white/5 transition-colors">
              <Mail size={16} />
            </a>
          </div>

          <button className="md:hidden text-white" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-black/90">
          <div className="px-4 py-3 space-y-1">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="block px-2 py-3 rounded-md text-white/90 hover:bg-white/5">
                {item.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="mt-2 inline-flex items-center gap-2 px-4 py-3 rounded-md bg-[#7B1E1E] text-white w-full justify-center">
              <Phone size={16} /> Get in touch
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
