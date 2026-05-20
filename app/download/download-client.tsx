"use client";

import {useEffect} from "react";

type Props = {
  appStoreUrl: string;
  playStoreUrl: string;
  requestedPlatform: string | null;
};

function getDownloadUrl(
  {appStoreUrl, playStoreUrl}: Props,
  requestedPlatform: string | null
): string {
  const userAgent = window.navigator.userAgent.toLowerCase();
  const isAndroid = userAgent.includes("android");
  const isIos =
    /iphone|ipad|ipod/.test(userAgent) ||
    (window.navigator.platform === "MacIntel" &&
      window.navigator.maxTouchPoints > 1);

  if (requestedPlatform === "android") {
    return playStoreUrl;
  }

  if (requestedPlatform === "ios") {
    return appStoreUrl;
  }

  if (isAndroid) {
    return playStoreUrl;
  }

  if (isIos) {
    return appStoreUrl;
  }

  return appStoreUrl || playStoreUrl;
}

export default function DownloadClient(props: Props) {
  const downloadUrl =
    typeof window === "undefined"
      ? ""
      : getDownloadUrl(props, props.requestedPlatform);

  useEffect(() => {
    if (downloadUrl) {
      window.location.replace(downloadUrl);
    }
  }, [downloadUrl]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-950/60 px-4 py-8 backdrop-blur-sm">
      <section
        aria-labelledby="download-title"
        aria-modal="true"
        className="relative w-full max-w-md bg-white border border-gray-100 shadow-2xl rounded-lg p-8 sm:p-10 text-center"
        role="dialog"
      >
        <a
          aria-label="닫기"
          className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-lg text-2xl leading-none text-gray-400 hover:bg-gray-100 hover:text-gray-900 transition-colors"
          href="/"
        >
          ×
        </a>

        <p className="text-sm font-bold text-orange-500 mb-3">21days 다운로드</p>
        <h1
          id="download-title"
          className="text-3xl sm:text-4xl font-extrabold leading-tight mb-4"
        >
          21days 앱은 곧 다운로드할 수 있어요.
        </h1>
        <p className="text-gray-600 text-lg leading-relaxed">
          Android 앱은 현재 출시 준비 중입니다.
        </p>
      </section>
    </div>
  );
}
