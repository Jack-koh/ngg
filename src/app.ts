import Router from './router/router';
import IntroPage from 'page/intro/intro';

import 'scss/reset.scss';
import 'query';

class App {
  render() {
    new Router({
      '/': IntroPage,
    });
  }
}

export default App;
