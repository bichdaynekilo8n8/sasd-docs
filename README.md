# SASD Docs

Website tài liệu SASD hoàn chỉnh xây bằng Docusaurus 3, tối ưu cho GitHub Pages.

## Nội dung đã có

- Trang chủ đen–vàng responsive, dùng logo SASD chính thức.
- Quy định ứng xử trong và ngoài Faction.
- Bảng mức phạt, Tick, Warning, thời hạn và hệ số chức vụ.
- Hệ thống quân hàm từ Rank 0 đến Rank 12.
- Danh sách nhân sự có tìm kiếm và lọc theo đơn vị.
- Tài liệu cơ cấu tổ chức, huấn luyện và quy trình kỷ luật.

## Yêu cầu

- Node.js 20+
- npm

## Chạy local

```bash
npm install
npm start
```

## Build

```bash
npm run build
npm run serve
```

## GitHub Pages

1. Sửa `docusaurus.config.js`:
   - Đổi `YOUR_USERNAME` thành tên tài khoản GitHub của bạn.
   - Kiểm tra lại `url`.
   - `baseUrl` nếu repository không phải `sasd-docs`.
2. Push code lên branch `main`.
3. GitHub → Settings → Pages → Source: **GitHub Actions**.
4. Workflow `.github/workflows/deploy.yml` sẽ tự build và deploy.

## Cấu trúc

```text
sasd-docs/
├─ docs/
├─ src/pages/index.js
├─ src/pages/styles.module.css
├─ src/css/custom.css
├─ static/img/
├─ docusaurus.config.js
├─ sidebars.js
├─ package-lock.json
└─ .github/workflows/deploy.yml
```

Trang chủ lấy dữ liệu nhân sự từ mảng `departments` trong `src/pages/index.js`. Khi thay đổi nhân sự, nên cập nhật thêm các file trong `docs/staff/` và `docs/organization/structure.md`.
