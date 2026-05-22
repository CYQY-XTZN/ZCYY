"use client";

import Image from "next/image";
import Link from "next/link";
import { publicPath } from "../lib/paths";
import { MouseEvent, useState } from "react";

export default function ProductInfo() {
  const [showDevelopmentMessage, setShowDevelopmentMessage] = useState(false);

  const handleViewMoreClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setShowDevelopmentMessage(true);
    setTimeout(() => setShowDevelopmentMessage(false), 2000);
  };

  return (
    <section id="products" className="bg-white py-20">
      <div className="container mx-auto px-6">
        <div className="mb-16 flex items-center justify-between gap-6">
          <h2 className="text-4xl font-bold text-[#303236] md:text-5xl">
            核心产品&nbsp;&nbsp;| Core Products
          </h2>
          <Link
            href="#"
            onClick={handleViewMoreClick}
            className="hidden items-center gap-4 rounded-full bg-[#B1F101] px-9 py-5 text-lg font-semibold text-slate-900 transition hover:bg-[#A0E000] md:flex"
          >
            查看更多
            <span className="text-3xl leading-none">↗</span>
          </Link>
        </div>

        <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white">
          <div className="grid grid-cols-1 lg:grid-cols-[0.82fr_1fr]">
            <div className="relative min-h-[360px] lg:min-h-[760px]">
              <Image
                src={publicPath("/ProductInfo.png")}
                alt="泽养黄精茶产品展示"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 44vw, 100vw"
              />
            </div>

            <div className="flex flex-col justify-center px-8 py-12 md:px-14 lg:px-12">
              <h3 className="mb-8 text-4xl font-bold text-[#25272A] md:text-5xl">
                泽养·黄精茶
              </h3>
              <p className="mb-14 text-2xl leading-relaxed text-gray-600">
                “清露微凉，养阴安神”
              </p>

              <div className="mb-24 space-y-4 text-xl leading-relaxed text-gray-400">
                <p>风味：石斛清润，黄精醇和，如夜半露珠沁入心脾。</p>
                <p>功效：石斛养阴生津，黄精补气，缓解因阴虚导致的燥热失眠。</p>
                <p>场景：沐浴后，床头灯下，一杯清露伴你翻阅书页。</p>
              </div>

              <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                <div className="rounded-3xl bg-[#B1F101] p-8 text-slate-900">
                  <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-full bg-white text-2xl">
                    ◇
                  </div>
                  <h4 className="mb-7 text-xl font-bold">100% 天然草药</h4>
                  <p className="text-lg leading-relaxed">
                    无添加，保留草药
                    <br />
                    本真功效
                  </p>
                </div>

                <div className="rounded-3xl bg-white p-8 shadow-2xl shadow-gray-200/80">
                  <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-full bg-[#25272A] text-lg text-white">
                    ≋
                  </div>
                  <h4 className="mb-7 text-xl font-bold text-[#25272A]">精心配比</h4>
                  <p className="text-lg leading-relaxed text-gray-400">
                    传承古方，科学配比
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Development message toast */}
      {showDevelopmentMessage && (
        <div className="fixed bottom-8 left-1/2 z-50 -translate-x-1/2 animate-in fade-in slide-in-from-bottom-4 rounded-lg bg-black/90 px-6 py-3 text-white shadow-lg backdrop-blur-sm duration-300">
          <div className="flex items-center gap-2">

            <span className="font-medium">开发中</span>
          </div>
        </div>
      )}
    </section>
  );
}
