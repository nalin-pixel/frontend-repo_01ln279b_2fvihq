import { useState } from 'react'
import { ChevronRight } from 'lucide-react'

const categories = [
  { name: 'Engine Mounts', desc: 'High-performance mounts for reduced vibration and improved NVH.', key: 'engine' },
  { name: 'Powertrain Mounts', desc: 'Optimized damping for driveline stability.', key: 'powertrain' },
  { name: 'Body Mounts', desc: 'Precision isolation for cabin comfort.', key: 'body' },
  { name: 'Vibration Absorbers', desc: 'Tuned absorbers for targeted frequencies.', key: 'absorbers' },
  { name: 'Trailing & Control Arm Bushes', desc: 'Enhanced handling and durability.', key: 'arm-bushes' },
  { name: 'Leaf Spring Bushes', desc: 'Heavy-duty elastomer formulations.', key: 'leaf' },
  { name: 'Steering Couplings', desc: 'Torsional isolation with high reliability.', key: 'steering-couplings' },
  { name: 'Steering & Strut Mounts', desc: 'Precision alignment and load management.', key: 'steering-strut' },
  { name: 'Shock Absorber Bushes', desc: 'Consistent damping performance.', key: 'shock' },
  { name: 'Exhaust Hangers', desc: 'High-temp resistant isolators.', key: 'exhaust' },
  { name: 'Propeller Shaft Mountings', desc: 'High-strength, low NVH support.', key: 'propeller' },
]

export default function Products() {
  const [active, setActive] = useState('all')

  const filtered = categories.filter((c) => active === 'all' || c.key === active)

  return (
    <section id="products" className="bg-black text-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold">Product Categories</h2>
          <div className="hidden md:flex gap-2">
            <button onClick={() => setActive('all')} className={`px-3 py-1.5 rounded-md text-sm ring-1 ring-white/10 ${active==='all'?'bg-[#7B1E1E]':'bg-white/5 hover:bg-white/10'}`}>All</button>
            {categories.slice(0,4).map(c => (
              <button key={c.key} onClick={() => setActive(c.key)} className={`px-3 py-1.5 rounded-md text-sm ring-1 ring-white/10 ${active===c.key?'bg-[#7B1E1E]':'bg-white/5 hover:bg-white/10'}`}>{c.name.split(' ')[0]}</button>
            ))}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((c) => (
            <a key={c.key} href={`#/product/${c.key}`} className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-zinc-900 to-zinc-800 ring-1 ring-white/10">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[radial-gradient(circle_at_30%_20%,rgba(123,30,30,0.4),transparent_40%)]" />
              <div className="p-6 h-40 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold">{c.name}</h3>
                  <p className="mt-2 text-white/70 text-sm">{c.desc}</p>
                </div>
                <div className="flex items-center gap-2 text-[#7B1E1E] font-semibold">
                  View More <ChevronRight size={18} className="transition-transform group-hover:translate-x-1" />
                </div>
              </div>
              <div className="absolute -right-6 -bottom-6 w-28 h-28 rounded-full border border-[#7B1E1E]/50 group-hover:scale-110 transition-transform" />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
