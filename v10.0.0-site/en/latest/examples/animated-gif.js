"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1969],{40108:function(e,t,n){var a=n(51541),r=n(41564),o=n(40878),c=n(87240),s=n(88292),i=n(75052),u=n(29810),g=n(9226),l=n(23986),w=n(12185);const m=new a.A({geometry:new o.A([0,0])}),f=new u.A({features:[m]}),y=new l.A({source:f}),A=new w.A({source:new g.A({layer:"stamen_toner"})}),v=new r.A({layers:[A,y],target:document.getElementById("map"),view:new c.Ay({center:[0,0],zoom:2})});gifler("data/globe.gif").frames(document.createElement("canvas"),(function(e,t){m.getStyle()||m.setStyle(new s.Ay({image:new i.A({img:e.canvas,opacity:.8})})),e.clearRect(0,0,t.width,t.height),e.drawImage(t.buffer,t.x,t.y),v.render()}),!0),v.on("pointermove",(function(e){const t=v.getEventPixel(e.originalEvent),n=v.hasFeatureAtPixel(t);v.getTarget().style.cursor=n?"pointer":""}))}},function(e){var t;t=40108,e(e.s=t)}]);
//# sourceMappingURL=animated-gif.js.map