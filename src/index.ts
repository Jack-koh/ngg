import Router from "./router/Router";
import "scss/reset.scss";

// window.onbeforeunload = function () {
//   document.body.remove();
// };

const router = new Router();

window.addEventListener("popstate", () => {
  console.log("route");
  router.render();
});
document.addEventListener("DOMContentLoaded", () => {
  router.render();
});
