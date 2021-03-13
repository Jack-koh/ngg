export const link = (target: HTMLElement | HTMLDivElement, url: string) => {
  const pushStateHandler = () => {
    const state = { pathname: url, previousPath: window.location.pathname };
    history.pushState(state, `ngg-${url}`, url);
    window.dispatchEvent(new Event('popstate'));
  };
  target.addEventListener('click', pushStateHandler);
};
