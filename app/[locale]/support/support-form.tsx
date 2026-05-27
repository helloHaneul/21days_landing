"use client";

import {useMemo, useState} from "react";
import {ChevronDown} from "lucide-react";

type SupportFormProps = {
  locale: "ko" | "en";
  supportEmail: string;
  options: string[];
  labels: {
    formTitle: string;
    formBody: string;
    nameLabel: string;
    namePlaceholder: string;
    replyEmailLabel: string;
    replyEmailPlaceholder: string;
    categoryLabel: string;
    categoryPlaceholder: string;
    deviceLabel: string;
    devicePlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    submitLabel: string;
  };
};

export default function SupportForm({
  locale,
  supportEmail,
  options,
  labels,
}: SupportFormProps) {
  const [name, setName] = useState("");
  const [replyEmail, setReplyEmail] = useState("");
  const [category, setCategory] = useState("");
  const [deviceInfo, setDeviceInfo] = useState("");
  const [message, setMessage] = useState("");

  const mailtoHref = useMemo(() => {
    const selectedCategory = category || labels.categoryPlaceholder;
    const subject =
      locale === "ko"
        ? `[21days 문의] ${selectedCategory}`
        : `[21days Support] ${selectedCategory}`;

    const body = [
      locale === "ko" ? "안녕하세요. 아래 내용으로 문의드립니다." : "Hello, I need help with the following issue.",
      "",
      `${labels.nameLabel}: ${name || "-"}`,
      `${labels.replyEmailLabel}: ${replyEmail || "-"}`,
      `${labels.categoryLabel}: ${selectedCategory}`,
      `${labels.deviceLabel}: ${deviceInfo || "-"}`,
      "",
      `${labels.messageLabel}:`,
      message || "-",
    ].join("\n");

    return `mailto:${supportEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }, [
    category,
    deviceInfo,
    labels,
    locale,
    message,
    name,
    replyEmail,
    supportEmail,
  ]);

  return (
    <div className='rounded-[32px] bg-white p-8 shadow-[0_20px_60px_rgba(28,25,23,0.08)] ring-1 ring-stone-200/70 sm:p-10'>
      <h2 className='text-xl font-bold text-stone-950'>{labels.formTitle}</h2>
      <p className='mt-3 text-sm leading-7 text-stone-700'>{labels.formBody}</p>

      <div className='mt-6 grid gap-5'>
        <label className='grid gap-2'>
          <span className='text-sm font-semibold text-stone-600'>{labels.nameLabel}</span>
          <input
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder={labels.namePlaceholder}
            className='h-12 rounded-2xl border border-stone-300 bg-stone-50 px-4 text-sm text-stone-900 outline-none transition-colors placeholder:text-stone-400 focus:border-orange-400 focus:bg-white'
          />
        </label>

        <label className='grid gap-2'>
          <span className='text-sm font-semibold text-stone-600'>{labels.replyEmailLabel}</span>
          <input
            type='email'
            value={replyEmail}
            onChange={(event) => setReplyEmail(event.target.value)}
            placeholder={labels.replyEmailPlaceholder}
            className='h-12 rounded-2xl border border-stone-300 bg-stone-50 px-4 text-sm text-stone-900 outline-none transition-colors placeholder:text-stone-400 focus:border-orange-400 focus:bg-white'
          />
        </label>

        <label className='grid gap-2'>
          <span className='text-sm font-semibold text-stone-600'>{labels.categoryLabel}</span>
          <div className='relative'>
            <select
              value={category}
              onChange={(event) => setCategory(event.target.value)}
              className='h-12 w-full appearance-none rounded-2xl border border-stone-300 bg-stone-50 px-4 pr-12 text-sm text-stone-900 outline-none transition-colors focus:border-orange-400 focus:bg-white'
            >
              <option value=''>{labels.categoryPlaceholder}</option>
              {options.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <ChevronDown className='pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-stone-400' />
          </div>
        </label>

        <label className='grid gap-2'>
          <span className='text-sm font-semibold text-stone-600'>{labels.deviceLabel}</span>
          <input
            value={deviceInfo}
            onChange={(event) => setDeviceInfo(event.target.value)}
            placeholder={labels.devicePlaceholder}
            className='h-12 rounded-2xl border border-stone-300 bg-stone-50 px-4 text-sm text-stone-900 outline-none transition-colors placeholder:text-stone-400 focus:border-orange-400 focus:bg-white'
          />
        </label>

        <label className='grid gap-2'>
          <span className='text-sm font-semibold text-stone-600'>{labels.messageLabel}</span>
          <textarea
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            placeholder={labels.messagePlaceholder}
            rows={7}
            className='rounded-3xl border border-stone-300 bg-stone-50 px-4 py-4 text-sm leading-6 text-stone-900 outline-none transition-colors placeholder:text-stone-400 focus:border-orange-400 focus:bg-white'
          />
        </label>

        <a
          href={mailtoHref}
          className='inline-flex min-h-12 items-center justify-center rounded-full bg-orange-500 px-6 py-3 text-sm font-bold text-white transition-transform hover:-translate-y-0.5 hover:bg-orange-600'
        >
          {labels.submitLabel}
        </a>
      </div>
    </div>
  );
}
