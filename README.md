# Zijie Gao - Academic Homepage

Personal academic website built with [al-folio](https://github.com/alshedivat/al-folio), deployed on GitHub Pages.

**Live site:** [https://nkklls01.github.io](https://nkklls01.github.io)

## Quick Start

### Local Development (Ruby)

```bash
bundle install
bundle exec jekyll serve --livereload
# Visit http://localhost:4000
```

### Local Development (Docker)

```bash
docker compose up
# Visit http://localhost:8888
```

## Deployment to GitHub Pages

1. Push changes to the `main` branch
2. GitHub Actions will automatically build and deploy the site
3. In repository **Settings > Pages**, set source to "Deploy from a branch" and branch to `gh-pages`
4. The site will be available at `https://nkklls01.github.io`

## Files to Edit

| What to update | File(s) |
|---|---|
| Personal info, site title | `_config.yml` |
| Home page / bio | `_pages/about.md` |
| Research areas | `_pages/research.md` |
| Projects | `_projects/*.md` |
| CV data | `_data/cv.yml` |
| Publications | `_bibliography/papers.bib` |
| Blog posts | `_posts/YYYY-MM-DD-title.md` |
| News | `_news/announcement_*.md` |
| Social links | `_data/socials.yml` |
| Profile photo | `assets/img/prof_pic.jpg` |
| CV PDF | `assets/pdf/GaoZijie_CV.pdf` |

## TODO Checklist

- [ ] Replace profile photo (`assets/img/prof_pic.jpg`)
- [x] Update email in `_data/socials.yml`
- [x] Update GitHub username
- [x] Update LinkedIn username
- [ ] Add Google Scholar ID when available
- [x] Upload CV PDF to `assets/pdf/GaoZijie_CV.pdf`
- [x] Add education and experience dates in `_data/cv.yml`
- [x] Add in-progress manuscripts to `_bibliography/papers.bib`
- [ ] Add project repository links in `_projects/*.md`
- [ ] Write actual blog posts in `_posts/`
