import Ember from 'ember';

export default Ember.Component.extend({
  addNewPost: false,
  actions: {
    postFormShow() {
      this.set('addNewPost', true);
    },

    savePost() {
      var params = {
        date: this.get('date'),
        title: this.get('title'),
        image: this.get('image'),
        body: this.get('body'),
      };
      this.set('addNewPost', false);
      this.sendAction('savePost', params);
    }
  }
});
