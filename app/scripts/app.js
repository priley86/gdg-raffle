(function(document) {
  'use strict';

  document.addEventListener('polymer-ready', function() {
    // Perform some behaviour
    console.log('Polymer is ready to rock!');
  });


	var pages = document.querySelector('core-animated-pages'),
      coreMenu = document.querySelector('core-menu'),
      coreScaffold = document.querySelector('core-scaffold');

  coreMenu.addEventListener('core-select', function() {
		pages.selected = coreMenu.selected;
    coreScaffold.closeDrawer();
	});


// wrap document so it plays nice with other libraries
// http://www.polymer-project.org/platform/shadow-dom.html#wrappers
})(wrap(document));
