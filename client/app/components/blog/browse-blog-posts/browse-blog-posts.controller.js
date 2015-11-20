class BrowseBlogPostsController {
  constructor($stateParams, $state) {
    this.$state = $state;
    this.name = 'Browse Blog Posts';
    this.type = $stateParams.type;
    this.category = $stateParams.category;
  }
}

export default BrowseBlogPostsController;
