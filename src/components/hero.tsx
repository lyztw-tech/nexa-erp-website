'use client';

import { useEffect, useRef } from 'react';
import { Shot } from './blocks';

/** 滾動時 hero 產品畫面由後傾回正（Apple 式）。 */
function useHeroTilt() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    let raf = 0;
    const tick = () => {
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const p = Math.max(0, Math.min(1, 1 - (r.top - vh * 0.12) / (vh * 0.55)));
      const rot = 14 * (1 - p);
      const sc = 0.95 + 0.05 * p;
      el.style.transform = `rotateX(${rot.toFixed(2)}deg) scale(${sc.toFixed(3)})`;
      raf = 0;
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(tick);
    };
    tick();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);
  return ref;
}

export function Hero() {
  const tiltRef = useHeroTilt();
  return (
    <section className="hero" id="top">
      <div className="wrap">
        <span className="eyebrow">CONSTRUCTION MANAGEMENT PLATFORM</span>
        <h1>
          工程專案的每一筆資訊，
          <br />
          收進同一個系統。
        </h1>
        <p className="hero-sub">
          施工執行 × BIM 協作——辦公室到工地，一套管到底。
        </p>
        <div className="hero-ctas">
          <a className="btn btn-primary" href="#contact">
            申請試用
          </a>
          <a className="tlink" href="#features">
            看它怎麼運作 ›
          </a>
        </div>
        <p className="hero-note">多租戶雲端 SaaS · 任何營造公司都能開通專屬空間</p>
      </div>

      <div className="hero-stage">
        <div className="hero-shot" ref={tiltRef}>
          <Shot tag="儀表板" title="專案戰情儀表板" src="/shots/hero-dashboard.webp" />
        </div>
      </div>

      <div className="wrap">
        <div className="stats">
          <div className="stat">
            <b>12<em>大功能</em></b>
            <span>工程專案模組，持續擴充</span>
          </div>
          <div className="stat">
            <b>1<em>套系統</em></b>
            <span>辦公室與工地資料一致</span>
          </div>
          <div className="stat">
            <b>離線<em>也能記</em></b>
            <span>現場拍照填寫，連線自動同步</span>
          </div>
        </div>
        <p className="stats-proof">本頁產品畫面擷取自實際運行中的系統。</p>
      </div>
    </section>
  );
}
