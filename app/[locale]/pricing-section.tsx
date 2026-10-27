type Props = {locale: "ko" | "en"};

const copy = {
  ko: {
    title: "아이의 루틴, 온 가족이 함께.",
    intro: "21days Pro로 더 많은 자녀와 보호자를 연결하고, 집 안의 태블릿을 아이가 직접 사용하는 Family Board로 바꿔보세요.",
    benefits: [
      ["자녀 최대 5명", "자녀별 프로필과 루틴을 한곳에서 확인하세요."],
      ["자녀당 루틴 최대 20개", "아침 준비부터 저녁 정리까지, 아이의 일상에 맞는 루틴을 구성하세요."],
      ["자녀당 보호자 최대 6명", "부모와 조부모 등 함께 돌보는 보호자가 같은 자녀의 루틴과 진행 상태를 확인할 수 있어요."],
    ],
    boardTitle: "집 안의 태블릿을 우리 가족의 루틴 보드로.",
    boardBody: "가족 공용 태블릿에서 오늘의 루틴을 확인하고, 아이가 직접 시작·완료 버튼을 누를 수 있어요.",
    alertsTitle: "아이에게 시작 알림, 보호자에게 미시작 알림",
    alertsBody: "등록한 Family Board 기기로 루틴 시작 알림을 보내고, 시작 시간으로부터 10분이 지나도록 시작하지 않은 루틴은 보호자 기기로 알려드려요.",
    steps: ["보호자 계정에서 Pro를 구독하세요.", "별도 공용 태블릿에서 해당 계정으로 로그인하고 Family Board 기기로 등록하세요.", "아이가 오늘의 루틴을 확인하고 직접 시작·완료하도록 함께해 주세요."],
    boardNote: "Family Board는 태블릿 사용을 권장합니다. 푸시 알림을 받으려면 인터넷 연결과 알림 권한이 필요합니다.",
    comparison: "Free와 Pro, 한눈에 비교하세요.",
    feature: "기능",
    rows: [
      ["등록 가능한 자녀", "최대 2명", "최대 5명"],
      ["자녀당 보호자", "최대 2명", "최대 6명"],
      ["자녀당 루틴", "최대 3개", "최대 20개"],
      ["Family Board", "미제공", "사용 가능"],
      ["루틴 알림", "대표 양육자 기기의 로컬 알림", "보드 시작 알림 · 보호자 미시작 알림"],
    ],
    plansTitle: "가족의 일상에 맞게 선택하세요.",
    monthly: "Pro 월간",
    annual: "Pro 연간",
    monthlyPrice: "US$1.99 / 월",
    annualPrice: "US$19.99 / 년",
    priceNotice: "미국 스토어 기준 가격입니다. 국가·지역 및 스토어에 따라 가격과 통화가 다를 수 있으며, 실제 결제 금액은 앱 내 구독 화면에서 확인할 수 있습니다.",
    monthlyNote: "매월 자동 갱신",
    annualNote: "매년 자동 갱신",
    plansBody: "월간·연간 모두 동일한 Pro 기능을 제공합니다. 앱 내 구독 화면에서 현재 가격을 확인하고 선택하세요.",
    subscription: "구독은 선택한 주기에 따라 자동 갱신됩니다. 구독 관리는 결제한 App Store 또는 Google Play에서 할 수 있으며, 계정 삭제만으로 구독이 취소되지는 않습니다.",
  },
  en: {
    title: "Your child’s routines. Your whole family, together.",
    intro: "Connect more children and guardians with 21days Pro, and turn a shared tablet into a Family Board your child can use independently.",
    benefits: [
      ["Up to 5 children", "See each child’s profile and routines in one place."],
      ["Up to 20 routines per child", "Build routines that fit your child’s day, from getting ready to tidying up."],
      ["Up to 6 guardians per child", "Parents, grandparents, and other caregivers can follow the same child’s routines and progress."],
    ],
    boardTitle: "Turn your tablet into a family routine board.",
    boardBody: "Children can see today’s routines on a shared tablet and tap to start and complete them themselves.",
    alertsTitle: "Start reminders for children. Not-started alerts for guardians.",
    alertsBody: "Routine start reminders are sent to your registered Family Board. If a routine has not started 10 minutes after its start time, guardians receive an alert on their devices.",
    steps: ["Subscribe to Pro using a guardian account.", "Sign in with that account on a separate shared tablet and register it as a Family Board device.", "Help your child check today’s routines and tap to start and complete them."],
    boardNote: "A tablet is recommended for Family Board. Push notifications require an internet connection and notification permission.",
    comparison: "Compare Free and Pro at a glance.",
    feature: "Feature",
    rows: [
      ["Children", "Up to 2", "Up to 5"],
      ["Guardians per child", "Up to 2", "Up to 6"],
      ["Routines per child", "Up to 3", "Up to 20"],
      ["Family Board", "Not included", "Included"],
      ["Routine notifications", "Local reminders on the primary caregiver’s device", "Board start reminders · guardian not-started alerts"],
    ],
    plansTitle: "Choose what fits your family.",
    monthly: "Pro Monthly",
    annual: "Pro Annual",
    monthlyPrice: "US$1.99 / month",
    annualPrice: "US$19.99 / year",
    priceNotice: "Prices shown are for the US store. Prices and currencies may vary by country, region, and store. See the in-app subscription screen for the actual amount charged.",
    monthlyNote: "Renews monthly",
    annualNote: "Renews annually",
    plansBody: "Both plans include the same Pro features. View current prices and choose a plan on the in-app subscription screen.",
    subscription: "Subscriptions renew automatically at the selected interval. Manage your subscription through the App Store or Google Play used for payment. Deleting your account does not cancel your subscription.",
  },
} as const;

