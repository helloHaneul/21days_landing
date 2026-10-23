import type { Metadata } from "next";
import Link from "next/link";

const supportEmail = "parentingnow.support@gmail.com";
const emailSubject = "[21days 계정 삭제 요청]";
const mailtoHref = `mailto:${supportEmail}?subject=${encodeURIComponent(emailSubject)}`;

export const metadata: Metadata = {
  title: "21days 계정 및 데이터 삭제 요청",
  description:
    "앱을 사용하지 않고도 21days 계정 및 관련 데이터의 삭제를 요청하는 방법을 안내합니다.",
};

type Props = {
  searchParams?: Promise<{ lang?: string }>;
};

const copy = {
  ko: {
    languageLabel: "English",
    backHome: "21days 홈으로 돌아가기",
    eyebrow: "Account & Data Deletion",
    title: "21days 계정 및 데이터 삭제 요청",
    intro:
      "앱을 더 이상 사용하지 않거나 앱에 접근할 수 없는 경우에도 아래 이메일로 계정 및 데이터 삭제를 요청할 수 있습니다.",
    requestButton: "이메일로 계정 삭제 요청하기",
    emailNotice:
      "앱을 설치하거나 로그인하지 않아도 삭제 요청을 접수할 수 있습니다.",
    requestTitle: "삭제 요청 방법",
    requestBody:
      "아래 버튼을 눌러 이메일을 보내주세요. 본인 확인과 정확한 삭제를 위해 가입 이메일과 로그인 방식을 함께 적어주세요.",
    requestItems: [
      "21days 가입 이메일 주소",
      "로그인 방식: 이메일, Google 또는 Apple",
      "메일 본문에 ‘계정 및 데이터 삭제를 요청합니다’라는 문구",
    ],
    warning: "비밀번호와 자녀의 민감한 개인정보는 이메일로 보내지 마세요.",
    subscriptionTitle: "스토어 구독 별도 취소 안내",
    subscriptionBody:
      "계정 삭제만으로 App Store 또는 Google Play 구독이 취소되지는 않습니다. 구독을 중단하려면 해당 스토어에서 별도로 취소해야 합니다. 계정 삭제 후에는 계정을 복구할 수 없습니다.",
    deletedTitle: "삭제되는 데이터와 가족 데이터 처리",
    deletedBody:
      "계정 삭제 시 내 계정 데이터와 가족 데이터는 아래 기준에 따라 처리됩니다.",
    deletedItems: [
      "내 계정, 프로필, 개인 설정 및 로그인 정보는 삭제됩니다.",
      "자녀에게 연결된 다른 활성 보호자가 있으면 해당 보호자에게 가족 데이터의 소유권이 승계됩니다.",
      "승계된 자녀의 정보와 루틴·기록은 유지되며, 기록의 작성자 정보는 삭제된 계정과 연결되지 않도록 처리됩니다.",
      "승계할 보호자가 없는 자녀의 정보와 연결된 루틴·기록은 삭제됩니다.",
      "삭제 대상 가족 데이터에 연결된 사진 파일은 별도의 정리 작업으로 삭제되며, 즉시 완료되지 않을 수 있습니다.",
      "다른 보호자에게 승계된 가족 데이터의 사진 파일은 유지됩니다.",
    ],
    retainedTitle: "계정 삭제 후 유지되는 데이터",
    retainedBody:
      "계정 삭제 후 별도로 유지되는 데이터는 다른 활성 보호자에게 승계된 가족 데이터뿐입니다. 승계된 자녀의 정보, 루틴, 기록 및 연결된 사진은 남은 보호자가 계속 서비스를 이용할 수 있도록 유지됩니다. 보관 기간은 승계받은 보호자가 해당 가족 데이터를 이용하는 동안이며, 해당 데이터가 삭제될 때까지입니다. 이 데이터는 삭제된 계정의 데이터로 보관되는 것이 아니라, 승계받은 보호자와 연결된 가족 데이터로 처리됩니다. 승계할 보호자가 없는 삭제 대상 가족 데이터는 계정 삭제와 함께 정리되며, 이 외에 계정 삭제 후 보관되는 데이터는 없습니다.",
    timingTitle: "처리 안내",
    timingBody:
      "요청 접수 후 본인 확인을 거쳐 영업일 기준 3일 이내에 처리하며, 삭제 완료 결과를 요청 이메일로 안내합니다.",
    privacyLink: "개인정보처리방침 보기",
  },
  en: {
    languageLabel: "한국어",
    backHome: "Back to 21days",
    eyebrow: "Account & Data Deletion",
    title: "Request 21days Account and Data Deletion",
    intro:
      "If you no longer use the app or cannot access it, you can still request deletion of your 21days account and related data by email below.",
    requestButton: "Request deletion by email",
    emailNotice:
      "You do not need to install or sign in to the app to submit a deletion request.",
    requestTitle: "How to request deletion",
    requestBody:
      "Use the button below to send an email. Include your sign-up email and sign-in method so we can verify and process the request accurately.",
    requestItems: [
      "Your 21days sign-up email address",
      "Your sign-in method: email, Google, or Apple",
      "The phrase ‘I request deletion of my account and data’ in the email body",
    ],
    warning:
      "Do not send your password or sensitive information about your child.",
    subscriptionTitle: "Cancel store subscriptions separately",
    subscriptionBody:
      "Deleting your account does not cancel an App Store or Google Play subscription. To stop a subscription, you must cancel it separately through the relevant store. Your account cannot be restored after deletion.",
    deletedTitle: "Data deletion and family data handling",
    deletedBody:
      "When you delete your account, your account data and family data are handled as follows:",
    deletedItems: [
      "Your account, profile, personal settings, and sign-in information are deleted.",
      "If another active guardian is connected to a child, ownership of that family data is transferred to that guardian.",
      "The transferred child’s information, routines, and records are retained, and author information is processed so it is no longer linked to the deleted account.",
      "If a child has no guardian to receive the data, that child’s information and associated routines and records are deleted.",
      "Photo files linked to family data that is being deleted are removed through a separate cleanup process, which may not be completed immediately.",
      "Photos linked to family data transferred to another guardian are retained.",
    ],
    retainedTitle: "Data retained after account deletion",
    retainedBody:
      "The only data retained after account deletion is family data transferred to another active guardian. The child’s information, routines, records, and linked photos are kept so the remaining guardian can continue using the service. The retention period is while the receiving guardian uses that family data, until the data is deleted. This is not retained as data belonging to the deleted account; it is processed as family data linked to the guardian who received it. Family data with no guardian to receive it, including linked photos, may remain temporarily until the separate cleanup process is complete; that cleanup may not be completed immediately. No other data is retained after account deletion.",
    timingTitle: "Processing information",
    timingBody:
      "After receiving your request, we verify it and process it within 3 business days. We will notify you by email when deletion is complete.",
    privacyLink: "View Privacy Policy",
  },
} as const;

