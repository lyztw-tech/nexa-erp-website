'use client';

/** 一個功能多張畫面：主圖 + 頁籤切換（因為一張圖說不完一個功能）。 */
import { useState } from 'react';
import { asset } from '@/lib/asset-path';

export type ShotDef = {
  label: string;
  title: string;
  hint?: string;
  icon?: string;
  /** 真截圖上傳後填 public 路徑；未填則顯示佔位框 */
  src?: string;
  tag?: string;
  /** 這一張是網頁還是手機（可逐張指定，用於「內外業互通」混合圖庫） */
  ratio?: 'web' | 'phone';
};

function Media({ s, ratio }: { s: ShotDef; ratio: 'web' | 'phone' }) {
  const inner = s.src ? (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={asset(s.src)} alt={s.title} loading="lazy" />
  ) : (
    <div className={`ph${ratio === 'phone' ? ' ph-phone' : ''}`}>
      {s.tag && <span className="ph-tag">{s.tag}</span>}
      <span className="ph-ic">{s.icon ?? '▦'}</span>
      <span className="ph-t">{s.title}</span>
      {s.hint && <span className="ph-s">{s.hint}</span>}
    </div>
  );
  if (ratio === 'phone') return <div className="phone">{inner}</div>;
  return (
    <div className="frame">
      <div className="frame-bar">
        <i />
        <i />
        <i />
        <span className="addr">app.nexa.tw</span>
      </div>
      {inner}
    </div>
  );
}

export function Gallery({ shots, ratio = 'web' }: { shots: ShotDef[]; ratio?: 'web' | 'phone' }) {
  const [i, setI] = useState(0);
  const [zoom, setZoom] = useState(false);
  const active = shots[Math.min(i, shots.length - 1)];
  const activeRatio = active.ratio ?? ratio;
  const hasPhone = shots.some((s) => (s.ratio ?? ratio) === 'phone');
  const canZoom = Boolean(active.src);
  return (
    <div className={`gal${hasPhone ? ' gal-phone' : ''}`}>
      <div
        className={`gal-stage${canZoom ? ' zoomable' : ''}`}
        key={i}
        onClick={canZoom ? () => setZoom(true) : undefined}
      >
        <Media s={active} ratio={activeRatio} />
        {canZoom && <span className="gal-zoom">⤢ 點圖放大</span>}
      </div>
      <div className="gal-tabs" role="tablist">
        {shots.map((s, idx) => (
          <button
            key={s.label}
            type="button"
            role="tab"
            aria-selected={idx === i}
            className={`gtab${idx === i ? ' on' : ''}`}
            onClick={() => setI(idx)}
          >
            {s.label}
          </button>
        ))}
      </div>
      {zoom && active.src && (
        <div className="gal-lightbox" onClick={() => setZoom(false)} role="dialog" aria-modal="true">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={asset(active.src)} alt={active.title} onClick={(e) => e.stopPropagation()} />
          <button type="button" className="gal-lightbox-x" aria-label="關閉">
            ✕
          </button>
        </div>
      )}
    </div>
  );
}
