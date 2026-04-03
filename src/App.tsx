/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Apple, Play, CheckCircle2, Timer, Coins, TrendingUp, Star } from 'lucide-react';
import { motion } from 'motion/react';
import videoSrc from './assets/video.mp4';

export default function App() {
  return (
    <div className="font-sans text-gray-900 antialiased bg-white selection:bg-orange-200">
      {/* Navbar */}
      <nav className="w-full bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="text-2xl font-bold text-orange-500 tracking-tighter">21days</div>
          <div>
            <button className="bg-gray-900 text-white px-6 py-2.5 rounded-full font-medium hover:bg-gray-800 transition-colors">
              English
            </button>
          </div>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="pt-12 pb-20 lg:pt-28 lg:pb-32 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative flex flex-col lg:flex-row items-center">
            <div className="w-full lg:w-1/2 lg:pr-8 relative z-20 mb-16 lg:mb-0">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-5xl lg:text-7xl font-extrabold tracking-tight leading-[1.15] mb-6"
              >
                말 안 듣는 우리 아이,<br/>
                <span className="text-orange-500">혼내지 않고</span><br/>
                스스로 움직이게<br/> 
                만드는 비밀
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-lg md:text-xl text-gray-600 mb-10 max-w-lg leading-relaxed"
              >
                정답 없는 육아에 지친 부모님들을 위해.<br/>
                잔소리 대신 따뜻한 칭찬으로 21일의 마법을 경험해 보세요.
              </motion.p>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <button className="flex items-center justify-center gap-2 bg-gray-900 text-white px-8 py-4 rounded-full font-medium hover:bg-gray-800 transition-colors text-lg w-full sm:w-auto">앱 다운로드하러 가기
                </button>
              </motion.div>
            </div>
            
            {/* Hero Image/Mockup Right side */}
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-end relative z-10">
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="relative w-full flex items-center justify-center"
              >
                {/* Mockup Container */}
                <div className="w-[320px] h-[650px] bg-white rounded-[50px] border-[12px] border-gray-900 shadow-2xl relative overflow-hidden z-20 flex flex-col">
                    {/* Notch */}
                    <div className="absolute top-0 inset-x-0 h-6 bg-gray-900 rounded-b-3xl w-40 mx-auto z-30"></div>
                    
                    {/* App Content */}
                    <div className="flex-1 bg-black relative overflow-hidden flex flex-col">
                        <video 
                          className="absolute inset-0 w-full h-full object-cover"
                          autoPlay 
                          loop 
                          muted 
                          playsInline
                          src={videoSrc}
                        />
                    </div>
                </div>
                
                {/* Decorative background blob */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] lg:w-[600px] lg:h-[600px] bg-orange-400/20 rounded-full mix-blend-multiply filter blur-3xl z-10"></div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Intro Section */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold mb-8 text-gray-900"
            >
              매일 화내고 후회하던 엄마가<br/>
              직접 만들고, 먼저 효과를 봤습니다.
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg md:text-xl text-gray-600 leading-relaxed"
            >
              매번 좋은 부모가 되려 노력하지만, 반복되는 일상 속에서 잔소리 없이 아이를 이끌기란 쉽지 않습니다.<br className="hidden md:block"/>
              <span className="font-bold text-orange-500">21days</span>는 부모님의 입을 아프게 하는 대신,<br className="hidden md:block"/>
              아이 스스로 움직이게 만드는 <span className="font-bold text-gray-900">'가장 현실적이고 확실한 육아 솔루션'</span>을 제안합니다.
            </motion.p>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-24">
              <h2 className="text-sm font-bold text-orange-500 tracking-widest uppercase mb-3">Features</h2>
              <h3 className="text-3xl md:text-5xl font-bold text-gray-900">핵심 기능 소개</h3>
            </div>

            <div className="space-y-32">
              {/* Feature 1 */}
              <div className="flex flex-col lg:flex-row items-center gap-16">
                <div className="lg:w-1/2">
                  <div className="w-14 h-14 bg-orange-100 rounded-2xl flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-7 h-7 text-orange-500" />
                  </div>
                  <h4 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">스스로 해내는 기쁨,<br/>맞춤형 루틴</h4>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    <strong className="text-gray-900 block mb-2 text-xl">아이의 눈높이에 맞춘 약속</strong>
                    '어린이집 가방 정리하기', '장난감 치우기' 등 매일 해야 할 일을 아이와 함께 정해 보세요. 루틴을 완료할 때마다 터지는 귀여운 폭죽 화면이 아이의 성취감을 한껏 끌어올려 줍니다.
                  </p>
                </div>
                <div className="lg:w-1/2 w-full">
                  <div className="aspect-square md:aspect-[4/3] bg-orange-50/50 rounded-[40px] border border-orange-100 shadow-xl overflow-hidden relative flex items-center justify-center p-8">
                     <div className="w-full max-w-sm bg-white rounded-3xl shadow-lg border border-gray-100 p-6 transform rotate-2 hover:rotate-0 transition-transform duration-500">
                        <div className="flex items-center justify-between mb-6">
                            <div className="font-bold text-lg">아침 루틴</div>
                            <div className="text-sm text-orange-500 font-bold bg-orange-50 px-3 py-1 rounded-full">2/3 완료</div>
                        </div>
                        <div className="space-y-3">
                            <div className="flex items-center gap-4 p-4 bg-orange-50 rounded-2xl">
                                <div className="w-6 h-6 rounded-full bg-orange-500 flex items-center justify-center"><CheckCircle2 className="w-4 h-4 text-white"/></div>
                                <div className="h-4 bg-gray-800 rounded w-1/2"></div>
                            </div>
                            <div className="flex items-center gap-4 p-4 bg-orange-50 rounded-2xl">
                                <div className="w-6 h-6 rounded-full bg-orange-500 flex items-center justify-center"><CheckCircle2 className="w-4 h-4 text-white"/></div>
                                <div className="h-4 bg-gray-800 rounded w-2/3"></div>
                            </div>
                            <div className="flex items-center gap-4 p-4 border border-gray-100 rounded-2xl">
                                <div className="w-6 h-6 rounded-full border-2 border-gray-300"></div>
                                <div className="h-4 bg-gray-300 rounded w-1/3"></div>
                            </div>
                        </div>
                     </div>
                  </div>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
                <div className="lg:w-1/2">
                  <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                    <Timer className="w-7 h-7 text-blue-500" />
                  </div>
                  <h4 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">짧지만 강력한 몰입,<br/>집중 타이머</h4>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    <strong className="text-gray-900 block mb-2 text-xl">스스로 해내는 시간의 마법</strong>
                    약속된 시간 동안 한 가지 일에 집중하는 훈련을 도와줍니다. 타이머가 끝난 후 주어지는 달콤한 보상은 아이의 집중력을 자연스럽게 높여줍니다.
                  </p>
                </div>
                <div className="lg:w-1/2 w-full">
                  <div className="aspect-square md:aspect-[4/3] bg-blue-50/50 rounded-[40px] border border-blue-100 shadow-xl overflow-hidden relative flex items-center justify-center p-8">
                     <div className="w-64 h-64 bg-white rounded-full shadow-lg border border-gray-100 flex flex-col items-center justify-center relative">
                        <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 100 100">
                            <circle cx="50" cy="50" r="46" fill="none" stroke="#eff6ff" strokeWidth="8" />
                            <circle cx="50" cy="50" r="46" fill="none" stroke="#3b82f6" strokeWidth="8" strokeDasharray="289" strokeDashoffset="70" strokeLinecap="round" className="transition-all duration-1000" />
                        </svg>
                        <span className="text-5xl font-bold text-gray-900 tracking-tighter">15:00</span>
                        <span className="text-gray-500 mt-2 font-medium">책 읽기 집중</span>
                     </div>
                  </div>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex flex-col lg:flex-row items-center gap-16">
                <div className="lg:w-1/2">
                  <div className="w-14 h-14 bg-yellow-100 rounded-2xl flex items-center justify-center mb-6">
                    <Coins className="w-7 h-7 text-yellow-500" />
                  </div>
                  <h4 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">확실한 동기부여,<br/>달콤한 칭찬 코인</h4>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    <strong className="text-gray-900 block mb-2 text-xl">잘한 행동에는 확실한 칭찬을</strong>
                    잔소리 대신 코인으로 보상해 주세요. 모은 코인으로 아이가 원하는 선물을 교환하며, 긍정적인 행동이 자연스럽게 '습관'으로 자리 잡습니다.
                  </p>
                </div>
                <div className="lg:w-1/2 w-full">
                  <div className="aspect-square md:aspect-[4/3] bg-yellow-50/50 rounded-[40px] border border-yellow-100 shadow-xl overflow-hidden relative flex items-center justify-center p-8">
                     <div className="grid grid-cols-2 gap-6 w-full max-w-md">
                        <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 text-center flex flex-col items-center transform -translate-y-4 hover:-translate-y-6 transition-transform">
                            <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mb-6 shadow-inner">
                                <Star className="w-10 h-10 text-yellow-500 fill-yellow-500" />
                            </div>
                            <div className="text-3xl font-extrabold text-gray-900 mb-2">+5</div>
                            <div className="text-gray-500 font-medium">양치질 하기</div>
                        </div>
                        <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 text-center flex flex-col items-center transform translate-y-4 hover:translate-y-2 transition-transform">
                            <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mb-6 shadow-inner">
                                <Star className="w-10 h-10 text-yellow-500 fill-yellow-500" />
                            </div>
                            <div className="text-3xl font-extrabold text-gray-900 mb-2">+10</div>
                            <div className="text-gray-500 font-medium">장난감 정리</div>
                        </div>
                     </div>
                  </div>
                </div>
              </div>

              {/* Feature 4 */}
              <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
                <div className="lg:w-1/2">
                  <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center mb-6">
                    <TrendingUp className="w-7 h-7 text-green-500" />
                  </div>
                  <h4 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">매일 쌓이는 발자취,<br/>성장 기록</h4>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    <strong className="text-gray-900 block mb-2 text-xl">육아의 효능감이 채워지는 순간</strong>
                    어제보다 오늘 더 나아진 아이의 모습을 눈으로 직접 확인하세요. 차곡차곡 쌓인 칭찬 코인 내역과 루틴 달성률이 부모님에게는 뿌듯함을, 아이에게는 자신감을 선물합니다.
                  </p>
                </div>
                <div className="lg:w-1/2 w-full">
                  <div className="aspect-square md:aspect-[4/3] bg-green-50/50 rounded-[40px] border border-green-100 shadow-xl overflow-hidden relative flex items-end justify-center p-8">
                     <div className="w-full max-w-md bg-white rounded-t-3xl shadow-[0_-10px_40px_rgba(0,0,0,0.05)] p-8 h-64 flex flex-col justify-end">
                        <div className="flex items-end justify-between gap-3 h-40">
                            <div className="w-full bg-green-100 rounded-t-xl h-[30%] hover:bg-green-200 transition-colors"></div>
                            <div className="w-full bg-green-200 rounded-t-xl h-[50%] hover:bg-green-300 transition-colors"></div>
                            <div className="w-full bg-green-300 rounded-t-xl h-[40%] hover:bg-green-400 transition-colors"></div>
                            <div className="w-full bg-green-400 rounded-t-xl h-[70%] hover:bg-green-500 transition-colors"></div>
                            <div className="w-full bg-green-500 rounded-t-xl h-[90%] relative group">
                                <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-sm py-1.5 px-3 rounded-lg font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                                    이번 주 최고!
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-between mt-4 text-xs text-gray-400 font-medium">
                            <span>월</span><span>화</span><span>수</span><span>목</span><span>금</span>
                        </div>
                     </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Vision Section */}
        <section id="vision" className="py-32 bg-gray-900 text-white text-center px-4 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
             <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500 rounded-full mix-blend-screen filter blur-[100px]"></div>
             <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-screen filter blur-[100px]"></div>
          </div>
          <div className="max-w-3xl mx-auto relative z-10">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight"
            >
              매일의 작은 칭찬이<br/>아이의 단단한 습관이 됩니다.
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl md:text-2xl text-gray-400 leading-relaxed font-medium"
            >
              심리학에서 말하는 습관 형성의 최소 기간, 21일.<br/>
              저희는 이 21일의 여정을 통해 우리 아이들이<br/>
              자기주도적인 삶을 살아갈 수 있는 힘을 즐겁게 키워나가기를 바랍니다.
            </motion.p>
          </div>
        </section>

        {/* Outro Section */}
        <section className="py-32 bg-orange-500 text-white text-center px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-extrabold mb-12 leading-tight tracking-tight">
              우리 집 육아 풍경을 바꿀 21일,<br/>지금 바로 시작해 보세요.
            </h2>
            <button className="bg-white text-orange-500 px-12 py-6 rounded-full font-bold text-2xl hover:bg-gray-50 transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
              무료로 시작하기
            </button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white py-16 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-3xl font-extrabold text-orange-500 tracking-tighter">21days</div>
          <div className="flex flex-wrap justify-center gap-8 text-base text-gray-500 font-medium">
            <a href="/terms/" className="hover:text-gray-900 transition-colors">이용약관</a>
            <a href="#" className="hover:text-gray-900 transition-colors">개인정보처리방침</a>
            <a href="mailto:parentingnow.support@gmail.com" className="hover:text-gray-900 transition-colors">고객센터</a>
            <a href="#" className="hover:text-gray-900 transition-colors">parenting-now</a>
          </div>
          <div className="text-sm text-gray-400 text-center md:text-right">
            <p className="mb-2">문의: <a href="mailto:parentingnow.support@gmail.com" className="hover:text-gray-600 transition-colors">parentingnow.support@gmail.com</a></p>
            <p>© 2026 21days. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
