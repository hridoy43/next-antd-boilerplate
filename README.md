## [Next-Antd Boilerplate](https://github.com/hridoy43/next-antd-boilerplate "Next-Antd Boilerplate")

This is a [Next.js](https://nextjs.org/) boilerplate (mobile friendly) with the implementation of Ant Design (with less support)
<br><br>

[//]: # "badges"

![Licence](https://img.shields.io/github/license/hridoy43/next-antd-boilerplate)
![version](https://img.shields.io/github/package-json/v/hridoy43/next-antd-boilerplate)
![production](https://img.shields.io/github/deployments/hridoy43/next-antd-boilerplate/production?label=prod)
![website](https://img.shields.io/website?down_message=down&up_message=online&url=https%3A%2F%2Fnext-antd-boilerplate-hridoy43.vercel.app%2F)
![contributors](https://img.shields.io/github/contributors/hridoy43/next-antd-boilerplate)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
<br><br>

## Features

- [x] **Less Support** _(Zero config needed!)_ 😃<br>
- [x] **Ant Design Theming Support** _(you can customize the theme from **styles/antd-variables.less** file. [Here][theme] you can find the default variable for theming.)_<br>
- [x] **Mobile only layout** _(you have to enable it from **components/layout/appLayout.module.scss**) and also change the background-color from **styles/globals.less**_ 👍 <br>

  ```css
  max-width: 480px; //components/layout/appLayout.module.scss

  background-color: rgb(23, 23, 23); //styles/globals.less
  ```

[theme]: https://github.com/ant-design/ant-design/blob/master/components/style/themes/default.less "Ant Design Default Less Variables"
