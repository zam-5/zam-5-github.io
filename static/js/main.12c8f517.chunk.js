(this.webpackJsonpgrapher=this.webpackJsonpgrapher||[]).push([[0],{176:function(e,t,n){},177:function(e,t,n){},284:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n(154),i=n.n(c),r=(n(176),n(44)),s=n(27),o=n(48),l=(n(177),n(8));function d(e){return Object(l.jsx)("label",{className:"eqBox",children:Object(l.jsxs)("span",{style:{whiteSpace:"nowrap"},children:["f(x)=\xa0",Object(l.jsx)("input",{type:"text",id:e.id+"Input",value:e.eqText,onChange:function(t){e.handleEqChange(t.target.value.replace(/[^0-9a-xEPI+*^/().-]/g,""),e.id)},className:e.className})]})})}function u(e){return Object(l.jsx)("button",{type:"button",id:"addButton",onClick:function(t){t.preventDefault(),e.addEqRow()},disabled:!1,children:"+"})}function j(e){return Object(l.jsx)("button",{className:"deleteButton",type:"button",id:e.name+"delBut",onClick:function(t){t.preventDefault(),e.deleteEqRow(e.name)},children:"X"})}function x(e){var t=[];for(var n in e.eqText)t.push(Object(l.jsxs)("tr",{className:"eqRow",children:[Object(l.jsx)("td",{children:Object(l.jsx)(d,{eqText:e.eqText[n],handleEqChange:e.handleEqChange,className:e.eqValidity[n]?"validInput":"invalidInput",eqValiity:e.eqValidity[n],id:n})}),Object(l.jsx)("td",{children:Object(l.jsx)(j,{name:n,deleteEqRow:e.deleteEqRow})})]},n));return Object(l.jsx)("div",{children:Object(l.jsx)("table",{className:"eqTable",children:Object(l.jsxs)("tbody",{children:[t,Object(l.jsx)("tr",{children:Object(l.jsx)("td",{children:Object(l.jsx)(u,{addEqRow:e.addEqRow})})},"addButRow")]})})})}var b=n(292),h=n(291),O=n(153);function p(e,t,a){for(var c=new(0,n(109).Parser)({operators:{concatenate:!1,conditional:!1,logical:!1,comparison:!1,in:!1,assignment:!1}}).parse(e),i=[],r=t;r<a;r+=.1)i.push({x:r,y:c.evaluate({x:r})});return i}function f(){var e=window;return{width:e.innerWidth,height:e.innerHeight}}function v(e){var t=function(){var e=Object(a.useState)(f()),t=Object(o.a)(e,2),n=t[0],c=t[1];return Object(a.useEffect)((function(){function e(){c(f())}return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]),n}(),n=t.height,c=t.width,i=[];for(var r in e.eqText){var s=[];try{s=p(e.eqText[r],e.xMin,e.xMax)}catch(d){s=[{x:0,y:0}]}i.push(Object(l.jsx)(b.a,{style:{data:{stroke:"#c43a31"},parent:{border:"1px solid #ccc"}},data:s},e.eqText[r]+"line"))}return Object(l.jsx)(h.a,{width:c-210,height:n-40,padding:{top:10,bottom:10,left:10,right:10},domain:e.domain,theme:O.a.material,typ:!0,children:i})}function m(e){var t=e.name,n="".concat(t[0],"-").concat(t.slice(1).toLowerCase(),": ");return Object(l.jsx)("div",{className:"axisInputDiv",children:Object(l.jsxs)("label",{htmlFor:t,className:"axisInput",children:[n,Object(l.jsx)("input",{type:"number",name:t,id:t,value:e.axisValue,step:"1",onChange:function(t){e.handleAxisChange(e.name,Number(t.target.value.replace(/[^0-9-]/g,"")))}})]})})}function g(e){var t=Object(a.useState)({eq0:""}),c=Object(o.a)(t,2),i=c[0],d=c[1],u=Object(a.useState)({xMin:-10,xMax:10,yMin:-10,yMax:10}),j=Object(o.a)(u,2),b=j[0],h=j[1],O=Object(a.useState)({eq0:!1}),p=Object(o.a)(O,2),f=p[0],g=p[1];function q(e,t){d((function(n){return Object(s.a)(Object(s.a)({},n),{},Object(r.a)({},t,e))})),g((function(a){return Object(s.a)(Object(s.a)({},a),{},Object(r.a)({},t,function(e){try{if("number"!==typeof new(0,n(109).Parser)({operators:{concatenate:!1,conditional:!1,logical:!1,comparison:!1,in:!1,assignment:!1}}).parse(e).evaluate({x:1}))throw new Error;return!0}catch(t){return!1}}(e)))}))}function w(e,t){h((function(n){return Object(s.a)(Object(s.a)({},n),{},Object(r.a)({},e,t))}))}var y=["xMin","xMax","yMin","yMax"].map((function(e){return Object(l.jsx)(m,{name:e,axisValue:b[e],handleAxisChange:w},e)}));return Object(l.jsxs)("div",{className:"appDiv",children:[Object(l.jsx)("div",{className:"topBar",children:"grapher"}),Object(l.jsxs)("div",{className:"appArea",children:[Object(l.jsxs)("div",{className:"sidebar",children:[Object(l.jsx)("p",{children:"Equations "}),Object(l.jsx)(x,{eqText:i,handleEqChange:q,eqValidity:f,addEqRow:function(){var e=0;for(var t in i)console.log({eq:t}),e++;q("","eq"+e)},deleteEqRow:function(e){console.log("here"),d((function(t){var n=Object(s.a)({},t);return delete n[e],n})),g((function(t){var n=Object(s.a)({},t);return delete n[e],n}))}}),Object(l.jsx)("hr",{}),Object(l.jsx)("div",{className:"axisControls",children:y})]}),Object(l.jsx)("div",{className:"PlotArea",children:Object(l.jsx)(v,{domain:{x:[b.xMin,b.xMax],y:[b.yMin,b.yMax]},eqText:i,xMin:b.xMin,xMax:b.xMax})})]})]})}var q=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,293)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),a(e),c(e),i(e),r(e)}))};i.a.render(Object(l.jsx)(g,{}),document.getElementById("root")),q()}},[[284,1,2]]]);
//# sourceMappingURL=main.12c8f517.chunk.js.map