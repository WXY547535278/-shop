(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-login-duanxin"],{1486:function(t,i,n){"use strict";n.r(i);var o=n("e48d"),e=n("bad4");for(var a in e)"default"!==a&&function(t){n.d(i,t,function(){return e[t]})}(a);n("b96d");var r=n("2877"),s=Object(r["a"])(e["default"],o["a"],o["b"],!1,null,"7144d407",null);i["default"]=s.exports},1617:function(t,i,n){"use strict";var o=n("288e");Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0,n("6b54"),n("87b3");var e=o(n("f499")),a=o(n("9c42")),r={name:"loginDuanxin",data:function(){return{phone:"",phoneLogin:{url:"unifiedPhoneLogin",method:"post"},verification:{url:"sendVerifyCode",method:"post"},verificationData:{phone:this.phone,type:"2"},verificationTxt:"获取验证码"}},methods:{getYanZhengMa:function(){var t=this;this.verificationData.phone=this.phone,console.log(this.verificationData),a.default.httpRequest(this.verification,this.verificationData).then(function(i){if(console.log(i),200==i.data.code){t.verificationTxt=60;var n=setInterval(function(){t.verificationTxt--,0==t.verificationTxt&&(t.verificationTxt="重新发送",clearInterval(n))},1e3)}},function(t){console.log(t)})},formSubmit:function(t){var i=this;t.detail.value.login_type="0",console.log(t.detail.value),console.log("form发生了submit事件，携带数据为："+(0,e.default)(t.detail.value)),a.default.httpRequest(this.phoneLogin,(0,e.default)(t.detail.value)).then(function(t){console.log(t),400==t.data.code&&uni.showToast({title:t.data.msg,icon:"none",duration:1e3}),200==t.data.code&&(console.log("短信登录成功返回的token数据"),console.log(t.data.data.token),console.log(t.data.data.employeeInfo.login_id),i.$store.commit("swapId",t.data.data.employeeInfo.login_id),uni.setStorage({key:"token",data:t.data.data.token,success:function(t){function i(){return t.apply(this,arguments)}return i.toString=function(){return t.toString()},i}(function(){console.log(success)})}),uni.showToast({title:"登录成功！",icon:"success",duration:2e3,success:function(){console.log("haha"),setTimeout(function(){uni.switchTab({url:"../tabbar/tabbar-2/tabbar-2"})},2e3)}}))},function(t){console.log(t)})}}};i.default=r},b96d:function(t,i,n){"use strict";var o=n("bfd0"),e=n.n(o);e.a},bad4:function(t,i,n){"use strict";n.r(i);var o=n("1617"),e=n.n(o);for(var a in o)"default"!==a&&function(t){n.d(i,t,function(){return o[t]})}(a);i["default"]=e.a},bfd0:function(t,i,n){var o=n("c841");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var e=n("4f06").default;e("e58bb980",o,!0,{sourceMap:!1,shadowMode:!1})},c841:function(t,i,n){var o=n("b041");i=t.exports=n("2350")(!1),i.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.login[data-v-7144d407]{width:100%;height:100%;position:relative}.login .logo-container[data-v-7144d407]{position:absolute;width:100%;height:%?478?%;top:0;background-image:url('+o(n("79f5"))+");background-size:100% 100%;background-repeat:no-repeat}.login .logo-container-img[data-v-7144d407]{width:%?298?%;height:%?114?%;background-image:url("+o(n("089b"))+");background-repeat:no-repeat;background-size:cover;position:absolute;left:%?212?%;top:%?132?%;z-index:1000}.login .logo-container-decoration[data-v-7144d407]{width:100%;height:%?280?%;position:absolute;top:%?300?%;left:0}.login .logo-container-decoration .decoration[data-v-7144d407]{position:absolute;left:0;width:100%;height:100%;background-image:url("+o(n("3149"))+");background-size:150% 150%;background-position:30% 0}.login .logo-container-decoration .decoration[data-v-7144d407]:last-child{-webkit-transform:scaleX(-1);-ms-transform:scaleX(-1);transform:scaleX(-1)}.login-input[data-v-7144d407]{position:absolute;left:%?49?%;top:%?360?%;width:%?652?%;height:%?774?%;background:#fff;-webkit-box-shadow:%?0?% %?16?% %?119?% %?0?% hsla(0,0%,45.5%,.3);box-shadow:%?0?% %?16?% %?119?% %?0?% hsla(0,0%,45.5%,.3);border-radius:%?44?% %?44?% %?44?% %?44?%}.login-input-form[data-v-7144d407]{padding:%?66?% %?50?% %?0?% %?50?%;line-height:%?64?%;display:block}.login-input-form-content .input-item[data-v-7144d407]{position:relative;width:%?550?%;height:%?64?%;border-bottom:%?2?% solid #e5e5e5}.login-input-form-content .input-item[data-v-7144d407]:first-child{margin-bottom:%?30?%}.login-input-form-content .input-item uni-image[data-v-7144d407]{width:%?40?%;height:%?40?%;margin-right:%?30?%}.login-input-form-content .input-item uni-input[data-v-7144d407]{font-size:%?26?%;display:inline-block;line-height:%?64?%}.login-input-form-content .input-item .yanZhengMa[data-v-7144d407]{position:absolute;text-align:center;font-size:%?24?%;color:#ff5207;right:0;top:%?12?%;width:%?150?%;height:%?40?%;line-height:%?40?%;background:#ddd;border-radius:%?16?%}.login-input-form-content .link[data-v-7144d407]{font-size:%?24?%;width:100%;height:%?64?%;position:relative}.login-input-form-content .link uni-navigator[data-v-7144d407]{display:inline-block}.login-input-form-content .link .left[data-v-7144d407]{margin-right:%?400?%;color:#fe6959}.login-input-form-content .link .right[data-v-7144d407]{color:#999}.login-input-form .submit-button[data-v-7144d407]{width:%?564?%;height:%?88?%;background:-webkit-gradient(linear,right top,left top,from(#fd8957),to(#ff4e02));background:-o-linear-gradient(right,#fd8957,#ff4e02);background:linear-gradient(-90deg,#fd8957,#ff4e02);-webkit-box-shadow:%?0?% %?12?% %?44?% %?4?% rgba(255,78,2,.3);box-shadow:%?0?% %?12?% %?44?% %?4?% rgba(255,78,2,.3);border-radius:%?44?%;color:#fff;font-size:%?34?%;position:absolute;left:%?44?%;top:%?334?%}.login-input-form .line[data-v-7144d407]{position:absolute;font-size:%?20?%;color:#acacac;left:%?92?%;top:%?482?%;width:%?486?%;height:%?26?%;line-height:%?26?%}.login-input-form .line uni-text[data-v-7144d407]{display:inline-block}.login-input-form .line-left[data-v-7144d407],.login-input-form .line-right[data-v-7144d407]{width:%?210?%;height:%?2?%;background-color:#eee;margin-bottom:%?6?%}.login-input-form .line-text[data-v-7144d407]{padding:0 %?6?%}.login-input-form .wechat[data-v-7144d407]{position:absolute;left:%?282?%;top:%?544?%;width:%?88?%;height:%?88?%;background-color:#28b602;background-image:url("+o(n("5a71"))+");background-size:70% 60%;background-repeat:no-repeat;background-position:50%;border-radius:50%}.login-input-form .zhaohui[data-v-7144d407]{position:absolute;left:%?266?%;top:%?710?%;font-size:%?24?%;color:#fe6959}.login-footer[data-v-7144d407]{width:100%;text-align:center;height:%?20?%;line-height:%?20?%;position:absolute;top:%?1236?%;font-size:%?24?%;color:#aaa}",""])},e48d:function(t,i,n){"use strict";var o=function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("v-uni-view",{staticClass:"login"},[n("v-uni-view",{staticClass:"logo-container"},[n("v-uni-view",{staticClass:"logo-container-img"}),n("v-uni-view",{staticClass:"logo-container-decoration"},[n("v-uni-view",{staticClass:"decoration"}),n("v-uni-view",{staticClass:"decoration"})],1)],1),n("v-uni-view",{staticClass:"login-input"},[n("v-uni-form",{staticClass:"login-input-form",attrs:{method:"post"},on:{submit:function(i){i=t.$handleEvent(i),t.formSubmit(i)}}},[n("v-uni-view",{staticClass:"login-input-form-content"},[n("v-uni-view",{staticClass:"input-item"},[n("v-uni-image",{attrs:{src:"../../static/img/loginImg/icon_mobilephone.png"}}),n("v-uni-input",{attrs:{confirmtype:"text",name:"phone",autocomplete:"off",placeholder:"请输入手机号码",required:""},model:{value:t.phone,callback:function(i){t.phone=i},expression:"phone"}})],1),n("v-uni-view",{staticClass:"input-item"},[n("v-uni-image",{attrs:{src:"../../static/img/loginImg/lock.png"}}),n("v-uni-input",{attrs:{confirmtype:"text",name:"verifyCode",autocomplete:"off",placeholder:"请输入验证码",required:""}}),n("v-uni-view",{staticClass:"yanZhengMa",on:{click:function(i){i=t.$handleEvent(i),t.getYanZhengMa(i)}}},[t._v(t._s(t.verificationTxt))])],1),n("v-uni-view",{staticClass:"link"},[n("v-uni-navigator",{staticClass:"left",attrs:{url:"../register/register"}},[t._v("注册")]),n("v-uni-navigator",{staticClass:"right",attrs:{url:"zhanghao"}},[t._v("密码登录")])],1)],1),n("v-uni-button",{staticClass:"submit-button",attrs:{"form-type":"submit"}},[t._v("登 录")]),n("v-uni-view",{staticClass:"line"},[n("v-uni-text",{staticClass:"line-left"}),n("v-uni-text",{staticClass:"line-text"},[t._v("OR")]),n("v-uni-text",{staticClass:"line-right"})],1),n("v-uni-navigator",{staticClass:"wechat",attrs:{href:""}}),n("v-uni-navigator",{staticClass:"zhaohui",attrs:{url:"forgetPwd"}},[t._v("忘记密码？")])],1)],1),n("v-uni-view",{staticClass:"login-footer"},[t._v("© 2019 安昂商城 版权所有")])],1)},e=[];n.d(i,"a",function(){return o}),n.d(i,"b",function(){return e})}}]);