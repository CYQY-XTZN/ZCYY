import Link from "next/link";
import Image from "next/image";
import { publicPath } from "../lib/paths";

export default function Footer() {
  return (
    <footer id="footer" className="bg-brand-teal text-white pt-20 pb-10">
      {/* Footer Links */}
      <div id="footer-links" className="container mx-auto px-6 border-t border-white/10 pt-12 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xl text-white"></span>
            <span className="text-lg font-bold text-black">
              <Image src={publicPath("/logo.png")} width={136} height={58} className="w-34" alt="Logo"/>
            </span>
          </div>
          <p className="text-gray-500 text-base leading-relaxed">
            我们以科技守护道地成分,用数据重塑药材生命轨迹——<br/>从一株种苗,到一味安心好药。
          </p>
        </div>

        {[
          { 
            head: "首页", 
            links: [
              { text: "关于我们", href: "#about" },
              { text: "核心业务", href: "#business" },
              { text: "合作共赢", href: "#partnership" },
              { text: "联系我们", href: "#contact" }
            ] 
          },
          { 
            head: "更多", 
            links: [
              { text: "种源科技", href: "#seed-tech" },
              { text: "数字种植", href: "#digital-farming" },
              { text: "透明产业链", href: "#supply-chain" }
            ] 
          },
        ].map((col, idx) => (
          <div key={idx}>
            <h4 className="text-lg font-bold mb-4 text-gray-300">{col.head}</h4>
            <ul className="space-y-3 text-base text-gray-500">
              {col.links.map((l) => (
                <li key={l.text}>
                  <Link href={l.href} className="hover:text-white transition">
                    {l.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      
      {/* <div className="text-center text-[10px] text-gray-400 mt-16">
        ©2025 宸玥青源. 保留所有权利. 
        <a href="https://beian.miit.gov.cn/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-600 transition-colors">
          粤ICP备2025413714号-1 <br/>
          深圳市南山区高新北二道15号金汇球大厦526      联系方式：刘先生 15320277411
        </a>
      </div> */}
    </footer>
  );
}
