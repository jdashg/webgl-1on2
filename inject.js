const s = document.createElement('script');
const url = browser.runtime.getURL('webgl-1on2.js');
const request = new XMLHttpRequest();
request.open('GET', url, false);  // `false` makes the request synchronous
request.send(null);
//console.log(request.status);
s.textContent = request.responseText;
(document.head || document.documentElement).appendChild(s);
