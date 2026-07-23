import Link from 'next/link';
import { Rv } from './reveal';
import { asset } from '@/lib/asset-path';

/** 產品截圖佔位框（真截圖上傳前的示意）。ratio: 'web' | 'phone' */
export function Shot({
  tag,
  title,
  hint,
  icon = '▦',
  ratio = 'web',
  browser = true,
  src,
}: {
  tag: string;
  title: string;
  hint?: string;
  icon?: string;
  ratio?: 'web' | 'phone';
  browser?: boolean;
  src?: string;
}) {
  const body = src ? (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={asset(src)} alt={title} />
  ) : (
    <div className={`ph${ratio === 'phone' ? ' ph-phone' : ''}`}>
      <span className="ph-tag">{tag}</span>
      <span className="ph-ic">{icon}</span>
      <span className="ph-t">{title}</span>
      {hint && <span className="ph-s">{hint}</span>}
    </div>
  );
  if (ratio === 'phone') return <div className="phone">{body}</div>;
  if (!browser) return <div className="frame">{body}</div>;
  return (
    <div className="frame">
      <div className="frame-bar">
        <i />
        <i />
        <i />
        <span className="addr">app.nexa.tw</span>
      </div>
      {body}
    </div>
  );
}

/** 功能列：左右分欄，flip 換邊。media 放 Shot。 */
export function FeatureRow({
  id,
  no,
  label,
  title,
  desc,
  points,
  media,
  flip,
  href,
}: {
  id?: string;
  no: string;
  label: string;
  title: React.ReactNode;
  desc: string;
  points: string[];
  media: React.ReactNode;
  flip?: boolean;
  href?: string;
}) {
  return (
    <section className={`frow wrap${flip ? ' flip' : ''}`} id={id}>
      <Rv as="figure" className="frow-media">
        {media}
      </Rv>
      <div className="frow-text">
        <Rv>
          <span className="frow-label">
            <span className="n">{no}</span>
            {label}
          </span>
        </Rv>
        <Rv as="h3" delay={1}>
          {title}
        </Rv>
        <Rv as="p" className="desc" delay={1}>
          {desc}
        </Rv>
        <Rv as="ul" className="frow-points" delay={2}>
          {points.map((p) => (
            <li key={p}>{p}</li>
          ))}
        </Rv>
        {href && (
          <Rv delay={3}>
            <a className="tlink frow-more" href={href}>
              了解更多 ›
            </a>
          </Rv>
        )}
      </div>
    </section>
  );
}

/** 共用頁尾 */
export function Footer() {
  return (
    <footer className="foot">
      <div className="wrap foot-grid">
        <div className="foot-brand">
          <Link className="brand" href="/">
            <span className="logo">N</span>
            Nexa
          </Link>
          <p className="foot-tag">營造工程數位管理平台</p>
          <p className="foot-co">萊茲特資訊科技</p>
        </div>
        <div className="foot-contact">
          <h4>聯絡資訊</h4>
          <dl>
            <div>
              <dt>電話</dt>
              <dd>
                <a href="tel:+886282626600">(02) 8262-6600</a>
              </dd>
            </div>
            <div>
              <dt>Email</dt>
              <dd>
                <a href="mailto:lyztw@lyztw.com">lyztw@lyztw.com</a>
              </dd>
            </div>
            <div>
              <dt>地址</dt>
              <dd>臺北市中正區杭州南路 1 段 6 巷 11 號</dd>
            </div>
          </dl>
        </div>
      </div>
      <div className="wrap foot-bar">
        <span>© 2026 萊茲特資訊科技 · lyztw</span>
        <Link href="/privacy">隱私權政策</Link>
      </div>
    </footer>
  );
}

/** 區塊標題 */
export function SectHead({
  eyebrow,
  title,
  sub,
  center,
  id,
}: {
  eyebrow: string;
  title: React.ReactNode;
  sub?: string;
  center?: boolean;
  id?: string;
}) {
  return (
    <div className={`sect-head${center ? ' center' : ''}`} id={id}>
      <Rv>
        <span className="sect-eyebrow">{eyebrow}</span>
      </Rv>
      <Rv as="h2" delay={1}>
        {title}
      </Rv>
      {sub && (
        <Rv as="p" delay={2}>
          {sub}
        </Rv>
      )}
    </div>
  );
}
