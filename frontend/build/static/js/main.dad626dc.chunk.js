(this.webpackJsonpjournal=this.webpackJsonpjournal||[]).push([[0],{104:function(e,t,a){"use strict";a.r(t),a.d(t,"store",(function(){return le}));var n=a(21),r=a(14),l=a(29),c=a(28),o=a(0),i=a.n(o),s=a(9),u=a.n(s),d=a(46),p=a(10),m=(a(84),a(131)),h=a(133),g=a(134),E=a(137),y=a(41),b=a(138),f=a(139),v=function(e){var t=e.show.map((function(t){return i.a.createElement("div",{key:t._id},i.a.createElement(m.a,{in:t.expanded,timeout:300},i.a.createElement("div",{className:"show-entry-backdrop"})),i.a.createElement(h.a,{in:t.expanded,timeout:300},i.a.createElement(g.a,{raised:!0,style:{backgroundColor:t.backgroundcolor},className:"show-entry"},i.a.createElement(E.a,{style:{textAlign:"right"}},i.a.createElement(y.a,{color:"textSecondary",variant:"h6"},t.date.substring(0,1)+"/"+t.date.substring(2,4)+"/"+t.date.substring(5,9))),i.a.createElement(E.a,{className:"overflow-class"},i.a.createElement("p",{style:{color:t.color,fontFamily:t.font,textAlign:"left"}},t.text)),i.a.createElement(b.a,{style:{float:"right"}},i.a.createElement(f.a,{size:"small",id:t._id,onClick:e.delete,docname:t.date},"Delete"),i.a.createElement(f.a,{size:"small",id:t._id,onClick:e.close,style:{Align:"right"}},"Close")))))}));return i.a.createElement("div",null,t)},k=a(146),O=function(e){var t=e.search.map((function(t){return i.a.createElement(g.a,{raised:!0,style:{margin:"20px"},id:t._},i.a.createElement(E.a,null,i.a.createElement(y.a,{color:"textSecondary",gutterBottom:!0},t.date),i.a.createElement(y.a,{align:"left",gutterBottom:!0},t.text.substring(0,100)+"...")),i.a.createElement(b.a,{style:{float:"right"}},i.a.createElement(f.a,{size:"small",id:t._id,onClick:e.close},"Open")))}));return i.a.createElement("div",{className:"left-panel"},i.a.createElement(k.a,{onChange:e.change,value:e.searchvalue,margin:"normal",variant:"outlined",label:"Search"}),i.a.createElement("p",null,"Results: ",e.search.length," "),t)},x=a(105),j=a(141),C=a(67),N=a.n(C),S=a(66),D=a.n(S),I=function(e){var t=e.entried.map((function(t){return i.a.createElement("div",{className:"pointer",key:e.entried.indexOf(t),id:t._id,onClick:e.togglenote},i.a.createElement(x.a,{elevation:3,style:{padding:"10px 0px 10px 10px",height:"90%"}},i.a.createElement(D.a,null),i.a.createElement(y.a,{color:"textSecondary",style:{marginTop:"0px"}},t.date.substring(0,1)+"/"+t.date.substring(2,4)+"/"+t.date.substring(5,9)),i.a.createElement("p",{style:{fontSize:"10px",textAlign:"left",textIndent:"10px"}},t.text,"...")))}));return i.a.createElement("div",{className:"entrytray"},t,i.a.createElement(j.a,{color:"primary","aria-label":"add",onClick:e.addNote,className:"fab-style",style:{margin:"auto",backgroundColor:"#63bd4c"}},i.a.createElement(N.a,{fontSize:"large"})))},T=a(140),B=a(142),P=a(143),w=a(144),A=a(145),L="NEWNOTE",G="SAVENOTE",R="TOGGLEDISPLAY",z="DELETENOTE",F="SEARCHENTRIES",_="APPLYFONTSTYLE",M="APPLYFONTCOLOR",Y="APPLYPAGECOLOR",J="LOADDB",W=function(){return{type:L}},H=function(e){return{type:_,style:e}},U=function(e){return{type:M,color:e}},V=function(e){return{type:Y,color:e}},q=function(e){return i.a.createElement("div",{className:"right-panel"},i.a.createElement(T.a,{subheader:i.a.createElement(B.a,{component:"div"},"Font")},i.a.createElement(P.a,null),i.a.createElement(w.a,{button:!0,onClick:function(){return le.dispatch(H("Print"))}},i.a.createElement(A.a,{primary:"Print"})),i.a.createElement(P.a,null),i.a.createElement(w.a,{button:!0,onClick:function(){return le.dispatch(H("Cursive"))}},i.a.createElement(A.a,{primary:"Dancing Script"})),i.a.createElement(P.a,null),i.a.createElement(w.a,{button:!0,onClick:function(){return le.dispatch(H("Typewriter"))}},i.a.createElement(A.a,{primary:"Prata"})),i.a.createElement(P.a,null)),i.a.createElement(T.a,{subheader:i.a.createElement(B.a,{component:"div"},"Font Color")},i.a.createElement(P.a,null),i.a.createElement(w.a,{button:!0,onClick:function(){return le.dispatch(U("Black"))}},i.a.createElement(A.a,{primary:"Black"})),i.a.createElement(P.a,null),i.a.createElement(w.a,{button:!0,onClick:function(){return le.dispatch(U("Green"))}},i.a.createElement(A.a,{primary:"Green"})),i.a.createElement(P.a,null),i.a.createElement(w.a,{button:!0,onClick:function(){return le.dispatch(U("Blue"))}},i.a.createElement(A.a,{primary:"Blue"})),i.a.createElement(P.a,null)),i.a.createElement(T.a,{subheader:i.a.createElement(B.a,{component:"div"},"Page Color")},i.a.createElement(P.a,null),i.a.createElement(w.a,{button:!0,onClick:function(){return le.dispatch(V("White"))}},i.a.createElement(A.a,{primary:"White"})),i.a.createElement(P.a,null),i.a.createElement(w.a,{button:!0,onClick:function(){return le.dispatch(V("Green"))}},i.a.createElement(A.a,{primary:"Green"})),i.a.createElement(P.a,null),i.a.createElement(w.a,{button:!0,onClick:function(){return le.dispatch(V("Blue"))}},i.a.createElement(A.a,{primary:"Blue"})),i.a.createElement(P.a,null)))},K=a(34),Q=a.n(K),X=function(e){Object(l.a)(a,e);var t=Object(c.a)(a);function a(e){var r;return Object(n.a)(this,a),(r=t.call(this,e)).state={textInput:"",dateInput:""},r.handleChangeDate=r.handleChangeDate.bind(Object(p.a)(r)),r.handleChangeInput=r.handleChangeInput.bind(Object(p.a)(r)),r.sendToParent=r.sendToParent.bind(Object(p.a)(r)),r.closeInput=r.closeInput.bind(Object(p.a)(r)),r.updateDB=r.updateDB.bind(Object(p.a)(r)),r}return Object(r.a)(a,[{key:"handleChangeInput",value:function(e){this.setState({textInput:e.target.value})}},{key:"handleChangeDate",value:function(e){this.setState({dateInput:e.target.value})}},{key:"sendToParent",value:function(e){var t=this.state.textInput,a=this.state.dateInput;(0,this.props.dispatched)(t,a),this.setState({textInput:""},this.updateDB)}},{key:"closeInput",value:function(){le.dispatch(W()),this.setState({textInput:""})}},{key:"updateDB",value:function(){var e=this.props.entirestate.length-1,t={text:this.props.entirestate[e].text,date:this.props.entirestate[e].date,font:this.props.fonter.font,expanded:this.props.fonter.expanded,backgroundcolor:this.props.fonter.backgroundcolor,color:this.props.fonter.color};Q.a.post("http://localhost:5000/entry/add",t).then((function(e){return console.log(e.data)}))}},{key:"render",value:function(e){var t=new Date,a=this.props.render;return i.a.createElement("div",null,i.a.createElement(m.a,{in:a,timeout:200},i.a.createElement("div",{className:"entry-input-backdrop"})),i.a.createElement(m.a,{in:a,timeout:200},i.a.createElement("div",{className:"top-right-shade"})),i.a.createElement(h.a,{in:a,timeout:200},i.a.createElement(x.a,{elevation:5,className:"entry-input",style:{backgroundColor:this.props.fonter.backgroundcolor}},i.a.createElement(y.a,{color:"textSecondary",className:"float-right"},i.a.createElement("i",null,["January","February","March","April","May","June","July","August","September","October","November","December"][t.getMonth()]+" "+t.getDate()+", "+t.getFullYear())),i.a.createElement("textarea",{placeholder:"click here to begin typing...",className:"invisible-textbox",style:{fontFamily:this.props.fonter.font,fontSize:this.props.fonter.fontsize,color:this.props.fonter.color,backgroundColor:this.props.fonter.backgroundcolor},onChange:this.handleChangeInput,value:this.state.textInput}),i.a.createElement(f.a,{className:"float-right",onClick:this.closeInput},"Close"),i.a.createElement(f.a,{onClick:this.sendToParent,className:"float-right"},"Save and Close"))))}}]),a}(i.a.Component),Z=a(68),$=a.n(Z),ee=function(e){return i.a.createElement("div",{className:"header"},i.a.createElement("h3",{className:"white-text",style:{display:"inline"}},"Total Entries: ",e.totalentries.length),i.a.createElement("h1",{className:"white-text"},"Journal"),i.a.createElement("div",{className:"user-icon"},i.a.createElement("h2",{className:"white-text",style:{display:"inline"}},"User"),i.a.createElement($.a,{className:"white-text",style:{fontSize:"65",marginRight:"10",marginLeft:"10"}})))},te=function(e){Object(l.a)(a,e);var t=Object(c.a)(a);function a(e){var r;return Object(n.a)(this,a),(r=t.call(this,e)).state={searchInput:""},r.saveNote=r.saveNote.bind(Object(p.a)(r)),r.deleteNote=r.deleteNote.bind(Object(p.a)(r)),r.searchEntries=r.searchEntries.bind(Object(p.a)(r)),r.handleChange=r.handleChange.bind(Object(p.a)(r)),r.toggleDisplay=r.toggleDisplay.bind(Object(p.a)(r)),r}return Object(r.a)(a,[{key:"componentDidMount",value:function(){Q.a.get("/entry").then((function(e){var t;le.dispatch((t=e.data,{type:J,payload:t}))}))}},{key:"saveNote",value:function(e,t){le.dispatch(function(e,t,a){return{type:G,payload:{date:t,id:a,text:e}}}(e,t))}},{key:"deleteNote",value:function(e){var t,a;le.dispatch((t=e.currentTarget.id,{type:z,id:t,date:a})),Q.a.delete("/entry/"+e.currentTarget.id).then((function(e){console.log(e.data)}))}},{key:"toggleDisplay",value:function(e){var t;le.dispatch((t=e.currentTarget.id,{type:R,payload:t})),console.log("test"),console.log(e.currentTarget.id)}},{key:"handleChange",value:function(e){this.setState({searchInput:e.currentTarget.value},this.searchEntries)}},{key:"searchEntries",value:function(){var e;le.dispatch((e=this.state.searchInput,{type:F,payload:e}))}},{key:"render",value:function(){return console.log(le.getState()),i.a.createElement("div",{className:"App"},i.a.createElement(ee,{totalentries:this.props.Entries.entries}),i.a.createElement(O,{search:this.props.Entries.searchResults,close:this.toggleDisplay,change:this.handleChange,searchvalue:this.state.searchInput}),i.a.createElement(q,null),i.a.createElement(I,{entried:this.props.Entries.entries,addNote:function(){return le.dispatch(W())},togglenote:this.toggleDisplay}),i.a.createElement(v,{show:this.props.Entries.entries,close:this.toggleDisplay,delete:this.deleteNote}),i.a.createElement(X,{fonter:this.props.Entries.currentStyle,dispatched:this.saveNote,render:this.props.Entries.journaling,entirestate:this.props.Entries.entries}))}}]),a}(i.a.Component),ae=a(37),ne=a(17),re={journaling:!1,searchResults:[],currentStyle:{font:"",fontsize:"18px",backgroundcolor:"",color:""},entries:[]};var le=Object(ae.b)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:re,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case J:return Object.assign({},e,{entries:t.payload});case L:return Object.assign({},e,{journaling:!1===e.journaling});case G:var a=new Date,n=a.getMonth()+1+"-"+a.getDate()+"-"+a.getFullYear()+", "+a.getHours()+":"+a.getMinutes()+":"+a.getSeconds(),r=[].concat(Object(ne.a)(e.entries),[{date:n,text:t.payload.text,expanded:!1,color:e.currentStyle.color,font:e.currentStyle.font,backgroundcolor:e.currentStyle.backgroundcolor}]);return Object.assign({},e,{journaling:!1,entries:r});case R:var l=e.entries.map((function(e,a){return e._id!=t.payload?e:!0===e.expanded?Object.assign({},e,{expanded:!1}):Object.assign({},e,{expanded:!0})}));return Object.assign({},e,{entries:l});case z:var c=e.entries.filter((function(e){return e._id!=t.id}));return Object.assign({},e,{entries:c});case F:var o=new RegExp(t.payload,"i"),i=""===t.payload?[]:e.entries.filter((function(e){return o.test(e.text)||o.test(e.date)}));return Object.assign({},e,{searchResults:i});case _:var s="Cursive"===t.style?"Dancing Script":"Print"===t.style?"":"Typewriter"===t.style?"Prata":null;return Object.assign({},e,{currentStyle:Object.assign({},e.currentStyle,{font:s})});case M:var u="Black"===t.color?"":"Green"===t.color?"Green":"Blue"===t.color?"Blue":null;return Object.assign({},e,{currentStyle:Object.assign({},e.currentStyle,{color:u})});case Y:var d="White"===t.color?"":"Green"===t.color?"lightgreen":"Blue"===t.color?"Lightblue":null;return Object.assign({},e,{currentStyle:Object.assign({},e.currentStyle,{backgroundcolor:d})});default:return e}})),ce=Object(d.b)((function(e){return{Entries:e}}))(te),oe=function(e){Object(l.a)(a,e);var t=Object(c.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return i.a.createElement(d.a,{store:le},i.a.createElement(ce,null))}}]),a}(i.a.Component),ie=document.getElementById("root");u.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(oe,null)),ie)},84:function(e,t,a){}},[[104,1,2]]]);
//# sourceMappingURL=main.dad626dc.chunk.js.map