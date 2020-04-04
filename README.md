<p align="center">
  <h1>gDoctor</h1><br>
  gDoctor is an open source mobile app built with React Native and OsmiCSX for learning purpose.
</p>

<p align="center">
    <a href="LICENSE"><img src="https://img.shields.io/github/license/libscode/gDoctor.svg?style=flat" alt="LICENSE"></a>
    <a href="https://github.com/DeVoresyah/JeptureApp/stargazers"><img src="https://img.shields.io/github/stars/libscode/gDoctor.svg?style=flat" alt="Stars"></a>
    <a href="http://standardjs.com/"><img src="https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat" alt="JS Standard"></a>
    <a href="https://github.com/facebook/react-native"><img src="https://img.shields.io/badge/react--native-0.61.4-blue.svg?style=flat" alt="React Native"></a>
    <a href="https://github.com/OsmiCSX/osmicsx"><img src="https://img.shields.io/npm/v/osmicsx.svg" alt="OsmiCSX"></a>
</p>

---

<p align="center">
  <img src="https://i.imgur.com/kqhqifr.png" width="200px" height="400px;" />
  <img src="https://i.imgur.com/qEYYYzU.png" width="205px" height="400px;" />
</p>

## Prerequisites
- Xcode or Android Studio installed and exported on your ~/.bash_profile or similar
- JDK 1.8
- Node >= 12.*
- react-native-cli

## Installation
open terminal and change directory to your desired folder, then:
```
$ git clone git@github.com:libscode/gDoctor.git YourAppName
$ cd YourAppName
$ yarn install
$ cd ios && pod install
```
## Run Your App
```
$ npx react-native run-android
$ npx react-native run-ios
```
## License
The code is available at [GitHub][home] under the [MIT license][license-url].

## Additional
**To Lint on Commit**

This is implemented using [husky](https://github.com/typicode/husky). There is no additional setup needed.

**Bypass Lint**

If you have to bypass lint for a special commit that you will come back and clean (pushing something to a branch etc.) then you can bypass git hooks with adding `--no-verify` to your commit command.

**Understanding Linting Errors**

The linting rules are from JS Standard and React-Standard.  [Regular JS errors can be found with descriptions here](http://eslint.org/docs/rules/), while [React errors and descriptions can be found here](https://github.com/yannickcr/eslint-plugin-react).

## :closed_lock_with_key: Secrets

This project uses [react-native-config](https://github.com/luggit/react-native-config) to expose config variables to your javascript code in React Native. You can store API keys
and other sensitive information in a `.env` file:

```
API_URL=https://myapi.com
GOOGLE_MAPS_API_KEY=abcdefgh
```

and access them from React Native like so:

```
import Secrets from 'react-native-config'

Secrets.API_URL  // 'https://myapi.com'
Secrets.GOOGLE_MAPS_API_KEY  // 'abcdefgh'
```

The `.env` file is ignored by git keeping those secrets out of your repo.

### Get started:
1. Copy .env.example to .env
2. Add your config variables
3. Follow instructions at [https://github.com/luggit/react-native-config#setup](https://github.com/luggit/react-native-config#setup)
4. Done!

## Credit
[Medical Icon Pack (FlatIcon)](https://www.flaticon.com/packs/medical-71)

## Contributors
Suggestions and contributions are welcome via Pull Requests.
<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
| [<img src="https://avatars3.githubusercontent.com/u/8052370" width="100px;"/><br /><sub><b>Rully Ardiansyah</b></sub>](https://github.com/DeVoresyah)<br />[💻](https://github.com/libscode/gDoctor/commits?author=DeVoresyah "Code") [📖](https://github.com/libscode/gDoctor/commits?author=DeVoresyah "Documentation") [💬](#question-devoresyah "Answering Questions") [👀](#review-devoresyah "Reviewed Pull Requests") [💡](#example-devoresyah "Examples") | [<img src="https://cdn.dribbble.com/users/3923944/avatars/normal/98dc1d0a1e98f9372c221a92c1f48003.jpg?1568781500" width="100px;"/><br /><sub><b>Gilang Segara Bening</b></sub>](https://dribbble.com/bungspaces)<br /> [🎨](#logo-design "UI/UX Design") [💡](#concept-arkanpo "Concept") |
| :---: | :---: |
<!-- ALL-CONTRIBUTORS-LIST:END -->

[home]: https://github.com/libscode/gDoctor
