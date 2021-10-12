import Router from "router/Router";
import View from "page/View";

// export const link = (target: HTMLElement | HTMLDivElement, url: string) => {
//   const pushStateHandler = () => {
//     history.pushState(
//       { pathname: url, previousPath: window.location.pathname },
//       `ngg-${url}`,
//       url
//     );
//     window.dispatchEvent(new Event("popstate"));
//   };
//   target.addEventListener("click", pushStateHandler);
// };

// export const link2 = ({
//   url,
//   child,
//   className = "",
// }: {
//   url?: string;
//   child: string;
//   className?: string;
// }) => {
//   const el = document.createElement("div");
//   el.classList.add("nav__link");
//   el.addEventListener("click", () => {
//     if (url) {
//       const state = { pathname: url, previousPath: window.location.pathname };
//       history.pushState(state, "", url);
//       window.dispatchEvent(new Event("popstate"));
//     }
//   });
//   el.innerHTML = child;
//   return el.outerHTML;
// };

export class Link extends View {
  className?: string;
  url?: string;
  child: string;
  constructor(data: { url?: string; child: string; className?: string }) {
    super();
    this.className = data.className ?? "";
    this.url = data.url;
    this.child = data.child;
    this.generateMarkup();
  }

  generateMarkup() {
    this.markup = `
      <div class="nav__link ${this.className}" data-url="${this.url}">
        ${this.child}
      </div>
    `;
  }

  addEvents = () => {
    const navLink = document.querySelectorAll(`[data-url="${this.url}`)[0];
    if (navLink) {
      (navLink as HTMLElement).onclick = () => {
        if (this.url) {
          const state = {
            pathname: this.url,
            previousPath: window.location.pathname,
          };
          history.pushState(state, "", this.url);
          window.dispatchEvent(new Event("popstate"));
        }
      };
    }

    // if (navLink) {
    //   navLink.addEventListener("click", () => {});
    // }
  };
}

export const link = (data: {
  className?: string;
  url?: string;
  child: string;
}) => {
  return new Link(data).getHtml();
};
