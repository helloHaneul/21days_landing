"use client";

import { useMemo, useState, type ReactNode } from "react";
import { ChevronDown } from "lucide-react";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";

type Locale = "ko" | "en";

type FaqItem = {
  question: string;
  answer: ReactNode;
  link?: { href: string; label: string };
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
        title: "Pro·구독",
        items: [
          {
            question: "Free와 Pro는 무엇이 다른가요?",
            answer:
              "Free는 자녀 최대 2명, 자녀당 보호자 최대 2명, 자녀당 루틴 최대 3개를 제공합니다. Pro는 자녀 최대 5명, 자녀당 보호자 최대 6명, 자녀당 루틴 최대 20개와 Family Board, 보드 시작 알림·보호자 미시작 알림을 제공합니다.",
            link: {
              href: "/ko#pricing",
              label: "Free·Pro 비교 보기",
            },
          },
          {
            question: "보호자마다 Pro를 따로 구독해야 하나요?",
            answer:
              "한 보호자가 Pro를 구독하면 연결된 다른 보호자도 Pro 혜택을 받을 수 있습니다.",
          },
          {
            question: "월간과 연간 구독은 기능이 다른가요?",
            answer:
              "두 구독은 동일한 Pro 기능을 제공하며 결제 주기만 다릅니다. 미국 스토어 기준 월간 US$1.99, 연간 US$19.99이며 자동 갱신됩니다. 국가·지역·스토어에 따라 가격과 통화가 다를 수 있으니 실제 금액과 결제 조건은 앱 내 구독 화면에서 확인해 주세요.",
          },
          {
            question: "기기 변경·재설치 시 구매 복원 경로는 무엇인가요?",
            answer:
              "기기를 변경하거나 앱을 재설치한 경우, 기존에 구독하던 21days 계정으로 로그인해 주세요. Pro가 표시되지 않으면 설정 → 요금제 보기 → 구매 복원을 이용해 주세요. 구매 복원 시에는 결제에 사용한 동일한 Apple 계정 또는 Google 계정이 필요합니다.",
          },
          {
            question:
              "iOS(부모폰) ↔ Android(패밀리보드 태블릿)에서도 이용 가능한가요?",
            answer:
              "iOS와 Android 간에도 동일한 21days 계정으로 로그인하면 유효한 Pro 구독을 이용할 수 있습니다. 별도로 다시 구매할 필요는 없으며, 구독 결제·갱신·해지는 처음 구매한 스토어에서 관리합니다.",
          },
          {
            question: "Pro 구독은 어떻게 취소하나요?",
            answer:
              "구독을 구매한 App Store 또는 Google Play에서 취소할 수 있습니다. 계정을 삭제하거나 앱을 지워도 구독은 자동으로 취소되지 않으므로 스토어에서 별도로 진행해 주세요. 구독 취소와 환불 요청은 다른 절차이며, 자세한 내용은 구독 안내를 확인해 주세요.",
            link: {
              href: "/terms/",
              label: "구독·취소 안내 보기",
            },
          },
          {
            question:
              "구독 만료 이후에는 Free 한도를 초과한 자녀·루틴은 어떻게 처리되나요?",
            answer:
              "구독이 만료되어도 등록한 자녀·루틴과 기존 기록은 삭제되지 않습니다. 다만 계속 사용할 수 있는 범위는 Free 한도인 자녀 최대 2명, 자녀별 활성 루틴 최대 3개로 제한됩니다.",
          },
        ],
      },
      {
        title: "Family Board·알림",
        items: [
          {
            question: "Family Board는 어떻게 시작하나요?",
            answer:
              "보호자 계정에서 Pro를 구독한 뒤, 별도 공용 태블릿에서 해당 계정으로 로그인하고 Family Board 기기로 등록해 주세요. 아이가 오늘의 루틴을 확인하고 직접 시작·완료 버튼을 누를 수 있습니다. 태블릿 사용을 권장합니다.",
          },
          {
            question: "Family Board를 쓰려면 아이도 계정을 만들어야 하나요?",
            answer:
              "아이의 별도 계정을 만들 필요는 없습니다. 보호자 계정으로 등록한 Family Board를 보호자의 관리 아래 이용하는 방식입니다. 공용 기기 화면에 자녀 정보와 루틴이 보일 수 있으니 기기 접근과 화면 노출을 관리해 주세요.",
          },
          {
            question: "시작 알림과 미시작 알림은 어디로 오나요?",
            answer:
              "Pro의 루틴 시작 알림은 등록한 Family Board 기기로 전달됩니다. 시작 시간으로부터 10분이 지나도록 루틴을 시작하지 않으면 보호자 기기로 미시작 알림을 보내요. Free의 루틴 알림은 대표 양육자 기기의 로컬 알림으로 제공됩니다.",
          },
          {
            question: "Family Board나 보호자 기기에 알림이 오지 않아요.",
            answer:
              "인터넷 연결과 알림 권한을 확인하고, 태블릿이 Family Board 기기로 등록되어 있는지 확인해 주세요. 기기의 절전·방해금지 설정이나 운영체제 상태에 따라 알림이 지연되거나 표시되지 않을 수 있습니다. 문제가 계속되면 사용 기기와 발생 상황을 고객지원으로 알려주세요.",
            link: {
              href: "/ko/support",
              label: "고객지원",
            },
          },
          {
            question: "Family Board는 등록 가능한 기기 수 제한이 있나요?",
            answer:
              "계정당 Family Board의 루틴 시작 푸시 알림을 받을 기기는 1대만 지정할 수 있습니다. 새 기기를 Family Board로 등록하면 기존 기기 대신 새 기기에서 알림을 받게 됩니다.",
          },
          {
            question: "부모폰에서 Family Board 기기의 등록을 해제할 수 있나요?",
            answer: (
              <div className='space-y-4'>
                <p>
                  네. <strong>owner 계정의 미시작 경고 수신 기기로 등록된 부모폰</strong>에서{" "}
                  <strong>설정 → Family Board → 보드 기기 설정 보기 → 등록된 보드 원격 해제</strong>를 이용해 주세요.
                </p>
                <p>
                  해제하면 해당 보드의 루틴 시작 푸시 알림이 중단됩니다. 부모폰의 미시작 경고 설정은 유지되며, 기존 기기에서 Family Board 화면을 계속 사용하는 것도 가능합니다.
                </p>
                <p>
                  원격 해제 버튼이 보이지 않으면 현재 기기가 부모 미시작 경고 기기로 등록되어 있는지 확인해 주세요.
                </p>
              </div>
            ),
          },
          {
            question: "부모 미시작 경고를 받는 기기를 변경하거나 해제하려면 어떻게 하나요?",
            answer: (
              <div className='space-y-4'>
                <p>
                  Pro를 이용하는 owner 계정으로 로그인한 뒤,{" "}
                  <strong>설정 → 알림 및 권한 설정 → 부모 폰 미시작 경고 기기</strong>에서 관리할 수 있습니다.
                </p>
                <ul className='list-disc space-y-2 pl-5'>
                  <li>
                    <strong>기기 변경:</strong> 새 부모폰에서 ‘이 기기를 부모 폰으로 등록’을 누르면 기존 기기 대신 새 기기로 알림이 연결됩니다. 기존 기기를 사용할 수 없어도 변경할 수 있습니다.
                  </li>
                  <li>
                    <strong>등록 해제:</strong> 현재 등록된 부모폰에서 ‘부모 폰 등록 해제’를 누르세요.
                  </li>
                </ul>
                <p>
                  부모 미시작 경고는 계정당 1대에서만 받을 수 있으며, 기기 등록에는 알림 권한이 필요합니다. 등록·변경 직후에는 최대 5분 동안 다른 기기로 변경이 제한될 수 있습니다.
                </p>
              </div>
            ),
          },
        ],
      },
      {
        title: "가족/공동 보호자",
        items: [
          {
            question: "우리 아이 정보가 다른 사람에게 공개되나요?",
            answer:
              "자녀 정보는 공개 검색·열람되지 않습니다. 자녀를 등록·관리하는 보호자와 초대를 수락해 연결된 보호자가 권한 범위 안에서 이용합니다. 다만 Family Board 공용 화면은 함께 사용하는 가족 구성원에게 보일 수 있어요.",
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
            question: "어떤 방식으로 로그인할 수 있나요?",
            answer:
              "이메일 또는 Google·Apple·카카오 소셜로그인을 이용할 수 있습니다. 기존 계정의 데이터를 계속 이용하려면 사용하던 로그인 방식을 확인해 주세요.",
          },
          {
            question:
              "소셜 로그인(Google·Apple·카카오)을 기존 계정에 연결할 수 있나요?",
            answer:
              "네. 기존 계정으로 로그인한 뒤, 설정 화면에서 Google·Apple·카카오 로그인을 기존 계정에 연결할 수 있어요. 연결해두면 다음부터는 연결된 소셜 계정으로도 같은 계정에 로그인할 수 있습니다.",
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
        title: "자녀 등록·법정대리인 동의",
        items: [
          {
            question: "자녀의 실명·생년월일·성별·사진을 꼭 입력해야 하나요?",
            answer:
              "이름은 실명 대신 별명을 사용할 수 있습니다. 생년월일·성별·프로필 사진은 선택 항목으로, 입력하지 않아도 자녀를 등록할 수 있어요. 사진을 등록하지 않으면 기본 아바타가 적용됩니다.",
          },
          {
            question: "자녀를 등록하기 위한 법정대리인 동의는 어떻게 하나요?",
            answer:
              "새 자녀 프로필을 등록하기 전에 보호자 계정 이메일로 받은 동의 링크를 열고, 앱에서 문서를 확인한 뒤 법정대리인 확인 항목에 체크해 동의를 완료해 주세요. 동의는 보호자 계정 단위로 받으며, 한 번 완료하면 해당 계정의 현재와 향후 자녀 프로필에 적용됩니다.",
          },
          {
            question: "법정대리인 동의 철회와 계정 삭제는 어떻게 다른가요?",
            answer:
              "앱에서 동의를 철회하면 해당 동의에 연결된 자녀 프로필과 관련 데이터가 다른 보호자 계정에서도 더 이상 표시되거나 이용되지 않습니다. 계정 삭제 시에는 다른 활성 보호자가 있는 자녀의 가족 데이터가 승계되어 유지될 수 있어요. 삭제 대상 사진은 별도 서버 작업으로 정리되어 즉시 삭제되지 않을 수 있으며, 동의 증빙은 개인정보처리방침의 기준에 따라 별도로 처리됩니다.",
            link: {
              href: "/privacy/",
              label: "개인정보처리방침 보기",
            },
          },
        ],
      },
      {
        title: "데이터/삭제",
        items: [
          {
            question: "앱 없이 계정이나 자녀 데이터만 삭제할 수 있나요?",
            answer:
              "앱 설치·로그인 없이 parentingnow.support@gmail.com으로 계정 삭제 또는 계정을 유지한 채 자녀 데이터만 삭제를 요청할 수 있습니다. 가입 이메일·로그인 방식과 삭제 범위를 알려주세요. 본인과 삭제 권한을 확인한 뒤 처리하므로 비밀번호나 자녀의 민감한 정보는 보내지 마세요.",
            link: {
              href: "/account-deletion/",
              label: "이메일 삭제 요청하기",
            },
          },
          {
            question: "계정을 삭제하면 무엇이 함께 삭제되나요?",
            answer:
              "내 계정·프로필·개인 설정·로그인 정보가 삭제되며 계정은 복구할 수 없습니다. 자녀에게 다른 활성 보호자가 있으면 자녀 정보·루틴·기록·사진이 해당 보호자에게 승계되고, 유지되는 기록은 삭제된 계정과의 작성자 연결을 해제합니다. 승계할 보호자가 없는 자녀 데이터는 삭제되며 사진은 별도 작업으로 정리될 수 있어요. 구독은 구매한 스토어에서 따로 취소해야 합니다.",
            link: {
              href: "/account-deletion/",
              label: "삭제 요청·처리 안내 보기",
            },
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
        title: "Pro & subscriptions",
        items: [
          {
            question: "What is the difference between Free and Pro?",
            answer:
              "Free includes up to 2 children, 2 guardians per child, and 3 routines per child. Pro includes up to 5 children, 6 guardians per child, and 20 routines per child, plus Family Board, board start reminders, and guardian not-started alerts.",
            link: {
              href: "/en#pricing",
              label: "Compare Free and Pro",
            },
          },
          {
            question: "Does each guardian need a separate Pro subscription?",
            answer:
              "When one guardian subscribes to Pro, other connected guardians can also receive Pro benefits.",
          },
          {
            question:
              "Do monthly and annual subscriptions include different features?",
            answer:
              "Both include the same Pro features; only the billing interval differs. US store prices are US$1.99 monthly and US$19.99 annually, with automatic renewal. Prices and currencies may vary by country, region, and store. Check the in-app subscription screen for your actual price and billing terms.",
          },
          {
            question: "How do I cancel Pro?",
            answer:
              "Cancel through the App Store or Google Play used for purchase. Deleting your account or uninstalling the app does not cancel your subscription, so manage it separately through the store. Cancellation and refund requests are separate processes; see the subscription guidance for details.",
            link: {
              href: "/terms/?lang=en",
              label: "Subscription and cancellation guidance",
            },
          },
        ],
      },
      {
        title: "Family Board & notifications",
        items: [
          {
            question: "How do I get started with Family Board?",
            answer:
              "Subscribe to Pro using a guardian account, sign in with that account on a separate shared tablet, and register it as a Family Board device. Your child can check today’s routines and tap to start and complete them. A tablet is recommended.",
          },
          {
            question:
              "Does my child need a separate account to use Family Board?",
            answer:
              "No separate child account is needed. Children use Family Board registered with a guardian account under guardian supervision. Child information and routines may be visible on the shared screen, so manage device access and screen visibility.",
          },
          {
            question: "Where are start reminders and not-started alerts sent?",
            answer:
              "Pro routine start reminders go to the registered Family Board device. If a routine has not started 10 minutes after its start time, guardians receive an alert on their devices. Free routine reminders are local notifications on the primary caregiver’s device.",
          },
          {
            question:
              "Why am I not receiving notifications on Family Board or my device?",
            answer:
              "Check the internet connection, notification permission, and whether the tablet is registered as a Family Board device. Power-saving settings, Do Not Disturb, or operating system conditions may delay or hide notifications. If the issue persists, contact support with your device details and what happened.",
            link: {
              href: "/en/support",
              label: "Contact support",
            },
          },
        ],
      },
      {
        title: "Family & co-guardians",
        items: [
          {
            question: "Is my child’s information public?",
            answer:
              "Child information is not publicly searchable or viewable. The managing guardian and guardians connected through accepted invitations can access it within their permissions. Family members using or viewing a shared Family Board screen may see the information displayed.",
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
            question: "Which sign-in methods are available?",
            answer:
              "You can use email or Google, Apple, or Kakao social sign-in. Check which method you used for your existing account to keep accessing its data.",
          },
          {
            question:
              "Can I link Google, Apple, or Kakao sign-in to my existing account?",
            answer:
              "Yes. After signing in with your existing account, you can link Google, Apple, or Kakao in Settings. Once linked, you can sign in to the same account using the linked social login.",
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
        title: "Child profiles & guardian consent",
        items: [
          {
            question:
              "Are my child’s real name, birth date, gender, and photo required?",
            answer:
              "You may use a nickname instead of a real name. Date of birth, gender, and profile photo are optional; you can register a child without them. A default avatar is used if no photo is uploaded.",
          },
          {
            question:
              "How do I complete legal guardian consent before adding a child?",
            answer:
              "Before registering a new child profile, open the consent link sent to your guardian account email, review the document in the app, and check the legal guardian confirmation to complete consent. Consent is collected per guardian account and applies to its current and future child profiles.",
          },
          {
            question:
              "How is withdrawing guardian consent different from deleting my account?",
            answer:
              "Withdrawing consent in the app removes linked child profiles and related data from other guardians’ accounts as well. Account deletion may instead transfer and retain family data for children with another active guardian. Photos subject to deletion are cleaned up separately and may not be deleted immediately. Consent evidence is handled separately under the Privacy Policy.",
            link: {
              href: "/privacy/?lang=en",
              label: "Read the Privacy Policy",
            },
          },
        ],
      },
      {
        title: "Data & deletion",
        items: [
          {
            question:
              "Can I request account or child data deletion without the app?",
            answer:
              "Email parentingnow.support@gmail.com without installing or signing in to request account deletion or deletion of child data only while keeping your account. Include your sign-up email, sign-in method, and deletion scope. We verify identity and deletion authority before processing; do not send passwords or sensitive child information.",
            link: {
              href: "/account-deletion/?lang=en",
              label: "Request deletion by email",
            },
          },
          {
            question: "What gets deleted when I delete my account?",
            answer:
              "Your account, profile, settings, and sign-in information are deleted and the account cannot be restored. If another active guardian is connected, the child’s information, routines, records, and photos are transferred to that guardian; author links to the deleted account are removed from retained records. Without a receiving guardian, the child’s data is deleted and photos may be cleaned up separately. Cancel subscriptions separately through the purchasing store.",
            link: {
              href: "/account-deletion/?lang=en",
              label: "Deletion requests and processing",
            },
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
                          <div className='text-gray-600 leading-relaxed whitespace-pre-line'>
                            {item.answer}
                          </div>
                          {item.link && (
                            <a
                              href={item.link.href}
                              className='mt-3 inline-block font-semibold text-orange-600 underline underline-offset-4 hover:text-orange-700'
                            >
                              {item.link.label}
                            </a>
                          )}
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
