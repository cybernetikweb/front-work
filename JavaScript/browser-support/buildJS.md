#Workflow
npm init 

npm i

    eslint-config-prettier
    eslint-config-airbnb-base
    --save-dev webpack@4 --save-exact
    --save-dev webpack webpack-cli
    --save-dev webpack-dev-server
    --save-dev clean-webpack-pulgin
    
**Create** 

-  .eslintrc.json
-  webpack.config.js

**For production**

-  webpack.config.prod.js

**For browser support**
- npm i -D babel-loader @babel/core @babel/preset-env webpack
- npm i --save core-js
- npm i --save regenarator-runtime

**tricks**
- Le tag  ```<noscript> <…/>``` permet de transmettre un à l'utilisateur lorsque JavaScript est désactivée sur son navigateur.
