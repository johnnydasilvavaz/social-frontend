(function(e){function t(t){for(var r,s,c=t[0],i=t[1],u=t[2],d=0,m=[];d<c.length;d++)s=c[d],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&m.push(o[s][0]),o[s]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);l&&l(t);while(m.length)m.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,c=1;c<n.length;c++){var i=n[c];0!==o[i]&&(r=!1)}r&&(a.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},o={app:0},a=[];function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/social-frontend/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],i=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var l=i;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"025d":function(e,t,n){"use strict";n("0f58")},"0592":function(e,t,n){"use strict";n("5114")},"0f58":function(e,t,n){},"1c2b":function(e,t,n){"use strict";n("d1c9")},"1cec":function(e,t,n){},"36b5":function(e,t,n){},"4c38":function(e,t,n){},5114:function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23");function o(e,t,n,o,a,s){var c=Object(r["A"])("Nav"),i=Object(r["A"])("router-view");return Object(r["s"])(),Object(r["f"])("div",null,[Object(r["i"])(c),Object(r["i"])(i,{class:"content",key:e.$route.fullPath})])}n("b0c0");var a=n("f0fc"),s=n.n(a),c=function(e){return Object(r["v"])("data-v-c02b6336"),e=e(),Object(r["t"])(),e},i={class:"navcontainer"},u={class:"nav"},l={class:"nav__item nav__item--left"},d=c((function(){return Object(r["g"])("img",{class:"logo",alt:"Accueil",src:s.a},null,-1)})),m=c((function(){return Object(r["g"])("h1",{class:"groupomania"},"Groupomania",-1)})),p={key:0,class:"nav__item nav__item--home"},b={key:1,class:"nav__item nav__item--right"},f=Object(r["h"])("Se connecter"),O=Object(r["h"])(" | "),j=Object(r["h"])("Créer un compte"),h={key:2,class:"nav__item connected"},g={class:"nav__profile"},v=Object(r["h"])(" Se déconnecter"),_={class:"avatar"},w=["src"];function k(e,t,n,o,a,s){var c,k,y=Object(r["A"])("router-link"),C=Object(r["A"])("fa");return Object(r["s"])(),Object(r["f"])("header",i,[Object(r["g"])("nav",u,[Object(r["g"])("div",l,[Object(r["i"])(y,{to:"/"},{default:Object(r["G"])((function(){return[d,m]})),_:1})]),e.user?(Object(r["s"])(),Object(r["f"])("div",p,[Object(r["i"])(y,{"aria-label":"Accueil",to:"/"},{default:Object(r["G"])((function(){return[Object(r["i"])(C,{icon:"home"})]})),_:1})])):Object(r["e"])("",!0),e.user?(Object(r["s"])(),Object(r["f"])("div",h,[Object(r["g"])("div",g,[Object(r["i"])(y,{class:"nav__name",to:{name:"Profile",params:{id:null===(c=e.user)||void 0===c?void 0:c.uid}}},{default:Object(r["G"])((function(){return[Object(r["h"])(Object(r["C"])(e.user.forname)+" "+Object(r["C"])(e.user.name),1)]})),_:1},8,["to"]),Object(r["g"])("a",{class:"logoff",href:"javascript:void(0)",onClick:t[0]||(t[0]=function(){return s.handleClick&&s.handleClick.apply(s,arguments)})},[Object(r["i"])(C,{icon:"times-circle"}),v])]),Object(r["g"])("div",_,[Object(r["i"])(y,{class:"nav__name",to:{name:"Profile",params:{id:null===(k=e.user)||void 0===k?void 0:k.uid}}},{default:Object(r["G"])((function(){return[Object(r["g"])("img",{src:e.user.avatar,alt:"Ma photo de profil"},null,8,w)]})),_:1},8,["to"])])])):(Object(r["s"])(),Object(r["f"])("div",b,[Object(r["i"])(y,{to:"/login"},{default:Object(r["G"])((function(){return[f]})),_:1}),O,Object(r["i"])(y,{to:"/signup"},{default:Object(r["G"])((function(){return[j]})),_:1})]))])])}var y=n("5530"),C=n("5502"),P={name:"Nav",methods:{handleClick:function(){this.$store.dispatch("LOGOUT").then(this.$router.push("/login"))}},computed:Object(y["a"])({},Object(C["b"])(["user"]))},x=(n("0592"),n("d959")),S=n.n(x);const E=S()(P,[["render",k],["__scopeId","data-v-c02b6336"]]);var A=E,I=n("bc3a"),L=n.n(I),U={name:"App",components:{Nav:A},created:function(){var e=this;L.a.interceptors.response.use(void 0,(function(t){throw console.log(t.response.data.error.name),"TokenExpiredError"===t.response.data.error.name&&t.response.config&&!t.response.config.__isRetryRequest&&e.$store.dispatch("LOGOUT").then(e.$router.push("/login")),t}))}};n("9e62");const $=S()(U,[["render",o]]);var T=$,G=n("6c02"),R={class:"home"},H={key:0,class:"feed-container"},M={key:0};function B(e,t,n,o,a,s){var c=Object(r["A"])("NewPost"),i=Object(r["A"])("Post");return Object(r["s"])(),Object(r["f"])("main",R,[e.user?(Object(r["s"])(),Object(r["f"])("div",H,[Object(r["i"])(c),(Object(r["s"])(!0),Object(r["f"])(r["a"],null,Object(r["y"])(e.posts,(function(e){return Object(r["s"])(),Object(r["d"])(i,{class:"post",key:e,post:e,com:e.com},null,8,["post","com"])})),128)),e.posts?Object(r["e"])("",!0):(Object(r["s"])(),Object(r["f"])("div",M,"Il n'y a pas encore de publications"))])):Object(r["e"])("",!0)])}var N=n("1da1"),D=(n("96cf"),{class:"upost__container"}),V={class:"upost__avatar"},z=["src"],F={class:"upost__body"},J={class:"upost__actions"},q={class:"btn btn--img",for:"fileInput"},Q=["disabled"];function K(e,t,n,o,a,s){var c,i=Object(r["A"])("router-link"),u=Object(r["A"])("fa"),l=Object(r["A"])("Error");return Object(r["s"])(),Object(r["f"])("div",D,[Object(r["g"])("form",{class:"upost","aria-label":"Nouveau post",onSubmit:t[4]||(t[4]=Object(r["I"])((function(){return s.handlePost&&s.handlePost.apply(s,arguments)}),["prevent"]))},[Object(r["g"])("div",V,[Object(r["i"])(i,{class:"nav__name",to:{name:"Profile",params:{id:null===(c=e.user)||void 0===c?void 0:c.uid}}},{default:Object(r["G"])((function(){return[Object(r["g"])("img",{src:e.user.avatar,alt:"Ma photo de profil"},null,8,z)]})),_:1},8,["to"])]),Object(r["g"])("div",F,[Object(r["H"])(Object(r["g"])("textarea",{name:"post",placeholder:"Ecrivez un message ici",id:"post",cols:"20",rows:"3","onUpdate:modelValue":t[0]||(t[0]=function(e){return a.text=e}),onInput:t[1]||(t[1]=function(){return s.toggleBtn&&s.toggleBtn.apply(s,arguments)}),"aria-label":"Ecrivez votre nouveau message ici"},null,544),[[r["E"],a.text]]),Object(r["g"])("div",J,[Object(r["g"])("label",q,[Object(r["i"])(u,{icon:"images","aria-label":"Ajouter une image"})]),Object(r["g"])("input",{id:"fileInput",type:"file",title:"Ajouter une image",onChange:t[2]||(t[2]=function(){return s.setFile&&s.setFile.apply(s,arguments)})},null,32),this.file?(Object(r["s"])(),Object(r["f"])("a",{key:0,class:"file",href:"javascript:void(0)",onClick:t[3]||(t[3]=function(){return s.removeFile&&s.removeFile.apply(s,arguments)})},[Object(r["i"])(u,{icon:"trash-alt"}),Object(r["h"])("  "+Object(r["C"])(this.file.name),1)])):Object(r["e"])("",!0),Object(r["g"])("button",{class:"btn btn--submit",disabled:a.btnDisabled,"aria-label":"Publier un nouveau post"},"Envoyer",8,Q)])])],32),a.error?(Object(r["s"])(),Object(r["d"])(l,{key:0,error:a.error},null,8,["error"])):Object(r["e"])("",!0)])}var W={class:"error",role:"alert"};function X(e,t,n,o,a,s){return Object(r["s"])(),Object(r["f"])("div",W,Object(r["C"])(n.error),1)}var Y={name:"Error",props:["error"]};n("c121");const Z=S()(Y,[["render",X],["__scopeId","data-v-9a658c14"]]);var ee=Z,te={name:"NewPost",data:function(){return{text:"",file:null,btnDisabled:!0,error:""}},methods:{setFile:function(e){this.file=e.target.files[0],this.toggleBtn()},removeFile:function(){this.file=null,this.toggleBtn()},toggleBtn:function(){this.file||""!=this.text?this.btnDisabled=!1:this.btnDisabled=!0},handlePost:function(){var e=this,t=new FormData;if(""!=this.text&&t.append("text",this.text),null!=this.file){var n={"image/jpg":"jpg","image/jpeg":"jpg","image/png":"png","image/gif":"gif"};if(!n[this.file.type])return this.file=null,this.toggleBtn(),this.error="Seuls les fichiers jpeg, png et gif sont autorisés";t.append("image",this.file),this.error=""}var r={header:{"Content-Type":"multipart/form-data"}};L.a.post("post",t,r).then((function(){e.text="",e.file=null,e.btnDisabled=!0,e.$store.dispatch("getPosts")})).catch((function(e){return e}))}},components:{Error:ee},computed:Object(y["a"])({},Object(C["b"])(["user"]))};n("d562");const ne=S()(te,[["render",K],["__scopeId","data-v-56980b4c"]]);var re=ne,oe={class:"post__body"},ae={class:"post__header"},se={class:"post__header__left"},ce={class:"post__avatar"},ie=["src"],ue={class:"post__infos"},le={class:"post__user"},de={class:"post__date"},me={class:"post__header__right"},pe={key:0,class:"trash"},be=["src"],fe=["innerHTML"],Oe={key:0,class:"comments"},je=Object(r["h"])(" Charger le commentaire précédent "),he=["src"],ge={class:"trash trash--com"},ve=["onClick"],_e=["innerHTML"];function we(e,t,n,o,a,s){var c,i,u=Object(r["A"])("router-link"),l=Object(r["A"])("fa"),d=Object(r["A"])("Comment"),m=Object(r["A"])("ComPost");return Object(r["s"])(),Object(r["f"])("div",null,[Object(r["g"])("div",oe,[Object(r["g"])("div",ae,[Object(r["g"])("div",se,[Object(r["g"])("div",ce,[Object(r["i"])(u,{"aria-label":"Profil",class:"nav__name",to:{name:"Profile",params:{id:n.post.puid}}},{default:Object(r["G"])((function(){return[Object(r["g"])("img",{src:n.post.pavatar,alt:"Photo de profil"},null,8,ie)]})),_:1},8,["to"])]),Object(r["g"])("div",ue,[Object(r["g"])("span",le,Object(r["C"])(n.post.pforname)+" "+Object(r["C"])(n.post.pname),1),Object(r["g"])("span",de,Object(r["C"])(n.post.pdate),1)])]),Object(r["g"])("div",me,[Object(r["g"])("div",null,[Object(r["g"])("span",null,Object(r["C"])(a.postLikes),1),Object(r["g"])("a",{class:Object(r["o"])(1==a.postLiked?"liked":"disliked"),href:"javascript:void(0)","aria-label":"Liker le post",onClick:t[0]||(t[0]=function(e){return s.likePost(n.post.pid)})},[Object(r["i"])(l,{icon:"heart"})],2)]),n.post.puid==(null===(c=e.user)||void 0===c?void 0:c.uid)||"admin"==(null===(i=e.user)||void 0===i?void 0:i.role)?(Object(r["s"])(),Object(r["f"])("div",pe,[Object(r["g"])("a",{href:"javascript:void(0)","aria-label":"Supprimer le post",onClick:t[1]||(t[1]=function(e){return s.deletePost(n.post.pid)})},[Object(r["i"])(l,{icon:"trash-alt"})])])):Object(r["e"])("",!0)])]),n.post.pimgUrl?(Object(r["s"])(),Object(r["f"])("img",{key:0,class:"post__img",src:n.post.pimgUrl,alt:"Image du post"},null,8,be)):Object(r["e"])("",!0),n.post.ptext?(Object(r["s"])(),Object(r["f"])("div",{key:1,class:"post__text",innerHTML:n.post.ptext},null,8,fe)):Object(r["e"])("",!0)]),n.post.nbrComs>0||a.comments.length>0?(Object(r["s"])(),Object(r["f"])("div",Oe,[a.comExpand||2!=n.post.nbrComs?Object(r["e"])("",!0):(Object(r["s"])(),Object(r["f"])("a",{key:0,href:"javascript:void(0)",onClick:t[2]||(t[2]=function(e){return s.getComments(n.post.pid)})},[Object(r["i"])(l,{icon:"sort-up"}),je,Object(r["i"])(l,{icon:"sort-up"})])),!a.comExpand&&n.post.nbrComs>2?(Object(r["s"])(),Object(r["f"])("a",{key:1,href:"javascript:void(0)",onClick:t[3]||(t[3]=function(e){return s.getComments(n.post.pid)})},[Object(r["i"])(l,{icon:"sort-up"}),Object(r["h"])(" Charger les "+Object(r["C"])(n.post.nbrComs-1)+" commentaires précédents ",1),Object(r["i"])(l,{icon:"sort-up"})])):Object(r["e"])("",!0),(Object(r["s"])(!0),Object(r["f"])(r["a"],null,Object(r["y"])(a.comments,(function(t){return Object(r["s"])(),Object(r["d"])(d,{key:t},{avatar:Object(r["G"])((function(){return[Object(r["i"])(u,{"aria-label":"Profil",to:{name:"Profile",params:{id:t.user_id}}},{default:Object(r["G"])((function(){return[Object(r["g"])("img",{src:t.avatar,alt:""},null,8,he)]})),_:2},1032,["to"])]})),header:Object(r["G"])((function(){var n,o;return[Object(r["g"])("div",null,Object(r["C"])(t.forname)+" "+Object(r["C"])(t.name)+" :",1),Object(r["g"])("div",ge,[t.user_id==(null===(n=e.user)||void 0===n?void 0:n.uid)||"admin"==(null===(o=e.user)||void 0===o?void 0:o.role)?(Object(r["s"])(),Object(r["f"])("a",{key:0,href:"javascript:void(0)","aria-label":"Supprimer le commentaire",onClick:function(e){return s.deleteCom(t.id,t.post_id)}},[Object(r["i"])(l,{icon:"trash-alt"})],8,ve)):Object(r["e"])("",!0)])]})),comText:Object(r["G"])((function(){return[Object(r["g"])("div",{innerHTML:t.text},null,8,_e)]})),comDate:Object(r["G"])((function(){return[Object(r["h"])(Object(r["C"])(t.date),1)]})),_:2},1024)})),128))])):Object(r["e"])("",!0),Object(r["i"])(m,{onUpdateComments:s.updateComments,pid:n.post.pid},null,8,["onUpdateComments","pid"])])}n("ac1f"),n("5319"),n("466d");var ke={class:"com"},ye={class:"com__avatar"},Ce={class:"com__body"},Pe={class:"com__author"},xe={class:"com__text"},Se={class:"com__date"};function Ee(e,t,n,o,a,s){return Object(r["s"])(),Object(r["f"])("div",ke,[Object(r["g"])("div",ye,[Object(r["z"])(e.$slots,"avatar")]),Object(r["g"])("div",Ce,[Object(r["g"])("div",Pe,[Object(r["z"])(e.$slots,"header")]),Object(r["g"])("div",xe,[Object(r["z"])(e.$slots,"comText")]),Object(r["g"])("div",Se,[Object(r["z"])(e.$slots,"comDate")])])])}var Ae={name:"Comment"};n("938d");const Ie=S()(Ae,[["render",Ee]]);var Le=Ie,Ue=["name","title"],$e=["aria-label"],Te=["aria-label","disabled"];function Ge(e,t,n,o,a,s){return Object(r["s"])(),Object(r["f"])("form",{name:n.pid,class:"post__comments",title:"Nouveau commentaire "+n.pid,onSubmit:t[2]||(t[2]=Object(r["I"])((function(e){return s.postComment(n.pid)}),["prevent"]))},[Object(r["H"])(Object(r["g"])("input",{"aria-label":n.pid,type:"text",placeholder:"Commentez la publication","onUpdate:modelValue":t[0]||(t[0]=function(e){return a.text=e}),onInput:t[1]||(t[1]=function(){return s.toggleBtn&&s.toggleBtn.apply(s,arguments)})},null,40,$e),[[r["E"],a.text]]),Object(r["g"])("button",{"aria-label":n.pid,class:"btn",disabled:a.btnDisabled},"Envoyer",8,Te)],40,Ue)}n("a9e3");var Re={name:"ComPost",data:function(){return{text:"",btnDisabled:!0}},props:{pid:Number},methods:{postComment:function(e){var t=this;return Object(N["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:L.a.post("post/comments/"+e,{text:t.text}).then((function(e){var n=Object(y["a"])(Object(y["a"])({},e.data.comment),{},{avatar:t.user.avatar,name:t.user.name,forname:t.user.forname});t.$emit("updateComments",{comment:n}),t.text="",t.toggleBtn()})).catch((function(e){return e}));case 1:case"end":return n.stop()}}),n)})))()},toggleBtn:function(){""!=this.text?this.btnDisabled=!1:this.btnDisabled=!0}},computed:Object(y["a"])({},Object(C["b"])(["user"]))};n("bd40");const He=S()(Re,[["render",Ge],["__scopeId","data-v-7f9c7167"]]);var Me=He,Be={name:"Post",props:{post:Object,com:Object},data:function(){return{comments:[],someComs:!1,comExpand:!1,postLiked:this.post.pliked,postLikes:this.post.plikes}},methods:{updateComments:function(e){this.comments.push(e.comment)},deletePost:function(e){var t=this;L.a.delete("post/"+e).then((function(){"/"==t.$route.path?t.$store.dispatch("getPosts"):t.$store.dispatch("getPersonalPosts",t.$route.params.id)})).catch((function(e){return e}))},getComments:function(e){var t=this;L.a.get("post/comments/"+e).then((function(e){for(var n in t.comExpand=!0,t.comments=[],e.data)t.comments.push(e.data[n])})).catch((function(e){return e}))},deleteCom:function(e,t){var n=this;L.a.delete("post/comments/"+e).then((function(){n.comExpand?n.getComments(t):"/"==n.$route.path?n.$store.dispatch("getPosts"):n.$store.dispatch("getPersonalPosts",n.$route.params.id)})).catch((function(e){return e}))},likePost:function(e){var t=this;L.a.post("post/"+e+"/like").then((function(){0===t.postLiked?(t.postLiked=1,t.postLikes++):(t.postLiked=0,t.postLikes--)})).catch((function(e){return e}))},replaceURLs:function(e){if(e){var t=/(((https?:\/\/)|(www\.))[^\s]+)/g;return e.replace(t,(function(e){var t=e;return t.match("^https?://")||(t="https://"+t),'<a href="'+t+'" target="_blank" rel="noopener noreferrer">'+e+"</a>"}))}}},computed:Object(y["a"])({},Object(C["b"])(["user"])),components:{Comment:Le,ComPost:Me},created:function(){var e=this;return Object(N["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.comments=e.com?[e.com]:[];case 1:case"end":return t.stop()}}),t)})))()}};n("b664");const Ne=S()(Be,[["render",we]]);var De=Ne,Ve={name:"Home",computed:Object(y["a"])(Object(y["a"])({},Object(C["b"])(["user"])),Object(C["b"])(["posts"])),components:{Post:De,NewPost:re},created:function(){var e=this;return Object(N["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.$store.dispatch("getPosts");case 1:case"end":return t.stop()}}),t)})))()},mounted:function(){document.title="Groupomania - Accueil"}};n("c82e");const ze=S()(Ve,[["render",B]]);var Fe=ze,Je=function(e){return Object(r["v"])("data-v-2c610896"),e=e(),Object(r["t"])(),e},qe={class:"login"},Qe=Je((function(){return Object(r["g"])("h1",null,"Connexion",-1)})),Ke={class:"form__item"},We=Je((function(){return Object(r["g"])("label",{for:"email"},"Adresse email",-1)})),Xe={class:"form__item"},Ye=Je((function(){return Object(r["g"])("label",{for:"password"},"Mot de passe",-1)})),Ze=Je((function(){return Object(r["g"])("button",{class:"btn"},"Se connecter",-1)}));function et(e,t,n,o,a,s){var c=Object(r["A"])("Error");return Object(r["s"])(),Object(r["f"])("main",qe,[Object(r["g"])("form",{class:"login__form",onSubmit:t[2]||(t[2]=Object(r["I"])((function(){return s.handleSubmit&&s.handleSubmit.apply(s,arguments)}),["prevent"]))},[Qe,Object(r["g"])("div",Ke,[We,Object(r["H"])(Object(r["g"])("input",{type:"text",name:"email",id:"email","onUpdate:modelValue":t[0]||(t[0]=function(e){return a.email=e})},null,512),[[r["E"],a.email]])]),Object(r["g"])("div",Xe,[Ye,Object(r["H"])(Object(r["g"])("input",{type:"password",name:"password",id:"password","onUpdate:modelValue":t[1]||(t[1]=function(e){return a.password=e})},null,512),[[r["E"],a.password]])]),Ze,a.error?(Object(r["s"])(),Object(r["d"])(c,{key:0,error:a.error},null,8,["error"])):Object(r["e"])("",!0)],32)])}var tt=n("f90c"),nt=n.n(tt),rt={components:{Error:ee},name:"Login",data:function(){return{email:"",password:"",error:""}},methods:{handleSubmit:function(){var e=this;return Object(N["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(nt.a.isEmail(e.email)&&nt.a.isStrongPassword(e.password)){t.next=2;break}return t.abrupt("return",e.error="Les informations fournies sont incorrectes");case 2:if(e.email&&e.password){t.next=4;break}return t.abrupt("return",e.error="Tous les champs doivent être renseignés");case 4:e.$store.dispatch("LOGIN",{email:e.email,password:e.password}).then((function(t){e.$store.dispatch("user",t.data.user),e.$router.push("/")})).catch((function(){e.error="Adresse email ou mot de passe incorrect"}));case 5:case"end":return t.stop()}}),t)})))()}},mounted:function(){document.title="Groupomania - Connexion"}};n("fd36");const ot=S()(rt,[["render",et],["__scopeId","data-v-2c610896"]]);var at=ot,st=function(e){return Object(r["v"])("data-v-7156cb66"),e=e(),Object(r["t"])(),e},ct={class:"signup"},it=st((function(){return Object(r["g"])("h1",null,"Création de compte",-1)})),ut={class:"form__item"},lt=st((function(){return Object(r["g"])("label",{for:"forname"},"Prénom",-1)})),dt={class:"form__item"},mt=st((function(){return Object(r["g"])("label",{for:"name"},"Nom",-1)})),pt={class:"form__item"},bt=st((function(){return Object(r["g"])("label",{for:"email"},"Adresse email",-1)})),ft={class:"form__item"},Ot=st((function(){return Object(r["g"])("label",{for:"password"},"Mot de passe",-1)})),jt={class:"form__item"},ht=st((function(){return Object(r["g"])("label",{for:"passwordConfirm"},"Confirmation",-1)})),gt=st((function(){return Object(r["g"])("button",{class:"btn"},"Créer mon compte",-1)}));function vt(e,t,n,o,a,s){var c=Object(r["A"])("Error");return Object(r["s"])(),Object(r["f"])("main",ct,[Object(r["g"])("form",{class:"signup__form",onSubmit:t[5]||(t[5]=Object(r["I"])((function(){return s.handleSubmit&&s.handleSubmit.apply(s,arguments)}),["prevent"]))},[it,Object(r["g"])("div",ut,[lt,Object(r["H"])(Object(r["g"])("input",{type:"text",name:"forname",id:"forname","onUpdate:modelValue":t[0]||(t[0]=function(e){return a.forname=e})},null,512),[[r["E"],a.forname]])]),Object(r["g"])("div",dt,[mt,Object(r["H"])(Object(r["g"])("input",{type:"text",name:"name",id:"name","onUpdate:modelValue":t[1]||(t[1]=function(e){return a.name=e})},null,512),[[r["E"],a.name]])]),Object(r["g"])("div",pt,[bt,Object(r["H"])(Object(r["g"])("input",{type:"text",name:"email",id:"email","onUpdate:modelValue":t[2]||(t[2]=function(e){return a.email=e})},null,512),[[r["E"],a.email]])]),Object(r["g"])("div",ft,[Ot,Object(r["H"])(Object(r["g"])("input",{type:"password",name:"password",id:"password","onUpdate:modelValue":t[3]||(t[3]=function(e){return a.password=e})},null,512),[[r["E"],a.password]])]),Object(r["g"])("div",jt,[ht,Object(r["H"])(Object(r["g"])("input",{type:"password",name:"passwordConfirm",id:"passwordConfirm","onUpdate:modelValue":t[4]||(t[4]=function(e){return a.passwordConfirm=e})},null,512),[[r["E"],a.passwordConfirm]])]),gt,a.error?(Object(r["s"])(),Object(r["d"])(c,{key:0,error:a.error},null,8,["error"])):Object(r["e"])("",!0)],32)])}n("d3b7"),n("25f0");var _t={name:"Signup",data:function(){return{forname:"",name:"",email:"",password:"",passwordConfirm:"",error:""}},methods:{handleSubmit:function(){var e=this;return this.forname&&this.name&&this.email&&this.password&&this.passwordConfirm?nt.a.isAlpha(nt.a.blacklist(this.name.toString(),"' -"))&&nt.a.isAlpha(nt.a.blacklist(this.forname.toString(),"' -"))?nt.a.isEmail(this.email)?nt.a.isStrongPassword(this.password)?this.passwordConfirm!=this.password?this.error="Le mot de passe et la confirmation ne sont pas identiques":void L.a.post("auth/signup",{forname:this.forname,name:this.name,email:this.email,password:this.password}).then((function(){e.$router.push("/Login")})).catch((function(){e.error="Les informations fournies sont incomplètes/incorrectes"})):this.error="Le mot de passe n'est pas assez complexe":this.error="Le format de l'adresse email est invalide":this.error="Le format du nom ou du prénom est incorrect":this.error="Tous les champs doivent être renseignés"}},components:{Error:ee},mounted:function(){document.title="Groupomania - Créer un compte"}};n("1c2b");const wt=S()(_t,[["render",vt],["__scopeId","data-v-7156cb66"]]);var kt=wt,yt=function(e){return Object(r["v"])("data-v-0d091772"),e=e(),Object(r["t"])(),e},Ct={class:"profile"},Pt=yt((function(){return Object(r["g"])("h2",null,"Etes-vous sûrs de vouloir supprimer votre compte ?",-1)})),xt=yt((function(){return Object(r["g"])("p",null,"Veuillez entrer votre mot de passe pour confirmer la suppression de votre compte :",-1)})),St={class:"modal__form",action:""},Et={class:"profile__container"},At=yt((function(){return Object(r["g"])("h2",null,"Mon profil",-1)})),It={class:"form__item"},Lt=["src"],Ut={class:"form__item"},$t=yt((function(){return Object(r["g"])("label",{for:"forname"},"Prénom ",-1)})),Tt=["placeholder"],Gt={class:"form__item"},Rt=yt((function(){return Object(r["g"])("label",{for:"name"},"Nom ",-1)})),Ht=["placeholder"],Mt={class:"form__item"},Bt=yt((function(){return Object(r["g"])("label",{for:"email"},"Email ",-1)})),Nt=["placeholder"],Dt={class:"form__item"},Vt=Object(r["h"])(" Supprimer mon compte"),zt=["disabled"],Ft=Object(r["h"])(" Enregistrer"),Jt={key:1,class:"profile__card"},qt=["src"],Qt={class:"profile__body"},Kt={class:"profile__name"},Wt={class:"profile__forname"},Xt={class:"profile__email"},Yt={class:"posts"};function Zt(e,t,n,o,a,s){var c,i,u=Object(r["A"])("Error"),l=Object(r["A"])("Modal"),d=Object(r["A"])("fa"),m=Object(r["A"])("Post");return Object(r["s"])(),Object(r["f"])("main",Ct,[a.showModal?(Object(r["s"])(),Object(r["d"])(l,{key:0},{default:Object(r["G"])((function(){return[Pt,xt,Object(r["g"])("form",St,[Object(r["H"])(Object(r["g"])("input",{type:"password",placeholder:"Votre mot de passe","onUpdate:modelValue":t[0]||(t[0]=function(e){return a.password=e})},null,512),[[r["E"],a.password]]),Object(r["g"])("div",null,[Object(r["g"])("button",{class:"btn",onClick:t[1]||(t[1]=Object(r["I"])((function(e){return a.showModal=!1}),["prevent"]))},"Annuler"),Object(r["g"])("button",{class:"btn btn--remove",onClick:t[2]||(t[2]=Object(r["I"])((function(e){return s.removeProfile()}),["prevent"]))},"Supprimer mon compte")]),a.invalidPass?(Object(r["s"])(),Object(r["d"])(u,{key:0,error:a.invalidPass},null,8,["error"])):Object(r["e"])("",!0)])]})),_:1})):Object(r["e"])("",!0),Object(r["g"])("div",Et,[e.user&&(null===(c=e.user)||void 0===c?void 0:c.uid)==n.id?(Object(r["s"])(),Object(r["f"])("form",{key:0,class:"profile__form",onSubmit:t[9]||(t[9]=Object(r["I"])((function(){return s.handleSubmit&&s.handleSubmit.apply(s,arguments)}),["prevent"]))},[At,Object(r["g"])("div",It,[Object(r["g"])("img",{class:"profile__img",src:e.user.avatar,alt:"Ma photo de profil"},null,8,Lt),Object(r["g"])("input",{type:"file",onChange:t[3]||(t[3]=function(){return s.setFile&&s.setFile.apply(s,arguments)})},null,32)]),Object(r["g"])("div",Ut,[$t,Object(r["H"])(Object(r["g"])("input",{type:"text",id:"forname",placeholder:e.user.forname,"onUpdate:modelValue":t[4]||(t[4]=function(e){return a.forname=e}),onInput:t[5]||(t[5]=function(){return s.toggleBtn&&s.toggleBtn.apply(s,arguments)})},null,40,Tt),[[r["E"],a.forname]])]),Object(r["g"])("div",Gt,[Rt,Object(r["H"])(Object(r["g"])("input",{type:"text",id:"name",placeholder:e.user.name,"onUpdate:modelValue":t[6]||(t[6]=function(e){return a.name=e}),onInput:t[7]||(t[7]=function(){return s.toggleBtn&&s.toggleBtn.apply(s,arguments)})},null,40,Ht),[[r["E"],a.name]])]),Object(r["g"])("div",Mt,[Bt,Object(r["g"])("input",{type:"text",id:"email",placeholder:e.user.email,disabled:""},null,8,Nt)]),Object(r["g"])("div",Dt,[Object(r["g"])("button",{class:"btn btn--remove",onClick:t[8]||(t[8]=Object(r["I"])((function(e){return a.showModal=!0}),["prevent"]))},[Object(r["i"])(d,{icon:"trash-alt"}),Vt]),Object(r["g"])("button",{class:"btn",disabled:a.btnDisabled},[Object(r["i"])(d,{icon:"save"}),Ft],8,zt)])],32)):Object(r["e"])("",!0),a.error?(Object(r["s"])(),Object(r["d"])(u,{key:1,error:a.error},null,8,["error"])):Object(r["e"])("",!0)]),e.user&&(null===(i=e.user)||void 0===i?void 0:i.uid)!=n.id?(Object(r["s"])(),Object(r["f"])("div",Jt,[Object(r["g"])("img",{class:"profile__img",src:a.avatar,alt:"Photo de profil"},null,8,qt),Object(r["g"])("div",Qt,[Object(r["g"])("span",Kt,Object(r["C"])(a.namePh),1),Object(r["g"])("span",Wt,Object(r["C"])(a.fornamePh),1),Object(r["g"])("span",Xt,Object(r["C"])(e.email),1)])])):Object(r["e"])("",!0),Object(r["g"])("div",Yt,[(Object(r["s"])(!0),Object(r["f"])(r["a"],null,Object(r["y"])(e.posts,(function(e){return Object(r["s"])(),Object(r["d"])(m,{class:"post",key:e,post:e,com:e.com},null,8,["post","com"])})),128))])])}var en={class:"modal__back"},tn={class:"modal"};function nn(e,t,n,o,a,s){return Object(r["s"])(),Object(r["f"])("div",en,[Object(r["g"])("div",tn,[Object(r["z"])(e.$slots,"default",{},void 0,!0)])])}var rn={name:"Modal",data:function(){return{password:""}},methods:{handleSubmit:function(){}}};n("ed19");const on=S()(rn,[["render",nn],["__scopeId","data-v-a3aa636c"]]);var an=on,sn={name:"Profile",data:function(){return{avatar:"",name:"",namePh:"",forname:"",fornamePh:"",file:null,showModal:!1,btnDisabled:!0,password:"",error:"",invalidPass:""}},components:{Modal:an,Post:De,Error:ee},props:["id"],computed:Object(y["a"])(Object(y["a"])({},Object(C["b"])(["user"])),Object(C["b"])(["posts"])),methods:{setFile:function(e){this.file=e.target.files[0],this.toggleBtn()},toggleBtn:function(){this.file||""!=this.name&&this.name!=this.user.name||""!=this.forname&&this.forname!=this.user.forname?this.btnDisabled=!1:this.btnDisabled=!0},handleSubmit:function(){var e=this,t=new FormData;if(""!=this.name){if(!nt.a.isAlpha(nt.a.blacklist(this.name.toString(),"' -")))return this.error="Le format du nom est incorrect";t.append("name",this.name)}if(""!=this.forname){if(!nt.a.isAlpha(nt.a.blacklist(this.forname.toString(),"' -")))return this.error="Le format du prénom est incorrect";t.append("forname",this.forname)}if(null!=this.file){var n={"image/jpg":"jpg","image/jpeg":"jpg","image/png":"png","image/gif":"gif"};if(!n[this.file.type])return this.file=null,this.toggleBtn(),this.error="Seuls les fichiers jpeg, png et gif sont autorisés";t.append("image",this.file),this.error=""}var r={header:{"Content-Type":"multipart/form-data"}};L.a.put("me",t,r).then((function(t){e.$store.dispatch("user",t.data.user),e.$store.dispatch("getPersonalPosts",e.$route.params.id),e.file=null,e.name="",e.forname="",e.error=""})).catch((function(e){return e}))},removeProfile:function(){var e=this;L.a.delete("me",{data:{password:this.password}}).then((function(){e.showModal=!1,e.invalidPass="",e.$store.dispatch("LOGOUT"),e.$router.push("/login")})).catch((function(){return e.password="",e.invalidPass="Mot de passe incorrect"}))},getPersonalProfile:function(){var e=this;L.a.get("me/"+this.$route.params.id).then((function(t){e.namePh=t.data[0].name,e.fornamePh=t.data[0].forname,e.email=t.data[0].email,e.avatar=t.data[0].avatar})).catch((function(e){return e}))}},created:function(){var e=this;return Object(N["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.$store.getters.user.uid!=e.$route.params.id&&e.getPersonalProfile(),e.$store.dispatch("getPersonalPosts",e.$route.params.id);case 2:case"end":return t.stop()}}),t)})))()},mounted:function(){document.title="Groupomania - Profil"}};n("bd6e");const cn=S()(sn,[["render",Zt],["__scopeId","data-v-0d091772"]]);var un=cn,ln={class:"notfound"},dn=Object(r["g"])("h1",null,"Cette page n'existe pas !",-1),mn=[dn];function pn(e,t,n,o,a,s){return Object(r["s"])(),Object(r["f"])("main",ln,mn)}var bn={name:"NotFound"};n("025d");const fn=S()(bn,[["render",pn]]);var On=fn,jn=Object(C["a"])({state:{status:"",user:JSON.parse(localStorage.getItem("user"))||null,posts:null,token:localStorage.getItem("token")||""},getters:{isLoggedIn:function(e){return!!e.token},authStatus:function(e){return e.status},user:function(e){return e.user},posts:function(e){return e.posts},token:function(e){return e.token}},actions:{LOGIN:function(e,t){var n=e.commit;return new Promise((function(e,r){n("AUTH_REQUEST"),L.a.post("auth/login",{email:t.email,password:t.password}).then((function(t){var r=t.data.token,o=t.data.user;localStorage.setItem("token",r),localStorage.setItem("user",JSON.stringify(o)),L.a.defaults.headers.common["Authorization"]="Bearer "+r,n("AUTH_SUCCESS",r,o),e(t)})).catch((function(e){n("AUTH_ERROR"),localStorage.removeItem("token"),localStorage.removeItem("user"),r(e)}))}))},LOGOUT:function(e){var t=e.commit;return new Promise((function(e){t("AUTH_LOGOUT"),localStorage.removeItem("token"),localStorage.removeItem("user"),delete L.a.defaults.headers.common["Authorization"],e()}))},user:function(e,t){e.commit("user",t),localStorage.setItem("user",JSON.stringify(t))},getPosts:function(e){return Object(N["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,L.a.get("post").then((function(t){e.commit("posts",t.data)})).catch((function(e){return e}));case 2:case"end":return t.stop()}}),t)})))()},getPersonalPosts:function(e,t){return Object(N["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,L.a.get("me/posts/"+t).then((function(t){e.commit("posts",t.data)})).catch((function(e){return e}));case 2:case"end":return n.stop()}}),n)})))()},getProfile:function(e){return Object(N["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,L.a.get("me").then((function(t){e.commit("user",t.data.user)})).catch((function(e){return e}));case 2:case"end":return t.stop()}}),t)})))()},token:function(e,t){e.commit("token",t)}},mutations:{AUTH_REQUEST:function(e){e.status="loading"},AUTH_SUCCESS:function(e,t,n){e.status="success",e.token=t,e.user=n},AUTH_ERROR:function(e){e.status="error"},AUTH_LOGOUT:function(e){e.status="",e.token="",e.user=null},user:function(e,t){e.user=t},posts:function(e,t){e.posts=t},token:function(e,t){e.token=t}}}),hn=jn,gn=function(e,t,n){hn.getters.isLoggedIn?n("/social-frontend/"):n()},vn=function(e,t,n){hn.getters.isLoggedIn?n():(hn.dispatch("LOGOUT"),n("/social-frontend/login"))},_n=[{path:"/",redirect:{name:"Home"}},{path:"/social-frontend/",name:"Home",component:Fe,beforeEnter:vn},{path:"/social-frontend/login",name:"Login",component:at,beforeEnter:gn},{path:"/social-frontend/signup",name:"Signup",component:kt},{path:"/social-frontend/profile/:id",name:"Profile",component:un,props:!0,beforeEnter:vn},{path:"/social-frontend/:pathMatch(.*)",name:"NotFound",component:On}],wn=Object(G["a"])({history:Object(G["b"])(),routes:_n,scrollBehavior:function(){window.scrollTo(0,0)}}),kn=wn;L.a.defaults.baseURL="https://nameless-springs-92270.herokuapp.com/api/";var yn=n("ecee"),Cn=n("c074"),Pn=n("ad3d");yn["c"].add(Cn["a"]);var xn=localStorage.getItem("token");xn&&(L.a.defaults.headers.common["Authorization"]="Bearer "+xn),Object(r["c"])(T).use(kn).use(hn).component("fa",Pn["a"]).mount("#app")},"580e":function(e,t,n){},"6c83":function(e,t,n){},"6eda":function(e,t,n){},"938d":function(e,t,n){"use strict";n("580e")},"97a3":function(e,t,n){},"9e62":function(e,t,n){"use strict";n("36b5")},b664:function(e,t,n){"use strict";n("1cec")},b912:function(e,t,n){},bd40:function(e,t,n){"use strict";n("b912")},bd6e:function(e,t,n){"use strict";n("d250")},c121:function(e,t,n){"use strict";n("6eda")},c82e:function(e,t,n){"use strict";n("97a3")},d1c9:function(e,t,n){},d250:function(e,t,n){},d562:function(e,t,n){"use strict";n("d7ed")},d7ed:function(e,t,n){},ed19:function(e,t,n){"use strict";n("6c83")},f0fc:function(e,t,n){e.exports=n.p+"img/icon.69b45ada.png"},fd36:function(e,t,n){"use strict";n("4c38")}});
//# sourceMappingURL=app.12ec7a0e.js.map