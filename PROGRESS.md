# PROGRESS.md — 目前進度

> Nexa（construction-dashboard）宣傳官網。Next.js，定位「營造工程專案的資訊系統」（多租戶 SaaS）。
> 產品本身的進度記在 `construction-dashboard-backend` / `construction-dashboard-frontend`；本檔只記官網自己的事。

---

## 最後更新
- 日期:2026-07-12
- 摘要:完成首頁骨架（Hero/Nav/Gallery/Blocks）與工程專案模組完整功能文案（`docs/feature-copy.md`），並建好第一個功能詳情頁（品質管理）。

---

## 目前狀態
- 階段：進行中
- 正在做:依 `docs/feature-copy.md` 陸續把其餘模組（現場紀錄、BIM 檢視器、自主檢查、缺失改善、照片管理、儀表板等）建成功能詳情頁
- 進度:早期階段——首頁與品質管理功能頁已完成，其餘模組頁面待建；專案尚未 `git init`（目前為未提交的初始檔案狀態）

---

## 下一步(待辦，由上而下是優先序)
- [ ] `git init` 並建立初始 commit（目前 repo 尚無版本控管）
- [ ] 依 `docs/feature-copy.md` 補齊其餘模組功能詳情頁
- [ ] 補真實產品截圖／示範素材
- [ ] 綁定正式網域並上線

---

## 卡住 / 待釐清
- 專案目前沒有 git 版本控管，需先決定是否併入既有 monorepo 慣例或獨立建 repo

---

## 本階段已完成
- 首頁骨架（Hero / Nav / Gallery / Blocks / Reveal 動效元件）
- 工程專案模組完整功能文案盤點（`docs/feature-copy.md`，逐項核對實際程式碼、避免文案誇大或寫錯）
- 品質管理功能詳情頁（`src/app/features/quality`）
