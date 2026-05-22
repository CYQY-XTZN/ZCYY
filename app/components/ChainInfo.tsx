import { publicPath } from "../lib/paths";

const highlights = [
  "全链条覆盖",
  "一物一码",
  "数据不可篡改",
  "价值延伸"
];

export default function CompanyInfo() {
  return (
    <section className="overflow-hidden bg-slate-950">
      <div className="h-20 bg-[#B1F101]" />

      <div
        className="relative min-h-screen bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${publicPath("/TissueCultureLanding-bg.png")})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/35 to-transparent" />
        <div className="absolute inset-0 bg-black/10" />

        <div className="container relative z-10 mx-auto flex min-h-screen items-start px-6 py-24 md:px-12">
          <div className="max-w-4xl pt-2 text-white md:pt-12">
            <h2 className="mb-5 text-3xl font-bold leading-tight text-[#B1F101] md:text-4xl">
              泽生链 | 用区块链，重建一味瑶药的信任
            </h2>
            <p className="mb-32 text-2xl font-semibold leading-relaxed text-white md:text-3xl">
              组培·种植·加工   一条链，看见全部真相
            </p>

            <div className="space-y-16">
              {highlights.map((item) => (
                <p
                  key={item}
                  className="border-l-4 border-[#B1F101] pl-3 text-2xl font-bold leading-none text-white md:text-3xl"
                >
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
