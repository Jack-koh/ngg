import Router from './router/router';
import IntroPage from 'page/main/intro/intro';
import WhoWeArePage from 'page/main/whoweare/whoweare';
import AboutUsPage from 'page/main/whoweare/pages/aboutUs/aboutUs';
import HistoryPage from 'page/main/whoweare/pages/history/history';

import Explorer from 'page/main/explorer/explorer';
import Exhibition from 'page/main/exhibition/exhibition';
import Project from 'page/main/project/project';

import 'scss/reset.scss';
import 'query';

class App {
  render() {
    new Router({
      '/': IntroPage,
      '/whoweare': WhoWeArePage,
      '/whoweare/aboutus': AboutUsPage,
      '/whoweare/history': HistoryPage,
      '/explorer': Explorer,
      '/exhibition': Exhibition,
      '/project': Project,
    });
  }
}

export default App;
