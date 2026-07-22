import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Nexa｜營造工程數位管理平台',
  description:
    '把工程專案的所有資訊，集中在一個系統裡。儀表板、平面圖、品質管理、現場紀錄、BIM、施工日誌、自主查驗、缺失改善、照片——辦公室到工地，一套管到底。',
};

export const viewport: Viewport = {
  themeColor: '#ffffff',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  // suppressHydrationWarning：boot script 在水合前寫入 data-theme，<html> 屬性差異是預期行為
  return (
    <html lang="zh-Hant-TW" suppressHydrationWarning>
      <body>
        {/* 主題開機腳本：首次繪製前套用 localStorage 的主題，避免閃色（Nexa 預設淺色，深色為 opt-in）*/}
        <script
          dangerouslySetInnerHTML={{
            __html: `try{if(localStorage.getItem('nexa-theme')==='dark')document.documentElement.dataset.theme='dark'}catch(e){}`,
          }}
        />
        {children}
      </body>
    </html>
  );
}
