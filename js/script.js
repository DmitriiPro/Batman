// Бургер меню
const burger = document.querySelector('.burger');
const navigation = document.querySelector('.navigation');
const navigationClose = document.querySelector('.navigation__close');

burger.addEventListener('click', () => {
	navigation.classList.add('navigation_active');
});

navigationClose.addEventListener('click', () => {
	navigation.classList.remove('navigation_active');
});

// Фоновая музыка

try {
	const mute = document.querySelector('.mute__checkbox');
	const audio = new Audio('audio/waterTower.mp3');

	const checkMute = () => {
		if(mute.checked) {
			audio.play().catch(() => {
				mute.checked = false;
			});
		} else {
			audio.pause();
		}
	};

	if(mute) {
		setTimeout(checkMute, 2000);
	}

	mute.addEventListener('change', checkMute);
} catch {
	console.log('На этой странице нет музыки');
}



try {
	const sliderThumbs = new Swiper('.slider-thumbs', {
	loop: true,
	spaceBetween: 20,
	slidesPerView: 3,
	centeredSlides: true, // отцентровали главный слайд
	loopedSlides: 4,
	});

	sliderThumbs.on('click', (swiper) => {
		swiper.slideTo(swiper.clickedIndex)
	}) // при клике по фото , фото центрируется

	const sliderMain = new Swiper('.slider-main', {
		loop: true,
		spaceBetween: 10,
		loopedSlides: 4,
	});

	sliderThumbs.controller.control = sliderMain;
	sliderMain.controller.control = sliderThumbs;

	const videos = document.querySelectorAll('video');

	sliderMain.on('slideChange', () => {
		for(let i = 0; i < videos.length; i += 1) {
			videos[i].pause();
		}
	});

	const pagination = document.querySelector('.pagination');
	const paginationButton = document.querySelector('.pagination__arrow');

	paginationButton.addEventListener('click', () => {
		pagination.classList.toggle('pagination_active')
	});

} catch {
	console.log('на этой странице нет слайдера')
}

