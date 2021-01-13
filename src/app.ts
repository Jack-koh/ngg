import Router from './router/router';
import IntroPage from 'page/intro/intro';
import Footer from 'components/footer/footer';

import 'scss/reset.scss';
import 'query';

class App {
  render() {
    new Router({
      '/': IntroPage,
    });

    const body = document.querySelector('body')!;
    body.appendChild(new Footer().instance);
  }
}

export default App;
