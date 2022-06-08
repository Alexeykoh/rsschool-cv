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


//burger
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav__menu');

hamburger.addEventListener('click', burger)

function burger(){
	hamburger.classList.toggle('active');
	navMenu.classList.toggle('active');
}

// dark mode
// === === === === ===
const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
	document.documentElement.setAttribute('data-theme', currentTheme);

	if (currentTheme === 'dark') {
		toggleSwitch.checked = true;
	}
}

function switchTheme(e) {
	if (e.target.checked) {
		document.documentElement.setAttribute('data-theme', 'dark');
		localStorage.setItem('theme', 'dark');
	}
	else {document.documentElement.setAttribute('data-theme', 'light');
		localStorage.setItem('theme', 'light');
	}
}

toggleSwitch.addEventListener('change', switchTheme, false);


