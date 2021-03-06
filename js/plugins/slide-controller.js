'use strict';

// Render the slides markdown.
module.exports = function ({slideContainer}) {

	const slideController = document.createElement('div');
	slideController.classList.add('a-slides_slide-controller');

	const closeButton = document.createElement('a');
	closeButton.innerHTML = '×';
	closeButton.on('click', () => slideController.classList.add('hidden'));
	closeButton.classList.add('a-slides_slide-controller_close-button');
	slideController.appendChild(closeButton);

	function append(el) {
		slideController.insertBefore(el, closeButton);
	}

	function makeAndBindButton(text, fn) {
		const button = document.createElement('button');
		button.innerHTML = text;
		button.on('click', fn);
		append(button);
		return button;
	}

	makeAndBindButton('Begin', () => slideContainer.classList.toggle('presentation'));
	makeAndBindButton('Thumbnail', () => slideContainer.classList.toggle('hide-presentation'));
	slideController.on('click', (e) => e.cancelBubble = true);

	slideContainer.appendChild(slideController);

	module.exports.makeAndBindButton = makeAndBindButton;
	module.exports.append = append;
};
