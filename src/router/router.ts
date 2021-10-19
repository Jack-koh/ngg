import * as Pages from 'page';

const routes = [
  { path: '/', view: Pages.Intro },
  { path: '/whoweare', view: Pages.WhoWeAre },
  { path: '/whoweare/aboutus', view: Pages.AboutUs },
  // { path: "/whoweare/history", view: HistoryPage },
  { path: '/whoweare/leadership', view: Pages.LeaderShip },
  { path: '/whoweare/leadership/leaders/:id', view: Pages.LeadersDetail },
  { path: '/whoweare/newsroom', view: Pages.NewsRoom },
  { path: '/explorer', view: Pages.Explorer },
  // { path: "/explorer/explorers", view: AboutUsPage },
  // { path: "/explorer/fieldmap", view: AboutUsPage },
  // { path: "/explorer/explorerblog", view: AboutUsPage },
  { path: '/exhibition', view: Pages.Exhibition },
  // { path: "/exhibition/visitorplan", view: AboutUsPage },
  // { path: "/exhibition/exhibition", view: AboutUsPage },
  // { path: "/exhibition/event", view: AboutUsPage },
  { path: '/project', view: Pages.Project },
  // { path: "/project/beyondstone", view: AboutUsPage },
  // { path: "/project/bigcat", view: AboutUsPage },
  // { path: "/project/lastwild", view: AboutUsPage },
  // { path: "/project/yearofbird", view: AboutUsPage },
  // { path: "/project/pristineseas", view: AboutUsPage },
];

export default class Router {
  body: HTMLElement;

  constructor() {
    this.body = document.querySelector('body')! as HTMLElement;
  }

  pathToRegex(path: string) {
    return new RegExp("^" + path.replace(/\//g, "\\/").replace(/:\w+/g, "(.+)") + "$"); // prettier-ignore
  }

  render() {
    window.scrollTo(0, 0);
    type Params = {
      route: { path: string; view: any };
      result: RegExpMatchArray | null;
    };
    // const params = (match: any) => {
    //   const { result, route } = match;
    //   const values = result.slice(1);
    //   const keys = Array.from(route.path?.matchAll(/:(\w+)/g)).map((result: any) => result[1]); // prettier-ignore
    //   return keys.map((key, i) => [key, values[i]]).reduce((acc, cur) => ({ ...acc, [cur[0]]: cur[1] }), {});
    // };

    // Test each route for potential match
    const data = routes.map((route) => {
      const result = location.pathname.match(this.pathToRegex(route.path));
      return { route, result };
    });

    let match: Params | undefined = data.find((pm) => pm.result !== null);
    const app = document.querySelector('#app') as HTMLElement;
    if (match) {
      const view = new match.route.view();
      view.render(app, view.getHtml());
    }
    if (!match) app.innerHTML = '';
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
