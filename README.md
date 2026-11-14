# Sai Kiran Gopu · Portfolio

Personal portfolio: https://portfolio-saikiran25.vercel.app/

Built with React, Vite, and Tailwind CSS. All content (experience, projects, skills) lives in [`src/data.js`](src/data.js).

## Run locally

```bash
npm install
npm run dev
```

## Contact form

The form sends through [EmailJS](https://www.emailjs.com/). Set these in Vercel (Project > Settings > Environment Variables) or in a local `.env` (see `.env.example`):

- `VITE_EMAILJS_SERVICE_ID`
- `VITE_EMAILJS_TEMPLATE_ID`
- `VITE_EMAILJS_PUBLIC_KEY`

Without them, the form opens the visitor's email app instead.

## Updating

- **Resume:** replace the PDFs in `public/`.
- **Project charts:** images in `public/projects/`.

## License

MIT
