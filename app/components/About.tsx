"use client";

import { useRouter } from "next/navigation";
import { publicPath } from "../lib/paths";

export default function AboutSection() {
  const router = useRouter();

  const handleViewMoreClick = () => {
    router.push("/sub-pages/jinXiuDigital");
  };

  return (
    <section id="about" className="overflow-hidden bg-slate-950">
      <div className="bg-[#B1F101] py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold leading-tight text-slate-900 md:text-4xl">
            金秀道地瑶药数智产业园 | Jinxiu Dadi Yao Medicine Smart Industrial Park
          </h2>
        </div>
      </div>

      <div
        className="relative min-h-screen bg-contain bg-center bg-no-repeat py-20"
        style={{
          backgroundImage: `url(${publicPath("/jinXiuDigital-1.png")})`,
          backgroundSize: "60%",
        }}
      >
        <div className="absolute inset-0 bg-slate-950/45" />

        <div className="container relative z-10 mx-auto px-6">
          <div className="max-w-3xl" />

          <div className="max-w-2xl rounded-3xl border border-white/20 bg-white/10 p-8 shadow-2xl backdrop-blur-md md:p-10">
            <div className="space-y-8 text-white">
              <div>
                <h3 className="mb-4 text-2xl font-bold">建设与奠基期</h3>
                <p className="text-base leading-relaxed text-white/90">
                  建成现代化种苗繁育研发中心，并正式投产。构建核心研发与生产能力，为GAP基地及外部市场提供稳定、优质的种源保障；完成组培中心、加工中心等基础设施建设，形成集种苗研发、生产与初级加工于一体的综合功能。
                </p>
              </div>

              <div>
                <h3 className="mb-4 text-2xl font-bold">示范与扩展期</h3>
                <p className="text-base leading-relaxed text-white/90">
                  建成3000亩瑶药数智化种植示范基地。全面推广&quot;公司+基地+合作社+科技+金融&quot;的标准化种植模式，实现药材生产的规范化、规模化和可追溯化。科学指导选种与生产，显著提升种植效益与资源利用率；实现示范基地的稳定产出，为后续加工提供高品质、标准化的原料药材。同时通过试验示范输出帮助周边农户，扩大产业辐射效应。
                </p>
              </div>

              <div>
                <h3 className="mb-4 text-2xl font-bold">
                  未来发展：建成瑶药精深加工及有效成分提取产业线
                </h3>
                <p className="text-base leading-relaxed text-white/90">
                  从瑶药饮片加工延伸到瑶药精深加工。构建全链条数智化体系：整合种植、加工、仓储、物流数据，实现全产业链的数字化管理与智能调度，打造透明、高效、可溯源的供应链，最终形成从&quot;田间到消费者&quot;的完整商业闭环，全面提升品牌影响力与市场竞争力。
                </p>
              </div>

              <button
                type="button"
                onClick={handleViewMoreClick}
                aria-label="查看更多"
                className="flex h-16 w-16 items-center justify-center rounded-full bg-[#B1F101] text-gray-900 shadow-lg transition-all hover:bg-[#A0E000] hover:shadow-xl"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="M5 12H19M19 12L12 5M19 12L12 19"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
