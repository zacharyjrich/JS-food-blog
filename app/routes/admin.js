import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      posts: this.store.findAll('post'),
      comments: this.store.findAll('comment')
    });
  },
  actions: {
    savePost(params) {
      var newPost = this.store.createRecord('post', params);
      newPost.save();
      this.transitionTo('admin');
    },
    saveComment(params) {
      var newComment = this.store.createRecord('comment', params);
      newComment.save();
      this.transitionTo('admin');
    }
  }
});
