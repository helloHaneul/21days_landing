import DownloadClient from "./download-client";

export default function Page() {
  return (
    <DownloadClient
      appStoreUrl={process.env.VITE_APP_STORE_URL || ""}
      playStoreUrl={process.env.VITE_PLAY_STORE_URL || ""}
      testflightUrl={process.env.VITE_TESTFLIGHT_URL || ""}
    />
  );
}

