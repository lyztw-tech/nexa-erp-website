import { Nav } from '@/components/nav';
import { Hero } from '@/components/hero';
import { FeatureRow, SectHead, Footer } from '@/components/blocks';
import { Gallery, type ShotDef } from '@/components/gallery';
import { Rv } from '@/components/reveal';
import { asset } from '@/lib/asset-path';

/* ── 施工執行群組：圖庫 ── */
const S_PLAN: ShotDef[] = [
  { label: '樓層平面圖', tag: '平面圖', title: '各樓層平面圖', src: '/shots/plan-list.jpg' },
  { label: '標點位·群組', tag: '平面圖', title: '圖上標點位與群組', src: '/shots/plan-editor.jpg' },
];
const S_QTASK: ShotDef[] = [
  { label: '矩陣檢視', tag: '品質管理', title: '樓層 × 狀態 矩陣', src: '/shots/qtask-matrix.webp' },
  { label: '待辦任務', tag: '品質管理', title: '手機接收待辦任務', src: '/shots/app/qtask-list.webp', ratio: 'phone' },
  { label: '任務詳情', tag: '品質管理', title: '執行對象·審查人·到期', src: '/shots/app/qtask-detail.webp', ratio: 'phone' },
  { label: '執行紀錄', tag: '品質管理', title: '現場逐筆填執行紀錄', src: '/shots/app/qtask-exec.webp', ratio: 'phone' },
];
const S_QAUDIT: ShotDef[] = [
  { label: '逐項評分', tag: '品質稽核', title: '優良可差評分', src: '/shots/qaudit-score.webp' },
  { label: '成績列表', tag: '品質稽核', title: '各稽核人月分數', src: '/shots/qaudit-list.webp' },
  { label: '月考核 App', tag: '品質稽核', title: '月總覽 · 連動獎懲', src: '/shots/app/qaudit-month.webp', ratio: 'phone' },
  { label: '手寫簽名', tag: '品質稽核', title: '稽核人手寫簽名', icon: '✎' },
];
/* ── BIM 群組：圖庫 ── */
const S_BIM: ShotDef[] = [
  { label: '模型檢視', tag: 'BIM', title: '瀏覽器直接看模型', src: '/shots/model-view.jpg' },
  { label: '剖面盒剖切', tag: 'BIM', title: '剖面盒剖切', src: '/shots/model-section.jpg' },
  { label: '檔案樹', tag: 'BIM', title: '樹狀檔案庫＋版本', icon: '⊞' },
  { label: '聯邦疊載', tag: 'BIM', title: '結構＋機電同場景', icon: '▦' },
];
const S_SITE: ShotDef[] = [
  { label: '歷程總覽', tag: '現場紀錄', title: '內業以平面點位建歷程', src: '/shots/site-list.jpg' },
  { label: '紅綠點位', tag: '現場紀錄', title: '外業手機看紅綠點位', src: '/shots/app/site-points.webp', ratio: 'phone' },
  { label: '現場實景', tag: '現場紀錄', title: '逐點拍現場實景', src: '/shots/app/site-photos-2d.webp', ratio: 'phone' },
  { label: '360 環景', tag: '現場紀錄', title: '點位掛 360 環景', src: '/shots/app/site-360.webp', ratio: 'phone' },
  { label: '網頁彙整', tag: '現場紀錄', title: '拍完回網頁彙整檢視', src: '/shots/site-360view.jpg' },
];
/* 先隱藏：釋疑管理 RFI／模型查驗——等有真截圖再打開（連同下方 FeatureRow）
const S_RFI: ShotDef[] = [
  { label: 'RFI 單', tag: '釋疑', title: '釋疑單與圖片', icon: '✉' },
  { label: '模型標位置', tag: '釋疑', title: '在模型上存視角', icon: '◈' },
  { label: '單位回覆', tag: '釋疑', title: '應回覆單位逐一回覆', icon: '✓' },
];
const S_MI: ShotDef[] = [
  { label: '查驗場次', tag: '模型查驗', title: '場次化查驗', icon: '⌖' },
  { label: '模型查驗點', tag: '模型查驗', title: '模型上逐點查驗', icon: '◈' },
  { label: '結果統計', tag: '模型查驗', title: '通過／不通過統計', icon: '▦' },
];
*/

const APP_STORE_URL = '#'; // TODO：App 上架後換成真實 App Store 連結

