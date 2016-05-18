/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against the application.
 * 
 * The original comments were replaced but can be seen on
 * https://github.com/udacity/frontend-nanodegree-feedreader/blob/master/jasmine/spec/feedreader.js
 *
 * All choices will be discussed in the README
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
	/* This is our first test suite -it is all about the RSS
	* feeds definitions, the allFeeds variable in our application.
	*/

	describe('RSS Feeds', function() {
		/* Test n°1: given already implemented
		 */
		it('are defined', function() {
			expect(allFeeds).toBeDefined();
			expect(allFeeds.length).not.toBe(0);
		});


		/* Test n°2: check for URL presence.
		 */

		it('have an URL', function() {

			allFeeds.forEach(function(feed){
				expect(feed.url).toBeDefined();

				/*if empty the value should be falsy. 
				Other options: 
				- .toBeTruthy instead of .not.toBeFalsy()
				- a custom marker to check whether the url starts 
				with http:// or https:// */
				expect(feed.url).not.toBeFalsy();
			});
		});

		/* Test n°3: check for the name presence
		 */

		it('have a name', function() {

			allFeeds.forEach(function(feed){
				expect(feed.name).toBeDefined();

				//see comment of test n°2 without  2ndthe option
				expect(feed.name).not.toBeFalsy();
			});
		});
	});


	/*  Write a new test suite named "The menu" */

	describe('The menu', function() {

		/* Test n°4: menu hidden
		 */
		it('is hidden by default', function() {
			var className = $('body').hasClass('menu-hidden');
			// the class "menu-hidden" is the trigger for
			// the sliding menu. 
			// When the class is toggled the menu is hidden.
			// When it is absent the menu will be visible
			expect(className).toBe(true);
		});

		 /* Test n°5: the click function
		  */

		it('changes when clicked', function() {
			var menuIcon = $('.menu-icon-link');
				
			
			// it should tricker the first click and erase the classname
			menuIcon.click();
			var className = $('body').hasClass('menu-hidden');

			expect(className).toBe(false);


			// it should tricker the second click and make the classname reapper
			menuIcon.click();
			className = $('body').hasClass('menu-hidden');
			expect(className).toBe(true);
		});
	});

	/* Write a new test suite named "Initial Entries" */

	describe('Initial Entries', function() {
		/* Test n°7: testing for a feed entry
		 */

		beforeEach( function(done) {
			loadFeed(0, done);

		});

		it('should load initial value', function(done) {
			var container = $('.feed .entry').html();

			expect(container).not.toBeFalsy();
			done();
		});
	});

	/* Write a new test suite named "New Feed Selection" */


	describe('New Feed Selection', function () {
		/* Test n°7u.
		 */

		var FeedText, TestFeed;

		beforeEach( function(done) {

			/* As loading all three possible matches will lead to
			 * a high performance lag (one does already), the test
			 * will pick a ramdom index number above 0.
			*/
			var i = Math.ceil(Math.random() * (allFeeds.length - 1));

			loadFeed(i, done);
			TestFeed = ($('.feed .entry').html());	
		});

		it('should load a different feed', function(done) {
			loadFeed(0); 
			FeedText = ($('.feed .entry').html());
			
			expect(TestFeed).not.toEqual(FeedText);

			done();
		});
	});

}());
