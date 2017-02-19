$("#wrapper").waitForImages(function () {
		$(this).removeClass("hide")
		function leftArrowPressed(e) {
				var $lDot = $(".left-dot"), $rDot = $(".right-dot");

				for (var i = 2; i >= 0; i--) {
						if ($lDot.hasClass("h-offset" + i) && $rDot.hasClass("h-offset" + i)) {

								if (i - 1 >= 0) {
										$lDot.removeClass("h-offset" + (i));
										$rDot.removeClass("h-offset" + (i));
										$lDot.addClass("h-offset" + (i - 1));
										$rDot.addClass("h-offset" + (i - 1));
										break;
								}
								else {

								}
						}
				}
		}

		function rightArrowPressed(e) {
				var $lDot = $(".left-dot"), $rDot = $(".right-dot");

				for (var i = 0; i < 3; i++) {
						if ($lDot.hasClass("h-offset" + i) && $rDot.hasClass("h-offset" + i)) {
								if (i + 1 < 3) {
										$lDot.removeClass("h-offset" + i);
										$rDot.removeClass("h-offset" + i);

										$lDot.addClass("h-offset" + (i + 1));
										$rDot.addClass("h-offset" + (i + 1));
										break;
								}
								else {

								}
						}
				}
		}

		function upArrowPressed(e) {
				var $lDot = $(".left-dot"), $rDot = $(".right-dot");

				for (var i = 2; i >= 0; i--) {
						if ($lDot.hasClass("v-offset" + i) && $rDot.hasClass("v-offset" + i)) {

								if (i - 1 >= 0) {
										$lDot.removeClass("v-offset" + (i));
										$rDot.removeClass("v-offset" + (i));
										$lDot.addClass("v-offset" + (i - 1));
										$rDot.addClass("v-offset" + (i - 1));
										break;
								}
								else {

								}
						}
				}
		}

		function downArrowPressed(e) {
				var $lDot = $(".left-dot"), $rDot = $(".right-dot");

				for (var i = 0; i < 3; i++) {
						if ($lDot.hasClass("v-offset" + i) && $rDot.hasClass("v-offset" + i)) {
								if (i + 1 < 3) {
										$lDot.removeClass("v-offset" + i);
										$rDot.removeClass("offset" + i);

										$lDot.addClass("v-offset" + (i + 1));
										$rDot.addClass("v-offset" + (i + 1));
										break;
								}
								else {

								}
						}
				}
		}

		window.addEventListener("keyup", function (e) {
				pressed = false;
		});


		window.addEventListener("keydown", function (e) {
				console.log(e.keyCode);
				if (e.keyCode == 38) {
						if ($(".a").hasClass("hide") || $(".left-dot").hasClass("v-offset2")) {
								upArrowPressed.call(null, e);
						}
				}
				else if (e.keyCode == 39) {
						rightArrowPressed.call(null, e);
				}
				else if (e.keyCode == 40) {
						if ($(".b").hasClass("hide") || $(".left-dot").hasClass("v-offset0")) {
								downArrowPressed.call(null, e);
						}
				}
				else if (e.keyCode == 37) {
						leftArrowPressed.call(null, e);
				}
				else if (e.keyCode == 49) {
						if ($(".a").hasClass("hide")) {
								$(".a").removeClass("hide");
								if (!$(".left-dot").hasClass("v-offset1") && !$(".left-dot").hasClass("v-offset2"))
										downArrowPressed.call(null, e);
						}
						else
								$(".a").addClass("hide");
				}
				else if (e.keyCode == 50) {
						if ($(".b").hasClass("hide")) {
								$(".b").removeClass("hide");
								if (!$(".left-dot").hasClass("v-offset0") && !$(".left-dot").hasClass("v-offset1"))
										upArrowPressed.call(null, e);
						}
						else
								$(".b").addClass("hide");

				}
		}, false)
});