(this.webpackJsonpvideo=this.webpackJsonpvideo||[]).push([[0],{114:function(e,t){},1164:function(e,t,n){},1170:function(e,t,n){},1173:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),i=n(15),r=n.n(i),l=n(21),c=n(22),s=n(25),d=n(23),u=n(78),m=n(68),h=n.n(m),g=n(69),v=n.n(g),p=n(1192),f=n(1189),y=n(1190),E=n(1191),w=n(74),b=n.n(w),C=n(48),x=(n(1163),n(1164),null),k=null,T=function(e){Object(s.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).changeCssVideos=function(e){var t="30%";30*e.offsetWidth/100<300&&(t="300px");var n=String(1/0)+"%",a="";a="100%",n="100%";for(var o=e.querySelectorAll("video"),i=0;i<o.length;++i)o[i].style.minWidth=t,o[i].style.minHeight="40%",o[i].style.setProperty("width",a),o[i].style.setProperty("height","auto");return{minWidth:t,minHeight:"40%",width:a,height:n}},a.connectToSocketServer=function(){(x=h.a.connect("http://rtmeeting.vercel.app",{secure:!0})).on("connect",(function(){x.emit("join-call",window.location.href),k=x.id,x.on("chat-message",a.addMessage),x.on("video-info",(function(e){console.table(e),a.videoTime=e.play_time,a.setState({videoUrl:e.video_url},(function(){a.listenVideoTime()}))})),x.on("video-time",(function(e,t,n){console.log("got remote time: "+e),a.videoTime=e,a.seekToTime()})),x.on("video-state",(function(e,t,n){console.log("got remote state: "+e),a.videoPaused=e,e?a.pauseVideo():a.playVideo()})),x.on("user-joined",(function(e,t){setTimeout((function(){if(a.videoUrl){var e=document.getElementById("my-video").currentTime;a.uploadVideoTime(e)}}),1e3)})),a.setState({connected:!0})}))},a.openChat=function(){return a.setState({showModal:!0,newmessages:0})},a.closeChat=function(){return a.setState({showModal:!1})},a.toggleChat=function(){a.state.showModal?a.closeChat():a.openChat()},a.handleMessage=function(e){return a.setState({message:e.target.value})},a.addMessage=function(e,t,n){a.setState((function(n){return{messages:[].concat(Object(u.a)(n.messages),[{sender:t,data:e}])}})),n!==k&&a.setState({newmessages:a.state.newmessages+1})},a.seekToTime=function(){document.getElementById("my-video").currentTime=a.videoTime},a.listenVideoTime=function(){var e=document.getElementById("my-video");e.addEventListener("timeupdate",(function(){var t=Math.floor(e.currentTime);(t-a.lastCurrentTime>1||t-a.lastCurrentTime<0)&&(console.log(t),Math.abs(t-a.videoTime)>5&&a.uploadVideoTime(t)),a.lastCurrentTime=t})),e.addEventListener("play",(function(){a.uploadVideoState(!1)})),e.addEventListener("pause",(function(){a.uploadVideoState(!0)}))},a.handleVideoUrl=function(e){a.videoUrl=e.target.value},a.uploadVideoTime=function(e){x.emit("video-time",e,a.state.username)},a.uploadVideoState=function(e){x.emit("video-state",e,a.state.username)},a.sendMessage=function(){x.emit("chat-message",a.state.message,a.state.username),a.setState({message:"",sender:a.state.username})},a.playVideo=function(){var e=document.getElementById("my-video");e&&e.paused&&e.play()},a.pauseVideo=function(){var e=document.getElementById("my-video");e&&!e.paused&&e.pause()},a.connect=function(){x.emit("video-url",a.videoUrl)},a.localVideoref=o.a.createRef(),a.videoAvailable=!1,a.audioAvailable=!1,a.videoUrl=null,a.videoTime=0,a.videoPaused=!1,a.lastCurrentTime=0,a.state={video:!1,audio:!1,screen:!1,showModal:!1,screenAvailable:!1,messages:[],message:"",newmessages:0,connected:!1,username:v.a.internet.userName(),videoUrl:null},{},a}return Object(c.a)(n,[{key:"componentDidMount",value:function(){this.connectToSocketServer()}},{key:"render",value:function(){var e=this;return!1===this.state.connected?o.a.createElement("div",{style:{background:"white",width:"30%",height:"auto",padding:"20px",minWidth:"400px",textAlign:"center",margin:"auto",marginTop:"50px",justifyContent:"center"}},o.a.createElement("h1",null,"Connecting...")):o.a.createElement("div",null,null===this.state.videoUrl?o.a.createElement("div",null,o.a.createElement("div",{style:{background:"white",width:"30%",height:"auto",padding:"20px",minWidth:"400px",textAlign:"center",margin:"auto",marginTop:"50px",justifyContent:"center"}},o.a.createElement("p",{style:{margin:0,fontWeight:"bold",paddingRight:"50px"}},"Set video url"),o.a.createElement(p.a,{placeholder:"url",onChange:function(t){return e.handleVideoUrl(t)}}),o.a.createElement(f.a,{variant:"contained",color:"primary",onClick:this.connect,style:{margin:"20px"}},"Connect")),o.a.createElement("div",{style:{justifyContent:"center",textAlign:"center",paddingTop:"40px"}},o.a.createElement("video",{id:"my-video",ref:this.localVideoref,autoPlay:!0,muted:!0,style:{borderStyle:"solid",borderColor:"#bdbdbd",objectFit:"fill",width:"60%",height:"30%"}}))):o.a.createElement("div",null,o.a.createElement("div",{className:"video-container"},o.a.createElement("video",{id:"my-video",controls:!0,ref:this.localVideoref,autoPlay:!0,muted:!0,controlsList:"nodownload",style:{borderStyle:"solid",borderColor:"#bdbdbd",marginTop:"3px",objectFit:"fill",width:"100%",height:"auto"},src:this.state.videoUrl})),o.a.createElement("div",{className:"chat-content-down",hidden:!this.state.showModal},o.a.createElement(C.a.Body,{style:{overflow:"auto",overflowY:"auto",height:"300px",textAlign:"left"}},this.state.messages.length>0?this.state.messages.map((function(e,t){return o.a.createElement("div",{key:t,style:{textAlign:"left"}},o.a.createElement("p",{style:{wordBreak:"break-all"}},o.a.createElement("b",null,e.sender),": ",e.data))})):o.a.createElement("p",null,"No message yet")),o.a.createElement(C.a.Footer,{className:"div-send-msg",style:{background:"white"}},o.a.createElement(p.a,{placeholder:"Message",value:this.state.message,onChange:function(t){return e.handleMessage(t)}}),o.a.createElement(f.a,{variant:"contained",color:"primary",onClick:this.sendMessage},"Send"))),o.a.createElement("div",{className:"chat-down",style:{backgroundColor:"whitesmoke",color:"whitesmoke",textAlign:"center"}},o.a.createElement(y.a,{badgeContent:this.state.newmessages,max:999,color:"secondary",onClick:this.toggleChat},o.a.createElement(E.a,{style:{color:"#424242"},onClick:this.toggleChat},o.a.createElement(b.a,null))))))}}]),n}(a.Component),S=n(75),j=n.n(S),V=(n(1170),function(e){Object(s.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).handleChange=function(e){return a.setState({url:e.target.value})},a.join=function(){if(""!==a.state.url){var e=a.state.url.split("/");window.location.href="/".concat(e[e.length-1])}else{e=Math.random().toString(36).substring(2,7);window.location.href="/".concat(e)}},a.state={url:""},a}return Object(c.a)(n,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"container2"},o.a.createElement("div",{style:{fontSize:"14px",background:"white",width:"10%",textAlign:"center",margin:"auto",marginBottom:"10px"}},"Source code:",o.a.createElement(E.a,{style:{color:"black"},onClick:function(){return window.location.href="https://github.com/0x5eba/Video-Meeting"}},o.a.createElement(j.a,null))),o.a.createElement("div",null,o.a.createElement("h1",{style:{fontSize:"45px"}},"Video Meeting"),o.a.createElement("p",{style:{fontWeight:"200"}},"Video conference website that lets you stay in touch with all your friends.")),o.a.createElement("div",{style:{background:"white",width:"30%",height:"auto",padding:"20px",minWidth:"400px",textAlign:"center",margin:"auto",marginTop:"100px"}},o.a.createElement("p",{style:{margin:0,fontWeight:"bold",paddingRight:"50px"}},"Start or join a meeting"),o.a.createElement(p.a,{placeholder:"URL",onChange:function(t){return e.handleChange(t)}}),o.a.createElement(f.a,{variant:"contained",color:"primary",onClick:this.join,style:{margin:"20px"}},"Go")))}}]),n}(a.Component)),M=n(76),O=n(8),A=function(e){Object(s.a)(n,e);var t=Object(d.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(M.a,null,o.a.createElement(O.c,null,o.a.createElement(O.a,{path:"/",exact:!0,component:V}),o.a.createElement(O.a,{path:"/:url",component:T}))))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(A,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},84:function(e,t,n){e.exports=n(1173)}},[[84,1,2]]]);
//# sourceMappingURL=main.ce38a460.chunk.js.map