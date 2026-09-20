import React, {useMemo, useState} from 'react';

const violations = [
  {violation: 'LTA / PG / BK / CR', sanction: '5.000 Credits', tags: []},
  {violation: 'DM / DM LS / Safezone / Khu vực cấm', sanction: '5.000 Credits', tags: []},
  {violation: 'Abuse Faction', sanction: '10.000 Credits + 01 Tick', tags: ['tick']},
  {violation: 'Abuse Bug', sanction: '10.000 Credits + 01 Tick', tags: ['tick']},
  {violation: 'Hacking / CLEO', sanction: '100.000 Credits + Hạ 2 Rank + 01 Warning + 100.000 OOC', tags: ['warning', 'rankdown']},
  {violation: 'Không tôn trọng cấp trên / Chống lệnh', sanction: '10.000 Credits + 01 Tick', tags: ['tick']},
  {violation: 'Không tuân thủ quy trình', sanction: '5.000 Credits', tags: []},
  {violation: 'Thiếu tác phong', sanction: '5.000 Credits', tags: []},
  {violation: 'Không Training / Hoạt động bắt buộc', sanction: '20.000 Credits + 01 Warning', tags: ['warning']},
  {violation: 'Làm ảnh hưởng hình ảnh SASD', sanction: '20.000 Credits + 01 Tick', tags: ['tick']},
];

function normalize(value) {
  return value.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

export default function DisciplineMatrix() {
  const [query, setQuery] = useState('');
  const [filter, setFilter] = useState('all');

  const filtered = useMemo(() => {
    const q = normalize(query.trim());
    return violations.filter((item) => {
      const matchesQuery = !q || normalize(item.violation).includes(q) || normalize(item.sanction).includes(q);
      const matchesFilter =
        filter === 'all' ||
        (filter === 'tick' && item.tags.includes('tick')) ||
        (filter === 'warning' && item.tags.includes('warning')) ||
        (filter === 'rankdown' && item.tags.includes('rankdown'));
      return matchesQuery && matchesFilter;
    });
  }, [query, filter]);

  return (
    <section aria-label="Bảng xử phạt nội bộ SASD">
      <input
        className="sasd-search"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Tìm vi phạm hoặc mức phạt..."
        aria-label="Tìm vi phạm hoặc mức phạt"
      />
      <div className="sasd-filter-row" role="group" aria-label="Bộ lọc mức xử lý">
        {[
          ['all', 'Tất cả'],
          ['tick', 'Có Tick'],
          ['warning', 'Có Warning'],
          ['rankdown', 'Có hạ Rank'],
        ].map(([value, label]) => (
          <button
            key={value}
            type="button"
            className="sasd-filter-button"
            aria-pressed={filter === value}
            onClick={() => setFilter(value)}
          >
            {label}
          </button>
        ))}
      </div>
      <div className="sasd-data-table-wrap">
        <table className="sasd-data-table">
          <thead>
            <tr>
              <th style={{width: '42%'}}>Vi phạm</th>
              <th>Mức phạt / xử lý</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((item) => (
              <tr key={item.violation}>
                <td><strong>{item.violation}</strong></td>
                <td>{item.sanction}</td>
              </tr>
            ))}
            {filtered.length === 0 && (
              <tr><td colSpan="2">Không tìm thấy kết quả phù hợp.</td></tr>
            )}
          </tbody>
        </table>
      </div>
      <div className="sasd-result-count">Hiển thị {filtered.length}/{violations.length} mục</div>
    </section>
  );
}
