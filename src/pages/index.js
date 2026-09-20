import React, {useMemo, useState} from 'react';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const internalRules = [
  {
    title: 'Nội dung không phù hợp',
    text: 'Không đăng tải hình ảnh hoặc nội dung 16+, bao gồm nội dung khiêu dâm, kinh dị, bạo lực hoặc phản cảm.',
    penalty: 'Ban 7 ngày',
    tone: 'danger',
  },
  {
    title: 'Xúc phạm và toxic',
    text: 'Không xúc phạm, chửi bới, văng tục hoặc toxic với thành viên khác trong FAC.',
    penalty: 'Ban 10 ngày tùy mức độ',
    tone: 'danger',
  },
  {
    title: 'Gây mâu thuẫn nội bộ',
    text: 'Không cố tình gây war, kích động, công kích hoặc tạo mâu thuẫn. Anh em có thể đùa giỡn nhưng phải dừng ngay khi đối phương khó chịu hoặc yêu cầu dừng.',
    penalty: 'Xử lý theo mức độ',
    tone: 'warning',
  },
  {
    title: 'Scam và trục lợi',
    text: 'Nghiêm cấm scam, lừa đảo hoặc lợi dụng sự thiếu hiểu biết của thành viên khác để trục lợi.',
    penalty: 'Xử lý nghiêm',
    tone: 'danger',
  },
  {
    title: 'Vay mượn tài sản',
    text: 'Hạn chế cho vay, mượn tiền, vật phẩm hoặc tài sản trong game. Mọi giao dịch cá nhân do các bên tự chịu trách nhiệm.',
    penalty: 'Tự chịu trách nhiệm',
    tone: 'info',
  },
];

const externalRules = [
  {
    title: 'Không DM vô lý',
    text: 'Khi đang là thành viên SASD, tuyệt đối không cố tình DM, gây sự hoặc tấn công người chơi khác một cách vô lý.',
    penalty: 'Theo luật server và nội quy FAC',
    tone: 'danger',
  },
  {
    title: 'Bảo vệ hình ảnh SASD',
    text: 'Không xúc phạm, khiêu khích, toxic hoặc cố tình gây war với người ngoài làm ảnh hưởng đến hình ảnh và uy tín của SASD.',
    penalty: 'Xử lý theo mức độ',
    tone: 'warning',
  },
  {
    title: 'Nghiêm cấm scam',
    text: 'Không được scam dưới mọi hình thức, dù trong hay ngoài phạm vi hoạt động của FAC.',
    penalty: 'Xử lý nghiêm',
    tone: 'danger',
  },
  {
    title: 'Không lạm quyền',
    text: 'Không lợi dụng chức vụ, quyền hạn hoặc danh nghĩa SASD để đe dọa, ép buộc hay gây thiệt hại cho người chơi khác.',
    penalty: 'Kỷ luật nội bộ',
    tone: 'danger',
  },
  {
    title: 'Quy trình kiện cáo',
    text: 'Không tự ý kiện cáo, report hoặc tạo tranh chấp dưới danh nghĩa FAC. Trường hợp nghiêm trọng phải báo cáo và được cấp trên duyệt trước.',
    penalty: 'Bắt buộc xin duyệt',
    tone: 'info',
  },
];

const penalties = [
  ['LTA / PG / BK / CR...', '5.000 Credits'],
  ['DM / DM LS / Safezone / Khu vực cấm', '5.000 Credits'],
  ['Abuse Faction', '10.000 Credits + 01 Tick'],
  ['Abuse Bug', '10.000 Credits + 01 Tick'],
  ['Hacking / CLEO', '100.000 Credits + Hạ 2 Rank + 01 Warning + 100.000 OOC'],
  ['Không tôn trọng cấp trên / Chống lệnh', '10.000 Credits + 01 Tick'],
  ['Không tuân thủ quy trình', '5.000 Credits'],
  ['Thiếu tác phong', '5.000 Credits'],
  ['Không Training / Hoạt động bắt buộc', '20.000 Credits + 01 Warning'],
  ['Làm ảnh hưởng hình ảnh SASD', '20.000 Credits + 01 Tick'],
];

const departments = [
  {name: 'Head Commander', level: 'Bộ chỉ huy', members: ['Alvin', 'Elisss', 'Roxyyy']},
  {name: 'Human Resource Unit', level: 'Nhân sự', members: ['Dark Pyke']},
  {name: 'Leader Team', level: 'Chỉ huy đội', members: ['Minh Hungz', 'ThaiTu NamKi']},
  {name: 'Support Team', level: 'Hỗ trợ', members: ['Mikenco']},
  {name: 'Team Teacher', level: 'Huấn luyện', members: ['James Boan', 'Huy Royal']},
  {
    name: 'Thành viên',
    level: 'Lực lượng',
    members: [
      'Phat Em', 'Locsoda Vn', 'Thanh Linhh', 'PhucAnh Gamer', 'Bun Yeudau',
      'Aniki Keen', 'Whiskys XxX', 'Nova Yuiu', 'Adam Duong', 'Adi Das', 'Gm Chuot',
    ],
  },
];

