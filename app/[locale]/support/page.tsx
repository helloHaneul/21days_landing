import type { Metadata } from "next";
import Link from "next/link";
import { getLocaleAlternates } from "@/lib/site";
import SupportForm from "./support-form";

type Locale = "ko" | "en";

type Props = {
  params: Promise<{ locale: Locale }>;
};

const supportEmail = "parentingnow.support@gmail.com";

const copy: Record<
  Locale,
  {
    title: string;
    description: string;
    contactTitle: string;
    contactBody: string;
    emailLabel: string;
    faqTitle: string;
    faqBody: string;
    faqCta: string;
    helpTitle: string;
    formTitle: string;
    formBody: string;
    formNameLabel: string;
    formNamePlaceholder: string;
    formReplyEmailLabel: string;
    formReplyEmailPlaceholder: string;
    formCategoryLabel: string;
    formCategoryPlaceholder: string;
    formDeviceLabel: string;
    formDevicePlaceholder: string;
    formMessageLabel: string;
    formMessagePlaceholder: string;
    formSubmitLabel: string;
    helpItems: string[];
    requestTitle: string;
    requestBody: string;
    requestItems: string[];
    responseTitle: string;
    responseBody: string;
    backHome: string;
    switchLabel: string;
  }
> = {
  ko: {
    title: "21days 고객지원",
    description:
      "21days 이용 중 문제가 있거나 도움이 필요하시면 이메일을 통해 문의하실 수 있습니다.",
    contactTitle: "문의 방법",
    contactBody:
      "앱 이용 중 궁금한 점, 계정 문제, 오류 제보, 제안 사항이 있으면 아래 이메일로 문의해 주세요.",
    emailLabel: "지원 이메일",
    faqTitle: "자주 묻는 질문",
    faqBody:
      "로그인, 알림, 가족 공유, 루틴/일정 사용법처럼 자주 묻는 항목은 FAQ에서 먼저 확인하실 수 있습니다.",
    faqCta: "FAQ 보기",
    helpTitle: "지원 가능한 내용",
    formTitle: "이메일 문의 작성",
    formBody:
      "아래 내용을 입력하면 메일 앱이 열리고, 입력한 내용이 지원 이메일 본문에 자동으로 채워집니다.",
    formNameLabel: "이름",
    formNamePlaceholder: "이름 또는 닉네임",
    formReplyEmailLabel: "답변받을 이메일",
    formReplyEmailPlaceholder: "example@email.com",
    formCategoryLabel: "문의 유형",
    formCategoryPlaceholder: "문의 유형을 선택해 주세요",
    formDeviceLabel: "기기 정보",
    formDevicePlaceholder: "예: iPhone 15 / iOS 18.5 / 앱 1.0.3",
    formMessageLabel: "문의 내용",
    formMessagePlaceholder:
      "문제가 발생한 상황, 확인하고 싶은 내용, 재현 방법 등을 자세히 적어주세요.",
    formSubmitLabel: "메일 앱에서 문의 작성하기",
    helpItems: [
      "회원가입 및 Google/Apple 로그인 관련 문의",
      "알림, 일정, 루틴, 포커스 타이머 사용 중 발생한 문제",
      "가족 공유, 초대 코드, 데이터 삭제 및 계정 관련 문의",
      "앱 오류 제보 및 기능 개선 제안",
      "기타",
    ],
    requestTitle: "빠른 확인을 위한 안내",
    requestBody: "문의 시 아래 정보를 함께 보내주시면 확인이 더 빨라집니다.",
    requestItems: [
      "사용 중인 기기 모델과 OS 버전",
      "앱 버전",
      "문제가 발생한 화면 또는 기능",
      "가능하다면 스크린샷과 재현 방법",
    ],
    responseTitle: "응답 안내",
    responseBody:
      "보내주신 문의는 영업일 기준 최대 3일 이내 순차적으로 확인해 답변드립니다.",
    backHome: "21days 홈으로 돌아가기",
    switchLabel: "English",
  },
  en: {
    title: "21days Support",
    description: "If you need help using 21days, you can contact us by email.",
    contactTitle: "How to contact support",
    contactBody:
      "If you have questions about the app, account issues, bug reports, or suggestions, please contact us at the email below.",
    emailLabel: "Support email",
    faqTitle: "Frequently asked questions",
    faqBody:
      "For common topics such as sign-in, reminders, family sharing, and routines or schedules, please check the FAQ first.",
    faqCta: "Open FAQ",
    helpTitle: "What we can help with",
    formTitle: "Compose a support email",
    formBody:
      "Fill out the fields below and your mail app will open with the support email body pre-filled.",
    formNameLabel: "Name",
    formNamePlaceholder: "Your name or nickname",
    formReplyEmailLabel: "Reply email",
    formReplyEmailPlaceholder: "example@email.com",
    formCategoryLabel: "Support category",
    formCategoryPlaceholder: "Select a category",
    formDeviceLabel: "Device info",
    formDevicePlaceholder: "e.g. iPhone 15 / iOS 18.5 / App 1.0.3",
    formMessageLabel: "Message",
    formMessagePlaceholder:
      "Describe what happened, what you need help with, and how to reproduce the issue if possible.",
    formSubmitLabel: "Compose in mail app",
    helpItems: [
      "Questions about sign-up and Google or Apple sign-in",
      "Issues with reminders, schedules, routines, or the focus timer",
      "Questions about family sharing, invite codes, account access, or data deletion",
      "Bug reports and feature suggestions",
      "Other",
    ],
    requestTitle: "What to include in your request",
    requestBody:
      "Including the details below helps us review your issue faster.",
    requestItems: [
      "Your device model and OS version",
      "Your app version",
      "The screen or feature where the issue occurred",
      "A screenshot and reproduction steps, if available",
    ],
    responseTitle: "Response time",
    responseBody:
      "We review support requests in the order received and usually reply within 3 business days.",
    backHome: "Back to 21days home",
    switchLabel: "한국어",
  },
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = copy[locale];

  return {
    title: t.title,
    description: t.description,
    alternates: getLocaleAlternates(`/${locale}/support`),
  };
}

