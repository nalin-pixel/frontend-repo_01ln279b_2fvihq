import { CheckCircle } from 'lucide-react'

const values = [
  { title: 'Quality', desc: 'Zero-defect mission with rigorous QC protocols and traceability.' },
  { title: 'Reliability', desc: 'Consistency across batches with PPAP & APQP compliance.' },
  { title: 'Engineering Excellence', desc: 'Finite element analysis (FEA) and NVH simulation driven design.' },
  { title: 'Innovation', desc: 'Rapid prototyping, material R&D, and continuous improvement.' },
]

export default function About() {
  return (
    <section id="about" className="relative bg-black text-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-video rounded-xl overflow-hidden ring-1 ring-white/10 bg-gradient-to-br from-zinc-900 to-zinc-800">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(123,30,30,0.3),transparent_40%)]" />
            <div className="absolute inset-0 flex items-center justify-center opacity-80">
              <div className="w-40 h-40 border-2 border-[#7B1E1E] rounded-full animate-pulse" />
            </div>
          </div>

          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold">About Innova</h2>
            <p className="mt-4 text-white/80">We design and manufacture advanced automotive mounting systems and NVH components engineered for precision and durability. Our solutions power OEMs, heavy vehicles, and industrial applications worldwide.</p>

            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              {values.map((v) => (
                <div key={v.title} className="p-4 rounded-lg bg-white/5 ring-1 ring-white/10 hover:bg-white/10 transition">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-[#7B1E1E] mt-1" size={20} />
                    <div>
                      <div className="font-semibold">{v.title}</div>
                      <p className="text-sm text-white/70">{v.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
