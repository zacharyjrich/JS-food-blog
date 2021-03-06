import Ember from 'ember';

export default Ember.Component.extend({
  addNewComment: false,
  actions: {
    commentFormShow() {
      this.set('addNewComment', true);
    },
    saveComment() {
     var params = {
       author: this.get('author'),
       text: this.get('text')
     };
     this.set('addNewComment', false);
     this.sendAction('saveComment', params);
   }
  }
});
