import type { Metadata } from "next";
import Link from "next/link";

const supportEmail = "parentingnow.support@gmail.com";

function getMailtoHref(subject: string, body: string) {
  return `mailto:${supportEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

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
      "앱에서 계정을 삭제하거나, 앱 설치·로그인 없이 이메일로 계정 삭제 또는 자녀 데이터만 삭제를 요청할 수 있습니다.",
    appTitle: "앱에서 계정 삭제",
    appBody: "앱 > 설정 > 계정 > 계정 삭제에서 진행할 수 있습니다. 계정 삭제 후에도 자녀에게 연결된 다른 활성 보호자가 있으면 해당 보호자에게 가족 데이터의 소유권이 승계되어 자녀 정보와 루틴·기록 및 사진이 유지될 수 있습니다. 승계할 보호자가 없는 자녀의 정보와 연결된 루틴·기록은 삭제됩니다.",
    requestButton: "이메일로 계정 삭제 요청하기",
    childRequestButton: "이메일로 자녀 데이터만 삭제 요청하기",
    accountSubject: "[21days 계정 삭제 요청]",
    accountEmailBody: "계정 및 데이터 삭제를 요청합니다.\n\n가입 이메일: \n로그인 방식: \n",
    childSubject: "[21days 자녀 데이터 삭제 요청]",
    childEmailBody: "계정은 유지하고 자녀 데이터만 삭제를 요청합니다.\n\n가입 이메일: \n로그인 방식: \n삭제할 자녀를 구분할 수 있는 최소 정보(앱에 등록한 별명 등): \n삭제를 요청하는 데이터 범위: \n",
    childRequestBody: "계정을 유지하면서 자녀 데이터만 삭제해 달라고 요청할 수도 있습니다. 삭제할 자녀를 구분할 수 있는 최소 정보(앱에 등록한 별명 등)와 삭제를 요청하는 데이터 범위를 적어주세요. 본인 확인과 해당 자녀 데이터에 대한 삭제 권한을 확인한 뒤 처리합니다.",
    emailNotice:
      "앱을 설치하거나 로그인하지 않아도 삭제 요청을 접수할 수 있습니다.",
    requestTitle: "이메일로 삭제 요청",
    requestBody:
      "원하는 요청 유형의 버튼을 눌러 메일을 작성한 뒤 직접 전송해 주세요. 본인 확인과 정확한 처리를 위해 가입 이메일과 로그인 방식을 함께 적어주세요.",
    requestItems: [
      "21days 가입 이메일 주소",
      "로그인 방식: 이메일, Google, Apple 또는 카카오",
      "요청 유형: 계정 삭제 또는 계정을 유지한 채 자녀 데이터만 삭제",
    ],
    warning: "비밀번호와 자녀의 민감한 개인정보는 이메일로 보내지 마세요.",
    subscriptionTitle: "스토어 구독 별도 취소 안내",
    subscriptionBody:
      "계정 삭제만으로 App Store 또는 Google Play 구독이 취소되지는 않습니다. 구독을 중단하려면 해당 스토어에서 별도로 취소해야 합니다. 계정 삭제 후에는 계정을 복구할 수 없습니다.",
    deletedTitle: "삭제되는 데이터와 가족 데이터 처리",
    deletedBody:
      "아래 기준은 계정 삭제 시 적용됩니다. 자녀 데이터만 삭제하는 이메일 요청은 본인과 삭제 권한 확인 후 요청한 범위에 따라 처리합니다.",
    dataGroups: [
      {title: "삭제되는 개인 계정 데이터", body: "내 계정, 프로필, 개인 설정 및 로그인 정보는 삭제됩니다."},
      {title: "다른 활성 보호자가 있는 자녀", body: "해당 보호자에게 소유권을 승계하고 자녀 정보, 루틴·기록 및 연결된 사진을 유지합니다. 남은 보호자의 서비스 이용을 위해 해당 가족 데이터가 삭제될 때까지 보관하며, 유지되는 기록의 작성자 정보는 삭제된 계정과 연결되지 않도록 처리합니다."},
      {title: "승계할 보호자가 없는 자녀", body: "자녀 정보와 연결된 루틴·기록은 삭제됩니다. 연결된 사진 파일은 별도의 정리 작업으로 삭제되므로 계정 삭제와 동시에 완료되지 않을 수 있습니다."},
    ],
    retentionNote: "다른 보호자에게 승계된 가족 데이터와 삭제를 위한 사진 정리 과정을 제외하고, 계정 삭제 후 별도로 보관하는 데이터는 없습니다.",
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
      "Delete your account in the app, or request account deletion or deletion of child data only by email without installing or signing in to the app.",
    appTitle: "Delete your account in the app",
    appBody: "Go to App > Settings > Account > Delete Account. After account deletion, if another active guardian is connected to a child, ownership of family data may be transferred to that guardian and the child’s information, routines, records, and photos may remain. If no guardian can receive the data, the child’s information and associated routines and records are deleted.",
    requestButton: "Request account deletion by email",
    childRequestButton: "Request child data deletion only by email",
    accountSubject: "[21days Account Deletion Request]",
    accountEmailBody: "I request deletion of my account and data.\n\nSign-up email: \nSign-in method: \n",
    childSubject: "[21days Child Data Deletion Request]",
    childEmailBody: "I request deletion of child data only, keeping my account.\n\nSign-up email: \nSign-in method: \nMinimum information to identify the child (such as their in-app nickname): \nScope of data to delete: \n",
    childRequestBody: "You may also request deletion of child data only while keeping your account. Include the minimum information needed to identify the child, such as their in-app nickname, and the scope of data you want deleted. We verify your identity and authority to delete that child’s data before processing the request.",
    emailNotice:
      "You do not need to install or sign in to the app to submit a deletion request.",
    requestTitle: "Request deletion by email",
    requestBody:
      "Choose the button for your request, compose the email, and send it yourself. Include your sign-up email and sign-in method so we can verify and process the request accurately.",
    requestItems: [
      "Your 21days sign-up email address",
      "Your sign-in method: email, Google, Apple, or Kakao",
      "Request type: delete your account, or delete child data only while keeping your account",
    ],
    warning:
      "Do not send your password or sensitive information about your child.",
    subscriptionTitle: "Cancel store subscriptions separately",
    subscriptionBody:
      "Deleting your account does not cancel an App Store or Google Play subscription. To stop a subscription, you must cancel it separately through the relevant store. Your account cannot be restored after deletion.",
    deletedTitle: "Data deletion and family data handling",
    deletedBody:
      "The following applies to account deletion. Email requests to delete child data only are handled within the requested scope after verifying your identity and deletion authority.",
    dataGroups: [
      {title: "Personal account data", body: "Your account, profile, personal settings, and sign-in information are deleted."},
      {title: "Children with another active guardian", body: "Ownership is transferred to that guardian. The child’s information, routines, records, and linked photos are retained for the remaining guardian’s service use until that family data is deleted. Author information in retained records is processed so it is no longer linked to the deleted account."},
      {title: "Children with no guardian to receive the data", body: "The child’s information and associated routines and records are deleted. Linked photo files are deleted through a separate cleanup process, which may not finish at the same time as account deletion."},
    ],
    retentionNote: "Apart from family data transferred to another guardian and photos awaiting deletion, no data is separately retained after account deletion.",
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
      <section className='mx-auto max-w-5xl px-6 py-10 sm:px-8 lg:py-16'>
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

          <section className='mt-8 rounded-[24px] bg-stone-100 p-6'>
            <h2 className='text-2xl font-bold text-stone-950'>{t.appTitle}</h2>
            <p className='mt-3 leading-7 text-stone-700'>{t.appBody}</p>
          </section>

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
              href={getMailtoHref(t.accountSubject, t.accountEmailBody)}
              className='mt-7 inline-flex min-h-14 w-full items-center justify-center rounded-full bg-orange-500 px-6 py-4 text-center font-bold text-white transition-transform hover:-translate-y-0.5 hover:bg-orange-600 sm:w-auto'
            >
              {t.requestButton}
            </a>
            <div className='mt-6 border-t border-orange-200 pt-6'>
              <p className='leading-7 text-stone-700'>{t.childRequestBody}</p>
              <a
                href={getMailtoHref(t.childSubject, t.childEmailBody)}
                className='mt-4 inline-flex min-h-14 w-full items-center justify-center rounded-full border border-orange-500 bg-white px-6 py-4 text-center font-bold text-orange-700 hover:bg-orange-100 sm:w-auto'
              >
                {t.childRequestButton}
              </a>
            </div>
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
            <ul className='mt-5 space-y-5'>
              {t.dataGroups.map((item) => (
                <li key={item.title}>
                  <h3 className='text-lg font-bold text-stone-950'>{item.title}</h3>
                  <p className='mt-2 leading-7 text-stone-700'>{item.body}</p>
                </li>
              ))}
            </ul>
            <p className='mt-6 border-t border-stone-200 pt-5 text-sm leading-7 text-stone-600'>{t.retentionNote}</p>
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
