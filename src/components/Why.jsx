import { FlaskConical, Cog, ShieldCheck, BadgeCheck, Wrench } from 'lucide-react'

const points = [
  { icon: FlaskConical, title: 'Advanced R&D', desc: 'Material science and NVH engineering backed by lab validation.' },
  { icon: Cog, title: 'Precision Engineering', desc: 'Tolerances optimized for performance and durability.' },
  { icon: ShieldCheck, title: 'Quality Control Lab', desc: 'End-to-end testing from raw to finished product.' },
  { icon: BadgeCheck, title: 'OEM Trusted', desc: 'Proven track record with leading manufacturers.' },
  { icon: Wrench, title: 'Durability Testing', desc: 'Lifecycle, thermal, and environmental endurance.' },
]

export default function Why() {
  return (
    <section id="why" className="bg-black text-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold">Why Choose Innova</h2>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {points.map(({icon:Icon, title, desc}) => (
            <div key={title} className="p-6 rounded-xl bg-gradient-to-br from-zinc-900 to-zinc-800 ring-1 ring-white/10 hover:ring-[#7B1E1E]/40 transition">
              <Icon className="text-[#7B1E1E]" />
              <div className="mt-4 font-semibold">{title}</div>
              <p className="text-sm text-white/70">{desc}</p>
              <div className="mt-4 h-1 rounded-full bg-white/10 overflow-hidden">
                <div className="h-full w-2/3 bg-gradient-to-r from-[#7B1E1E] to-[#B33939] animate-[pulse_2s_ease-in-out_infinite]" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
