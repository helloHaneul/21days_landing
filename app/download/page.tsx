import DownloadClient from "./download-client";

type PageProps = {
  searchParams?: Promise<{
    platform?: string;
  }>;
};

export default async function Page({searchParams}: PageProps) {
  const params = await searchParams;

  return (
    <DownloadClient
      appStoreUrl={process.env.NEXT_PUBLIC_APP_STORE_URL || ""}
      playStoreUrl={process.env.NEXT_PUBLIC_PLAY_STORE_URL || ""}
      requestedPlatform={params?.platform || null}
    />
  );
}
