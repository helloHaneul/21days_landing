"use client";

import React from "react";
import {
  CheckCircle2,
  Timer,
  Coins,
  CalendarDays,
  Users,
  Star,
} from "lucide-react";
import { motion } from "motion/react";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";

const videoSrc = "/video.mp4";

const copy = {
  ko: {
    localeLabel: "English",
    heroTitle: (
      <>
        말 안 듣는 우리 아이,
        <br />
        <span className='text-orange-500'>혼내지 않고</span>
        <br />
        스스로 움직이게
        <br />
        만드는 비밀
      </>
    ),
    heroDescription: (
      <>
        정답 없는 육아에 지친 부모님들을 위해.
        <br />
        잔소리 대신 따뜻한 칭찬으로 21일의 마법을 경험해 보세요.
      </>
    ),
    heroCta: "앱 다운로드하러 가기",
    introTitle: (
      <>
        매일 화내고 후회하던 엄마가
        <br />
        직접 만들고, 먼저 효과를 봤습니다.
      </>
    ),
    introDescription: (
      <>
        매번 좋은 부모가 되려 노력하지만, 반복되는 일상 속에서 잔소리 없이
        아이를 이끌기란 쉽지 않습니다.
        <br className='hidden md:block' />
        <span className='font-bold text-orange-500'>21days</span>는 부모님의
        입을 아프게 하는 대신,
        <br className='hidden md:block' />
        아이 스스로 움직이게 만드는{" "}
        <span className='font-bold text-gray-900'>
          '가장 현실적이고 확실한 육아 솔루션'
        </span>
        을 제안합니다.
      </>
    ),
    featuresLabel: "Features",
    featuresTitle: "핵심 기능 소개",
    feature1Title: (
      <>
        스스로 해내는 기쁨,
        <br />
        맞춤형 루틴
      </>
    ),
    feature1Lead: "아이의 눈높이에 맞춘 약속",
    feature1Body:
      "'어린이집 가방 정리하기', '장난감 치우기' 등 매일 해야 할 일을 아이와 함께 정해 보세요. 루틴을 완료할 때마다 터지는 귀여운 폭죽 화면이 아이의 성취감을 한껏 끌어올려 줍니다.",
    feature1ExamplesLabel: "예시",
    feature1Examples: ["등원 준비 스스로 하기", "장난감 정리 습관 들이기"],
    routineCardTitle: "아침 루틴",
    routineCardStatus: "2/3 완료",
    feature2Title: (
      <>
        짧지만 강력한 몰입,
        <br />
        집중 타이머
      </>
    ),
    feature2Lead: "스스로 해내는 시간의 마법",
    feature2Body:
      "약속된 시간 동안 한 가지 일에 집중하는 훈련을 도와줍니다. 타이머가 끝난 후 주어지는 달콤한 보상은 아이의 집중력을 자연스럽게 높여줍니다.",
    feature2ExamplesLabel: "예시",
    feature2Examples: [
      "식사 시간 제자리에서 밥먹기",
      "놀이터에서 약속한 시간만 놀기",
    ],
    timerLabel: "책 읽기 집중",
    feature3Title: (
      <>
        확실한 동기부여,
        <br />
        달콤한 칭찬 코인
      </>
    ),
    feature3Lead: "잘한 행동에는 확실한 칭찬을",
    feature3Body:
      "잔소리 대신 코인으로 보상해 주세요. 모은 코인으로 아이가 원하는 선물을 교환하며, 긍정적인 행동이 자연스럽게 '습관'으로 자리 잡습니다.",
    feature3ExamplesLabel: "예시",
    feature3Examples: ["일어나자마자 세수하기", "스스로 양치하고 잠자리 준비"],
    coinCardOne: "도전반찬 성공",
    coinCardTwo: "스스로 장난감 정리 성공",
    feature4Title: (
      <>
        하루가 정리되는,
        <br />
        자녀 일정 관리
      </>
    ),
    feature4Lead: "할 일·일정·알림을 한 곳에서",
    feature4Body:
      "유치원/학원/병원/특별한 일정까지, 아이의 하루를 한 번에 정리해 보세요. 중요한 일정은 알림으로 놓치지 않게 도와드립니다.",
    feature4ExamplesLabel: "예시",
    feature4Examples: [
      "병원/예방접종 일정 챙기기",
      "학원/숙제 마감 놓치지 않기",
    ],
    scheduleCardTitle: "이번 주 일정",
    scheduleCardItems: ["화 · 치과", "수 · 태권도", "금 · 생일파티"],
    familyLabel: "Family (Paid)",
    familyTitle: (
      <>
        가족이 함께 관리할 때
        <br />
        육아는 더 쉬워집니다.
      </>
    ),
    familyDescription:
      "21days의 가족 기능은 ‘가족이 함께 관리하는 가치’를 제공합니다. 공동 보호자와 정보를 공유하고 같은 기준으로 아이를 도울 수 있어요.",
    familyBullets: [
      "공동 보호자 초대",
      "초대코드 생성/수락",
      "자녀 데이터 공유",
      "자녀당 보호자 수 제한 범위 내 협업",
    ],
    familyNote: "가족 기능은 유료 플랜에서 제공될 예정입니다.",
    visionTitle: (
      <>
        매일의 작은 칭찬이
        <br />
        아이의 단단한 습관이 됩니다.
      </>
    ),
    visionDescription: (
      <>
        심리학에서 말하는 습관 형성의 최소 기간, 21일.
        <br />
        저희는 이 21일의 여정을 통해 우리 아이들이
        <br />
        자기주도적인 삶을 살아갈 수 있는 힘을 즐겁게 키워나가기를 바랍니다.
      </>
    ),
    outroTitle: (
      <>
        우리 집 육아 풍경을 바꿀 21일,
        <br />
        지금 바로 시작해 보세요.
      </>
    ),
    outroCta: "무료로 시작하기",
    footerTerms: "이용약관",
    footerPrivacy: "개인정보처리방침",
    footerContact: "문의:",
  },
  en: {
    localeLabel: "한국어",
    heroTitle: (
      <>
        The gentle way
        <br />
        to help your child
        <br />
        <span className='text-orange-500'>move on their own</span>
        <br />
        without constant scolding
      </>
    ),
    heroDescription: (
      <>
        For parents exhausted by the uncertainty of raising kids.
        <br />
        Discover 21 days of change through warm encouragement instead of
        nagging.
      </>
    ),
    heroCta: "Download the app",
    introTitle: (
      <>
        Built by a mom
        <br />
        who lived through the daily frustration first.
      </>
    ),
    introDescription: (
      <>
        Every parent wants to do better, but it is not easy to guide a child
        calmly through repetitive daily routines.
        <br className='hidden md:block' />
        <span className='font-bold text-orange-500'>21days</span> helps parents
        speak less,
        <br className='hidden md:block' />
        while helping children take action on their own through{" "}
        <span className='font-bold text-gray-900'>
          a practical, encouraging parenting solution
        </span>
        .
      </>
    ),
    featuresLabel: "Features",
    featuresTitle: "What Makes 21days Work",
    feature1Title: (
      <>
        The joy of doing it alone,
        <br />
        with personalized routines
      </>
    ),
    feature1Lead: "Promises made at your child’s level",
    feature1Body:
      "Set daily tasks together, like packing a daycare bag or cleaning up toys. Every completed routine ends with a delightful celebration that boosts your child's sense of accomplishment.",
    feature1ExamplesLabel: "Examples",
    feature1Examples: ["Pack the daycare bag", "Clean up toys after play"],
    routineCardTitle: "Morning Routine",
    routineCardStatus: "2/3 done",
    feature2Title: (
      <>
        Short but powerful focus,
        <br />
        with a simple timer
      </>
    ),
    feature2Lead: "The magic of finishing on your own",
    feature2Body:
      "Help your child practice focusing on one task for a set amount of time. The sweet reward at the end makes concentration feel natural and fun.",
    feature2ExamplesLabel: "Examples",
    feature2Examples: [
      "Stay seated during meals",
      "Play at the playground for the agreed time",
    ],
    timerLabel: "Reading Time",
    feature3Title: (
      <>
        Clear motivation,
        <br />
        with praise coins
      </>
    ),
    feature3Lead: "Meaningful praise for good habits",
    feature3Body:
      "Use coins instead of nagging. As children collect coins and exchange them for rewards they choose, positive behavior starts to become a lasting habit.",
    feature3ExamplesLabel: "Examples",
    feature3Examples: [
      "Wake up and wash face",
      "Brush teeth and get ready for bed",
    ],
    coinCardOne: "Brushed teeth",
    coinCardTwo: "Cleaned up toys",
    feature4Title: (
      <>
        Keep days organized,
        <br />
        with child schedules
      </>
    ),
    feature4Lead: "Tasks, events, and reminders in one place",
    feature4Body:
      "From daycare and lessons to appointments and special events, organize your child’s week at a glance. Gentle reminders help you stay on track.",
    feature4ExamplesLabel: "Examples",
    feature4Examples: [
      "Keep up with vaccines/appointments",
      "Never miss lessons or homework deadlines",
    ],
    scheduleCardTitle: "This Week",
    scheduleCardItems: [
      "Tue · Dentist",
      "Wed · Taekwondo",
      "Fri · Birthday party",
    ],
    familyLabel: "Family (Paid)",
    familyTitle: (
      <>
        When family manages together,
        <br />
        parenting gets lighter.
      </>
    ),
    familyDescription:
      "Family features are designed around the value of managing together—so caregivers stay aligned and children get consistent support.",
    familyBullets: [
      "Invite co-guardians",
      "Create/accept invite codes",
      "Share child data",
      "Collaborate within guardian-per-child limits",
    ],
    familyNote: "Family features are planned for a paid plan.",
    visionTitle: (
      <>
        Small words of praise each day
        <br />
        become strong habits for life.
      </>
    ),
    visionDescription: (
      <>
        In psychology, 21 days is often seen as the minimum window for habit
        formation.
        <br />
        Through this 21-day journey, we hope children build the confidence
        <br />
        to live more independently and joyfully.
      </>
    ),
    outroTitle: (
      <>
        Parenting has no right answers.
        <br />
        But let 21days be your supportive companion.
      </>
    ),
    outroCta: "Start for free",
    footerTerms: "Terms of Service",
    footerPrivacy: "Privacy Policy",
    footerContact: "Contact:",
  },
} as const;

