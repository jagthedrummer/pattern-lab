import Ember from 'ember';

export default Ember.ObjectController.extend({
  actions : {
    savePattern : function(){
      this.transitionToRoute('pattern',this.get('model'));
    },
    randomize : function(){
      this.get('model').setProperties({
        p1 : Math.floor((Math.random() * 100) + 1),
        p2 : Math.floor((Math.random() * 100) + 1),
        p3 : Math.floor((Math.random() * 100) + 1)
      });
    }
  }
});
