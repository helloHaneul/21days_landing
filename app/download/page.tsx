import DownloadClient from "./download-client";

export default function Page() {
  return (
    <DownloadClient
      appStoreUrl={process.env.NEXT_PUBLIC_APP_STORE_URL || ""}
      playStoreUrl={process.env.NEXT_PUBLIC_PLAY_STORE_URL || ""}
    />
  );
}
