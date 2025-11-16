import { useEffect, useRef } from 'react'

const logos = Array.from({length:12}).map((_,i)=>`https://dummyimage.com/160x64/0a0a0a/ffffff&text=Client+${i+1}`)

export default function Clients() {
  const trackRef = useRef(null)

  useEffect(() => {
    const track = trackRef.current
    if (!track) return
    let start = null
    const speed = 40 // px/s
    let raf

    const step = (ts) => {
      if (!start) start = ts
      const dt = (ts - start) / 1000
      track.style.transform = `translateX(${-dt*speed}px)`
      if (Math.abs(-dt*speed) > track.scrollWidth/2) {
        start = ts
      }
      raf = requestAnimationFrame(step)
    }
    raf = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf)
  }, [])

  return (
    <section id="clients" className="bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-xl font-semibold mb-6">Trusted by Industry Leaders</h3>
        <div className="overflow-hidden relative">
          <div className="flex gap-8 will-change-transform" ref={trackRef}>
            {[...logos, ...logos].map((src, i) => (
              <img key={i} src={src} className="h-12 w-40 object-contain opacity-80 hover:opacity-100 transition" />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
