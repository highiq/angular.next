# &lt;angular-next&gt;Generation Application&lt;/angular-next&gt;

Angular.NEXT repository is designed as a forward thinking, next generation, Angular 1.X application that follows the component pattern and comes equipped with it's own component generator. The patterns and design decisions made in this repository were made with Angular 2 in mind. 

By adhering to modularity and componentization of all features and views in the application, Angular.NEXT is prepared for an easy migration from version 1 to 2 once you or your team is ready to make that leap.

In the meantime, Angular.NEXT is built for scale and maintainability in large, complex enterprise applications and one of the biggest advantages and benefits it provides the end user is the ability to scale horizontally in large numbers without affecting the maintainability index of the application. 

Why put off to tomorrow what can be done today? The future is here and now with Angular.NEXT.

___

## EXPLAINED WITH CODE 

__app.js__

    angular.next() = (ng) => {
        ng.pattern('component-based')
    }

__gulp.babel.js.js__

    import es6 from 'js-features';
    import babel from 'js-transpiler';
    import webpack from 'build-system';
    import angular from '1-to-2-migration-plan';
    import component from 'component-based-pattern';

    let angular = () => es6.next();

    angular.task('baseline', (done) => {
        sync(webpack, babel, es6, next, done); 
    });

___

## APPLICATION FEATURES:
* [Angular](https://angularjs.org)
* [ES6](https://git.io/es6features)
* [Webpack](http://webpack.github.io/)
* [Babel](http://webpack.github.io/)
* [Component-Based Pattern](http://tracks.roojoom.com/r/35913#/introduction)

__This repository serves as a starter or baseline project for building advanced, complex enterprise Angular applications written with ES6, using [Gulp](http://gulpjs.com/) and [Webpack](http://webpack.github.io/) for the build process.__

* These are its features:
* The best practice in directory / file organization for Angular using the Component-Based Pattern
* A ready-to-go build system for working with [ES6](https://git.io/es6features)
* Gulp Tasks for generating additional boilerplate Angular components
* A full testing system in place
* [Stylus](https://learnboost.github.io/stylus/) support
___

# TABLE OF CONTENTS
* [Walkthrough](#walkthrough)
    * [Build System](#build-system)
    * [File Structure](#file-structure)
    * [Testing Setup](#testing-setup)
* [Getting Started](#getting-started)
    * [Dependencies](#dependencies)
    * [Installing](#installing)
    * [Running the App](#running-the-app)
        * [Gulp Tasks](#gulp-tasks)
        * [Testing](#testing)
		* [Generating Components](#generating-components)		
___

# WALKTHROUGH
## BUILD SYSTEM

__Angular.NEXT__ uses __`Gulp`__ and __`Webpack`__ together for its build system.

__`Webpack`__ handles all file-related concerns:

* Transpiling from __`ES6`__ to __`ES5`__ with __`Babel`__
* Loading HTML files as modules
* Transpiling stylesheets and appending them to the DOM
* Bundling the app
* Loading all modules
* Doing all of the above for `*.spec.js` files as well

__`Gulp`__ is the orchestrator:

* Starting and calling __`Webpack`__
* Starting a development server
* Refreshing the browser and rebuilding on file changes
* Generating boilerplate for the Angular app
___

## FILE STRUCTURE
I use a componentized approach with __Angular.NEXT__. This will be the standard with Angular 2 and helpful, if using Angular's new router. Everything is a component. A component is a self-contained concern such as a feature or strictly-defined UI element such as a header, sidebar, or footer. Other characteristic of a component is that it contains its own stylesheet, template, controller, route, service, and test specification. Here's how it looks:

__CLIENT__

* app/
 * app.js * app entry file
 * app.html * app template
 * common/ * functionality pertinent to several components propagate into this directory
 * components/ * where components live
 * components.js * components entry file
 * home/ * home component
     * home.js * home entry file (routes, configurations, and declarations occur here)
     * home.component.js * home "directive"
     * home.controller.js * home controller
     * home.styl * home styles
     * home.html * home template
     * home.spec.js * home specs (for entry, component, and controller)

___

## TEST SETUP
All tests are also written in __`ES6`__. I use __`Webpack`__ to take care of the logistics of getting those files to run in the various browsers, just like with my client files. This is my test stack:

* `Karma`
* `Webpack` + `Babel`
* `Mocha`
* `Chai`

To run tests, type __`npm test`__ or __`karma start`__ in the terminal. Read more about testing __[(below)](#testing)__.

___

# GETTING STARTED

## DEPENDENCIES
Tools needed to run this app:

* __`node`__ and __`npm`__

Once you have these, install the following as globals:
__`npm install -g gulp karma karma-cli webpack`__

___

## INSTALLING
* __`fork`__ this repo
* __`clone`__ your fork
* __`npm install`__ to install dependencies

___

## RUNNING THE APP
__Angular.NEXT__ uses Gulp to build and launch the development environment. After you have installed all dependencies, you may run the app. Running __`gulp`__ will bundle the app with `webpack`, launch a development server, and watch all files. The port will be displayed in the terminal.
 
### GULP TASKS
Here's a list of available tasks:

* __`webpack`__
  * Runs Webpack, which will transpile, concatenate, and compress (collectively, "bundle") all assets and modules into `client/bundle.js`.
* __`serve`__
  * Starts a dev server via `browser-sync`, serving the client folder.
* __`watch`__
  * Listens for file changes, rebuilds with Webpack, then refreshes the browser.
* __`default`__
	* Runs `webpack`, `serve`, and `watch`--in that order.
* __`component`__
  * Scaffolds a new Angular component. Read [(below)](#generating-components) for usage details.

___

### TESTING
To run the tests, run __`npm test`__ or __`karma start`__.

__`Karma`__ combined with __`Webpack`__ runs all files matching __`*.spec.js`__ inside the `app` folder. This allows us to keep test files local to the component which keeps us in good faith with continuing to build our app modularly. The file __`spec.bundle.js`__ is the bundle file for all our spec files that Karma will run.

Be sure to define your __`*.spec.js`__ files within their corresponding component directory. You must name the spec file like so, __`[name].spec.js`__. If you don't want to use the __`.spec.js`__ suffix, you must change the __`regex`__ in __`spec.bundle.js`__ to look for whatever file(s) you want.

__`Mocha`__ is the testing suite and __`Chai`__ is the assertion library. If you would like to change this, see __`karma.conf.js`__.

___

### GENERATING COMPONENTS
Following a consistent directory structure between components offers us the certainty of predictability. We can take advantage of this certainty by creating a gulp task to automate the "instantiation" of our components. The component boilerplate task generates this:

* component-name/
 * component-name.js // entry file where all its dependencies load
 * component-name.component.js
 * component-name.controller.js
 * component-name.html
 * component-name.styl // scoped to affect only its own template
 * component-name.spec.js // contains passing demonstration tests

To generate a component, run __`gulp component --name componentName`__

___

__TASK ARGUMENTS AND CONFIGURATION__

The parameter following the __`--name`__ flag is the name of the component to be created.

The component will be created inside __`client/app/components`__. 

To change this, apply the __`--parent`__ flag, followed by a path relative to __`client/app/components/`__

___


__CODE EXAMPLE__

__GENERATE COMPONENT TASK__

        gulp component --name signUp --parent auth

__OUTPUT__

        client/app/components/auth/sign-up/
        client/app/components/auth/sign-up/sign-up.js
        client/app/components/auth/sign-up/sign-up.component.js
        client/app/components/auth/sign-up/sign-up.controller.js
        client/app/components/auth/sign-up/sign-up.html
        client/app/components/auth/sign-up/sign-up.styl
        client/app/components/auth/sign-up/sign-up.spec.js


__GENERATE COMMON TASK__

        gulp common --name footer

__OUTPUT__

        client/app/common/footer/
        client/app/common/footer/footer.js
        client/app/common/footer/footer.component.js
        client/app/common/footer/footer.controller.js
        client/app/common/footer/footer.html
        client/app/common/footer/footer.styl
        client/app/common/footer/footer.spec.js

___

__IMPORTANT NOTE:__

Because the argument to __`--name`__ applies to the folder name and the actual component name, make sure to __camelcase__ the component names.

An example of this would be __`gulp component --name teamMembers --parent companyNews`__

This would produce __snake-case__ file name and directory from the __`gulp component`__ task.

The output of this would be __`client/app/components/company-news/team-members`__