export default function PricingSection({locale}: Props) {
  const t = copy[locale];

  return (
    <section id='pricing' aria-labelledby='pricing-title' className='scroll-mt-8 border-t border-orange-100 bg-orange-50/60 py-24 sm:py-32'>
      <div className='mx-auto max-w-6xl px-4 sm:px-6 lg:px-8'>
        <header className='max-w-3xl'>
          <p className='mb-5 text-sm font-bold uppercase tracking-[0.2em] text-orange-600'>21days Pro</p>
          <h2 id='pricing-title' className='text-4xl font-extrabold leading-tight tracking-tight md:text-5xl'>{t.title}</h2>
          <p className='mt-6 text-lg leading-8 text-gray-600'>{t.intro}</p>
        </header>

        <div className='mt-12 grid gap-5 md:grid-cols-3'>
          {t.benefits.map(([title, body]) => (
            <div key={title} className='rounded-3xl border border-orange-100 bg-white p-7'>
              <h3 className='text-xl font-bold'>{title}</h3>
              <p className='mt-3 leading-7 text-gray-600'>{body}</p>
            </div>
          ))}
        </div>

        <div className='mt-6 grid gap-10 rounded-[32px] bg-gray-900 p-7 text-white sm:p-10 lg:grid-cols-2 lg:gap-14'>
          <div>
            <p className='mb-4 text-sm font-bold tracking-wide text-orange-300'>Family Board · Pro</p>
            <h3 className='text-3xl font-bold leading-tight'>{t.boardTitle}</h3>
            <p className='mt-5 leading-7 text-gray-300'>{t.boardBody}</p>
            <div className='mt-8 border-t border-gray-700 pt-6'>
              <h4 className='text-lg font-bold text-orange-200'>{t.alertsTitle}</h4>
              <p className='mt-3 leading-7 text-gray-300'>{t.alertsBody}</p>
            </div>
          </div>
          <div>
            <ol className='space-y-6'>
              {t.steps.map((step, index) => (
                <li key={step} className='flex gap-4'>
                  <span className='flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/10 text-sm font-bold text-orange-200'>{index + 1}</span>
                  <p className='leading-7 text-gray-100'>{step}</p>
                </li>
              ))}
            </ol>
            <p className='mt-8 text-sm leading-6 text-gray-400'>{t.boardNote}</p>
          </div>
        </div>

        <div className='mt-16'>
          <h3 className='text-2xl font-bold sm:text-3xl'>{t.comparison}</h3>
          <div className='mt-6 overflow-x-auto rounded-3xl border border-gray-200 bg-white'>
            <table className='w-full min-w-[480px] text-left text-sm sm:text-base'>
              <caption className='sr-only'>{t.comparison}</caption>
              <thead>
                <tr className='border-b border-gray-200'>
                  <th scope='col' className='w-1/3 p-5 font-semibold text-gray-500'>{t.feature}</th>
                  <th scope='col' className='w-1/3 p-5 text-xl font-bold'>Free</th>
                  <th scope='col' className='w-1/3 bg-orange-50 p-5 text-xl font-bold text-orange-700'>Pro</th>
                </tr>
              </thead>
              <tbody>
                {t.rows.map(([feature, free, pro]) => (
                  <tr key={feature} className='border-b border-gray-100 last:border-0'>
                    <th scope='row' className='p-5 font-semibold leading-6'>{feature}</th>
                    <td className='p-5 leading-6 text-gray-600'>{free}</td>
                    <td className='bg-orange-50/60 p-5 font-semibold leading-6 text-orange-900'>{pro}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className='mt-16'>
          <h3 className='text-2xl font-bold sm:text-3xl'>{t.plansTitle}</h3>
          <p className='mt-4 max-w-3xl leading-7 text-gray-600'>{t.plansBody}</p>
          <div className='mt-6 grid gap-5 sm:grid-cols-2'>
            {[[t.monthly, t.monthlyPrice, t.monthlyNote], [t.annual, t.annualPrice, t.annualNote]].map(([title, price, note]) => (
              <div key={title} className='rounded-3xl border border-orange-200 bg-white p-7'>
                <h4 className='text-xl font-bold'>{title}</h4>
                <p className='mt-4 text-2xl font-bold text-orange-600'>{price}</p>
                <p className='mt-3 text-sm text-gray-500'>{note}</p>
              </div>
            ))}
          </div>
          <p className='mt-6 max-w-4xl text-sm leading-7 text-gray-500'>{t.priceNotice}</p>
          <p className='mt-3 max-w-4xl text-sm leading-7 text-gray-500'>{t.subscription}</p>
        </div>
      </div>
    </section>
  );
}
