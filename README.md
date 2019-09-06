# Omnisci-ui
The next generation of UI components for Immerse. The project is in early-beta. The documentation is available at https://omnisci.github.io/omnisci-ui/styleguide/

The goal is to simply provide a theme for RMWC, a React wrapper using the official Material css. In that case, you can simply use the [compiled css](https://github.com/omnisci/omnisci-ui/blob/master/dist/omnisci-ui.css) with your own Material markup or using RMWC directly. But we also wrap some components to simplify them, write custom ones and style external components with a Material theme, available in the [compiled js](https://github.com/omnisci/omnisci-ui/blob/master/dist/omnisci-ui.js). We don't have an npm package yet, so the best way to use it in your project is to point your package.json to [latest on master](git@github.com:omnisci/omnisci-ui.git).

# How to contribute
Styleguidist may need [this hack](https://medium.com/@moog16/working-with-sass-create-react-app-v2-69c9629319b1) for their react version to work with scss:
```
export SASS_PATH=./node_modules
```

Then run:
```
npm run styleguide
npm run styleguide:build
npm run dev
npm run test
```