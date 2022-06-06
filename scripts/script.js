// scroll to anchor
const anchors = document.querySelectorAll('a[href*="#"]')
for (let anchor of anchors){
	anchor.addEventListener('' +
		'click', function (event){
		event.preventDefault();
		const blockID = anchor.getAttribute('href')
		document.querySelector(''+blockID).scrollIntoView({
			behavior: 'smooth',
			block: 'start'
		})
	})
}

// top button
const topButton = document.querySelector('.top__span');
window.onscroll = function (){
	let top = window.scrollY;
	if (top >= 30){
		topButton.classList.add('active')
	} else {
		topButton.classList.remove('active')
	}
}

function topScroll () {
	window.scrollTo({
		top: 0,
		behavior: "smooth"
	});
}

document.querySelector('.top__span').addEventListener('click', topScroll)
