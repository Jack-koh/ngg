import Router from './router/router';
import IntroPage from 'page/main/intro/intro';
import WhoWeArePage from 'page/main/whoweare/whoweare';
import Explorer from 'page/main/explorer/explorer';
import Exhibition from 'page/main/exhibition/exhibition';

import 'scss/reset.scss';
import 'query';

class App {
  render() {
    new Router({
      '/': IntroPage,
      '/whoweare': WhoWeArePage,
      '/explorer': Explorer,
      '/exhibition': Exhibition,
    });
  }
}

export default App;
