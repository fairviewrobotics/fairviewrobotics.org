# fairviewrobotics.org

## Description

This repo holds every associated with [http://fairviewrobotics.org/](http://fairviewrobotics.org/)

This is a react application and thus is a single page app, to learn more look at the [react readme](REACT-README)

## Usage

#### How the heck am I supposed to run this?

This project uses npm (node package manager). NPM downloads libraries that we can use, saving us loads of time.
Checkout [this stack overflow question](https://stackoverflow.com/questions/31930370/what-is-npm-and-why-do-i-need-it) for a quick answer
and this [sitepoint article](https://www.sitepoint.com/beginners-guide-node-package-manager/) for more detail information.

**NOTE:**

You are going to have to install [NPM and nodejs](https://nodejs.org/en/). NPM is install with node.

Answer:

First install everything: `npm install`

Then run the dev server: `npm start`

Done!

#### How do I deploy the site?

Travis ci does all the heavy lifting for us! Travis will build the project and will then automatically delploy it to
surge (surge is the site that hosts our files on the web, a better github.io) for us! Also, both travis ci and surge are free!


#### Styling with CSS Modules

We are using a cool method of including css called [CSS Modules](https://github.com/css-modules/css-modules).
This allows us to isolate css to a certain component. Behind the scenes [custom-react-scripts](https://github.com/kitze/custom-react-scripts)
is handling the transformation for us. The way it works is a module css classes will be appended a unique name to differnate itself from other classes.
For example, css module with class `.container` in the component Header might become `.header-container`.
Why would we want this? [see some reasons here.](https://blog.pusher.com/css-modules-react/)

We can still use global css classes. You just create a file **without** `.module.css`, instead use the regular style `.css`.

Why `.module.css` for CSS modules? That's just how [custom-react-scripts](https://github.com/kitze/custom-react-scripts) identifies modules.


**NOTE:**

NPM scripts that are [custom](https://stackoverflow.com/questions/36433461/how-do-i-add-a-custom-script-to-my-package-json-file-that-runs-a-javascript-file)
need to start like so `npm run COMMAND`

Also, the deploy command runs the build command (`npm run build`) then deploys the build folder using [gh-pages](https://github.com/tschaub/gh-pages#gh-pages) up to the gh-pages branch.