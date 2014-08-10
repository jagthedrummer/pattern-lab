import Ember from 'ember';

export default Ember.ObjectController.extend({
  actions : {
    savePattern : function(){
      var _this = this;
      this.get('model').save().then(function(pattern){
        _this.transitionToRoute('pattern',pattern);
      });
      
    },
    randomize : function(){
      this.get('model').setProperties({
        p1 : Math.floor((Math.random() * 1000) + 1),
        p2 : Math.floor((Math.random() * 1000) + 1),
        p3 : Math.floor((Math.random() * 1000) + 1)
      });
    }
  }
});
