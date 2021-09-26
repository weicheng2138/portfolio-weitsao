# portfolio-weitsao

<p align="center">
    <a href="https://weitsao.com" target="_blank">
        weitsao.com
    </a>
</p>

<p align="center">
    <a href="https://app.netlify.com/sites/weichenghung/deploys" target="_blank">
        <img src="https://api.netlify.com/api/v1/badges/0262ca05-6cd5-415a-839b-e2c9a61338e1/deploy-status" alt="Netlify Status" />
    </a>
</p>

![demo](static/portfolio_screenshot.png)

This is my love's portfolio which is designed by [weitsao.com](https://weitsao.com). It's my duty to accomplish it with honor and joy.

## 🛠️ Build Setup

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).

## 🎨 Color Reference

| Color                    | Hex                                                                |
| ------------------------ | ------------------------------------------------------------------ |
| Primary Color            | ![#F9BF45](https://via.placeholder.com/10/F9BF45?text=+) `#F9BF45` |
| Primary Light            | ![#FAD689](https://via.placeholder.com/10/FAD689?text=+) `#FAD689` |
| primary Dark             | ![#C28F06](https://via.placeholder.com/10/C28F06?text=+) `#C28F06` |
| Secondary01 (Background) | ![#FAFAFA](https://via.placeholder.com/10/FAFAFA?text=+) `#FAFAFA` |
| Secondary02              | ![#E0E0E0](https://via.placeholder.com/10/E0E0E0?text=+) `#E0E0E0` |
| Secondary03              | ![#757575](https://via.placeholder.com/10/757575?text=+) `#757575` |
| Secondary04              | ![#212121](https://via.placeholder.com/10/212121?text=+) `#212121` |

## Developing Tips

- When you try to pass img url string as props to a component, the props you need to pass as
  `require('~/assets/img/metro-cover.png')`
- Use throttle from lodash to reduce the loading of onScroll event.
