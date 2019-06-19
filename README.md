# Omnisci-ui
The next generation of UI components for Immerse. The project is in early-beta. The documentation is available at https://omnisci.github.io/omnisci-ui/styleguide/

Styleguidist needs [this hack](https://medium.com/@moog16/working-with-sass-create-react-app-v2-69c9629319b1) for their react version to work with scss:
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

For the curious, [here's an example](https://codepen.io/biovisualize/pen/XLNeoO?editors=1010) of using omnisci-ui in the browser (IE11 compatible).