function ShieldIcon({type = 'shield'}) {
  if (type === 'people') {
    return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M16 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm8 1c-2.7 0-8 1.3-8 4v3h16v-3c0-2.7-5.3-4-8-4ZM8 14c-3.1 0-8 1.5-8 4v2h6v-3c0-1.1.5-2.1 1.4-2.9L8 14Z" /></svg>;
  }
  if (type === 'gavel') {
    return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m13.5 4.5 6 6-2 2-2-2-4 4 2 2-2 2-6-6 2-2 2 2 4-4-2-2 2-2ZM3 19h11v2H3v-2Z" /></svg>;
  }
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2 4 5v6c0 5.1 3.4 9.9 8 11 4.6-1.1 8-5.9 8-11V5l-8-3Zm3.7 7.7-4.5 4.5-2.4-2.4 1.4-1.4 1 1 3.1-3.1 1.4 1.4Z" /></svg>;
}

function RuleCard({rule, index}) {
  return (
    <article className={`${styles.ruleCard} ${styles[rule.tone]}`}>
      <div className={styles.ruleNumber}>{String(index + 1).padStart(2, '0')}</div>
      <div>
        <h3>{rule.title}</h3>
        <p>{rule.text}</p>
        <span className={styles.penaltyBadge}>{rule.penalty}</span>
      </div>
    </article>
  );
}

