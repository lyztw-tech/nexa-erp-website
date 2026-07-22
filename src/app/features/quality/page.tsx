import type { Metadata } from 'next';
import Link from 'next/link';
import { Nav } from '@/components/nav';
import { FeatureRow, SectHead, Shot, Footer } from '@/components/blocks';
import { Gallery, type ShotDef } from '@/components/gallery';
import { Rv } from '@/components/reveal';

export const metadata: Metadata = {
  title: '品質管理｜Nexa 營造工程數位管理平台',
  description: '每月定期環境品質稽核：線上評分、稽核人手寫電子簽名、月報與獎懲自動彙整。',
};

const OVERVIEW: ShotDef[] = [
  { label: '考核評分', tag: '品質管理', title: '品質稽核考核表', hint: '逐項評分', icon: '✓' },
  { label: '手寫簽名', tag: '品質管理', title: '稽核人手寫簽名', hint: '橫向電子簽名', icon: '✎' },
  { label: '月報彙整', tag: '品質管理', title: '品質月報', hint: '成績自動彙整', icon: '▤' },
  { label: '獎懲成績', tag: '品質管理', title: '獎懲級距', hint: '依平均分核算', icon: '★' },
];

export default function QualityPage() {
  return (
    <>
      <Nav />
      <main>
        <div className="wrap crumb">
          <Link href="/#features">功能</Link> › <b>品質管理</b>
        </div>

        {/* 詳情頁 hero */}
        <section className="sect wrap dhero" style={{ paddingTop: 8 }}>
          <SectHead
            center
            eyebrow="工程專案 · 品質管理"
            title={<>品質稽核，從評分到獎懲一條龍。</>}
            sub="每月定期的環境品質稽核，把「評分、簽名、彙整、獎懲」四件事全搬進系統——考核不再靠紙本傳來傳去，月底也不用再手動算成績。"
          />
          <Rv className="dhero-media">
            <Gallery shots={OVERVIEW} />
          </Rv>
        </section>

        {/* 逐項深入：圖文結合 */}
        <FeatureRow
          no="01"
          label="線上評分"
          title={<>依檢查項目，逐項打分。</>}
          desc="管理員預先設定檢查項目與稽核人；稽核時逐項給分、寫下評語，系統即時算出總分。優／良／可／差一眼看懂，分數當場就進系統。"
          points={['檢查項目與稽核人可自訂', '逐項評分＋文字評語', '即時總分與等第']}
          media={<Shot tag="品質管理" title="考核表逐項評分" hint="優 · 良 · 可 · 差" icon="✓" />}
        />

        <FeatureRow
          flip
          no="02"
          label="手寫電子簽名"
          title={<>送出前，手指簽個名。</>}
          desc="送出考核表時畫面轉為橫向手寫簽名，高規格平滑筆跡、可清除重簽。簽名跟著考核表一起存檔，也會印在匯出的 PDF 上——具名負責、有憑有據。"
          points={['橫向全螢幕手寫簽名板', '可清除重簽', '簽名存檔並內嵌 PDF']}
          media={<Shot tag="品質管理" title="稽核人手寫簽名" hint="橫向 · 平滑筆跡" icon="✎" />}
        />

        <FeatureRow
          no="03"
          label="月報自動彙整"
          title={<>月底不用再手動算。</>}
          desc="一整個月的稽核成績自動彙整成月報：各工地、各稽核人的分數一張表看完，可匯出 PDF／Excel 給主管機關備查。"
          points={['成績自動彙整成月報', '匯出 PDF／Excel', '主管機關備查隨時拿得出']}
          media={<Shot tag="品質管理" title="品質稽核月報" hint="各工地 · 各稽核人" icon="▤" />}
        />

        <FeatureRow
          flip
          no="04"
          label="獎懲級距"
          title={<>分數對應獎懲，系統幫你算。</>}
          desc="設定分數級距與獎懲金額，系統依當月平均分自動核算等第與獎懲——標準一致、公開透明，減少人為爭議。"
          points={['自訂級距與獎懲金額', '依平均分自動核算', '透明可稽、減少爭議']}
          media={<Shot tag="品質管理" title="獎懲級距與核算" hint="依平均分自動" icon="★" />}
        />

        {/* CTA */}
        <section className="cta" id="contact" style={{ marginTop: 40 }}>
          <Rv as="h2">想看品質管理實際跑起來？</Rv>
          <Rv as="p" delay={1}>
            留個信，我們用你的情境安排一次導覽與試用帳號。
          </Rv>
          <Rv delay={2}>
            <a className="btn btn-primary" href="mailto:dev@lyztw.com?subject=Nexa%20%E5%93%81%E8%B3%AA%E7%AE%A1%E7%90%86%E5%B0%8E%E8%A6%BD">
              申請試用
            </a>
            <div className="cta-mail">
              <Link href="/#features" style={{ color: 'inherit', textDecoration: 'underline' }}>
                ‹ 回到功能總覽
              </Link>
            </div>
          </Rv>
        </section>
      </main>
      <Footer />
    </>
  );
}
