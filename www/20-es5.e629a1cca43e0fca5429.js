(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{CE8X:function(l,n,t){"use strict";t.r(n);var u=t("8Y7J");class e{}var o=t("pMnS"),i=t("MKJQ"),s=t("sZkV"),c=t("iInd"),a=t("SVse"),r=t("gTw3"),b=t("H+bZ"),p=t("OlR4");class g{constructor(l,n,t,u,e){this.menu=l,this.geolocation=n,this.router=t,this.common=u,this.apiService=e,this.statusAll=[]}ngOnInit(){0==this.apiService.statusAll.length?(this.common.presentLoading(),this.apiService.getAllStatus().then(l=>{this.statusAll=l,this.common.hideLoading(),console.log(this.statusAll)})):this.statusAll=this.apiService.statusAll}setStatus(l,n){this.common.presentLoading();let t=this.statusAll.find(({code:n})=>n===l);this.geolocation.getCurrentPosition().then(l=>{this.apiService.setReport({latitude:l.coords.latitude,longitude:l.coords.longitude,status_id:t.id}).then(l=>{console.log(l),localStorage.setItem("statusId",t.id),this.common.hideLoading(),this.router.navigate([n])}).catch(l=>{console.log("error setting report",l),this.common.presentToast(l),this.common.hideLoading()})}).catch(l=>{console.log("Error getting location",l),this.common.hideLoading()})}ionViewDidEnter(){this.menu.enable(!1,"first")}}var m=u.nb({encapsulation:0,styles:[[".status-element.blue[_ngcontent-%COMP%]{border:1px solid #90dffc}.status-element.blue[_ngcontent-%COMP%]   .text-element[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{color:#00b1fa}.status-element.yellow[_ngcontent-%COMP%]{border:1px solid #f5ca5b}.status-element.yellow[_ngcontent-%COMP%]   .text-element[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{color:#fa9600}.status-element.red[_ngcontent-%COMP%]{border:1px solid #fc9090}.status-element.red[_ngcontent-%COMP%]   .text-element[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{color:#df3030}.status-element.green[_ngcontent-%COMP%]{border:1px solid #90fce9}.status-element.green[_ngcontent-%COMP%]   .text-element[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{color:#30dfa0}.status-element[_ngcontent-%COMP%]{border:1px solid #90dffc;box-sizing:border-box;height:100px;padding:10px;border-radius:25px;margin-left:40px;margin-right:40px;margin-bottom:20px;display:-webkit-box;display:flex}.status-element[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]{width:71.06px;height:71.06px}.status-element[_ngcontent-%COMP%]   .text-element[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-pack:center;justify-content:center;margin-left:10px}.status-element[_ngcontent-%COMP%]   .text-element[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-style:normal;font-weight:700;font-size:22px;line-height:26px;letter-spacing:-.47px;color:#00b1fa}.status-element[_ngcontent-%COMP%]   .text-element[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%]{margin-top:5px;font-style:normal;font-weight:400;font-size:16px;line-height:19px;letter-spacing:-.47px;color:#333}ion-item[_ngcontent-%COMP%]{border:1px solid #90dffc;box-sizing:border-box;border-radius:25px;margin-left:40px;margin-right:40px;margin-bottom:20px}.subtitle[_ngcontent-%COMP%]{text-align:center}ion-title[_ngcontent-%COMP%]{position:absolute;top:0;left:0;padding:0 90px 1px;width:100%;height:100%;text-align:center}"]],data:{}});function d(l){return u.Gb(0,[(l()(),u.pb(0,0,null,null,20,"ion-header",[],null,null,null,i.z,i.i)),u.ob(1,49152,null,0,s.A,[u.h,u.k,u.x],null,null),(l()(),u.pb(2,0,null,0,18,"ion-toolbar",[],null,null,null,i.H,i.q)),u.ob(3,49152,null,0,s.yb,[u.h,u.k,u.x],null,null),(l()(),u.pb(4,0,null,0,4,"ion-buttons",[["slot","start"]],null,null,null,i.u,i.d)),u.ob(5,49152,null,0,s.k,[u.h,u.k,u.x],null,null),(l()(),u.pb(6,0,null,0,2,"ion-back-button",[["color","primary"]],null,[[null,"click"]],(function(l,n,t){var e=!0;return"click"===n&&(e=!1!==u.Bb(l,8).onClick(t)&&e),e}),i.s,i.b)),u.ob(7,49152,null,0,s.f,[u.h,u.k,u.x],{color:[0,"color"]},null),u.ob(8,16384,null,0,s.g,[[2,s.eb],s.Eb],null,null),(l()(),u.pb(9,0,null,0,7,"ion-buttons",[["slot","end"]],null,null,null,i.u,i.d)),u.ob(10,49152,null,0,s.k,[u.h,u.k,u.x],null,null),(l()(),u.pb(11,0,null,0,5,"ion-button",[["routerDirection","forward"],["routerLink","/map"]],null,[[null,"click"]],(function(l,n,t){var e=!0;return"click"===n&&(e=!1!==u.Bb(l,13).onClick()&&e),"click"===n&&(e=!1!==u.Bb(l,14).onClick(t)&&e),e}),i.t,i.c)),u.ob(12,49152,null,0,s.j,[u.h,u.k,u.x],{routerDirection:[0,"routerDirection"]},null),u.ob(13,16384,null,0,c.n,[c.m,c.a,[8,null],u.B,u.k],{routerLink:[0,"routerLink"]},null),u.ob(14,737280,null,0,s.Hb,[a.g,s.Eb,u.k,c.m,[2,c.n]],{routerDirection:[0,"routerDirection"]},null),(l()(),u.pb(15,0,null,0,1,"ion-icon",[["name","map-outline"],["slot","icon-only"]],null,null,null,i.A,i.j)),u.ob(16,49152,null,0,s.B,[u.h,u.k,u.x],{name:[0,"name"]},null),(l()(),u.pb(17,0,null,0,3,"ion-title",[],null,null,null,i.G,i.p)),u.ob(18,49152,null,0,s.wb,[u.h,u.k,u.x],null,null),(l()(),u.pb(19,0,null,0,1,"ion-img",[["src","assets/icon/LOGO_.svg"],["style","height: 40px;"]],null,null,null,i.B,i.k)),u.ob(20,49152,null,0,s.C,[u.h,u.k,u.x],{src:[0,"src"]},null),(l()(),u.pb(21,0,null,null,37,"ion-content",[],null,null,null,i.w,i.f)),u.ob(22,49152,null,0,s.t,[u.h,u.k,u.x],null,null),(l()(),u.pb(23,0,null,0,3,"div",[["class","subtitle"]],null,null,null,null,null)),(l()(),u.pb(24,0,null,null,2,"h5",[],null,null,null,null,null)),(l()(),u.pb(25,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),u.Fb(-1,null,["Cuentanos como has estado"])),(l()(),u.pb(27,0,null,0,7,"div",[["button",""],["class","status-element blue"]],null,[[null,"click"]],(function(l,n,t){var u=!0;return"click"===n&&(u=!1!==l.component.setStatus("fine","/map")&&u),u}),null,null)),(l()(),u.pb(28,0,null,null,1,"div",[["class","image"]],null,null,null,null,null)),(l()(),u.pb(29,0,null,null,0,"img",[["src","assets/images/fine_user.png"]],null,null,null,null,null)),(l()(),u.pb(30,0,null,null,4,"div",[["class","text-element"]],null,null,null,null,null)),(l()(),u.pb(31,0,null,null,1,"div",[["class","title"]],null,null,null,null,null)),(l()(),u.Fb(-1,null,[" Estoy bien "])),(l()(),u.pb(33,0,null,null,1,"div",[["class","subtitle"]],null,null,null,null,null)),(l()(),u.Fb(-1,null,[" Sin ningun sintoma "])),(l()(),u.pb(35,0,null,0,7,"div",[["button",""],["class","status-element yellow"]],null,[[null,"click"]],(function(l,n,t){var u=!0;return"click"===n&&(u=!1!==l.component.setStatus("symptoms","/symptoms")&&u),u}),null,null)),(l()(),u.pb(36,0,null,null,1,"div",[["class","image"]],null,null,null,null,null)),(l()(),u.pb(37,0,null,null,0,"img",[["src","assets/images/symptoms.png"]],null,null,null,null,null)),(l()(),u.pb(38,0,null,null,4,"div",[["class","text-element"]],null,null,null,null,null)),(l()(),u.pb(39,0,null,null,1,"div",[["class","title"]],null,null,null,null,null)),(l()(),u.Fb(-1,null,[" Tengo sintomas "])),(l()(),u.pb(41,0,null,null,1,"div",[["class","subtitle"]],null,null,null,null,null)),(l()(),u.Fb(-1,null,[" Con fiebre, fatiga, etc "])),(l()(),u.pb(43,0,null,0,7,"div",[["button",""],["class","status-element red"]],null,[[null,"click"]],(function(l,n,t){var u=!0;return"click"===n&&(u=!1!==l.component.setStatus("infected","/map")&&u),u}),null,null)),(l()(),u.pb(44,0,null,null,1,"div",[["class","image"]],null,null,null,null,null)),(l()(),u.pb(45,0,null,null,0,"img",[["src","assets/images/infected.png"]],null,null,null,null,null)),(l()(),u.pb(46,0,null,null,4,"div",[["class","text-element"]],null,null,null,null,null)),(l()(),u.pb(47,0,null,null,1,"div",[["class","title"]],null,null,null,null,null)),(l()(),u.Fb(-1,null,[" Estoy infectado "])),(l()(),u.pb(49,0,null,null,1,"div",[["class","subtitle"]],null,null,null,null,null)),(l()(),u.Fb(-1,null,[" Fui testeado positivo "])),(l()(),u.pb(51,0,null,0,7,"div",[["button",""],["class","status-element green"]],null,[[null,"click"]],(function(l,n,t){var u=!0;return"click"===n&&(u=!1!==l.component.setStatus("recovered","/map")&&u),u}),null,null)),(l()(),u.pb(52,0,null,null,1,"div",[["class","image"]],null,null,null,null,null)),(l()(),u.pb(53,0,null,null,0,"img",[["src","assets/images/recovered.png"]],null,null,null,null,null)),(l()(),u.pb(54,0,null,null,4,"div",[["class","text-element"]],null,null,null,null,null)),(l()(),u.pb(55,0,null,null,1,"div",[["class","title"]],null,null,null,null,null)),(l()(),u.Fb(-1,null,[" Me recuper\xe9 "])),(l()(),u.pb(57,0,null,null,1,"div",[["class","subtitle"]],null,null,null,null,null)),(l()(),u.Fb(-1,null,[" Ya fui tratado con \xe9xito. "]))],(function(l,n){l(n,7,0,"primary"),l(n,12,0,"forward"),l(n,13,0,"/map"),l(n,14,0,"forward"),l(n,16,0,"map-outline"),l(n,20,0,"assets/icon/LOGO_.svg")}),null)}var h=u.lb("app-user-status",g,(function(l){return u.Gb(0,[(l()(),u.pb(0,0,null,null,1,"app-user-status",[],null,null,null,d,m)),u.ob(1,114688,null,0,g,[s.Cb,r.a,c.m,p.a,b.a],null,null)],(function(l,n){l(n,1,0)}),null)}),{},{},[]),x=t("s7LF");class f{}t.d(n,"UserStatusPageModuleNgFactory",(function(){return k}));var k=u.mb(e,[],(function(l){return u.yb([u.zb(512,u.j,u.X,[[8,[o.a,h]],[3,u.j],u.v]),u.zb(4608,a.j,a.i,[u.s,[2,a.p]]),u.zb(4608,x.m,x.m,[]),u.zb(4608,s.a,s.a,[u.x,u.g]),u.zb(4608,s.Db,s.Db,[s.a,u.j,u.p]),u.zb(4608,s.Gb,s.Gb,[s.a,u.j,u.p]),u.zb(1073742336,a.b,a.b,[]),u.zb(1073742336,x.l,x.l,[]),u.zb(1073742336,x.c,x.c,[]),u.zb(1073742336,s.Ab,s.Ab,[]),u.zb(1073742336,c.o,c.o,[[2,c.t],[2,c.m]]),u.zb(1073742336,f,f,[]),u.zb(1073742336,e,e,[]),u.zb(1024,c.k,(function(){return[[{path:"",component:g}]]}),[])])}))}}]);