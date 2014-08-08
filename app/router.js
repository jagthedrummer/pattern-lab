import Ember from 'ember';

var Router = Ember.Router.extend({
  location: PatternLabENV.locationType
});

Router.map(function() {
  this.route('about');
  this.resource('patterns');
});

export default Router;
