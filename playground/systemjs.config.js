'use strict';
/**
 * System configuration for Angular samples
 * Adjust as necessary for your application needs.
 */
(function () {
  System.config({
    paths: {
      // paths serve as alias
      'npm:': '../node_modules/'
    },
    // map tells the System loader where to look for things
    map: {
      // our app is within the app folder
      app: 'app',

      // angular bundles
      '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
      '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
      '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
      '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
      '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
      '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
      '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
      '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',
      '@angular/material': 'npm:@angular/material/bundles/material.umd.js',
      '@angular/material/core': 'npm:@angular/material/bundles/material-core.umd.js',
      '@angular/material/button': 'npm:@angular/material/bundles/material-button.umd.js',
      '@angular/material/input': 'npm:@angular/material/bundles/material-input.umd.js',
      '@angular/material/select': 'npm:@angular/material/bundles/material-select.umd.js',
      '@angular/material/form-field': 'npm:@angular/material/bundles/material-form-field.umd.js',
      '@angular/material/dialog': 'npm:@angular/material/bundles/material-dialog.umd.js',
      '@angular/flex-layout': 'npm:@angular/flex-layout/bundles/flex-layout.umd.js',
      '@angular/common/http': 'npm:@angular/common/bundles/common-http.umd.js',
      '@angular/animations': 'npm:@angular/animations/bundles/animations.umd.js',
      '@angular/animations/browser': 'npm:@angular/animations/bundles/animations-browser.umd.js',
      '@angular/platform-browser/animations': 'npm:@angular/platform-browser/bundles/platform-browser-animations.umd.js',
      '@angular/cdk/bidi': 'npm:@angular/cdk/bundles/cdk-bidi.umd.js',
      '@angular/cdk/keycodes': 'npm:@angular/cdk/bundles/cdk-keycodes.umd.js',
      '@angular/cdk/a11y': 'npm:@angular/cdk/bundles/cdk-a11y.umd.js',
      '@angular/cdk/platform': 'npm:@angular/cdk/bundles/cdk-platform.umd.js',
      '@angular/cdk/overlay': 'npm:@angular/cdk/bundles/cdk-overlay.umd.js',
      '@angular/cdk/portal': 'npm:@angular/cdk/bundles/cdk-portal.umd.js',
      '@angular/cdk/collections': 'npm:@angular/cdk/bundles/cdk-collections.umd.js',
      '@angular/cdk/observers': 'npm:@angular/cdk/bundles/cdk-observers.umd.js',
      '@angular/cdk/scrolling': 'npm:@angular/cdk/bundles/cdk-scrolling.umd.js',
      '@angular/cdk/accordion': 'npm:@angular/cdk/bundles/cdk-accordion.umd.js',
      '@angular/cdk/layout': 'npm:@angular/cdk/bundles/cdk-layout.umd.js',
      '@angular/cdk/table': 'npm:@angular/cdk/bundles/cdk-table.umd.js',
      '@angular/cdk/stepper': 'npm:@angular/cdk/bundles/cdk-stepper.umd.js',
      '@angular/cdk/coercion': 'npm:@angular/cdk/bundles/cdk-coercion.umd.js',
      'rxjs': 'npm:rxjs',
      'tslib': 'npm:tslib/tslib.js',
      'angular-in-memory-web-api': 'npm:angular-in-memory-web-api/bundles/in-memory-web-api.umd.js',
      '@firestitch/dialog': '../dist/dialog.umd.js',
      '@firestitch/common': 'npm:@firestitch/common/common.umd.js',
      '@firestitch/store': 'npm:@firestitch/common/store.umd.js',
      '@firestitch/datepicker': 'npm:@firestitch/common/datepicker.umd.js'
    },
    packages: {
      app: {
        defaultExtension: 'js',
        meta: {
          './*.js': {
            loader: 'systemjs-angular-loader.js'
          }
        }
      },
      rxjs: {
        defaultExtension: 'js'
      }
    }
  });
})(this);
