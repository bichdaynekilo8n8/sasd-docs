import React from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import styles from './styles.module.css';

const sections = [
  {icon: '🎓', title: 'Training', text: 'Giáo trình đào tạo, quy trình cơ bản và tình huống RP.', to: '/docs/training/basic'},
  {icon: '📜', title: 'Law', text: 'Luật nội bộ, quy định RP và nguyên tắc xử lý vi phạm.', to: '/docs/law/internal'},
  {icon: '🏛️', title: 'Ranks', text: 'Hệ thống Rank, cơ cấu tổ chức và phạm vi trách nhiệm.', to: '/docs/organization/ranks'},
  {icon: '👮', title: 'Staff', text: 'Ban chỉ huy, Team, Support và hệ thống giáo viên.', to: '/docs/staff/command'},
];

function SectionCard({icon, title, text, to}) {
  return (
    <Link className={styles.card} to={to}>
      <span className={styles.cardIcon}>{icon}</span>
      <div>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
      <span className={styles.cardArrow}>→</span>
    </Link>
  );
}

export default function Home() {
  return (
    <Layout title="Home" description="San Andreas Special Department Documentation">
      <main>
        <section className={styles.hero}>
          <div className={styles.heroGrid} />
          <div className="container">
            <div className={styles.heroContent}>
              <div className={styles.badge}><span className={styles.dot} /> OFFICIAL DOCUMENTATION</div>
              <div className={styles.eyebrow}>SAN ANDREAS SPECIAL DEPARTMENT</div>
              <h1 className={styles.heroTitle}>SASD<br/><span>DOCUMENTATION</span></h1>
              <p className={styles.heroText}>Serving the State, Protecting the People.</p>
              <div className={styles.heroActions}>
                <Link className={clsx('button button--lg', styles.primaryButton)} to="/docs/introduction">Mở tài liệu</Link>
                <Link className={clsx('button button--lg', styles.ghostButton)} to="/docs/training/basic">Bắt đầu Training</Link>
              </div>
            </div>
          </div>
          <div className={styles.heroSeal}>SASD<span>SPD</span></div>
        </section>

        <section className={styles.statusBar}>
          <div className="container">
            <div className={styles.statusInner}>
              <div><span className={styles.statusDot} /> SYSTEM ONLINE</div>
              <div>DOCUMENTATION v1.0</div>
              <div>LAST UPDATED: 2026</div>
            </div>
          </div>
        </section>

        <section className="container padding-vert--xl">
          <div className={styles.sectionHeading}>
            <span>01</span>
            <div>
              <div className={styles.kicker}>ACCESS DIRECTORY</div>
              <h2>Truy cập nhanh</h2>
            </div>
          </div>
          <div className={styles.cardGrid}>
            {sections.map((item) => <SectionCard key={item.title} {...item} />)}
          </div>
        </section>

        <section className={styles.principles}>
          <div className="container">
            <div className={styles.principlesInner}>
              <div>
                <div className={styles.kicker}>CORE PRINCIPLE</div>
                <h2>Serving the State.<br />Protecting the People.</h2>
              </div>
              <p>Hệ thống tài liệu tập trung toàn bộ quy trình, quy định và cơ cấu vận hành của SASD trong một giao diện thống nhất.</p>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
