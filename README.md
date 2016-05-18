# Feedreader and Jasmine Testing

Authors
----
* the initial program was designed by the [udacity team](https://github.com/udacity/frontend-nanodegree-feedreader/graphs/contributors) under the lead of [Mike Wales](https://www.linkedin.com/in/michaelwales)

* the **adaptation** was done by **Guillaume Simler**, a Udacity Frontend Nanodegree, more information and contact details on my [Github profile](https://github.com/guillaumesimler)

Project description
----

The aim of this project is to train how to use of testing suite, especially Jasmine.js. 

The **original README** can be found on the [initial Github repo](https://github.com/udacity/frontend-nanodegree-feedreader/blob/master/README.md)

Most of the works were done in **.\jasmine\spec\feedreader.js**. The other files were left untouched save
* **Readme** which was updated
* **index.html** which was commented for better understanding its structure. 

Used resources
----

### Libraries & frameworks

* [**handlebars**](http://handlebarsjs.com/)
* [**jquery**](https://jquery.com/)
* [**Jamine JS**](http://jasmine.github.io/2.1/introduction.htmls)

### APIs

* [**Google Loader API**](https://developers.google.com/loader/), used for loading the RSS feeds


Discussions about tests
----

#### General comments

There is no real right and wrong once a test is working. There are more **suitable tests** than others. This section will be used to discuss the tests choosen and potential alternatives.

#### Test n°1

There is not much to say as it was already given. The test is pretty trivial
1. The object must be defined
2. The object must have more than one elements

#### Test n°2

The first expectation is quite obvious: the url attribute must be defined. 

The second choice might be subject to discussion. I choose a compromise:
* The value of feed.url must not be falsy. With this option you can the safety not to have a blank, a null, an undefined value.
* Of course not beeing falsy is equal of being truthy (toBeTruthy() )

**But** __is it enough__? Certainly one could move to a custom matcher in order to be more certain to have an url. 
We would test if feed.url is 
* a string
* and starts with http:// or https://

#### Test n°3

The third test is similar to the second test without the discussion about the name. You mmight however want to test if it is a string

#### Test n°4

The sliding menu is managed by the presence or the absence of the class **"menu-hidden"** attached to the **body tag**:
* when the class is toggled, the menu will be invisible (which is the standard approach)
* when it is untoggled (__by clicking on the hamburger slides__) the class is removed

So the obvious test is to check that this class name is toggled 

#### Test n°5

This test is pretty trivial when reading the description of test n°4, especially after discovering the [$.click() function](https://api.jquery.com/click/). 

As the program starts with the class 'menu-hidden' in, the first click should toggle it off. (First expectation)
The second click should toggle it in again (second expectation).

#### Test n°6 

Let's put aside the obvious __asynchronous challenge__. The test is based on the used templating system:
* if the template does not work, there would be no **class ".entry"**
* if the feed call does not work, there would be no "html" value

#### Test n°7

This test might be subject to discussions as this is a clear **trade off**. Each asynchronous test
is a burden for the performance of the application,

So instead of loading all other indexes (than the standard 0), I took the liberty to take only one generated randomly from all potential suspect. 

Otherwise I could loop all elements, push their results in an array and check whether they are different from the index[0].

Repository 
----

* the [working project](https://github.com/guillaumesimler/nanofep8)

License
----

The **current version** is under [_MIT License_](https://github.com/guillaumesimler/nanofep8/blob/master/LICENSE.txt) 