export default function SasdRulesPage() {
  const [query, setQuery] = useState('');
  const [activeDepartment, setActiveDepartment] = useState('Tất cả');
  const [rankOpen, setRankOpen] = useState(false);
  const logoUrl = useBaseUrl('/img/sasd/logo-sasd.jpg');
  const rankUrl = useBaseUrl('/img/sasd/rank-system.png');

  const filteredDepartments = useMemo(() => {
    const keyword = query.trim().toLocaleLowerCase('vi');
    return departments
      .filter((department) => activeDepartment === 'Tất cả' || department.name === activeDepartment)
      .map((department) => ({
        ...department,
        members: department.members.filter((member) => member.toLocaleLowerCase('vi').includes(keyword)),
      }))
      .filter((department) => department.members.length > 0);
  }, [activeDepartment, query]);

  const memberCount = departments.reduce((total, item) => total + item.members.length, 0);

  return (
    <Layout title="Nội quy SASD" description="Quy định ứng xử, kỷ luật và danh sách nhân sự San Andreas Special Department">
      <Head>
        <meta name="theme-color" content="#0b0d10" />
      </Head>

      <main className={styles.page}>
        <header className={styles.hero}>
          <div className={styles.heroGlow} />
          <div className={styles.container}>
            <nav className={styles.quickNav} aria-label="Điều hướng nhanh">
              <a href="#noi-quy">Nội quy</a>
              <a href="#muc-phat">Mức phạt</a>
              <a href="#quan-ham">Quân hàm</a>
              <a href="#nhan-su">Nhân sự</a>
            </nav>

            <div className={styles.heroGrid}>
              <div className={styles.logoFrame}>
                <img src={logoUrl} alt="Logo San Andreas Special Department" />
              </div>
              <div className={styles.heroCopy}>
                <span className={styles.eyebrow}>San Andreas Special Department</span>
                <h1>Kỷ luật tạo nên<br /><em>sức mạnh.</em></h1>
                <p>
                  Bộ quy tắc ứng xử và kỷ luật chính thức dành cho toàn thể thành viên SASD.
                  Mỗi hành động đều đại diện cho danh dự của lực lượng.
                </p>
                <div className={styles.heroActions}>
                  <a className={styles.primaryButton} href="#noi-quy">Xem nội quy</a>
                  <a className={styles.secondaryButton} href="#nhan-su">Danh sách nhân sự</a>
                </div>
              </div>
            </div>

            <div className={styles.stats}>
              <div><strong>03</strong><span>Nhóm quy định</span></div>
              <div><strong>10</strong><span>Mức xử phạt</span></div>
              <div><strong>{memberCount}</strong><span>Nhân sự hiện tại</span></div>
              <div><strong>07</strong><span>Ngày nộp phạt</span></div>
            </div>
          </div>
        </header>

        <section className={styles.section} id="noi-quy">
          <div className={styles.container}>
            <div className={styles.sectionHeading}>
              <span className={styles.sectionIndex}>01</span>
              <div><p>Quy tắc cốt lõi</p><h2>Ứng xử nội bộ</h2></div>
            </div>
            <div className={styles.rulesGrid}>
              {internalRules.map((rule, index) => <RuleCard key={rule.title} rule={rule} index={index} />)}
            </div>
          </div>
        </section>

        <section className={`${styles.section} ${styles.sectionDark}`}>
          <div className={styles.container}>
            <div className={styles.sectionHeading}>
              <span className={styles.sectionIndex}>02</span>
              <div><p>Danh dự lực lượng</p><h2>Ứng xử bên ngoài FAC</h2></div>
            </div>
            <div className={styles.rulesGrid}>
              {externalRules.map((rule, index) => <RuleCard key={rule.title} rule={rule} index={index} />)}
            </div>
          </div>
        </section>

        <section className={styles.section} id="muc-phat">
          <div className={styles.container}>
            <div className={styles.sectionHeading}>
              <span className={styles.sectionIndex}>03</span>
              <div><p>Minh bạch và công bằng</p><h2>Mức phạt vi phạm</h2></div>
            </div>

            <div className={styles.penaltyLayout}>
              <div className={styles.tableWrap}>
                <table>
                  <thead><tr><th>Hành vi vi phạm</th><th>Hình thức xử lý</th></tr></thead>
                  <tbody>
                    {penalties.map(([violation, penalty], index) => (
                      <tr key={violation}>
                        <td><span className={styles.tableNumber}>{String(index + 1).padStart(2, '0')}</span>{violation}</td>
                        <td>{penalty}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <aside className={styles.disciplineCard}>
                <div className={styles.iconBox}><ShieldIcon type="gavel" /></div>
                <p className={styles.cardLabel}>Hệ thống kỷ luật</p>
                <div className={styles.formula}><b>2 Tick</b><span>→</span><b>1 Warning</b></div>
                <div className={styles.formula}><b>2 Warning</b><span>→</span><b>Sa thải</b></div>
                <hr />
                <p><strong>Thời hạn nộp phạt:</strong> tối đa 07 ngày kể từ khi có thông báo vi phạm.</p>
                <div className={styles.multiplier}>
                  <div><span>Supervisor [5]+</span><strong>×2</strong></div>
                  <div><span>Leader</span><strong>×4</strong></div>
                </div>
              </aside>
            </div>
          </div>
        </section>

        <section className={`${styles.section} ${styles.rankSection}`} id="quan-ham">
          <div className={styles.container}>
            <div className={styles.sectionHeading}>
              <span className={styles.sectionIndex}>04</span>
              <div><p>Cơ cấu lực lượng</p><h2>Hệ thống quân hàm SASD</h2></div>
            </div>
            <button className={styles.rankPreview} type="button" onClick={() => setRankOpen(true)} aria-label="Mở ảnh hệ thống quân hàm">
              <img src={rankUrl} alt="Bảng hệ thống quân hàm SASD từ cấp 0 đến cấp 12" loading="lazy" />
              <span>Xem ảnh đầy đủ</span>
            </button>
          </div>
        </section>

        <section className={styles.section} id="nhan-su">
          <div className={styles.container}>
            <div className={styles.sectionHeading}>
              <span className={styles.sectionIndex}>05</span>
              <div><p>Đội ngũ hiện tại</p><h2>Danh sách nhân sự</h2></div>
            </div>

            <div className={styles.memberTools}>
              <label className={styles.searchBox}>
                <span className="sr-only">Tìm thành viên</span>
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m21 19.6-5.2-5.2a7.5 7.5 0 1 0-1.4 1.4l5.2 5.2 1.4-1.4ZM5 10a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z" /></svg>
                <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Tìm tên thành viên..." />
              </label>
              <div className={styles.filters} aria-label="Lọc theo bộ phận">
                {['Tất cả', ...departments.map((item) => item.name)].map((item) => (
                  <button key={item} type="button" className={activeDepartment === item ? styles.activeFilter : ''} onClick={() => setActiveDepartment(item)}>{item}</button>
                ))}
              </div>
            </div>

            {filteredDepartments.length > 0 ? (
              <div className={styles.departmentGrid}>
                {filteredDepartments.map((department) => (
                  <article className={styles.departmentCard} key={department.name}>
                    <div className={styles.departmentHeader}>
                      <div className={styles.iconBox}><ShieldIcon type="people" /></div>
                      <div><span>{department.level}</span><h3>{department.name}</h3></div>
                      <b>{department.members.length}</b>
                    </div>
                    <ul>{department.members.map((member) => <li key={member}><span>{member.charAt(0)}</span>{member}</li>)}</ul>
                  </article>
                ))}
              </div>
            ) : (
              <div className={styles.emptyState}>Không tìm thấy thành viên phù hợp.</div>
            )}
          </div>
        </section>

        <section className={styles.oath}>
          <div className={styles.container}>
            <ShieldIcon />
            <p>Honor · Duty · Integrity</p>
            <h2>“Danh dự là phù hiệu. Nhiệm vụ là sứ mệnh.<br />Chính trực là nguyên tắc.”</h2>
            <span>San Andreas Special Department</span>
          </div>
        </section>

        {rankOpen && (
          <div className={styles.lightbox} role="dialog" aria-modal="true" aria-label="Hệ thống quân hàm SASD" onClick={() => setRankOpen(false)}>
            <button type="button" onClick={() => setRankOpen(false)} aria-label="Đóng ảnh">×</button>
            <img src={rankUrl} alt="Bảng hệ thống quân hàm SASD" onClick={(event) => event.stopPropagation()} />
          </div>
        )}
      </main>
    </Layout>
  );
}
