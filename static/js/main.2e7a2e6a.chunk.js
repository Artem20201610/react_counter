(this.webpackJsonpreact_counter=this.webpackJsonpreact_counter||[]).push([[0],{12:function(t,e,n){},13:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n.n(a),r=n(2),u=n.n(r),o=n(3),i=n(4),d=n(6),s=n(5),l=function(t){return c.a.createElement("h1",null,"Count:",t.count)},p=function(t){return c.a.createElement("button",{type:"button",onClick:t.addOne.bind(t.app)},"Add 1")},f=function(t){return c.a.createElement("button",{type:"button",onClick:t.add100.bind(t.app)},"Add 100")},b=function(t){return c.a.createElement("button",{type:"button",onClick:t.increase.bind(t.app)},"Increase")},h=(n(12),function(t){Object(d.a)(n,t);var e=Object(s.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={count:0},t.addOne=function(){t.setState((function(t){return{count:t.count+1}}))},t.add100=function(){t.setState((function(t){return{count:t.count+100}}))},t.increase=function(){t.state.count%5===0&&t.add100(),t.addOne()},t}return Object(i.a)(n,[{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(l,this.state),c.a.createElement(p,{app:this,addOne:this.addOne}),c.a.createElement(f,{app:this,add100:this.add100}),c.a.createElement(b,{app:this,increase:this.increase}))}}]),n}(c.a.Component));u.a.render(c.a.createElement(h,null),document.getElementById("root"))},7:function(t,e,n){t.exports=n(13)}},[[7,1,2]]]);
//# sourceMappingURL=main.2e7a2e6a.chunk.js.map