function getOtherLocale(locale: "ko" | "en") {
  return locale === "ko" ? "en" : "ko";
}

function toLocalePath(pathname: string, locale: "ko" | "en") {
  if (!pathname || pathname === "/") return `/${locale}`;

  if (/^\/(ko|en)(?=\/|$)/.test(pathname)) {
    return pathname.replace(/^\/(ko|en)(?=\/|$)/, `/${locale}`);
  }

  return `/${locale}${pathname.startsWith("/") ? "" : "/"}${pathname}`;
}

export default function LandingClient() {
  const locale = useLocale() as "ko" | "en";
  const t = copy[locale];
  const isEnglish = locale === "en";
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div className='font-sans text-gray-900 antialiased bg-white selection:bg-orange-200'>
      <nav className='w-full bg-white border-b border-gray-100'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-[4.5rem] flex items-center justify-between'>
          <div className='text-2xl font-bold text-orange-500 tracking-tighter'>
            21days
          </div>
          <div>
            <button
              className='bg-gray-900 text-white px-6 py-2.5 rounded-full font-medium hover:bg-gray-800 transition-colors'
              onClick={() => {
                const nextLocale = getOtherLocale(locale);
                router.replace(toLocalePath(pathname, nextLocale));
              }}
              type='button'
            >
              {t.localeLabel}
            </button>
          </div>
        </div>
      </nav>

      <main>
        <section className='pt-12 pb-20 lg:pt-28 lg:pb-32 overflow-hidden'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative flex flex-col lg:flex-row items-center'>
            <div className='w-full lg:w-1/2 lg:pr-8 relative z-20 mb-16 lg:mb-0'>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className={`font-extrabold tracking-tight mb-6 ${
                  isEnglish
                    ? "max-w-[11ch] text-4xl sm:text-5xl lg:text-[4.25rem] leading-[1.02]"
                    : "text-5xl lg:text-7xl leading-[1.15]"
                }`}
              >
                {t.heroTitle}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className={`text-gray-600 mb-10 leading-relaxed ${
                  isEnglish
                    ? "max-w-xl text-[1.05rem] sm:text-lg lg:text-[1.15rem]"
                    : "max-w-lg text-lg md:text-xl"
                }`}
              >
                {t.heroDescription}
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className={`flex gap-4 ${
                  isEnglish
                    ? "flex-col items-start sm:flex-row sm:items-center"
                    : "flex-col sm:flex-row"
                }`}
              >
                <a
                  href='/download/'
                  className={`flex items-center justify-center gap-2 bg-gray-900 text-white px-8 py-4 rounded-full font-medium hover:bg-gray-800 transition-colors ${
                    isEnglish
                      ? "text-base sm:text-lg min-w-[220px]"
                      : "text-lg w-full sm:w-auto"
                  }`}
                >
                  {t.heroCta}
                </a>
              </motion.div>
            </div>

            <div className='w-full lg:w-1/2 flex justify-center lg:justify-end relative z-10'>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className='relative w-full flex items-center justify-center'
              >
                <div className='w-[320px] h-[650px] bg-white rounded-[50px] border-[12px] border-gray-900 shadow-2xl relative overflow-hidden z-20 flex flex-col'>
                  <div className='absolute top-0 inset-x-0 h-6 bg-gray-900 rounded-b-3xl w-40 mx-auto z-30'></div>
                  <div className='flex-1 bg-black relative overflow-hidden flex flex-col'>
                    <video
                      className='absolute inset-0 w-full h-full object-cover'
                      autoPlay
                      loop
                      muted
                      playsInline
                      src={videoSrc}
                    />
                  </div>
                </div>
                <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] lg:w-[600px] lg:h-[600px] bg-orange-400/20 rounded-full mix-blend-multiply filter blur-3xl z-10'></div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className='py-24 bg-gray-50'>
          <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className='text-3xl md:text-4xl font-bold mb-8 text-gray-900'
            >
              {t.introTitle}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className='text-lg md:text-xl text-gray-600 leading-relaxed'
            >
              {t.introDescription}
            </motion.p>
          </div>
        </section>

        <section id='features' className='py-32'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='text-center mb-24'>
              <h2 className='text-sm font-bold text-orange-500 tracking-widest uppercase mb-3'>
                {t.featuresLabel}
              </h2>
              <h3 className='text-3xl md:text-5xl font-bold text-gray-900'>
                {t.featuresTitle}
              </h3>
            </div>

            <div className='space-y-32'>
              <div className='flex flex-col lg:flex-row items-center gap-16'>
                <div className='lg:w-1/2'>
                  <div className='w-14 h-14 bg-orange-100 rounded-2xl flex items-center justify-center mb-6'>
                    <CheckCircle2 className='w-7 h-7 text-orange-500' />
                  </div>
                  <h4 className='text-3xl md:text-4xl font-bold mb-6 leading-tight'>
                    {t.feature1Title}
                  </h4>
                  <p className='text-lg text-gray-600 leading-relaxed'>
                    <strong className='text-gray-900 block mb-2 text-xl'>
                      {t.feature1Lead}
                    </strong>
                    {t.feature1Body}
                  </p>
                  <div className='mt-6'>
                    <div className='text-sm font-bold text-gray-500 mb-2'>
                      {t.feature1ExamplesLabel}
                    </div>
                    <div className='flex flex-wrap gap-2'>
                      {t.feature1Examples.map((item) => (
                        <span
                          key={item}
                          className='inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-700'
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className='lg:w-1/2 w-full'>
                  <div className='aspect-square md:aspect-[4/3] bg-orange-50/50 rounded-[40px] border border-orange-100 shadow-xl overflow-hidden relative flex items-center justify-center p-8'>
                    <div className='w-full max-w-sm bg-white rounded-3xl shadow-lg border border-gray-100 p-6 transform rotate-2 hover:rotate-0 transition-transform duration-500'>
                      <div className='flex items-center justify-between mb-6'>
                        <div className='font-bold text-lg'>
                          {t.routineCardTitle}
                        </div>
                        <div className='text-sm text-orange-500 font-bold bg-orange-50 px-3 py-1 rounded-full'>
                          {t.routineCardStatus}
                        </div>
                      </div>
                      <div className='space-y-3'>
                        <div className='flex items-center gap-4 p-4 bg-orange-50 rounded-2xl'>
                          <div className='w-6 h-6 rounded-full bg-orange-500 flex items-center justify-center'>
                            <CheckCircle2 className='w-4 h-4 text-white' />
                          </div>
                          <div className='h-4 bg-gray-800 rounded w-1/2'></div>
                        </div>
                        <div className='flex items-center gap-4 p-4 bg-orange-50 rounded-2xl'>
                          <div className='w-6 h-6 rounded-full bg-orange-300 flex items-center justify-center'></div>
                          <div className='h-4 bg-gray-200 rounded w-2/3'></div>
                        </div>
                        <div className='flex items-center gap-4 p-4 bg-orange-50 rounded-2xl opacity-70'>
                          <div className='w-6 h-6 rounded-full bg-gray-200'></div>
                          <div className='h-4 bg-gray-200 rounded w-1/3'></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className='flex flex-col lg:flex-row-reverse items-center gap-16'>
                <div className='lg:w-1/2'>
                  <div className='w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mb-6'>
                    <Timer className='w-7 h-7 text-blue-500' />
                  </div>
                  <h4 className='text-3xl md:text-4xl font-bold mb-6 leading-tight'>
                    {t.feature2Title}
                  </h4>
                  <p className='text-lg text-gray-600 leading-relaxed'>
                    <strong className='text-gray-900 block mb-2 text-xl'>
                      {t.feature2Lead}
                    </strong>
                    {t.feature2Body}
                  </p>
                  <div className='mt-6'>
                    <div className='text-sm font-bold text-gray-500 mb-2'>
                      {t.feature2ExamplesLabel}
                    </div>
                    <div className='flex flex-wrap gap-2'>
                      {t.feature2Examples.map((item) => (
                        <span
                          key={item}
                          className='inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-700'
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className='lg:w-1/2 w-full'>
                  <div className='aspect-square md:aspect-[4/3] bg-blue-50/50 rounded-[40px] border border-blue-100 shadow-xl overflow-hidden relative flex items-center justify-center p-8'>
                    <div className='w-full max-w-sm bg-white rounded-3xl shadow-lg border border-gray-100 p-6'>
                      <div className='flex items-center justify-between mb-6'>
                        <div className='font-bold text-lg'>{t.timerLabel}</div>
                        <div className='text-sm text-blue-500 font-bold bg-blue-50 px-3 py-1 rounded-full'>
                          10:00
                        </div>
                      </div>
                      <div className='relative w-48 h-48 mx-auto mb-8'>
                        <div className='absolute inset-0 rounded-full border-8 border-blue-100'></div>
                        <div className='absolute inset-0 rounded-full border-8 border-blue-500 border-t-transparent rotate-45'></div>
                        <div className='absolute inset-0 flex items-center justify-center'>
                          <div className='text-4xl font-bold text-gray-900'>
                            03:24
                          </div>
                        </div>
                      </div>
                      <button className='w-full bg-blue-500 text-white py-4 rounded-2xl font-bold hover:bg-blue-600 transition-colors'>
                        Pause
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className='flex flex-col lg:flex-row items-center gap-16'>
                <div className='lg:w-1/2'>
                  <div className='w-14 h-14 bg-yellow-100 rounded-2xl flex items-center justify-center mb-6'>
                    <Coins className='w-7 h-7 text-yellow-500' />
                  </div>
                  <h4 className='text-3xl md:text-4xl font-bold mb-6 leading-tight'>
                    {t.feature3Title}
                  </h4>
                  <p className='text-lg text-gray-600 leading-relaxed'>
                    <strong className='text-gray-900 block mb-2 text-xl'>
                      {t.feature3Lead}
                    </strong>
                    {t.feature3Body}
                  </p>
                  <div className='mt-6'>
                    <div className='text-sm font-bold text-gray-500 mb-2'>
                      {t.feature3ExamplesLabel}
                    </div>
                    <div className='flex flex-wrap gap-2'>
                      {t.feature3Examples.map((item) => (
                        <span
                          key={item}
                          className='inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-700'
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className='lg:w-1/2 w-full'>
                  <div className='aspect-square md:aspect-[4/3] bg-yellow-50/50 rounded-[40px] border border-yellow-100 shadow-xl overflow-hidden relative flex items-center justify-center p-8'>
                    <div className='w-full max-w-sm bg-white rounded-3xl shadow-lg border border-gray-100 p-6'>
                      <div className='flex items-center justify-between mb-6'>
                        <div className='font-bold text-lg'>Coins</div>
                        <div className='text-sm text-yellow-500 font-bold bg-yellow-50 px-3 py-1 rounded-full'>
                          120
                        </div>
                      </div>
                      <div className='space-y-4'>
                        <div className='flex items-center justify-between p-4 bg-yellow-50 rounded-2xl'>
                          <div className='font-medium'>{t.coinCardOne}</div>
                          <div className='flex items-center gap-1 text-yellow-500 font-bold'>
                            <Star className='w-4 h-4 fill-yellow-500' />
                            +10
                          </div>
                        </div>
                        <div className='flex items-center justify-between p-4 bg-yellow-50 rounded-2xl'>
                          <div className='font-medium'>{t.coinCardTwo}</div>
                          <div className='flex items-center gap-1 text-yellow-500 font-bold'>
                            <Star className='w-4 h-4 fill-yellow-500' />
                            +8
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className='flex flex-col lg:flex-row-reverse items-center gap-16'>
                <div className='lg:w-1/2'>
                  <div className='w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center mb-6'>
                    <CalendarDays className='w-7 h-7 text-green-500' />
                  </div>
                  <h4 className='text-3xl md:text-4xl font-bold mb-6 leading-tight'>
                    {t.feature4Title}
                  </h4>
                  <p className='text-lg text-gray-600 leading-relaxed'>
                    <strong className='text-gray-900 block mb-2 text-xl'>
                      {t.feature4Lead}
                    </strong>
                    {t.feature4Body}
                  </p>
                  <div className='mt-6'>
                    <div className='text-sm font-bold text-gray-500 mb-2'>
                      {t.feature4ExamplesLabel}
                    </div>
                    <div className='flex flex-wrap gap-2'>
                      {t.feature4Examples.map((item) => (
                        <span
                          key={item}
                          className='inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-700'
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className='lg:w-1/2 w-full'>
                  <div className='aspect-square md:aspect-[4/3] bg-green-50/50 rounded-[40px] border border-green-100 shadow-xl overflow-hidden relative flex items-center justify-center p-8'>
                    <div className='w-full max-w-sm bg-white rounded-3xl shadow-lg border border-gray-100 p-6'>
                      <div className='flex items-center justify-between mb-6'>
                        <div className='font-bold text-lg'>
                          {t.scheduleCardTitle}
                        </div>
                        <div className='text-sm text-green-600 font-bold bg-green-50 px-3 py-1 rounded-full'>
                          3
                        </div>
                      </div>
                      <div className='space-y-3'>
                        {t.scheduleCardItems.map((item) => (
                          <div
                            key={item}
                            className='flex items-center justify-between gap-3 p-4 bg-green-50 rounded-2xl'
                          >
                            <div className='flex items-center gap-3'>
                              <div className='w-9 h-9 rounded-2xl bg-white border border-green-100 flex items-center justify-center text-green-600'>
                                <CalendarDays className='w-5 h-5' />
                              </div>
                              <div className='font-medium text-gray-900'>
                                {item}
                              </div>
                            </div>
                            <div className='text-xs font-bold text-green-700 bg-green-100 px-2.5 py-1 rounded-full'>
                              ON
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className='py-24 bg-white'>
          <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='grid gap-10 lg:grid-cols-2 lg:gap-16 items-start'>
              <div>
                <div className='inline-flex items-center gap-2 text-sm font-bold text-orange-600 bg-orange-50 px-4 py-2 rounded-full mb-5'>
                  <Users className='w-4 h-4' />
                  <span>{t.familyLabel}</span>
                </div>
                <h3 className='text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mb-5'>
                  {t.familyTitle}
                </h3>
                <p className='text-lg text-gray-600 leading-relaxed'>
                  {t.familyDescription}
                </p>
              </div>

              <div className='bg-gray-50 border border-gray-100 rounded-3xl p-8 shadow-sm'>
                <ul className='space-y-4'>
                  {t.familyBullets.map((item) => (
                    <li key={item} className='flex items-start gap-3'>
                      <span className='mt-1 w-5 h-5 rounded-full bg-gray-900 text-white flex items-center justify-center text-xs font-bold'>
                        ✓
                      </span>
                      <span className='text-gray-800 font-medium leading-relaxed'>
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
                <p className='mt-6 text-sm text-gray-500'>{t.familyNote}</p>
              </div>
            </div>
          </div>
        </section>

        <section
          id='vision'
          className='py-32 bg-gray-900 text-white text-center px-4 relative overflow-hidden'
        >
          <div className='absolute inset-0 opacity-10'>
            <div className='absolute top-0 left-1/4 w-96 h-96 bg-orange-500 rounded-full mix-blend-screen filter blur-[100px]'></div>
            <div className='absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-screen filter blur-[100px]'></div>
          </div>
          <div className='max-w-3xl mx-auto relative z-10'>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className='text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight'
            >
              {t.visionTitle}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className='text-xl md:text-2xl text-gray-400 leading-relaxed font-medium'
            >
              {t.visionDescription}
            </motion.p>
          </div>
        </section>

        <section className='py-32 bg-orange-500 text-white text-center px-4'>
          <div className='max-w-4xl mx-auto'>
            <h2 className='text-4xl md:text-6xl font-extrabold mb-12 leading-tight tracking-tight'>
              {t.outroTitle}
            </h2>
            <button className='bg-white text-orange-500 px-12 py-6 rounded-full font-bold text-2xl hover:bg-gray-50 transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1'>
              {t.outroCta}
            </button>
          </div>
        </section>
      </main>

      <footer className='bg-white py-16 border-t border-gray-100'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-8'>
          <div className='text-3xl font-extrabold text-orange-500 tracking-tighter'>
            21days
          </div>
          <div className='flex flex-wrap justify-center gap-8 text-base text-gray-500 font-medium'>
            <a href='/terms/' className='hover:text-gray-900 transition-colors'>
              {t.footerTerms}
            </a>
            <a
              href='/privacy/'
              className='hover:text-gray-900 transition-colors'
            >
              {t.footerPrivacy}
            </a>
            <a href='#' className='hover:text-gray-900 transition-colors'>
              parenting-now
            </a>
          </div>
          <div className='text-sm text-gray-400 text-center md:text-right'>
            <p className='mb-2'>
              {t.footerContact}{" "}
              <a
                href='mailto:parentingnow.support@gmail.com'
                className='hover:text-gray-600 transition-colors'
              >
                parentingnow.support@gmail.com
              </a>
            </p>
            <p>© 2026 21days. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
