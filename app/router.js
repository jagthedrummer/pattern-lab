import Ember from 'ember';

var Router = Ember.Router.extend({
  location: PatternLabENV.locationType
});

Router.map(function() {
  this.route('about');
  this.resource('patterns',function(){
    this.resource('pattern', { path: '/:pattern_id' });
    this.route('new');
  });
});

export default Router;
