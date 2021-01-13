import Router from './router/router';
import IntroPage from 'page/intro/intro';

import 'components/footer/footer.scss';
import 'scss/reset.scss';
import 'query';

class App {
  render() {
    new Router({
      '/': () => new IntroPage().instance,
    });
  }
}

export default App;
