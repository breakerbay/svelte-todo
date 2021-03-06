// When you click inside one of the cards
$(".card").on("click", function (e) {
	// Find the card that got clicked and save it into a variable
	var card = $(this);
	// Find all the links in this card and save them into a variable
	var links = $(card).find("*[href]");
	// Find the main link of this card and save it into a variable
	var mainlink = $(card).find("a.main");

	// If the clicked element is already a link, leave it
	if ($(e.target).is(links)) {
		e.stopPropagation();
	} else {
		// When it's not, make sure the user is not selecting text
		if (window.getSelection().toString() == "") {
			// Find the url of the main link and save it into a variable
			var href = $(mainlink).attr("href");
			// Find the target of the main link and save it into a variable
			var target = $(mainlink).attr("target");

			// If the target is '_blank'
			if (target === "_blank") {
				// Open the url in a new window
				window.open(href);
			} else {
				// If not, open the url in the current window
				window.location = href;
			}
		}
	}
});

// When you hover over one of the cards
$(".card").hover(
	function () {
		// Find the card that got hovered and save it into a variable
		var card = $(this);
		// Find the main link of the card and save it into a variable
		var mainlink = $(card).find("a.main");
		// Find the url of the main link and save it into a variable
		var href = $(mainlink).attr("href");

		// Show a status bar with the url of the main link
		window.status = href;
		// CSS fallback solution in case no browser status bar is showing
		$(".statusbar").text(href);
		$(".statusbar").css("opacity", "1");
	},
	function () {
		// On hover out, empty the status bar or hide it
		window.status = "";
		$(".statusbar").css("opacity", "0");
	}
);

// When you hover over one of the other links inside the card
$(".card a").hover(
	function () {
		// Hide the fallback status bar because the browser already shows one
		$(".statusbar").css("opacity", "0");
	},
	function () {
		// On hover out, show the fallback status bar once again.
		$(".statusbar").css("opacity", "1");
	}
);