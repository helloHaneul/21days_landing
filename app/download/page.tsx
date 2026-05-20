import DownloadClient from "./download-client";
import {APP_STORE_URL, PLAY_STORE_URL} from "@/lib/download-links";

type PageProps = {
  searchParams?: Promise<{
    platform?: string;
  }>;
};

export default async function Page({searchParams}: PageProps) {
  const params = await searchParams;

  return (
    <DownloadClient
      appStoreUrl={APP_STORE_URL}
      playStoreUrl={PLAY_STORE_URL}
      requestedPlatform={params?.platform || null}
    />
  );
}