export default async function SupportPage({ params }: Props) {
  const { locale } = await params;
  const t = copy[locale];
  const otherLocale = locale === "ko" ? "en" : "ko";

  return (
    <main className='min-h-screen bg-stone-50 text-stone-900'>
      <section className='mx-auto max-w-5xl px-6 py-10 sm:px-8 lg:px-10'>
        <div className='mb-10 flex items-center justify-between gap-4 border-b border-stone-200 pb-6'>
          <Link
            href={`/${otherLocale}/support`}
            className='rounded-full border border-stone-300 px-4 py-2 text-sm font-semibold text-stone-700 transition-colors hover:border-stone-900 hover:text-stone-900'
          >
            {t.switchLabel}
          </Link>
          <Link
            href={`/${locale}`}
            className='text-sm font-medium text-stone-500 transition-colors hover:text-stone-900'
          >
            {t.backHome}
          </Link>
        </div>

        <div className='rounded-[32px] bg-white p-8 shadow-[0_20px_60px_rgba(28,25,23,0.08)] ring-1 ring-stone-200/70 sm:p-10'>
          <section>
            <p className='mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-orange-500'>
              Support
            </p>
            <h1 className='max-w-2xl text-4xl font-black tracking-tight text-stone-950 sm:text-5xl'>
              {t.title}
            </h1>
            <p className='mt-5 max-w-2xl text-lg leading-8 text-stone-600'>
              {t.description}
            </p>

            <div className='mt-10 rounded-[28px] bg-orange-50 p-6 ring-1 ring-orange-200/70'>
              <h2 className='text-xl font-bold text-stone-950'>
                {t.contactTitle}
              </h2>
              <p className='mt-3 text-base leading-7 text-stone-700'>
                {t.contactBody}
              </p>
              <div className='mt-5'>
                <p className='text-sm font-semibold text-stone-500'>
                  {t.emailLabel}
                </p>
                <a
                  href={`mailto:${supportEmail}`}
                  className='mt-2 inline-block text-lg font-bold text-orange-600 underline decoration-orange-300 underline-offset-4'
                >
                  {supportEmail}
                </a>
              </div>
            </div>

            <div className='mt-8'>
              <SupportForm
                locale={locale}
                supportEmail={supportEmail}
                options={t.helpItems}
                labels={{
                  formTitle: t.formTitle,
                  formBody: t.formBody,
                  nameLabel: t.formNameLabel,
                  namePlaceholder: t.formNamePlaceholder,
                  replyEmailLabel: t.formReplyEmailLabel,
                  replyEmailPlaceholder: t.formReplyEmailPlaceholder,
                  categoryLabel: t.formCategoryLabel,
                  categoryPlaceholder: t.formCategoryPlaceholder,
                  deviceLabel: t.formDeviceLabel,
                  devicePlaceholder: t.formDevicePlaceholder,
                  messageLabel: t.formMessageLabel,
                  messagePlaceholder: t.formMessagePlaceholder,
                  submitLabel: t.formSubmitLabel,
                }}
              />
            </div>

            <div className='mt-8 grid gap-6 lg:grid-cols-3'>
              <div className='rounded-[28px] bg-white p-6 ring-1 ring-stone-200'>
                <h2 className='text-xl font-bold text-stone-950'>
                  {t.helpTitle}
                </h2>
                <ul className='mt-4 space-y-3 text-sm leading-7 text-stone-700'>
                  {t.helpItems.map((item) => (
                    <li key={item} className='flex gap-3'>
                      <span className='mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-orange-500' />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className='rounded-[28px] bg-stone-900 p-6 text-stone-50'>
                <h2 className='text-xl font-bold'>{t.faqTitle}</h2>
                <p className='mt-3 text-sm leading-7 text-stone-300'>
                  {t.faqBody}
                </p>
                <Link
                  href={`/${locale}/faq`}
                  className='mt-5 inline-flex rounded-full bg-white px-4 py-2 text-sm font-bold text-stone-900 transition-transform hover:-translate-y-0.5'
                >
                  {t.faqCta}
                </Link>
              </div>

              <div className='rounded-[28px] bg-stone-100 p-6 ring-1 ring-stone-200'>
                <h2 className='text-xl font-bold text-stone-950'>
                  {t.requestTitle}
                </h2>
                <p className='mt-3 text-sm leading-7 text-stone-700'>
                  {t.requestBody}
                </p>
                <ul className='mt-4 space-y-3 text-sm leading-7 text-stone-700'>
                  {t.requestItems.map((item) => (
                    <li key={item} className='flex gap-3'>
                      <span className='mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-stone-900' />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className='mt-6 border-t border-stone-300 pt-5'>
                  <h3 className='text-base font-bold text-stone-950'>
                    {t.responseTitle}
                  </h3>
                  <p className='mt-2 text-sm leading-7 text-stone-700'>
                    {t.responseBody}
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
