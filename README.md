# Druids

This repository contains ES6-ready components built on top of the `ui` components used in production. This was built in order to bridge the gap between the components used in design and their counterparts in production.

The `druids` lib currently supports:
- [x] Button
- [x] Checkbox
- [ ] Group
- [ ] InputText
- [ ] Label
- [x] Toggle
- [x] Pill
- [ ] Monitor Pill
- [ ] Time Pill
- [ ] Avatar
- [x] NumberedSection
- [ ] NumberedTitle
- [ ] Tag
- [ ] FacetValue
- [x] [CONSTANTS](https://github.com/DataDog/druids/blob/master/index.ts#L71)


>  The `druids` library supports every components mentioned above. It's only the `druids.framerx` file that supports the one's checked.

_👆 This info is specific to people who can to use druids in any ES6 project._


## Instructions

### Using with React/ES6

- Pull this repo and run `yarn link` (this links the `druid` npm package linkable)
- Now head to your React project or [create one](https://github.com/facebook/create-react-app/#creating-an-app)
- In your project, run `yarn link druids` to link the local package
- Now open your `App.js` and import any component `import { Button } from 'druids'`
- Refer the [React styleguide](https://dd.datad0g.com/internal/styleguide/react) for component documentation.

### Using with Framer X

Unfortunately, the current file structure of Framer X does not allow for easy versioning in Github. In order to temporarily mitigate this there will have to be some manual work involved.

- Download the [druids.framerx file](https://github.com/DataDog/druids/blob/master/druids.framerx?raw=true)
- Rename the file to `MyProject.framerx`
- Open the file in Framer X
- Select Components on the Framer X left-side panel
- Find your desired component and drag into the canvas
- Available properties (e.g. title, type, color...) display on the right-side panel of the interface when a component is selected

## Contributing

### ES6 library

- Clone this repository `git clone https://github.com/DataDog/druids.git`
- `cd` into it and run `yarn
- Make sure the [dogweb](https://github.com/DataDog/dogweb) repo is at the same folder level as the `druids` repo else you might have to update the path [here](https://github.com/DataDog/druids/blob/master/webpack.config.js#L19)
- Create a new branch `git checkout -B YOUR_BRANCH`
- Make your changes in the `index.ts` file which holds all the components the library exports
- Run `yarn build`
- Test your `lib` in a React or Framer X project first. **Only then proceed!**
- Run `zip -ur druids.framerx lib` to update the library inside of the Framer X project
- If you are adding a new component to Framer X as well, follow the steps below 👇

### Framer X
- Clone this repository `git clone https://github.com/DataDog/druids.git`
- Add new components to your local version of `druids.framerx`
- Copy the new component file(s) from the FramerX `content` folder into `src/components`
- Create a new branch `git checkout -B YOUR_BRANCH`
- Push your branch to github `git push --set-upstream origin YOUR_BRANCH`
- Open a PR and request a review from other contributors
- Make sure that all work from other contributors is included in your latest version of `druids.framerx` before merging
- Merge on approval of changes


## Help

[#designops](https://dd.slack.com/messages/CBW0L8R7W)
