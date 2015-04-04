var gulp = require('gulp');
var del = require('del');
// var sass = require('gulp-sass');
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var assign = require('lodash.assign');

gulp.task('clean', function () {
  return del(['./build/*']);
});

gulp.task('copy', function () {
  return gulp.src('./docs/index.html')
    .pipe(gulp.dest('./build'));
});

// gulp.task('sass', function () {
//   return  gulp.src(['./docs/**/*.{scss,sass}'])
//               .pipe(sass({ includePaths : ['bower_components', 'node_modules'], errLogToConsole: true}))
//               .pipe(gulp.dest('./build'));
// });

gulp.task('watch', ['copy'], function () {
  // gulp.watch(['./docs/**/*.{scss,sass}'], ['sass']);
  gulp.watch(['./docs/index.html'], ['copy']);
}); 

gulp.task('server', ['copy'], function (callback) {
  var myConfig = require('./webpack.config.js');
  myConfig.plugins = myConfig.plugins.concat(
    new webpack.DefinePlugin({
      "process.env": {
        "NODE_ENV": JSON.stringify("dev_docs")
      }
    })
  );
  
  var webpackCompiler = webpack(myConfig, function(err, stats) {
  });

  new WebpackDevServer(webpackCompiler, {
    contentBase: './build',
    hot: true,
    debug: true
  }).listen(8000, process.env.HOST_IP || 'localhost', function (err, result) {
  });
});
