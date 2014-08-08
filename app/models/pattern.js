import DS from 'ember-data';

var Pattern = DS.Model.extend({
  p1 : DS.attr('number', {defaultValue : function(){ return Math.floor((Math.random() * 100) + 1); }}),
  p2 : DS.attr('number', {defaultValue : function(){ return Math.floor((Math.random() * 100) + 1); }}),
  p3 : DS.attr('number', {defaultValue : function(){ return Math.floor((Math.random() * 100) + 1); }}),
  name : function(){
    return this.get('p1') + '-' + this.get('p2') + '-' + this.get('p3');
  }.property('p1','p2','p3')
});

Pattern.reopenClass({
  FIXTURES: [
    { id: 1, p1 : 1, p2 : 2, p3 : 5},
    { id: 2, p1 : 42, p2 : 420, p3 : 4200},
    { id: 3, p1 : 100, p2 : 200, p3 : 300}
  ]
});

export default Pattern;
