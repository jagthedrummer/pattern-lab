import Ember from 'ember';

export default Ember.Component.extend({
  canvasId : function(){
    return "canvas-" + Math.floor((Math.random() * 1000000) + 1);
  }.property('pattern.id'),

  didInsertElement : function(){
    this.drawPattern();
  },
  
  automaticUpdate : function(){
    Ember.run.next(this,function(){
      this.drawPattern();
    });
  }.observes('pattern','pattern.p1','pattern.p2','pattern.p3'),

  drawPattern : function(){
    var ch = new Chromanin(256,this.get('canvasId'));
    ch.initlayers(this.get('width'),this.get('height'));
    ch.checkerBoardLayer(0,16,16,this.get('pattern.p1'),this.get('pattern.p2'),this.get('pattern.p3'),0,0,128);
    ch.sineDistort(0,0,0.100000001490116,this.get('pattern.p1'),this.get('pattern.p2'),this.get('pattern.p3'));
    ch.addLayers(0,1,4,1,1);
    ch.addLayers(4,2,4,1,1);
    ch.addLayers(4,3,4,1,1);
    ch.writeCanvas();
  }
});
