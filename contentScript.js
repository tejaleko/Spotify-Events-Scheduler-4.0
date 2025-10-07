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
const SCRIPT_FLAG = 'spotifyEventsSchedulerInjected';
const STYLE_ID = 'spotify-events-scheduler-style';

const root = document.head || document.documentElement;

if (!document.documentElement.dataset[SCRIPT_FLAG]) {
  document.documentElement.dataset[SCRIPT_FLAG] = 'true';

  const script = document.createElement('script');
  script.src = chrome.runtime.getURL('spotifyEventsScheduler.js');
  script.onload = function () {
    script.remove();
  };

  root.appendChild(script);
}

if (!document.getElementById(STYLE_ID)) {
  const stylesheet = document.createElement('link');
  stylesheet.id = STYLE_ID;
  stylesheet.rel = 'stylesheet';
  stylesheet.href = chrome.runtime.getURL('spotifyEventsScheduler.css');

  root.appendChild(stylesheet);
}