const VISION = [
  { t: '工程專案', on: true },
  { t: '人事管理', soon: true },
  { t: '財務會計', soon: true },
  { t: '採購發包', soon: true },
  { t: '設備機具', soon: true },
];

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />

        {/* ═══ 施工執行 ═══ */}
        <section className="sect wrap" id="features">
          <SectHead
            eyebrow="施工執行"
            title={<>從管理到現場，把工程做的事管起來。</>}
          />
        </section>

        <FeatureRow
          no="基礎"
          label="平面圖管理"
          title={<>先打好底圖，之後全都定位得到。</>}
          desc="上傳樓層平面圖、標出空間點位——成為現場紀錄、品質管理共用的空間座標。基礎打好，後面每筆記錄都掛得上位置。"
          points={[]}
          media={<Gallery shots={S_PLAN} />}
        />
        <FeatureRow
          flip
          no="01"
          label="品質管理"
          title={<>品質把關，開單追到結案。</>}
          desc="管理層針對品質的檢查工單：綁平面圖空間、三關簽核（執行→確認→審核）、退回可重工。"
          points={[]}
          media={<Gallery shots={S_QTASK} />}
        />
        <FeatureRow
          no="02"
          label="品質稽核"
          title={<>每月評分，連動獎懲。</>}
          desc="工地環境整潔月考核。優良可差評分＋稽核人手寫簽名，系統自動算月分數、等級與零用金獎懲。"
          points={[]}
          media={<Gallery shots={S_QAUDIT} />}
        />
        {/* ═══ BIM 群組 ═══ */}
        <section className="sect wrap" id="bim">
          <SectHead
            eyebrow="BIM 群組"
            title={<>模型與現場，圍著同一顆模型轉。</>}
            sub="檔案庫與現場紀錄共用綁定模型，並與 Revit 外掛視角互通。"
          />
        </section>

        <FeatureRow
          no="01"
          label="BIM 檔案管理"
          title={<>專案模型檔控管，瀏覽器直接看。</>}
          desc="樹狀檔案庫＋版本控管。Revit（.rvt）自動轉檔，免安裝就能線上檢視、剖切、標記、聯邦疊載。"
          points={['支援 rvt · ifc · dwg · dxf · pdf · png · jpg']}
          media={<Gallery shots={S_BIM} />}
        />
        <FeatureRow
          flip
          no="02"
          label="現場紀錄"
          title={<>內外業互通，讓現場貼近模型。</>}
          desc="內業在網頁用平面點位建歷程、指定要拍的點；外業手機只看紅／綠點位（紅＝待拍、綠＝已拍）逐點拍實景與 360；拍完自動回網頁彙整，與模型相互比對。"
          points={['網頁建歷程 → 手機採集 → 網頁彙整比對', '離線可拍可填、連線自動同步']}
          media={<Gallery shots={S_SITE} />}
        />
        {/* 先隱藏：釋疑管理 RFI／模型查驗——等有真截圖再打開（資料陣列 S_RFI／S_MI 一併註解在上方）
        <FeatureRow
          no="03"
          label="釋疑管理 RFI"
          title={<>圖說疑義，標在模型上、指定單位回覆。</>}
          desc="RFI 單在綁定模型上存視角標定問題位置，指定「應回覆單位」逐一回覆到結案。與 Revit 外掛視角雙向相容。"
          points={[]}
          media={<Gallery shots={S_RFI} />}
        />
        <FeatureRow
          flip
          no="04"
          label="模型查驗"
          title={<>在模型上，一場一場、一點一點查。</>}
          desc="以查驗場次為單位，在模型上逐點記錄結果（待檢核／通過／不通過／需複查）＋四類照片＋視角，結果自動統計。"
          points={[]}
          media={<Gallery shots={S_MI} />}
        />
        */}

        {/* 下載 App */}
        <section className="dl wrap" id="download">
          <Rv>
            <span className="sect-eyebrow">行動端 App</span>
          </Rv>
          <Rv as="h2" delay={1}>
            把工地帶著走。
          </Rv>
          <Rv as="p" delay={1}>
            現場拍照、離線紀錄、連線自動同步——Nexa App 現已支援 iOS。
          </Rv>
          <Rv delay={2}>
            <div className="dl-badges">
              <a className="appstore-badge" href={APP_STORE_URL} aria-label="在 App Store 下載 Nexa">
                {/* Apple 官方徽章（繁中）— 取自 Apple Marketing Tools */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={asset('/badges/appstore-zh-tw.svg')} alt="從 App Store 下載" height={52} />
              </a>
            </div>
            <p className="dl-note">iOS 已推出 · Android 規劃中</p>
          </Rv>
        </section>

        {/* ERP 藍圖 */}
        <section className="vision wrap" id="vision">
          <SectHead
            center
            eyebrow="產品藍圖"
            title={<>從工程專案，長成完整營運系統。</>}
            sub="目前深耕「工程專案」；人事、財務、採購、設備等模組將陸續加入，朝營造業 ERP 發展。"
          />
          <div className="vision-track">
            {VISION.map((v) => (
              <span key={v.t} className={`vchip${v.on ? ' on' : ''}${v.soon ? ' soon' : ''}`}>
                {v.t}
                {v.soon && <em>規劃中</em>}
              </span>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="cta" id="contact">
          <Rv as="h2">為你的營造專案，開一個專屬空間。</Rv>
          <Rv as="p" delay={1}>
            多租戶雲端 SaaS，任何營造公司都能開通。留個信，我們安排導覽與試用帳號。
          </Rv>
          <Rv delay={2}>
            <a className="btn btn-primary" href="mailto:dev@lyztw.com?subject=Nexa%20%E8%A9%A6%E7%94%A8%E7%94%B3%E8%AB%8B">
              申請試用
            </a>
            <div className="cta-mail">或來信 dev@lyztw.com</div>
          </Rv>
        </section>
      </main>

      <Footer />
    </>
  );
}
