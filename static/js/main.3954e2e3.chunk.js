(this["webpackJsonptrip-tracker"]=this["webpackJsonptrip-tracker"]||[]).push([[0],{31:function(e,t,n){e.exports={mapContainer:"Map_mapContainer__-HhFw"}},40:function(e,t,n){},90:function(e,t,n){},96:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n(0),o=n.n(r),i=n(9),c=n.n(i),s=(n(40),n(10)),l=n(11),u=n(14),m=n(12),p=n(4),d=n.n(p),h=(n(58),n(31)),b=n.n(h),y=function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).mapContainer=Object(r.createRef)(),a.state={map:null,ready:!1},a}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;d.a.accessToken="pk.eyJ1IjoiZ29tb25rZXlhbWFuZ28iLCJhIjoiY2traXowajZ6MGNvcjJvbXprMTV0OXJlOCJ9.TRhFblFKBeuP0UD0bHlWVQ";var t=new d.a.Map({container:this.mapContainer.current,style:"mapbox://styles/mapbox-map-design/ckhqrf2tz0dt119ny6azh975y",zoom:13.1,center:[-114.34411,32.6141],pitch:85,bearing:80});this.setState({map:t}),t.on("click",this.props.onClick),t.on("load",(function(){t.addSource("mapbox-dem",{type:"raster-dem",url:"mapbox://mapbox.mapbox-terrain-dem-v1",tileSize:512,maxzoom:14}),t.setTerrain({source:"mapbox-dem",exaggeration:1.5}),t.addLayer({id:"sky",type:"sky",paint:{"sky-type":"atmosphere","sky-atmosphere-sun":[0,0],"sky-atmosphere-sun-intensity":15}});for(var n,a=t.getStyle().layers,r=0;r<a.length;r++)if("symbol"===a[r].type&&a[r].layout["text-field"]){n=a[r].id;break}t.addLayer({id:"3d-buildings",source:"composite","source-layer":"building",filter:["==","extrude","true"],type:"fill-extrusion",minzoom:15,paint:{"fill-extrusion-color":"#aaa","fill-extrusion-height":["interpolate",["linear"],["zoom"],15,0,15.05,["get","height"]],"fill-extrusion-base":["interpolate",["linear"],["zoom"],15,0,15.05,["get","min_height"]],"fill-extrusion-opacity":.6}},n),e.setState({ready:!0})}))}},{key:"render",value:function(){var e=this.state,t=e.map,n=e.ready,r=this.props.children,i=o.a.Children.map(r,(function(e){return o.a.isValidElement(e)?o.a.cloneElement(e,{map:t}):e}));return Object(a.jsxs)("div",{children:[Object(a.jsx)("div",{className:b.a.mapContainer,ref:this.mapContainer}),n&&i]})}}]),n}(o.a.Component),f=n(32),j=n.n(f),v=(n(89),function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).state={},a}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=new j.a({accessToken:d.a.accessToken,mapboxgl:d.a});this.props.map.addControl(e)}},{key:"render",value:function(){return null}}]),n}(o.a.Component));n(90);var x=function(){return Object(a.jsx)("div",{className:"App",children:Object(a.jsx)(y,{onClick:function(e){console.log(e)},children:Object(a.jsx)(v,{})})})},k=n(13),O=Object(k.b)({name:"counter",initialState:{value:0},reducers:{increment:function(e){e.value+=1},decrement:function(e){e.value-=1},incrementByAmount:function(e,t){e.value+=t.payload}}}),g=O.actions,C=(g.increment,g.decrement,g.incrementByAmount,O.reducer),w=Object(k.a)({reducer:{counter:C}}),z=n(34);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(Object(a.jsx)(o.a.StrictMode,{children:Object(a.jsx)(z.a,{store:w,children:Object(a.jsx)(x,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[96,1,2]]]);