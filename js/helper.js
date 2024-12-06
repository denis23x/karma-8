(function() {
	const currentUrl = window.location.href;
	const links = document.querySelector("header nav").querySelectorAll('a');

	links.forEach(link => {
		if (link.href.toLowerCase().endsWith(currentUrl.toLowerCase())) {
			link.classList.add('active');
		} else {
			link.classList.remove('active');
		}
	});
})();

function timeAgo(dateString) {
	const now = new Date();
	const inputDate = new Date(dateString);
	const diffInSeconds = Math.floor((now - inputDate) / 1000);

	if (isNaN(inputDate.getTime())) {
		return "Invalid date";
	}

	const units = [
		{ label: "yr", seconds: 31536000 },
		{ label: "mo", seconds: 2592000 },
		{ label: "wk", seconds: 604800 },
		{ label: "d", seconds: 86400 },
		{ label: "hr", seconds: 3600 },
		{ label: "min", seconds: 60 },
	];

	for (const unit of units) {
		const count = Math.floor(diffInSeconds / unit.seconds);
		if (count >= 1) {
			return `${count} ${unit.label}${count > 1 ? "s" : ""} ago`;
		}
	}

	return "just now";
}

function findParentByTag(target, tag) {
	let currentElement = target;

	while (currentElement) {
		if (currentElement.tagName.toLowerCase() === tag) {
			return currentElement;
		}

		currentElement = currentElement.parentElement;
	}

	return null;
}

// Assign

window.x = {
	timeAgo: timeAgo,
	findParentByTag: findParentByTag,
}
