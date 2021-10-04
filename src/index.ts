import App from './app';

window.onbeforeunload = function () {
  document.body.remove();
};

const app = new App();
window.addEventListener('DOMContentLoaded', app.render);
