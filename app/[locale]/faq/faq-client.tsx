"use client";

import { useMemo, useState } from "react";
import { ChevronDown } from "lucide-react";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";

type Locale = "ko" | "en";

type FaqItem = {
  question: string;
  answer: string;
};

type FaqSection = {
  title: string;
  items: FaqItem[];
};

const copy: Record<
  Locale,
  {
    title: string;
    sections: FaqSection[];
    backToHome: string;
    localeKoLabel: string;
    localeEnLabel: string;
    stickyNote: string;
  }
> = {
  ko: {
    title: "자주 묻는 질문",
    backToHome: "21days 홈으로 돌아가기",
    localeKoLabel: "한국어",
    localeEnLabel: "English",
    sections: [
      {
        title: "가족/공동 보호자",
        items: [
          {
            question: "모든 기능은 무료인가요?",
            answer:
              "Free는 자녀 최대 2명, 자녀당 보호자 최대 2명, 자녀당 루틴 최대 3개를 제공합니다. Pro는 자녀 최대 5명, 자녀당 보호자 최대 6명, 자녀당 루틴 최대 20개와 Family Board, 보드 시작 알림·보호자 미시작 알림을 제공합니다. 월간·연간 요금은 앱 내 스토어 구독 화면에서 확인할 수 있어요.",
          },
          {
            question: "공동 보호자는 어떻게 초대하나요?",
            answer:
              "가족 기능에서 초대코드를 생성해 상대방에게 전달하세요. 초대받은 사용자는 초대코드를 입력하여 자녀 데이터를 함께 관리할 수 있습니다.",
          },
          {
            question: "초대코드가 작동하지 않을 때가 있어요.",
            answer:
              "초대코드는 만료되었거나, 사용 가능 횟수를 초과했거나, 철회된 상태일 수 있어요. 코드가 맞는데도 연결되지 않으면 새 초대코드를 다시 받아 시도해주세요.",
          },
        ],
      },
      {
        title: "루틴/타이머",
        items: [
          {
            question: "루틴은 무제한으로 등록해서 사용할 수 있나요?",
            answer:
              "자녀당 루틴은 Free에서 최대 3개, Pro에서 최대 20개를 등록할 수 있어요. 아이에게 맞는 루틴부터 조금씩 시작해 보세요.",
          },
          {
            question: "루틴이 잘 안 지켜질 때는 어떻게 시작하면 좋을까요?",
            answer:
              "처음부터 많은 항목을 넣기보다, 하루에 1~2개만 정해 작게 시작해 보세요. 가능한 한 ‘성공하기 쉬운’ 항목으로 시작하면 아이의 자신감이 빠르게 올라갑니다.",
          },
          {
            question: "집중 타이머는 어떤 상황에서 유용한가요?",
            answer:
              "식사 시간에 제자리에 앉아 있기, 놀이터에서 약속한 시간만 놀기처럼 ‘짧게 집중할 약속’이 필요한 상황에서 도움이 됩니다.",
          },
        ],
      },
      {
        title: "계정/로그인",
        items: [
          {
            question:
              "소셜 로그인(Apple/Google) 계정을 기존 계정에 “연결”할 수 있나요?",
            answer:
              "네. 기존 계정으로 로그인한 뒤, 설정 화면에서 Apple/Google 계정을 기존 계정에 연결할 수 있어요. 연결해두면 다음부터는 연결된 소셜 계정으로도 같은 계정에 로그인할 수 있습니다.",
          },
          {
            question: "이미 만들어진 계정끼리 “병합”도 가능한가요?",
            answer:
              "아니요. 현재는 계정 연결은 지원하지만, 서로 다른 두 계정을 하나로 합치는 계정 병합 기능은 지원하지 않습니다.",
          },
          {
            question: "병합을 지원하지 않으면 어떤 점을 주의해야 하나요?",
            answer:
              "이미 이메일로 가입한 상태에서 같은 이메일로 소셜 로그인을 새로 진행하면, 별도 계정이 추가로 생성될 수 있어요. 기존 데이터(자녀/루틴/기록 등)를 유지하려면, 새로 가입하기보다 기존 계정에 소셜 계정을 “연결”하는 방식으로 이용해주세요.",
          },
          {
            question: "이메일 가입 후 확인 메일을 꼭 눌러야 해요.",
            answer:
              "이메일로 가입한 경우, 받은 편지함으로 전송된 확인 메일을 눌러야 가입이 완료돼요. 메일이 오지 않으면 스팸함이나 프로모션함도 함께 확인해주세요.",
          },
          {
            question:
              "Apple 로그인은 이메일 가리기 사용 시 별도 계정처럼 보일 수 있어요.",
            answer:
              "Apple의 ‘이메일 가리기’ 기능을 사용하면 일반 이메일 로그인과 다른 주소로 인식될 수 있어요. 이 경우 기존 이메일 계정과 자동으로 같은 계정으로 연결되지 않을 수 있으니 주의해주세요.",
          },
        ],
      },
      {
        title: "데이터/삭제",
        items: [
          {
            question: "계정을 삭제하면 무엇이 함께 삭제되나요?",
            answer:
              "계정을 삭제하면 내 계정, 프로필, 개인 설정 및 로그인 정보가 삭제돼요. 자녀에게 연결된 다른 활성 보호자가 있으면 자녀 정보와 루틴·기록은 해당 보호자에게 승계되어 유지되고, 작성자 정보는 삭제된 계정과 연결되지 않도록 처리돼요. 승계할 보호자가 없으면 해당 자녀의 정보와 연결된 루틴·기록이 삭제되며 복구할 수 없어요.",
          },
          {
            question: "네트워크가 불안정하면 일부 기능이 늦게 반영될 수 있어요",
            answer:
              "로그인, 계정 연결, 초대코드 입력, 기록 저장 같은 기능은 네트워크 상태의 영향을 받아요. 인터넷 연결이 불안정하면 저장이나 반영이 늦어질 수 있으니 잠시 후 다시 시도해주세요.",
          },
        ],
      },
    ],
    stickyNote: "문제가 계속되면 21days앱 > 설정 > 문의하기로 알려주세요",
  },
  en: {
    title: "Frequently Asked Questions",
    backToHome: "Back to home",
    localeKoLabel: "한국어",
    localeEnLabel: "English",
    sections: [
      {
        title: "Family & co-guardians",
        items: [
          {
            question: "Is everything free to use?",
            answer:
              "Free includes up to 2 children, 2 guardians per child, and 3 routines per child. Pro includes up to 5 children, 6 guardians per child, and 20 routines per child, plus Family Board, board start reminders, and guardian not-started alerts. View monthly and annual pricing on the in-app store subscription screen.",
          },
          {
            question: "How do I invite a co-guardian?",
            answer:
              "In Family features, create an invite code and share it. The invited user can enter the code in the app to manage the same child’s data together.",
          },
          {
            question:
              "Sometimes an invite code doesn’t work. What should I do?",
            answer:
              "The code may have expired, reached its usage limit, or been revoked. If the code looks correct but still won’t connect, ask for a new invite code and try again.",
          },
        ],
      },
      {
        title: "Routines & timer",
        items: [
          {
            question: "Can I create unlimited routines?",
            answer:
              "You can register up to 3 routines per child with Free and up to 20 with Pro. Start small with routines that work for your child.",
          },
          {
            question: "What’s a good way to start when routines are hard?",
            answer:
              "Start small with 1–2 items per day. Choose “easy wins” first so your child can build confidence quickly.",
          },
          {
            question: "When is the focus timer useful?",
            answer:
              "It helps with short, clear agreements—like staying seated during meals or playing at the playground for the agreed time.",
          },
        ],
      },
      {
        title: "Account & sign-in",
        items: [
          {
            question:
              "Can I link an Apple/Google sign-in to my existing account?",
            answer:
              "Yes. After signing in with your existing account, you can link Apple/Google in Settings. Once linked, you can sign in to the same account using the linked social login.",
          },
          {
            question: "Can I merge two existing accounts?",
            answer:
              "No. Linking is supported, but merging two different accounts into one is not currently supported.",
          },
          {
            question:
              "What should I be careful about since merging isn’t supported?",
            answer:
              "If you already signed up with email and then sign in again via social login using the same email, a separate account can be created. To keep your existing data (children, routines, history, etc.), link social login to your existing account instead of creating a new one.",
          },
          {
            question:
              "After email sign-up, you must confirm the verification email.",
            answer:
              "If you sign up with email, registration completes after you tap the verification link sent to your inbox. If you don’t see it, check Spam/Promotions as well.",
          },
          {
            question:
              "Apple ‘Hide My Email’ can make it look like a different account.",
            answer:
              "If you use Apple’s Hide My Email, it may be recognized as a different address from a regular email login. In that case, it may not automatically link to your existing email account.",
          },
        ],
      },
      {
        title: "Data & deletion",
        items: [
          {
            question: "What gets deleted when I delete my account?",
            answer:
              "Deleting your account deletes your account, profile, personal settings, and sign-in information. If another active guardian is connected to a child, the child’s information and routines or records are transferred to that guardian and retained, while author information is processed so it is no longer linked to the deleted account. If there is no guardian to receive the data, the child’s information and associated routines or records are deleted and cannot be recovered.",
          },
          {
            question:
              "If the network is unstable, some changes may take time to show up.",
            answer:
              "Features like sign-in, account linking, entering invite codes, and saving records can be affected by network conditions. If your connection is unstable, saving or syncing may be delayed—please try again shortly.",
          },
        ],
      },
    ],
    stickyNote: "If the issue persists, go to Settings > Contact us.",
  },
};

