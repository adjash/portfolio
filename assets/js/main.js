$( document ).ready( () => {
    console.log('test');
});

/*!
 * Determine if an element is in the viewport
 * (c) 2017 Chris Ferdinandi, MIT License, https://gomakethings.com
 * @param  {Node}    elem The element
 * @return {Boolean}      Returns true if element is in the viewport
 */
var isInViewport = function (elem) {
	var distance = elem.getBoundingClientRect();
	return (
		distance.top >= 0 &&
		distance.left >= 0 &&
		distance.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
		distance.right <= (window.innerWidth || document.documentElement.clientWidth)
	);
};
var title = document.querySelector('#section_0_introduction');
var projects = document.querySelector('#section_1_projects');

window.addEventListener('scroll', function (event) {
    if(isInViewport(title)){
        console.log('Title in Viewport')
    }else {
        console.log('title not in viewport')
    }

	if (isInViewport(projects)) {
		console.log('Projects in Viewport');
	} else {
    console.log('projects not in viewport');
  }
  
}, false);
