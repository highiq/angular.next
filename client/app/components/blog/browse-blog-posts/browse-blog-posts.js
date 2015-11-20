import angular from 'angular';
//import uiRouter from 'angular-ui-router';
import 'angular-ui-router';
import 'ui-router-extras';
import browseBlogPostsComponent from './browse-blog-posts.component';

let browseBlogPostsModule = angular.module('browse-blog-posts', [
  //uiRouter,
  'ui.router',
	'ct.ui.router.extras',
	'ct.ui.router.extras.sticky',
	'ct.ui.router.extras.dsr'
])
.run(($rootScope, $state, $q) => {
	$rootScope.$state = $state;
  
  //collect a list of states which have the preload property set
  let preloads = $state.get().filter(function(s) { return s.preload; });
  
  //iterate through the list of preload-states and chain the go-promises
  preloads.reduce(function(promise, nextState) {
    return promise.then($state.go.bind($state, nextState));
  }, $q.when());
})
.config(($stateProvider, $stickyStateProvider)=>{
	$stateProvider
		.state('browse-blog-posts', {
      url: '/browse-blog-posts?type&category',
      template: '<browse-blog-posts></browse-blog-posts>'
    });
		
	$stateProvider
		.state('browse-blog-posts.account', {
			url: '/account',
			sticky: true,
			//dsr: true,
			views: {
				'account': {
					templateUrl: 'account.html'
				}
			}
		});
    
	$stateProvider
		.state('browse-blog-posts.account.stuff', {
			url: '/stuff',
			template: "<h3>Here's my stuff:</h3><ul><li>stuff 1</li><li>stuff 2</li><li>stuff 3</li></ul>"
		});

	$stateProvider
		.state('browse-blog-posts.account.things', {
			url: '/things',
			template: "<h3>Here are my things:</h3><ul><li>thing a</li><li>thing b</li><li>thing c</li></ul>"
		});
    
	$stateProvider
		.state('browse-blog-posts.survey', {
			url: '/survey',
			sticky: true,
			views: {
				'survey': {
					templateUrl: 'survey.html'
				}
			}
		});
    
  //set up the toolbar parent state, and its two child-states
  $stateProvider.state('browse-blog-posts.toolbar', {
    sticky: true,
    views: {
      toolbar: { template: '<div ui-view></div>' }
    }
  })
  .state('browse-blog-posts.toolbar.state1', {
    preload: true,
    templateUrl: 'toolbar-state1.html'
  })
  .state('browse-blog-posts.toolbar.state2', {
    templateUrl: 'toolbar-state2.html'
  });
    
  //set up the sidebar's states, which are structured the same way
  $stateProvider.state('browse-blog-posts.sidebar', {
    sticky: true,
    views: {
      sidebar: { template: '<div ui-view></div>' }
    }
  })
  .state('browse-blog-posts.sidebar.state1', {
    preload: true,
    templateUrl: 'sidebar-state1.html'
  })
  .state('browse-blog-posts.sidebar.state2', {
    templateUrl: 'sidebar-state2.html'
  });  
		
	$stickyStateProvider.enableDebug(true);
})

// .config(($stateProvider) => {
  // $stateProvider
    // .state('browse-blog-posts', {
      // url: '/browse-blog-posts?type&category',
      // template: '<browse-blog-posts></browse-blog-posts>'
    // });
// })

.directive('browseBlogPosts', browseBlogPostsComponent);

export default browseBlogPostsModule;