(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,n){e.exports=n(26)},16:function(e,t,n){},25:function(e,t,n){},26:function(e,t,n){"use strict";n.r(t);var a,o=n(0),c=n.n(o),l=n(4),r=n.n(l),i=(n(16),n(2)),s=n.n(i),u=n(5),h=n(6),m=n(7),p=n(1),k=n(10),d=n(9),v=n(8),f=n.n(v),C=function(e){Object(k.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(h.a)(this,n),(a=t.call(this,e)).state={stockChartXValues:[],stockChartYValues:[],inputStock:"AMZN"},a.handleOnChange=a.handleOnChange.bind(Object(p.a)(a)),a.handleOnClick=a.handleOnClick.bind(Object(p.a)(a)),a}return Object(m.a)(n,[{key:"handleOnClick",value:function(e){var t=this;e.preventDefault(),clearInterval(a),setInterval(function(){console.log("onClick Calling 5 seconds"),t.fetchStock()},5e3)}},{key:"handleOnChange",value:function(e){this.setState({inputStock:e.target.value}),console.log(e.target.value)}},{key:"componentDidMount",value:function(){var e=this;a=setInterval(function(){console.log("MOUNT Calling 5 seconds"),e.fetchStock()},5e3)}},{key:"fetchStock",value:function(){var e=Object(u.a)(s.a.mark(function e(){var t,n,a,o;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=this,console.log(t),"YLBQGZ4Z2TRWI8LV",n="https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=".concat(this.state.inputStock,"&outputsize=compact&interval=5min&outputsize=full&apikey=").concat("YLBQGZ4Z2TRWI8LV"),a=[],o=[],e.next=8,fetch(n).then(function(e){return e.json()}).then(function(e){for(var n in console.log(e),e["Time Series (5min)"])a.push(n),o.push(e["Time Series (5min)"][n]["1. open"]);t.setState({stockChartXValues:a,stockChartYValues:o})});case 8:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("h1",null,"REAL TIME STOCK PRICE CHART"),c.a.createElement("form",{style:{marginTop:10}},c.a.createElement("label",null,"Stock",c.a.createElement("input",{onChange:this.handleOnChange,id:"stock",type:"text",name:"stock-name",value:this.state.inputStock})),c.a.createElement("input",{onClick:this.handleOnClick,type:"submit",value:"Submit"}),c.a.createElement("h6",null," Sample Input are like AMZN, TSLA, FB, MSFT, and so on")),c.a.createElement(f.a,{data:[{x:this.state.stockChartXValues,y:this.state.stockChartYValues,type:"scatter",mode:"lines+markers",marker:{color:"red"}}],layout:{width:1e3,height:640}}))}}]),n}(c.a.Component);n(25);var g=function(){return c.a.createElement("div",{className:"App"},c.a.createElement(C,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[11,1,2]]]);
//# sourceMappingURL=main.67514261.chunk.js.map