// ==UserScript==
// @name         Twitch Remove Discover Link
// @namespace    https://www
// @version      2.0
// @description  Remove the discover link on Twitch
// @author       Mark Harvey
// @match        https://www.twitch.tv/*
// @grant        none
// @require      http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js
// @updateURL       https://github.com/crimsonfalconer/Userscript_TwitchRemoveDiscover/raw/master/TwitchRemoveDiscover.user.js
// @downloadURL     https://github.com/crimsonfalconer/Userscript_TwitchRemoveDiscover/raw/master/TwitchRemoveDiscover.user.js
// ==/UserScript==

function removeDiscover() {
	$('[data-a-target="discover-link"]').remove();
}

(function() {
    'use strict';
    removeDiscover();
	
	$( window ).on( "load", function() {
	    removeDiscover();
	});
})();