export default async function AccountDeletionPage({ searchParams }: Props) {
  const params = await searchParams;
  const locale = params?.lang === "en" ? "en" : "ko";
  const t = copy[locale];

  return (
    <main className='min-h-screen bg-stone-50 text-stone-900'>
      <section className='mx-auto max-w-3xl px-6 py-10 sm:px-8 lg:py-16'>
        <div className='mb-8 flex items-center justify-between gap-4 border-b border-stone-200 pb-6'>
          <a
            href={
              locale === "ko"
                ? "/account-deletion/?lang=en"
                : "/account-deletion/"
            }
            className='rounded-full border border-stone-300 px-4 py-2 text-sm font-semibold text-stone-700 transition-colors hover:border-stone-900 hover:text-stone-900'
          >
            {t.languageLabel}
          </a>
          <Link
            href='/'
            className='text-sm font-medium text-stone-500 transition-colors hover:text-stone-900'
          >
            {t.backHome}
          </Link>
        </div>

        <article className='rounded-[32px] bg-white p-7 shadow-[0_20px_60px_rgba(28,25,23,0.08)] ring-1 ring-stone-200/70 sm:p-10'>
          <p className='text-sm font-semibold uppercase tracking-[0.22em] text-orange-500'>
            {t.eyebrow}
          </p>
          <h1 className='mt-3 max-w-2xl text-4xl font-black tracking-tight text-stone-950 sm:text-5xl'>
            {t.title}
          </h1>
          <p className='mt-5 text-lg leading-8 text-stone-600'>{t.intro}</p>

          <section className='mt-8 rounded-[28px] bg-orange-50 p-6 ring-1 ring-orange-200/70 sm:p-8'>
            <h2 className='text-2xl font-bold text-stone-950'>
              {t.requestTitle}
            </h2>
            <p className='mt-3 leading-7 text-stone-700'>{t.requestBody}</p>
            <ul className='mt-5 space-y-3 text-sm leading-7 text-stone-700'>
              {t.requestItems.map((item) => (
                <li key={item} className='flex gap-3'>
                  <span className='mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-orange-500' />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <a
              href={
                locale === "ko"
                  ? mailtoHref
                  : `mailto:${supportEmail}?subject=${encodeURIComponent("[21days Account Deletion Request]")}`
              }
              className='mt-7 inline-flex min-h-14 w-full items-center justify-center rounded-full bg-orange-500 px-6 py-4 text-center font-bold text-white transition-transform hover:-translate-y-0.5 hover:bg-orange-600 sm:w-auto'
            >
              {t.requestButton}
            </a>
            <p className='mt-4 text-sm font-semibold leading-6 text-orange-900'>
              {t.emailNotice}
            </p>
            <p className='mt-2 break-all text-sm text-stone-600'>
              {supportEmail}
            </p>
            <p className='mt-4 text-sm leading-6 text-stone-600'>{t.warning}</p>
          </section>

          <section className='mt-8 rounded-[24px] bg-amber-50 p-6 ring-1 ring-amber-200'>
            <h2 className='text-xl font-bold text-stone-950'>
              {t.subscriptionTitle}
            </h2>
            <p className='mt-3 leading-7 text-stone-700'>
              {t.subscriptionBody}
            </p>
          </section>

          <section className='mt-10'>
            <h2 className='text-2xl font-bold text-stone-950'>
              {t.deletedTitle}
            </h2>
            <p className='mt-3 leading-7 text-stone-700'>{t.deletedBody}</p>
            <ul className='mt-4 list-disc space-y-2 pl-6 leading-7 text-stone-700'>
              {t.deletedItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section className='mt-10 border-t border-stone-200 pt-8'>
            <h2 className='text-2xl font-bold text-stone-950'>
              {t.retainedTitle}
            </h2>
            <p className='mt-3 leading-7 text-stone-700'>{t.retainedBody}</p>
          </section>

          <section className='mt-10 rounded-[24px] bg-stone-100 p-6'>
            <h2 className='text-xl font-bold text-stone-950'>
              {t.timingTitle}
            </h2>
            <p className='mt-3 leading-7 text-stone-700'>{t.timingBody}</p>
          </section>

          <div className='mt-8 flex flex-wrap gap-4 text-sm font-semibold'>
            <a
              href='/privacy/'
              className='text-orange-600 underline underline-offset-4'
            >
              {t.privacyLink}
            </a>
            <Link
              href={`/${locale}/support`}
              className='text-stone-600 underline underline-offset-4'
            >
              {locale === "ko" ? "고객지원" : "Support"}
            </Link>
          </div>
        </article>
      </section>
    </main>
  );
}
