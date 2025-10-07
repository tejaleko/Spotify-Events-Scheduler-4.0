var s = document.createElement('script');
var c = document.createElement('link');

s.src = chrome.runtime.getURL('spotifyEventsScheduler.js');
(document.head||document.documentElement).appendChild(s);
s.onload = function() {
    s.remove();
};

c.rel = "stylesheet";
c.href = chrome.runtime.getURL('spotifyEventsScheduler.css');
(document.head||document.documentElement).appendChild(c);