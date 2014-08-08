import DS from 'ember-data';

var Pattern = DS.Model.extend({
  p1 : DS.attr('number'),
  p2 : DS.attr('number'),
  p3 : DS.attr('number'),
  name : function(){
    return this.get('p1') + '-' + this.get('p2') + '-' + this.get('p3');
  }.property('p1','p2','p3')
});

Pattern.reopenClass({
  FIXTURES: [
    { id: 1, p1 : 1, p2 : 2, p3 : 3 },
    { id: 2, p1 : 42, p2 : 42, p3 : 42 }
  ]
});

export default Pattern;
