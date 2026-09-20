import React, {useMemo, useState} from 'react';

const ranks = [
  [12, 'Head Commander', 'Tổng Chỉ huy', 'Chịu trách nhiệm cao nhất về chiến lược phát triển, tổ chức, kỷ luật và hoạt động của SASD.'],
  [11, 'Assistant Commander', 'Phó Tổng Chỉ huy', 'Điều phối hoạt động giữa các khối nghiệp vụ và bảo đảm lực lượng vận hành thống nhất.'],
  [10, 'Deputy Commander', 'Phó Chỉ huy trưởng', 'Hỗ trợ Head Commander, giám sát bộ máy chỉ huy và trực tiếp điều hành khi được ủy quyền.'],
  [9, 'Tactical Director', 'Giám đốc tác chiến', 'Điều phối chiến lược tác chiến, nhiều đơn vị đồng thời và chiến dịch cấp toàn lực lượng.'],
  [8, 'Operations Chief', 'Chỉ huy nghiệp vụ', 'Điều hành nghiệp vụ, xây dựng phương án tác chiến, phân bổ lực lượng và giám sát chiến dịch.'],
  [7, 'Division Commander', 'Chỉ huy phân đội', 'Quản lý nhiều Squad Leader, điều phối nguồn lực và triển khai kế hoạch trong phạm vi được giao.'],
  [6, 'Squad Leader', 'Đội trưởng', 'Chỉ huy một đội tác chiến và chịu trách nhiệm trực tiếp về kết quả hoạt động của đội.'],
  [5, 'Supervisor', 'Giám sát', 'Chỉ huy tuyến đầu, phân công nhiệm vụ, giám sát hoạt động và bảo đảm kỷ luật.'],
  [4, 'Specialist', 'Chuyên viên nghiệp vụ', 'Đảm nhận nhiệm vụ yêu cầu chuyên môn cao và cố vấn nghiệp vụ cho đơn vị.'],
  [3, 'Instructor', 'Huấn luyện viên', 'Đào tạo, kiểm tra năng lực và duy trì tiêu chuẩn chuyên môn của lực lượng.'],
  [2, 'Senior Operator', 'Sĩ quan cao cấp', 'Có kinh nghiệm, xử lý độc lập tình huống phức tạp và hỗ trợ đào tạo nhân sự mới.'],
  [1, 'Operator', 'Sĩ quan', 'Thực hiện tuần tra, phản ứng ban đầu và xử lý nhiệm vụ thường nhật theo quy trình.'],
  [0, 'Trainee Operator', 'Nhân sự tập sự', 'Đào tạo cơ bản, học quy trình, tác phong và tiêu chuẩn trước khi trở thành sĩ quan chính thức.'],
];

function normalize(value) {
  return value.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

export default function RankTable() {
  const [query, setQuery] = useState('');
  const [scope, setScope] = useState('all');

  const filtered = useMemo(() => {
    const q = normalize(query.trim());
    return ranks.filter(([rank, title, vi, description]) => {
      const matchesQuery = !q || [String(rank), title, vi, description].some((v) => normalize(v).includes(q));
      const matchesScope =
        scope === 'all' ||
        (scope === 'command' && rank >= 7) ||
        (scope === 'field' && rank >= 3 && rank <= 6) ||
        (scope === 'operator' && rank <= 2);
      return matchesQuery && matchesScope;
    });
  }, [query, scope]);

  return (
    <section aria-label="Bảng hệ thống quân hàm SASD">
      <div className="sasd-rank-tools">
        <input
          className="sasd-search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Tìm Rank, chức danh hoặc mô tả..."
          aria-label="Tìm cấp bậc SASD"
        />
        <div className="sasd-filter-row" role="group" aria-label="Lọc cấp bậc">
          {[
            ['all', 'Tất cả'],
            ['command', 'Command 7–12'],
            ['field', 'Field 3–6'],
            ['operator', 'Operator 0–2'],
          ].map(([value, label]) => (
            <button
              key={value}
              type="button"
              className="sasd-filter-button"
              aria-pressed={scope === value}
              onClick={() => setScope(value)}
            >
              {label}
            </button>
          ))}
        </div>
      </div>
      <div className="sasd-data-table-wrap">
        <table className="sasd-data-table sasd-rank-table">
          <thead>
            <tr>
              <th style={{width: '8%'}}>Rank</th>
              <th style={{width: '25%'}}>Chức danh</th>
              <th style={{width: '22%'}}>Tên Việt</th>
              <th>Trách nhiệm</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map(([rank, title, vi, description]) => (
              <tr key={rank}>
                <td><span className="sasd-rank-number">{rank}</span></td>
                <td><strong>{title}</strong></td>
                <td>{vi}</td>
                <td>{description}</td>
              </tr>
            ))}
            {filtered.length === 0 && <tr><td colSpan="4">Không tìm thấy cấp bậc phù hợp.</td></tr>}
          </tbody>
        </table>
      </div>
      <div className="sasd-result-count">Hiển thị {filtered.length}/{ranks.length} Rank</div>
    </section>
  );
}
