import Router from './router/router';
import IntroPage from 'page/main/intro/intro';
import WhoWeArePage from 'page/main/whoweare/whoweare';
import AboutUsPage from 'page/main/whoweare/pages/aboutUs/aboutUs';
import LeadershipPage from 'page/main/whoweare/pages/leadership/leaderShip';
import LeaderPage from 'page/main/whoweare/pages/leaders/leaderDetail';
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
      '/whoweare/leadership': LeadershipPage,
      '/whoweare/leadership/leaders': LeaderPage,
      '/whoweare/newsroom': AboutUsPage,
      '/explorer': Explorer,
      '/explorer/explorers': AboutUsPage,
      '/explorer/fieldmap': AboutUsPage,
      '/explorer/explorerblog': AboutUsPage,
      '/exhibition': Exhibition,
      '/exhibition/visitorplan': AboutUsPage,
      '/exhibition/exhibition': AboutUsPage,
      '/exhibition/event': AboutUsPage,
      '/project': Project,
      '/project/beyondstone': AboutUsPage,
      '/project/bigcat': AboutUsPage,
      '/project/lastwild': AboutUsPage,
      '/project/yearofbird': AboutUsPage,
      '/project/pristineseas': AboutUsPage,
    });
  }
}

export default App;
