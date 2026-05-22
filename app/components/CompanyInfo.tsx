import { publicPath } from "../lib/paths";

const highlights = [
  "科技驱动，人才引领",
  "全链布局，三产融合",
  "产业结群，乡村振兴",
];

export default function CompanyInfo() {
  return (
    <section className="overflow-hidden bg-slate-950">
      <div className="h-20 bg-[#B1F101]" />

      <div
        className="relative min-h-screen bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${publicPath("/CompanyInfo.png")})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/35 to-transparent" />
        <div className="absolute inset-0 bg-black/10" />

        <div className="container relative z-10 mx-auto flex min-h-screen items-start px-6 py-24 md:px-12">
          <div className="max-w-4xl pt-2 text-white md:pt-12">
            <h2 className="mb-5 text-3xl font-bold leading-tight text-[#B1F101] md:text-4xl">
              泽辰瑶源（金秀）公司简介
            </h2>
            <p className="mb-32 text-xl font-semibold leading-relaxed text-white md:text-2xl">
              泽辰瑶源，一家扎根来宾市金秀瑶族自治县、面向全球的道地药材科技型企业。<br /><br />
              我们以“从一株种苗，到一味安心好药”为使命，构建了种苗组培—GAP数字化种植—产地加工的全产业链闭环，并引入人工智能、物联网、区块链技术重塑中药材的品质信任体系。
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
