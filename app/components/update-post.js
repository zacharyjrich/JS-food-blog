import Ember from 'ember';

export default Ember.Component.extend({
  updatePostForm: false,
  actions: {
    updatePostForm() {
      this.set('updatePostForm', true);
    },
    update(post) {
      var params = {
        date: this.get('date'),
        title: this.get('title'),
        image: this.get('image'),
        body: this.get('body'),
      };
      this.set ('updatePostForm', false);
      this.sendAction('update', post, params);
    }
  }
});
