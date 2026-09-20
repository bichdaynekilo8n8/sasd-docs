# SASD Docs

Website tài liệu SASD xây bằng Docusaurus.

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
   - `YOUR_USERNAME`
   - `url`
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
└─ .github/workflows/deploy.yml
```
