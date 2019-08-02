document.getElementById('close').onclick = ()=>{ electronApi.windowMinimize()}
window.onload = function () {
  window.onfocus = function () {
    var etextarea = document.querySelector('[aria-label="Type a message here"]');
    etextarea && etextarea.focus();
  };
};