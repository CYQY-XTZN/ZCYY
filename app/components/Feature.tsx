export default function Feature() {
  return (
    <section className="bg-white py-16 border-b border-gray-50">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
        {[
          { symbol: "🔬", title: "科技育种", desc: "源自组培实验室的“药材”\n奠定道地性根基" },
          { symbol: "🌱", title: "生态种植", desc: "遵循GAP标准的数字化种植\n守护每一株药材的纯净" },
          { symbol: "✅", title: "标准加工", desc: "全程可溯源的饮片加工\n交付稳定可靠的中药原料" }
        ].map((f, i) => (
          <div key={i} className="flex flex-col items-center group">
            {/* Replaced Lucide icons with Emojis/Symbols */}
{/*             <div className="mb-6 text-4xl group-hover:scale-110 transition-transform">{f.symbol}</div>  */}
            <h3 className="text-3xl font-bold mb-3 text-slate-900">{f.title}</h3>
            <p className="text-xl text-gray-500 whitespace-pre-line leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}