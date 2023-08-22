// const scrollContainer = document.querySelector('.cards-main');

// scrollContainer.addEventListener('wheel', (e) => {
// 	e.preventDefault();
// 	scrollContainer.scrollLeft += e.deltaY;
// });

function setStickyContainerSize() {
	scrollContainer.forEach((container) => {
		const stickyContainerHeight = container.querySelector('.cards-main').scrollWidth;
		container.setAttribute('style', 'height: ' + stickyContainerHeight + 'px');
	});
}
