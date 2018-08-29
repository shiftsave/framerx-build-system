# Druids

This repository contains a build system to transpile React components into a self-contained library for use in Framer X. This was built in order to bridge the gap between the components used in design and their counterparts in production.

## Instructions
Unfortunately, the current file structure of Framer X does not allow for easy versioning in Github. In order to temporarily mitigate this there will have to be some manual work involved.

- Download `design-system.framerx`
- Rename the file to `MyProject.framerx`
- Open the file in Framer X
- Select Components on the Framer X left-side panel
- Find your desired component and drag into the canvas
- Available properties (e.g. title, type, color...) display on the right-side panel of the interface when a component is selected

## Adding Components
- Add new components to your local version of `design-system.framerx`
- Once done with the new component save and close the file
- Run `yarn sync:src` <- This will extract the contents of your FramerX file into the `src` folder
- Create a new branch `git checkout -B YOUR_BRANCH`
- Push your branch to github `git push --set-upstream origin YOUR_BRANCH`
- Make sure that all work from other contributors is included in your latest version of `druids.framerx` before merging
- Before merging, run `yarn sync:framerx` to build a new Framer X file with the contents of `src`
