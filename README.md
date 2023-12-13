## Installation

### Jekyll

[Install jekyll following this guide](https://jekyllrb.com/docs/installation/)

### Run locally

```bash
bundle exec jekyll serve
```

### Build

```bash
bundle exec jekyll build
```

### Serve with PM2

First launch:

```bash
pm2 serve _site 4000 --spa --name "jekyll"
```

Restart the server after an update:

```bash
pm2 restart "jekyll"
```