import Link from "next/link";
import { publicPath } from "../lib/paths";

export default function HeroSection() {
  return (
     <section 
      id="hero" 
      className="relative pt-20 pb-20 px-6 md:px-12 overflow-hidden min-h-[80vh] flex items-center"
      style={{
        backgroundImage: `url(${publicPath("/hero-bg.png")})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center z-10">
        <div>
          <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold text-slate-900 leading-[1.1] mb-9">
            道地瑶药——<br />
            <span className="whitespace-nowrap opacity-90">瑶族是具有悠久历史和灿烂文化的民族</span>
          </h1>
          <p className="text-gray-500 text-2xl mb-10 max-w-none leading-relaxed">
            <span className="block whitespace-nowrap">在长期同疾病斗争的过程中形成和发展起来的民族传统医药——瑶医药，</span>
            <span className="block">是瑶族灿烂文化的组成部分，也是我们传统医药的重要组成部分。</span>
          </p>
          <button className="flex items-center gap-2 bg-[#333] text-white px-8 py-3 rounded-full text-sm hover:bg-black transition shadow-xl">
            <Link href="#contact" >
            联系我们 →
          </Link>
          </button>
        </div>
        <div className="hidden md:block relative h-[500px] w-full opacity-40 pointer-events-none">
          <div className="absolute right-0 top-0 w-full h-full bg-gradient-to-tr from-green-100 via-green-50 to-white rounded-full blur-3xl" />
        </div>
      </div>
    </section>
  );
}
