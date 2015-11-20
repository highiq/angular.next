import angular from 'angular';

// HOME
import Home from './home/home';

// PAGES - COMPANY
import AboutUs from './pages/company/about-us/about-us';
import ContactUs from './pages/company/contact-us/contact-us';
import TeamMembers from './pages/company/team-members/team-members';
import CompanyNews from './pages/company/company-news/company-news';

// PAGES - LEARN
import Faq from './pages/learn/faq/faq';
import Forum from './pages/learn/forum/forum';
import Newsletter from './pages/learn/newsletter/newsletter';
import Tour from './pages/learn/tour/tour';

// PAGES - SEARCH
import BrowseCompanies from './pages/search/browse-companies/browse-companies';
import BrowseEvents from './pages/search/browse-events/browse-events';
import BrowseJobs from './pages/search/browse-jobs/browse-jobs';
import BrowseMembers from './pages/search/browse-members/browse-members';

// FEATURES - TECH REVIEW
import CodeRepository from './features/tech-review/code-repository/code-repository';
import CodingBootcamp from './features/tech-review/coding-bootcamp/coding-bootcamp';
import OnlineItTraining from './features/tech-review/online-it-training/online-it-training';
import OpenSourceFramework from './features/tech-review/open-source-framework/open-source-framework';
import OpenSourceLibrary from './features/tech-review/open-source-library/open-source-library';
import ItBooks from './features/tech-review/it-books/it-books';
import VideoChannels from './features/tech-review/video-channels/video-channels';
import WebTutorials from './features/tech-review/web-tutorials/web-tutorials';
import TechTalks from './features/tech-review/tech-talks/tech-talks';
import ItPodcasts from './features/tech-review/it-podcasts/it-podcasts';

// FEATURES - COMPETITION
import CodeCompetition from './features/competition/code-competition/code-competition';
import BestBlogPost from './features/competition/best-blog-post/best-blog-post';
import BestOpenSourceProject from './features/competition/best-open-source-project/best-open-source-project';
import BestTeamProject from './features/competition/best-team-project/best-team-project';
import BestWebTutorial from './features/competition/best-web-tutorial/best-web-tutorial';
import BestLessonPlan from './features/competition/best-lesson-plan/best-lesson-plan';
import BestSlidePresentation from './features/competition/best-slide-presentation/best-slide-presentation';

// FEATURES - EXTRAS
import TalentAgency from './features/extra/talent-agency/talent-agency';
import JobBoard from './features/extra/job-board/job-board';
import BookClub from './features/extra/book-club/book-club';
import EventCalendar from './features/extra/event-calendar/event-calendar';
import StartProject from './features/extra/start-project/start-project';

// MY HIGHIQ - PERSONALIZE
import MyProfile from './my/personalize/my-profile/my-profile';
import IQMeter from './my/personalize/iq-meter/iq-meter';
import JobHistory from './my/personalize/job-history/job-history';
import SkillSets from './my/personalize/skill-sets/skill-sets';
import ProjectPortfolio from './my/personalize/project-portfolio/project-portfolio';
import GithubIntegration from './my/personalize/github-integration/github-integration';
import LinkedInIntegration from './my/personalize/linkedin-integration/linkedin-integration';

// MY HIGHIQ - ORGANIZE
import MyBookmarks from './my/organize/my-bookmarks/my-bookmarks';
import MyCodeRepositories from './my/organize/my-code-repositories/my-code-repositories';
import MyCodeSnippets from './my/organize/my-code-snippets/my-code-snippets';
import MyOnlineCourses from './my/organize/my-online-courses/my-online-courses';
import MyITBootcamps from './my/organize/my-it-bootcamps/my-it-bootcamps';
import MyJobInquiries from './my/organize/my-job-inquiries/my-job-inquiries';
import MyUpcomingEvents from './my/organize/my-upcoming-events/my-upcoming-events';

// MY HIGHIQ - SOCIALIZE
import MyNetwork from './my/socialize/my-network/my-network';
import MyMessages from './my/socialize/my-messages/my-messages';
import MyChatroom from './my/socialize/my-chatroom/my-chatroom';
import MyTeamProjects from './my/socialize/my-team-projects/my-team-projects';

// HIGHIQ UNIVERSITY - ASSESSMENT
import SelfAssessment from './university/assessment/self-assessment/self-assessment';
import PeerAssessment from './university/assessment/peer-assessment/peer-assessment';
import FormalAssessment from './university/assessment/formal-assessment/formal-assessment';
import SkillGapAnalysis from './university/assessment/skill-gap-analysis/skill-gap-analysis';
import CoreCompetencies from './university/assessment/core-competencies/core-competencies';

