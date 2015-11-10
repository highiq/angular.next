import angular from 'angular';
import Home from './home/home';
import AboutUs from './pages/company/about-us/about-us';
import ContactUs from './pages/company/contact-us/contact-us';
import TeamMembers from './pages/company/team-members/team-members';
import CompanyNews from './pages/company/company-news/company-news';
import Faq from './pages/learn/faq/faq';
import Forum from './pages/learn/forum/forum';
import Newsletter from './pages/learn/newsletter/newsletter';
import Tour from './pages/learn/tour/tour';
import BrowseCompanies from './pages/search/browse-companies/browse-companies';
import BrowseEvents from './pages/search/browse-events/browse-events';
import BrowseJobs from './pages/search/browse-jobs/browse-jobs';
import BrowseMembers from './pages/search/browse-members/browse-members';
import CodeRepository from './features/tech-review/code-repository/code-repository';
import CodingBootcamp from './features/tech-review/coding-bootcamp/coding-bootcamp';
import OnlineItTraining from './features/tech-review/online-it-training/online-it-training';
import OpenSourceFramework from './features/tech-review/open-source-framework/open-source-framework';
import OpenSourceLibrary from './features/tech-review/open-source-library/open-source-library';

let componentModule = angular.module('app.components', [
  Home.name,
  AboutUs.name,
  ContactUs.name,
  TeamMembers.name,
  CompanyNews.name,
  Faq.name,
  Forum.name,
  Newsletter.name,
  Tour.name,
  BrowseCompanies.name,
  BrowseEvents.name,
  BrowseJobs.name,
  BrowseMembers.name,
  CodeRepository.name,
  CodingBootcamp.name,
  OnlineItTraining.name,
  OpenSourceFramework.name,
  OpenSourceLibrary.name
]);

export default componentModule;