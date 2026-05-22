import React from 'react';
import Navbar from '../../components/Navbar';
import Contact from '../../components/Contact';
import Footer from '../../components/Footer';
import { publicPath } from '../../lib/paths';

// Hero Section with Content
function HeroSection() {
  return (
    <div className="relative min-h-screen bg-contain bg-center bg-no-repeat" 
         style={{
           backgroundImage: `url(${publicPath("/jinXiuDigital-1.png")})`,
           backgroundSize: '60%'
         }}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pt-16 pb-24">
        <div className="bg-white/95 backdrop-blur-sm p-12 rounded-2xl mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            金秀道地瑶药数智产业园
          </h1>
          <h1 className="text-4xl md:text-4xl font-bold text-gray-900 mb-4">
            Jinxiu Daodi Yao Medicine Smart Industrial Park
          </h1>
          
          <p className="text-lg text-gray-700 leading-relaxed">
            道地瑶药：瑶族是具有悠久历史和独特文化的民族。在长期同疾病斗争的过程中形成和发展起来的民族传统医药--瑶医药，
            是瑶族灿烂文化的组成部分，也是我们传统医药的重要组成部分。
          </p>
        </div>

        {/* Glass Card with Phases */}
        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-10 border border-white/20 shadow-2xl max-w-2xl">
          <div className="space-y-8 text-white">
            <div>
              <h2 className="text-2xl font-bold mb-4">建设与奠基期</h2>
              <p className="text-base leading-relaxed text-white/90">
                建成现代化种苗繁育研发中心，并正式投产。构建核心研发与生产能力，为GAP基地及外部市场提供稳定、优质的种源保障；完成组培中心、加工中心等基础设施建设，形成集种苗研发、生产与初级加工于一体的综合功能。
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">示范与扩展期</h2>
              <p className="text-base leading-relaxed text-white/90">
                建成3000亩瑶药数智化种植示范基地。全面推广&quot;公司+基地+合作社+科技+金融&quot;的标准化种植模式，实现药材生产的规范化、规模化和可追溯化。科学指导选种与生产，显著提升种植效益与资源利用率；实现示范基地的稳定产出，为后续加工提供高品质、标准化的原料药材。同时通过试验示范输出帮助周边农户，扩大产业辐射效应。
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">未来发展：建成瑶药精深加工及有效成分提取产业线</h2>
              <p className="text-base leading-relaxed text-white/90">
                从瑶药饮片加工延伸到瑶药精深加工。构建全链条数智化体系：整合种植、加工、仓储、物流数据，实现全产业链的数字化管理与智能调度，打造透明、高效、可溯源的供应链，最终形成从&quot;田间到消费者&quot;的完整商业闭环，全面提升品牌影响力与市场竞争力。
              </p>
            </div>

            <button className="bg-[#B1F101] hover:bg-[#A0E000] text-gray-900 w-16 h-16 rounded-full flex items-center justify-center transition-all shadow-lg hover:shadow-xl">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// Policy Section
function PolicySection() {
  return (
    <div className="py-20 px-6 lg:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-0 items-stretch rounded-3xl overflow-hidden shadow-2xl">
          {/* Image Side */}
          <div className="relative min-h-[400px] bg-cover bg-center" 
               style={{backgroundImage: `url(${publicPath("/jinXiuDigital-2.png")})`}}>
            <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent"></div>
          </div>
          
          {/* Content Side */}
          <div className="bg-[#B1F101] p-12 flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              广西相继出台发展瑶药的政策
            </h2>
            <ul className="space-y-4 text-gray-900">
              <li className="flex items-start gap-3">
                <a 
                  href="http://www.gxzf.gov.cn.http.80.37222e7667.a.proxy1.ipv6.xiangtan.gov.cn/zfwj/zzqrmzfwj_34845/t1509086.shtml"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-700 transition-colors"
                >
                  <span className="text-xl">《关于加快中医药民族医药发展的决定》</span>
                </a>

              </li>
              <li className="flex items-start gap-3">
                <a 
                  href="http://www.natcm.gov.cn/hudongjiaoliu/guanfangweixin/2022-02-08/24606.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-700 transition-colors"
                >
                <span className="text-xl">《广西中医药壮瑶医药发展&quot;十四五&quot;规划》</span>
                </a>

              </li>
              <li className="flex items-start gap-3">
                <a 
                  href="http://www.gxzf.gov.cn/zcjd/t13045590.shtml"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-700 transition-colors"
                >
                <span className="text-xl">《广西中医药壮瑶医药振兴发展三年攻坚行动实施方案（2021-2023年）》</span>
                </a>
              </li>

              <li className="flex items-start gap-3">
                <a 
                  href="http://www.natcm.gov.cn/hudongjiaoliu/guanfangweixin/2021-07-19/22361.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-700 transition-colors"
                >
                <span className="text-xl">《金秀瑶族自治县瑶医药发展条例》</span>
                </a>
              </li>


              <li className="flex items-start gap-3">
                <a 
                  href="http://www.gxzf.gov.cn/zcjd/t13045590.shtml"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-700 transition-colors">
                <span className="text-xl">《金秀瑶族自治县瑶医药发展&quot;十四五&quot;及2035年远景规划》</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

// Main Component
export default function JinXiuDigital() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <PolicySection />
      <Contact/>
      <Footer />
    </div>
  );
}
