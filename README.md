To get MDC React Components to work with create-react-app you need to set a SASS_PATH environment variable that points to your node_modules directory. To quickly do this on OS X or Linux enter the following in your command line:

export SASS_PATH=./node_modules

yarn start
  Starts the development server.

yarn build
  Bundles the app into static files for production.

yarn test
  Starts the test runner.