// HIGHIQ UNIVERSITY - ENROLLMENT
import BrowseCourseCurriculum from './university/enrollment/browse-course-curriculum/browse-course-curriculum';
import CustomizeCurriculum from './university/enrollment/customize-curriculum/customize-curriculum';
import CurriculumEnrollment from './university/enrollment/curriculum-enrollment/curriculum-enrollment';
import ReviewSyllabus from './university/enrollment/review-syllabus/review-syllabus';
import StartCourseCurriculum from './university/enrollment/start-course-curriculum/start-course-curriculum';

// HIGHIQ UNIVERSITY - LEARNING PATH
import CurriculumOverview from './university/learning-path/curriculum-overview/curriculum-overview';
import CurriculumPrerequisites from './university/learning-path/curriculum-prerequisites/curriculum-prerequisites';
import CurriculumCourses from './university/learning-path/curriculum-courses/curriculum-courses';
import CourseLessonPlan from './university/learning-path/course-lesson-plan/course-lesson-plan';
import CourseLearningObjectives from './university/learning-path/course-learning-objectives/course-learning-objectives';
import CourseLessons from './university/learning-path/course-lessons/course-lessons';
import LessonLearningObjectives from './university/learning-path/lesson-learning-objectives/lesson-learning-objectives';
import LearningActivity from './university/learning-path/learning-activity/learning-activity';

// BLOG
import BrowseBlogPosts from './blog/browse-blog-posts/browse-blog-posts';
import ViewBlogPost from './blog/view-blog-post/view-blog-post';

let componentModule = angular.module('app.components', [
  // HOME
  Home.name,
  
  // PAGES - COMPANY
  AboutUs.name,
  ContactUs.name,
  TeamMembers.name,
  CompanyNews.name,
  
  // PAGES - LEARN
  Faq.name,
  Forum.name,
  Newsletter.name,
  Tour.name,
  
  // PAGES - SEARCH
  BrowseCompanies.name,
  BrowseEvents.name,
  BrowseJobs.name,
  BrowseMembers.name,
  
  // FEATURES - TECH REVIEW
  CodeRepository.name,
  CodingBootcamp.name,
  OnlineItTraining.name,
  OpenSourceFramework.name,
  OpenSourceLibrary.name,
  ItBooks.name,  
  VideoChannels.name,
  WebTutorials.name,
  TechTalks.name,
  ItPodcasts.name,
  
  // FEATURES - COMPETITION
  CodeCompetition.name,
  BestBlogPost.name,
  BestOpenSourceProject.name,
  BestTeamProject.name,
  BestWebTutorial.name,
  BestLessonPlan.name,
  BestSlidePresentation.name,
  
  // FEATURES - EXTRAS
  TalentAgency.name,
  JobBoard.name,
  BookClub.name,
  EventCalendar.name,
  StartProject.name,
  
  // MY HIGHIQ - PERSONALIZE
  MyProfile.name,
  IQMeter.name,
  JobHistory.name,
  SkillSets.name,
  ProjectPortfolio.name,
  GithubIntegration.name,
  LinkedInIntegration.name,
  
  // MY HIGHIQ - ORGANIZE
  MyBookmarks.name,
  MyCodeRepositories.name,
  MyCodeSnippets.name,
  MyOnlineCourses.name,
  MyITBootcamps.name,
  MyJobInquiries.name,
  MyUpcomingEvents.name,
  
  // MY HIGHIQ - SOCIALIZE
  MyNetwork.name,
  MyMessages.name,
  MyChatroom.name,
  MyTeamProjects.name,
  
  // HIGHIQ UNIVERSITY - ASSESSMENTS
  SelfAssessment.name,
  PeerAssessment.name,
  FormalAssessment.name,
  SkillGapAnalysis.name,
  CoreCompetencies.name,
  
  // HIGHIQ UNIVERSITY - ENROLLMENT
  BrowseCourseCurriculum.name,
  CustomizeCurriculum.name,
  CurriculumEnrollment.name,
  ReviewSyllabus.name,
  StartCourseCurriculum.name,
  
  // HIGHIQ UNIVERSITY - ASSESSMENTS
  CurriculumOverview.name,
  CurriculumPrerequisites.name,
  CurriculumCourses.name,
  CourseLessonPlan.name,
  CourseLearningObjectives.name,
  CourseLessons.name,
  LessonLearningObjectives.name,
  LearningActivity.name,
  
  // BLOG
  BrowseBlogPosts.name,
  ViewBlogPost.name
    
]);

export default componentModule;