(this.webpackJsonpreactapp=this.webpackJsonpreactapp||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(8),s=n.n(r),i=(n(14),n(6)),o=n(9),l=n(2),j=n(3),u=n(5),h=n(4),b=(n(15),n(0)),d=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("label",{children:this.props.label}),Object(b.jsx)("input",{"data-pos":this.props.id,name:"value",type:"number",value:this.props.value,onChange:this.props.onChange}),Object(b.jsx)("input",{"data-pos":this.props.id,name:"checked",checked:this.props.checked,onChange:this.props.onChange,type:"checkbox"}),Object(b.jsx)("br",{})]})}}]),n}(a.Component),p=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("button",{onClick:this.props.onClick,children:"spocitej"}),Object(b.jsx)("br",{}),Object(b.jsx)("span",{children:"konecna cena ".concat(this.props.total)}),Object(b.jsx)("br",{})]})}}]),n}(a.Component),O=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("label",{children:"Pocet dnu"}),Object(b.jsxs)("select",{value:this.props.value,onChange:this.props.onChange,children:[Object(b.jsx)("option",{value:"1",children:"1"}),Object(b.jsx)("option",{value:"2",children:"2"}),Object(b.jsx)("option",{value:"3",children:"3"}),Object(b.jsx)("option",{value:"4",children:"4"})]}),Object(b.jsx)("br",{})]})}}]),n}(a.Component),x=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){return Object(b.jsxs)("div",{onChange:this.props.onChange,children:[Object(b.jsxs)("label",{children:[Object(b.jsx)("input",{type:"radio",value:"1.05",name:"extra"}),"Stresni nosic + 5%"]}),Object(b.jsx)("br",{}),Object(b.jsxs)("label",{children:[Object(b.jsx)("input",{type:"radio",value:"1.1",name:"extra"}),"Nosic na tazne + 10%"]}),Object(b.jsx)("br",{}),Object(b.jsxs)("label",{children:[Object(b.jsx)("input",{type:"radio",value:"1",name:"extra",defaultChecked:!0}),"Bez nosice"]}),Object(b.jsx)("br",{})]})}}]),n}(a.Component),g=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("label",{children:"Zadej max utratu"}),Object(b.jsx)("input",{type:"text",value:this.props.value,onChange:this.props.onChange}),Object(b.jsx)("br",{}),Object(b.jsx)("span",{children:this.props.value>=this.props.total?"":"cena je vyssi nez zadany rozpocet"})]})}}]),n}(a.Component),v=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).handleChange=function(e){var t=e.target.name;console.log("handleChange fired from ".concat(t));var n=parseInt(e.target.getAttribute("data-pos"))-1,c=Object(o.a)(a.state.bikes);if("value"===t){var r=e.target.value;r<0&&(r=0);var s=Object(i.a)(Object(i.a)({},c[n]),{},{count:r});c[n]=s}else{var l=e.target.checked,j=Object(i.a)(Object(i.a)({},c[n]),{},{checked:l});c[n]=j}a.setState({bikes:c})},a.handleDayChange=function(e){a.setState({rentDays:e.target.value})},a.handleExtraChange=function(e){console.log("handleExtra fired ".concat(e.target.value)),a.setState({extras:e.target.value})},a.handleSum=function(){console.log("handle sum fired");var e=a.state.bikes.filter((function(e){return!0===e.checked})),t=Math.floor(e.reduce((function(e,t){return e+t.price*t.count}),0)*a.state.rentDays*a.state.extras);console.log(t),a.setState({totalPrice:t})},a.handleMaxValChange=function(e){console.log("handleMaxChange fired"),a.setState({MaxPrice:e.target.value})},a.state={totalPrice:0,rentDays:1,extras:1,MaxPrice:100,bikes:[{id:"1",label:"horske",price:100,count:2,checked:!1},{id:"2",label:"detske",price:100,count:1,checked:!1},{id:"3",label:"silnicni",price:100,count:1,checked:!1},{id:"4",label:"gravel",price:100,count:1,checked:!1}]},a}return Object(j.a)(n,[{key:"render",value:function(){var e=this;return Object(b.jsx)("div",{className:"App",children:Object(b.jsxs)("fieldset",{children:[Object(b.jsx)("legend",{children:Object(b.jsx)("h2",{children:"Pujcovna kol"})}),this.state.bikes.map((function(t){return Object(b.jsx)(d,{id:t.id,label:t.label,value:t.count,checked:t.checked,onChange:function(t){return e.handleChange(t)}},t.id)})),Object(b.jsx)(O,{onChange:function(t){return e.handleDayChange(t)}}),Object(b.jsx)(x,{onChange:function(t){return e.handleExtraChange(t)}}),Object(b.jsx)(p,{onClick:this.handleSum,total:this.state.totalPrice}),Object(b.jsx)(g,{onChange:function(t){return e.handleMaxValChange(t)},value:this.state.MaxPrice,total:this.state.totalPrice})]})})}}]),n}(a.Component),f=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),r(e),s(e)}))};s.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(v,{})}),document.getElementById("root")),f()}},[[17,1,2]]]);
//# sourceMappingURL=main.7f5c7ee3.chunk.js.map