import React, {useMemo, useState} from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import useBaseUrl from '@docusaurus/useBaseUrl';
import clsx from 'clsx';
import styles from './styles.module.css';

const sections = [
  {icon: '🏛', title: 'Tổ chức SASD', text: 'Cơ cấu, phạm vi trách nhiệm, đội ngũ và hệ thống quân hàm.', to: '/docs/organization/structure', keywords: 'organization rank command structure'},
  {icon: '🎓', title: 'Training', text: 'Nền tảng đào tạo, quy trình cơ bản và chuẩn tác nghiệp RP.', to: '/docs/training/basic', keywords: 'training roleplay procedure'},
  {icon: '📜', title: 'Law & Regulations', text: 'Luật nội bộ, xử phạt, quy tắc ứng xử và chuẩn kỷ luật.', to: '/docs/law/internal', keywords: 'law regulation discipline internal'},
  {icon: '👮', title: 'Staff', text: 'Ban chỉ huy, Team, HRU, MOU, SpecOps và các đơn vị hỗ trợ.', to: '/docs/staff/command', keywords: 'staff team hru mou specops command'},
];

const highlights = [
  ['13', 'Bậc Rank 0–12', '/docs/organization/ranks'],
  ['03', 'Thành phố trọng điểm', '/docs/introduction'],
  ['01', 'Bộ quy tắc nội bộ', '/docs/law/internal'],
  ['24/7', 'Sẵn sàng phản ứng', '/docs/training/basic'],
];

function AccessCard({icon, title, text, to}) {
  return (
    <Link className={styles.card} to={to}>
      <div className={styles.cardIcon}>{icon}</div>
      <div className={styles.cardBody}><h3>{title}</h3><p>{text}</p></div>
      <span className={styles.cardArrow} aria-hidden="true">↗</span>
    </Link>
  );
}

export default function Home() {
  const logo = useBaseUrl('/img/sasd-logo.jpg');
  const [query, setQuery] = useState('');
  const filteredSections = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return sections;
    return sections.filter((item) => [item.title, item.text, item.keywords].some((value) => value.toLowerCase().includes(q)));
  }, [query]);

  return (
    <Layout title="SASD" description="San Andreas Special Department — Official Documentation">
      <main className={styles.home}>
        <section className={styles.hero}>
          <div className={styles.heroGrid} aria-hidden="true" />
          <div className={styles.heroGlow} aria-hidden="true" />
          <div className="container">
            <div className={styles.heroLayout}>
              <div className={styles.heroContent}>
                <div className="sasd-badge"><span className="sasd-dot-online" /> Official Faction Documentation</div>
                <div className="sasd-eyebrow">San Andreas Special Department</div>
                <h1 className={styles.heroTitle}>SERVICE.<br /><span>PROTECTION.</span><br />INTEGRITY.</h1>
                <p className={styles.heroText}>Hệ thống tài liệu chính thức của SASD — tập trung vào tổ chức, đào tạo, pháp luật nội bộ và quy trình vận hành của lực lượng.</p>
                <div className={styles.heroActions}>
                  <Link className={clsx('button button--lg', styles.primaryButton)} to="/docs/introduction">Mở Handbook</Link>
                  <Link className={clsx('button button--lg', styles.secondaryButton)} to="/docs/law/disciplinary">Xem kỷ luật</Link>
                </div>
                <div className={styles.heroMeta}><span>SASD</span><span>STATEWIDE LE</span><span>RP STANDARD</span></div>
              </div>
              <div className={styles.heroSealPanel}>
                <div className={styles.sealFrame}><div className={styles.sealRing} aria-hidden="true" /><img src={logo} alt="SASD" className={styles.sealLogo} /></div>
                <div className={styles.sealCaption}><strong>Serving the State</strong><span>Protecting the People</span></div>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.statusBar} aria-label="System status">
          <div className="container"><div className={styles.statusInner}>
            <div><span className="sasd-dot-online" /> SYSTEM ONLINE</div>
            <div>DOCUMENTATION / v1.0</div>
            <div>LAST REVIEW / 10.09.2026</div>
          </div></div>
        </section>

        <section className="container padding-vert--xl">
          <div className={styles.sectionLead}>
            <div><div className="sasd-kicker">Access Directory</div><h2>Tra cứu nhanh</h2></div>
            <p>Chọn đúng khu vực để vào thẳng tài liệu cần dùng trong quá trình Training hoặc vận hành faction.</p>
          </div>
          <div className={styles.quickTools}>
            <div className={styles.searchWrap}><span aria-hidden="true">⌕</span><input value={query} onChange={(event) => setQuery(event.target.value)} className={styles.search} placeholder="Tìm nhanh: training, law, ranks, staff..." aria-label="Tìm nhanh tài liệu SASD" /></div>
            <span className="sasd-result-count">{filteredSections.length} mục hiển thị</span>
          </div>
          <div className={styles.cardGrid}>{filteredSections.map((item) => <AccessCard key={item.title} {...item} />)}</div>
          {filteredSections.length === 0 && <div className={styles.emptyState}>Không có mục phù hợp. Hãy thử từ khóa khác.</div>}
        </section>

        <section className={styles.commandStrip}>
          <div className="container"><div className={styles.commandGrid}>
            {highlights.map(([value, label, to]) => <Link key={label} to={to} className={styles.metric}><span className={styles.metricValue}>{value}</span><span className={styles.metricLabel}>{label}</span></Link>)}
          </div></div>
        </section>

        <section className="container padding-vert--xl">
          <div className={styles.sectionLead}>
            <div><div className="sasd-kicker">Operating Doctrine</div><h2>Phục vụ bang. Bảo vệ nhân dân.</h2></div>
            <p>SASD được mô tả trong tài liệu faction là lực lượng thực thi pháp luật cấp bang, phối hợp tuần tra, xử lý tình huống và hỗ trợ các đơn vị khác.</p>
          </div>
          <div className={styles.doctrineGrid}>
            <div className={clsx('sasd-panel', styles.doctrineCard)}><span className={styles.doctrineIndex}>01</span><h3>STATEWIDE</h3><p>Triển khai lực lượng tại nhiều khu vực theo nhu cầu nhiệm vụ và phạm vi hoạt động.</p></div>
            <div className={clsx('sasd-panel', styles.doctrineCard)}><span className={styles.doctrineIndex}>02</span><h3>DISCIPLINE</h3><p>Kỷ luật, tác phong và quy trình là nền tảng trong mọi hoạt động của thành viên.</p></div>
            <div className={clsx('sasd-panel', styles.doctrineCard)}><span className={styles.doctrineIndex}>03</span><h3>COORDINATION</h3><p>Phối hợp giữa các đơn vị và hỗ trợ liên ngành khi tình huống yêu cầu.</p></div>
          </div>
        </section>

        <section className={styles.finalBanner}><div className="container"><div className={styles.finalBannerInner}>
          <div><div className="sasd-kicker">SASD STANDARD</div><h2>Honor · Duty · Integrity</h2><p>Serving the State, Protecting the People.</p></div>
          <Link className={clsx('button button--lg', styles.outlineButton)} to="/docs/law/internal">Đọc nội quy</Link>
        </div></div></section>
      </main>
    </Layout>
  );
}
