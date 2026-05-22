export default function ContactSection() {
  return (
    <div id="contact" className="relative py-24 px-6 lg:px-12 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-900 via-teal-800 to-blue-900"></div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
          联系我们 | Contact Us
        </h2>
        <p className="text-xl text-white/90 mb-12">
          立即订阅,开始您的种苗结合作之旅。获取专家方案,成为道地药材新生代守护者。
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-2xl mx-auto">
          <input
            type="email"
            placeholder="留您邮箱......"
            className="flex-1 px-6 py-4 rounded-full text-gray-900 bg-white placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-[#B1F101]/50 w-full sm:w-auto min-w-[300px]"
          />
          <button className="bg-[#B1F101] hover:bg-[#A0E000] text-gray-900 font-semibold px-8 py-4 rounded-full flex items-center gap-2 transition-all shadow-lg hover:shadow-xl whitespace-nowrap">
            订阅
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path
                d="M4 10H16M16 10L10 4M16 10L10 16"
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
  );
}