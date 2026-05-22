import Image from "next/image";
import Link from "next/link";
import { publicPath } from "../lib/paths";

export default function BusinessSection() {
  return (
    <section id="business" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-end mb-12">
          <h2 className="text-4xl md:text-3xl font-bold text-slate-900">核心业务 | Core Business</h2>
          <Link href="#" className="hidden md:flex items-center gap-1 bg-brand-lime text-slate-900 px-4 py-1.5 rounded-full text-base font-bold hover:bg-brand-dark transition">
            查看更多 →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { t: "宸玥种苗 — “产业的芯片”", d: "瓶苗、穴盘苗销售\n“适地适苗”定制化种苗解决方案\n药用植物种质资源保护与研发", img: publicPath("/core-business-1.png") },
            { t: "泽生GAP基地 — “道地的沃土”", d: "道地药材原料供应\nGAP标准化种植管理与技术输出\n定制药园服务", img: publicPath("/core-business-2.png") },
            { t: "青源加工 — “价值的升华”", d: "标准化中药材初加工产品\n中药饮片代工\n未来植物有效成分提取物", img: publicPath("/core-business-3.png") }
          ].map((item, i) => (
            <div key={i} className="group border border-gray-100 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer">
              <div className="h-56 relative overflow-hidden">
                <Image src={item.img} alt={item.t} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-6 bg-white">
                <h3 className="font-bold text-2xl mb-3 text-slate-900">{item.t}</h3>
                <p className="text-base text-gray-500 whitespace-pre-line leading-relaxed">{item.d}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
