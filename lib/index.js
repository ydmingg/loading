
(function(l, r) { if (!l || l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (self.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(self.document);
var loading = {
    model3d: "<div class=\"loading-spinner row rowcolumn align-center justify-content-center\"><div class=\"loading-spinner-content\"><div></div><div></div><div></div><div></div><div></div><div></div></div><div class=\"loading-spinner-text\">\u9875\u9762\u52A0\u8F7D\u4E2D\uFF0C\u8BF7\u7A0D\u5019</div></div>",
};

var oApp = document.querySelector("#app");
oApp.style.backgroundColor = "#dcdcd4";
oApp.innerHTML = loading.model3d;
