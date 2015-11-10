'use strict';

import gulp     from 'gulp';
import webpack  from 'webpack-stream';
import path     from 'path';
import sync     from 'run-sequence';
import serve    from 'browser-sync';
import rename   from 'gulp-rename';
import template from 'gulp-template';
import fs       from 'fs';
import yargs    from 'yargs';
import lodash   from 'lodash';

let reload = () => serve.reload();
let root = 'client';

// helper method for resolving paths
let resolveToApp = (glob) => {
  glob = glob || '';
  return path.join(root, 'app', glob); // app/{glob}
};

let resolveTo = (glob, dir = 'app/components') => {
  glob = glob || '';
  return path.join(root, dir, glob); // app/components/{glob}
};

// map of all paths
let paths = {
  js: resolveTo('**/*!(.spec.js).js', 'app/components'), // exclude spec files
  styl: resolveTo('**/*.styl', 'app'), // stylesheets
  html: [
    resolveTo('**/*.html', 'app'),
    path.join(root, 'index.html')
  ],
  entry: path.join(root, 'app/app.js'),
  output: root,
  blankComponentTemplate: path.join(__dirname, 'generator', 'component/**/*.**'),
  blankCommonTemplate: path.join(__dirname, 'generator', 'common/**/*.**')
  //blankTemplates: path.join(__dirname, 'generator', 'component/**/*.**')
};
///////////////////////////////////////////////////////////////////////////////////
// generate common and feature component functions & utilities
///////////////////////////////////////////////////////////////////////////////////

// capitalize each word in sentence
String.prototype.toTitleCase = function(n) {
  var s = this;
  if (1 !== n) s = s.toLowerCase();
  return s.replace(/\b[a-z]/g,function(f){return f.toUpperCase()});
}

// validates last character in string for given argument
String.prototype.endsWith = function(suffix) {
  return this.indexOf(suffix, this.length - suffix.length) !== -1;
};

// formats camelcase to snake-case in path
String.prototype.formatPath = function() {
  var path = "";
  var dir = this.split(/\//ig);
  //path += dir.forEach(x => x + "/");
  for (var i = 0; i < dir.length; i++) {
    path += dash(dir[i]) + "/";
  }
  path = path.trim();
  return path.endsWith("/") ? path.replace(/\S\s*$/, '') : path;
};

// capitalize string
let cap = (val) => {
  return val.charAt(0).toUpperCase() + val.slice(1);
};

// insert dash between words in string
let dash = (val) => {
  return val.replace(/[a-z][A-Z]/g, function(str, offset) {
      return str[0] + '-' + str[1].toLowerCase();
  });
};

// insert space between words in string
let space = (val) => {
  return val.replace(/[a-z][A-Z]/g, function(str, offset) {
      return str[0].toLowerCase() + ' ' + str[1].toLowerCase();
  });
};

// capitalize and insert space between words in string
let proper = (val) => {
  return val.replace(/[a-z][A-Z]/g, function(str, offset) {
      return str[0].toTitleCase() + ' ' + str[1].toTitleCase();
  });
};

// capitalize and insert space between words in string
let titlecase = (val) => {
  var s = this;
  if (1 !== val) s = s.toLowerCase();
  return s.replace(/\b[a-z]/g, function(f) { return f.toUpperCase(); });
};

// path to common directory for importing stylus files
let common = (haystack, needle, baseline = '../../') => {
    if (!needle || !haystack) {
      return baseline + 'common';
    } else {
      var directory = haystack.split(needle),
          backspace = baseline;
      
      for (var i = 0, len = directory.length; i < len; i++) {
          backspace += '../';
      }
      
      return backspace + 'common';
    }
  }

// use webpack.config.js to build modules
gulp.task('webpack', () => {
  return gulp.src(paths.entry)
    .pipe(webpack(require('./webpack.config')))
    .pipe(gulp.dest(paths.output));
});

gulp.task('serve', () => {
  serve({
    port: process.env.PORT || 3000,
    open: false,
    server: { baseDir: root }
  });
});

gulp.task('watch', () => {
  let allPaths = [].concat([paths.js], paths.html, [paths.styl]);
  gulp.watch(allPaths, ['webpack', reload]);
});

gulp.task('component', () => {
  
  let name = yargs.argv.name;
  let parentPath = yargs.argv.parent || '';
  let destPath = path.join(resolveTo(), parentPath.formatPath(), dash(name));

  return gulp.src(paths.blankComponentTemplate)
    .pipe(template({
      name: name,
      hyphenated: dash(name),
      whitespace: space(name),
      uppercase: cap(name),
      propercase: space(name).toTitleCase(1),
      commonPath: common(parentPath, '/')
    }))
    .pipe(rename((path) => {
      path.basename = path.basename.replace('component', dash(name));
    }))
    .pipe(gulp.dest(destPath));
});

gulp.task('common', () => {

  let name = yargs.argv.name;
  let parentPath = yargs.argv.parent || '';
  let destPath = path.join(resolveTo('', 'app/common'), parentPath.formatPath(), dash(name));

  return gulp.src(paths.blankCommonTemplate)
    .pipe(template({
      name: name,
      hyphenated: dash(name),
      whitespace: space(name),
      uppercase: cap(name),
      propercase: space(name).toTitleCase(1),
      commonPath: common(parentPath, '/', '../')
    }))
    .pipe(rename((path) => {
      path.basename = path.basename.replace('common', dash(name));
    }))
    .pipe(gulp.dest(destPath));
});

gulp.task('default', (done) => {
  sync('webpack', 'serve', 'watch', done);
});



