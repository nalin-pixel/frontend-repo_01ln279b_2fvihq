import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section id="top" className="relative h-[95vh] w-full overflow-hidden bg-black">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/NoYj4XN8s0IlixJM/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/90 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 ring-1 ring-white/15 text-white/80 text-xs uppercase tracking-wider mb-6">Advanced NVH Solutions</div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
            Engineering Precision. <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B33939] via-[#7B1E1E] to-[#B33939]">Delivering Performance.</span>
          </h1>
          <p className="mt-4 text-lg text-white/80 max-w-2xl">Advanced Automotive Mounting & NVH Solutions for OEMs and industrial applications. Built for reliability, engineered for extreme performance.</p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a href="#products" className="px-6 py-3 rounded-md bg-[#7B1E1E] text-white font-semibold hover:bg-[#8B1F1F] transition-colors">View Products</a>
            <a href="#contact" className="px-6 py-3 rounded-md bg-white/10 text-white font-semibold hover:bg-white/20 transition-colors ring-1 ring-white/15">Contact Us</a>
          </div>
        </div>
      </div>

      <div className="absolute -bottom-20 right-10 opacity-20 blur-2xl w-80 h-80 rounded-full bg-gradient-to-br from-[#7B1E1E] to-[#800000] pointer-events-none" />
    </section>
  )
}
