export const link = (
  target: HTMLElement | HTMLDivElement,
  args: { url: string; title: string }
) => {
  const pushStateHandler = () => {
    const state = { pathname: args.url, previousPath: window.location.pathname };
    history.pushState(state, args.title, args.url);
    window.dispatchEvent(new Event('popstate'));
  };
  target.addEventListener('click', pushStateHandler);
};
