'use strict';

const square = document.querySelector('.square'),
	btn = document.querySelector('.btn');

let squareLeft = square.offsetLeft;

console.log(squareLeft);

const animate = ({timing, draw, duration}) => {
	let start = performance.now();

	requestAnimationFrame(function animate(time) {
		let timeFraction = (time - start) / duration;

		if(timeFraction > 1) {
			timeFraction = 1;
		}

		let progress = timing(timeFraction);

		draw(progress);

		if(timeFraction < 1) {
			requestAnimationFrame(animate);
		}
	});
};

animate({
	duration: 2000,

	timing(timeFraction) {
		return timeFraction; 
	},

	draw(progress) {
		square.style.left = Math.floor(progress * 1000) + 'px';
		square.style.top = Math.floor(progress * 1000) + 'px';
	}
});