function normalizeLocale(value: string): Locale {
  return value.toLowerCase().startsWith("en") ? "en" : "ko";
}

function toLocalePath(pathname: string, locale: Locale) {
  if (!pathname || pathname === "/") return `/${locale}`;

  if (/^\/(ko|en)(?=\/|$)/.test(pathname)) {
    return pathname.replace(/^\/(ko|en)(?=\/|$)/, `/${locale}`);
  }

  return `/${locale}${pathname.startsWith("/") ? "" : "/"}${pathname}`;
}

export default function FaqClient() {
  const rawLocale = useLocale();
  const locale = normalizeLocale(rawLocale);
  const t = useMemo(() => copy[locale], [locale]);
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const router = useRouter();
  const pathname = usePathname();
  const otherLocale: Locale = locale === "ko" ? "en" : "ko";

  return (
    <div className='min-h-screen bg-white'>
      <div className='max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-18 pb-24'>
        <header className='mb-10'>
          <div className='flex items-start justify-between gap-6 mb-6'>
            <a
              className='text-sm font-semibold text-gray-500 hover:text-gray-900 transition-colors'
              href={locale === "en" ? "/en" : "/ko"}
            >
              {t.backToHome}
            </a>
            <div
              className='inline-flex gap-2 p-1 border border-gray-200 rounded-full bg-white'
              aria-label='language switcher'
            >
              <button
                type='button'
                className={`px-3 py-1.5 rounded-full text-sm font-semibold transition-colors ${
                  locale === "ko"
                    ? "bg-gray-900 text-white"
                    : "text-gray-500 hover:text-gray-900"
                }`}
                onClick={() => {
                  try {
                    window.localStorage.setItem("21days_locale", "ko");
                  } catch {
                    // ignore
                  }
                  router.replace(toLocalePath(pathname, "ko"));
                }}
              >
                {t.localeKoLabel}
              </button>
              <button
                type='button'
                className={`px-3 py-1.5 rounded-full text-sm font-semibold transition-colors ${
                  locale === "en"
                    ? "bg-gray-900 text-white"
                    : "text-gray-500 hover:text-gray-900"
                }`}
                onClick={() => {
                  try {
                    window.localStorage.setItem("21days_locale", "en");
                  } catch {
                    // ignore
                  }
                  router.replace(toLocalePath(pathname, "en"));
                }}
              >
                {t.localeEnLabel}
              </button>
            </div>
          </div>

          <h1 className='text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900'>
            {t.title}
          </h1>
        </header>

        <div className='space-y-10'>
          {t.sections.map((section, sectionIndex) => {
            const baseIndex = t.sections
              .slice(0, sectionIndex)
              .reduce((sum, s) => sum + s.items.length, 0);

            return (
              <section key={section.title}>
                <h2 className='text-lg sm:text-xl font-extrabold text-gray-900 mb-4'>
                  {section.title}
                </h2>
                <div className='space-y-3'>
                  {section.items.map((item, itemIndex) => {
                    const index = baseIndex + itemIndex;
                    const isOpen = openIndex === index;
                    const buttonId = `faq-button-${index}`;
                    const panelId = `faq-panel-${index}`;

                    return (
                      <div
                        key={item.question}
                        className='rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden'
                      >
                        <button
                          id={buttonId}
                          aria-controls={panelId}
                          aria-expanded={isOpen}
                          className='w-full flex items-center justify-between gap-4 px-5 sm:px-6 py-5 text-left'
                          type='button'
                          onClick={() =>
                            setOpenIndex((current) =>
                              current === index ? null : index,
                            )
                          }
                        >
                          <span className='text-base sm:text-lg font-bold text-gray-900'>
                            {item.question}
                          </span>
                          <span
                            className={`shrink-0 text-gray-500 transition-transform ${
                              isOpen ? "rotate-180" : "rotate-0"
                            }`}
                            aria-hidden='true'
                          >
                            <ChevronDown className='w-5 h-5' />
                          </span>
                        </button>

                        <div
                          id={panelId}
                          role='region'
                          aria-labelledby={buttonId}
                          className={isOpen ? "px-5 sm:px-6 pb-5" : "hidden"}
                        >
                          <p className='text-gray-600 leading-relaxed whitespace-pre-line'>
                            {item.answer}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </section>
            );
          })}
        </div>
      </div>

      <div className='fixed bottom-0 inset-x-0 border-t border-gray-200 bg-white/90 backdrop-blur'>
        <div className='max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-4'>
          <p className='text-sm sm:text-base text-gray-700 font-bold'>
            {t.stickyNote}
          </p>
        </div>
      </div>
    </div>
  );
}
