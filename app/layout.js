import "./globals.css";

const siteUrl = "https://mahoroba-teppanyaki-okinawa.vercel.app";
const fullName = "mahoroba 鉄板 沖縄-Teppanyaki Steak&Wine Bar";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: `${fullName}｜那覇・松山の鉄板焼き`,
  description:
    "那覇市松山の鉄板焼き店、mahoroba 鉄板 沖縄-Teppanyaki Steak&Wine Bar。A5石垣牛、沖縄県産熟成和牛、季節の焼き野菜、ワインを楽しめます。美栄橋駅から徒歩10分、17時から翌3時まで営業。",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: siteUrl,
    siteName: fullName,
    title: `${fullName}｜那覇・松山の鉄板焼き`,
    description:
      "A5石垣牛、沖縄県産熟成和牛、旬の野菜を鉄板で。那覇市松山、美栄橋駅から徒歩10分。",
    images: [
      {
        url: "/images/official-08.webp",
        width: 750,
        height: 600,
        alt: "mahoroba 鉄板 沖縄の鉄板焼きコース料理とワイン",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${fullName}｜那覇・松山`,
    description: "石垣牛と沖縄県産熟成和牛を味わう、那覇・松山の鉄板焼き。",
    images: ["/images/official-08.webp"],
  },
  verification: {
    google: "ayHXvvh7MAYyEd0yabm5xYrI98qeN_1bfcLkvUPkbrM",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
