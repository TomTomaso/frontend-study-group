# Chapter 3: Unit Testing

## set up karma and jasmine with phantomjs

* make your project an npm package (if it's not yet). Go to the root of your project and do:

```
npm init
```

`package.json` should appear in the directory. Make sure it has a test command specified:

`"test": "karma start karma.conf.js"`

* install `jasmine` and `karma` modules with plugins (testing frameworks)

```
npm install --save-dev jasmine-core
npm install --save-dev karma
npm install --save-dev karma-phantomjs-launcher
npm install --save-dev karma-chrome-launcher
npm install --save-dev karma-jasmine
```

* create `karma.conf.js` configuration file in the root. The following minimalistic example could serve us:

```javascript
module.exports = function(config) {
   config.set({
      files: ['src/*.js'],
      frameworks: ['jasmine'],
      browsers: ['PhantomJS'],
      plugins: [
         'karma-jasmine',
         'karma-phantomjs-launcher'
      ]
      autoWatch: false,
      singleRun: true
   });
};
```

## exercises

1. Write function for capitalizing a string and write unit tests for it
2. Write function for capitalizing all words in the sentence and write unit tests for it
3. Write function for capitalizing all words in all sentences in given array 
4. Write function for displaying capitalized sentences in the list (`<ul>`) on the web page

## files

Test files should be separated and mirror the naming of the source files, like:
```
src/my-module.js
src/my-module-spec.js
```

## running tests

To start testing run:

```
npm test
```

## example test

```javascript
describe('myFunction', function() {
  it('should return "fancy!"', function() {
    expect(myFunction()).toEqual('fancy!');
  });
});

```

## purpose of unit testing

Purpose of unit-testing:
- automatic monitoring of regressions
- makes continuous improvements and collaboration easy and not scary

Side-effect of unit testing:
- better code isolation/encapsulation; it encourages to clarify and simplify dependencies
- clear code responsibility, clear specification
- test = specification 

## what we should test?

What we should test in unit testing?
- API
- behavior (income-outcome)
- units (small parts of our own code)

What we should NOT test in unit testing?
- implementation details
- algorithm efficiency, performance
- external dependencies

## 2 approaches in unit-testing

- White-box tests (isolated, but implementation-dependent)
- Black-box tests (not isolated, but behavior-based)

## code that is easy to test

- single responsibility
- little dependencies
- functional is easier than OOP
- non-mutating is easier than mutating

## helpful patterns
- mocking
- dependency injection

## when a test is good?
- test should cover main cases and edge cases
- beware of false positives
- how to test a test? break the functionality

## references

* https://karma-runner.github.io/1.0/config/configuration-file.html
* http://jasmine.github.io/2.4/introduction.html
* https://en.wikipedia.org/wiki/Test-driven_development
* https://en.wikipedia.org/wiki/Behavior-driven_development
