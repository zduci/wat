// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require_tree .
$(function () {
	
	var genres = {
		rock: {
			name: "rock",
			tags: ["rock"]
		},
		jazz: {
			name: "jazz",
			tags: ["jazz"]
		},
		classical: {
			name: "classical",
			tags: ["classical"]
		},
		folk: {
			name: "folk",
			tags: ["folk"]
		},
		metal: {
			name: "metal",
			tags: ["metal"]
		},
		funk: {
			name: "funk",
			tags: ["funk"]
		},
		electronic: {
			name: "electronic",
			tags: ["electronic"]
		},
		dubstep: {
			name: "dubstep",
			tags: ["dubstep"]
		},
		ska: {
			name: "ska",
			tags: ["ska"]
		},
		punk: {
			name: "punk",
			tags: ["punk"]
		},
		soul: {
			name: "soul",
			tags: ["soul"]
		},
		rnb: {
			name: "rnb",
			tags: ["rnb", "r&b"]
		},
		pop: {
			name: "pop",
			tags: ["pop"]
		}
	};
	
	var setupModeOptions = function () {
		var keys = _.keys(genres);
		var $select = $("#modeSelection");
		var $option;
		console.log(keys);
		_.each(keys, function (key) {
			$option = $("<option>").attr("name", key).html(key);
			$select.append($option);
		});
	};
	
	setupModeOptions();
	
	var $imageElem = $("#mainPhoto");
	
	var images = {
		normal: "#normalModePhoto",
		hipster: "#hipsterModePhoto"
	};
	
	var startGame = function (mode) {
		$("#options").hide();
		var genre = $("#modeSelection").val();
		console.log(genre);
		genre = genres[$.trim(genre)].name;
		game.start(mode, genre, function () {
			$("#options").fadeIn(100);
		});
	};
	
	var changeShownImage = function ($elem, imageIdToShow) {
		if ($(imageIdToShow).hasClass("hidden")) {
			$imageElem.find(".shown").fadeOut(100, function () {
				$(imageIdToShow).fadeIn(100).addClass("shown").removeClass("hidden");
			}).removeClass("shown").addClass("hidden");
		}
	};
	
	var selectModeEvents = function () {
	
		$("#normal").click(function () {
			startGame("normal");
		})
		.mouseover(function () {
			$(this).removeClass("standardOption").addClass("hoveredOption");
			changeShownImage($(this), images.normal);
		})
		.mouseout(function () {
			$(this).removeClass("hoveredOption").addClass("standardOption");
		});
		
		
		$("#hipster").click(function () {
			startGame("hipster");
		})
		.mouseover(function () {
			$(this).removeClass("standardOption").addClass("hoveredOption");
			changeShownImage($(this), images.hipster);
		})
		.mouseout(function () {
			$(this).removeClass("hoveredOption").addClass("standardOption");
		});
		
		$("#social").click(function () {
			
		})
		.mouseover(function () {
			
		})
		.mouseout(function () {
			
		});
		
	};
	
	selectModeEvents();
	
});
