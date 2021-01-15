import Router from './router/router';
import IntroPage from 'page/main/intro/intro';
import WhoWeArePage from 'page/main/whoweare/whoweare';

import 'scss/reset.scss';
import 'query';

class App {
  render() {
    new Router({
      '/': IntroPage,
      '/whoweare': WhoWeArePage,
    });
  }
}

export default App;
