import IntroPage from "page/intro/intro";
import WhoWeArePage from "page/whoweare/whoweare";
import AboutUsPage from "page/whoweare/pages/aboutUs/aboutUs";
import LeadershipPage from "page/whoweare/pages/leadership/leaderShip";
import LeaderPage from "page/whoweare/pages/leaders/leaderDetail";
import HistoryPage from "page/whoweare/pages/history/history";

import Explorer from "page/explorer/explorer";
import Exhibition from "page/exhibition/exhibition";
import Project from "page/project/project";

const routes = [
  { path: "/", view: IntroPage },
  // { path: "/whoweare", view: WhoWeArePage },
  // { path: "/whoweare/aboutus", view: AboutUsPage },
  // { path: "/whoweare/history", view: HistoryPage },
  // { path: "/whoweare/leadership", view: LeadershipPage },
  // { path: "/whoweare/leadership/leaders", view: LeaderPage },
  // { path: "/whoweare/newsroom", view: AboutUsPage },
  // { path: "/explorer", view: Explorer },
  // { path: "/explorer/explorers", view: AboutUsPage },
  // { path: "/explorer/fieldmap", view: AboutUsPage },
  // { path: "/explorer/explorerblog", view: AboutUsPage },
  // { path: "/exhibition", view: Exhibition },
  // { path: "/exhibition/visitorplan", view: AboutUsPage },
  // { path: "/exhibition/exhibition", view: AboutUsPage },
  // { path: "/exhibition/event", view: AboutUsPage },
  // { path: "/project", view: Project },
  // { path: "/project/beyondstone", view: AboutUsPage },
  // { path: "/project/bigcat", view: AboutUsPage },
  // { path: "/project/lastwild", view: AboutUsPage },
  // { path: "/project/yearofbird", view: AboutUsPage },
  // { path: "/project/pristineseas", view: AboutUsPage },
];

export default class Router {
  body: HTMLElement;

  constructor() {
    this.body = document.querySelector("body")! as HTMLElement;
    // this.location = history.state?.pathname || '/';

    window.addEventListener("popstate", () => {
      // this.location = history.state?.pathname || '/';
      // this.excution("remove");
    });
  }

  pathToRegex(path: string) {
    return new RegExp("^" + path.replace(/\//g, "\\/").replace(/:\w+/g, "(.+)") + "$"); // prettier-ignore
  }

  async render() {
    window.scrollTo(0, 0);
    const params = (match: any) => {
      const { result, route } = match;
      const values = result.slice(1);
      const keys = Array.from(route.path.matchAll(/:(\w+)/g)).map((result: any) => result[1]); // prettier-ignore

      return keys
        .map((key, i) => [key, values[i]])
        .reduce((acc, cur) => ({ ...acc, [cur[0]]: cur[1] }), {});
    };

    // Test each route for potential match
    const data = routes.map((route) => {
      const result = location.pathname.match(this.pathToRegex(route.path));
      return { route, result };
    });

    let match = data.find((pm) => pm.result !== null);
    if (!match) match = { route: routes[0], result: [location.pathname] };
    const view = new match.route.view(params(match));
    const app = document.querySelector("#app");
    if (app) app.innerHTML = view.getHtml();
  }

  // excution(type: "append" | "remove") {
  //   if (type === "remove") {
  //     this.body.innerHTML = "";
  //   } else {
  //     if (Object.hasOwnProperty.call(this.page, "length")) {
  //       (this.page as HTMLElement[]).forEach((element) => {
  //         this.body.appendChild(element);
  //       });
  //     } else {
  //       this.body.appendChild(this.page as HTMLElement);
  //     }
  //   }
  // }
}
