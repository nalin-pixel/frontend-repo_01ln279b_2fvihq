import { Factory, Car, Cog, Wrench } from 'lucide-react'

const items = [
  { icon: Car, title: 'Automotive OEMs', desc: 'NVH-optimized components for passenger and commercial vehicles.' },
  { icon: Factory, title: 'Heavy Vehicles', desc: 'Durable mounts for buses, trucks, and off-highway equipment.' },
  { icon: Cog, title: 'Industrial Applications', desc: 'Isolation solutions for machinery and plant equipment.' },
  { icon: Wrench, title: 'Aftermarket Solutions', desc: 'Reliable replacements with OEM-grade performance.' },
]

export default function Industries() {
  return (
    <section id="industries" className="bg-black text-white py-24 relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_0%,rgba(123,30,30,0.25),transparent_35%)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-10">Industries We Serve</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map(({icon:Icon, title, desc}) => (
            <div key={title} className="p-6 rounded-xl bg-white/5 ring-1 ring-white/10 hover:bg-white/10 transition">
              <Icon className="text-[#7B1E1E]" />
              <div className="mt-4 font-semibold">{title}</div>
              <p className="text-sm text-white/70">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
