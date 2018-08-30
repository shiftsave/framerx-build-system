# Framer X Build System
<img width="1439" alt="screen shot 2018-08-30 at 3 18 12 pm" src="https://user-images.githubusercontent.com/1121873/44874068-f9f51e80-ac67-11e8-928f-8821212e9cdb.png">

This repository contains a build system to transpile React components into a self-contained library for use in Framer X. This was built in order to bridge the gap between the components used in design and their counterparts in production.

### Installation

1. Clone, download or fork this repository
2. `cd framerx-library && yarn install`

### Available Commands
#### `yarn build`
Bundles the production codebase into ES6 and copies it into the `/lib` inside Framer X contents.

#### `yarn sync:lib`
Replaces `/lib` inside Framer X contents with the latest version of the build.

#### `yarn sync:src`
replaces the contents of `/src` with the content of the Framer X file.

#### `yarn sync:framerx`
Builds a new Framer X file in case of conflicts or file corruption with the contents of `/lib` and `/src`.
