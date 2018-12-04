# hbg-react
Library of reusable React components

## Installation
```
npm install --save-dev hbg-react
```

Then require the components you want to use:
```
import {Dropdown, Button} from 'hbg-react';
```

## Local Development
1. Clone the repo into a own directory
```
git clone git@github.com:helsingborg-stad/hbg-react.git hbg-react
```
2. Go to the directory and install dependencies:
```
cd hbg-react
npm install
```
3. Run link command from the hbg-react directory:
```
npm link
```
4. Go to another project directory (which has a package.json) and run:
```
npm link hbg-react
```
5. Make changes to the hbg-react package and run build/watch command:
```
npm run build
npm run start
```
## Publish package to NPM
1. Go to hbg-react directory and make sure you are logged in:
```
npm whoami
```
2. Bump package version: 
```
npm version patch | minor | major
```
3. Push changes to Github and then publish to NPM:
```
npm publish
```
