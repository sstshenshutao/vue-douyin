(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-58b5b620"],{"2c78":function(t,s,e){},"486e":function(t,s,e){"use strict";e.r(s);var a=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("my-list",{attrs:{Title:"赞"}},[t._l(t.Interests,function(s){return a("li",{key:s.id,staticClass:"list-item"},[a("img",{staticClass:"avatar",attrs:{src:e("9ad0"),width:"45",height:"45",alt:""}}),a("div",{staticClass:"main"},[a("p",{staticClass:"name"},[t._v("@"+t._s(s.name))]),a("p",{staticClass:"name"},[t._v("赞了你的作品")]),a("p",{staticClass:"desc"},[t._v(t._s(s.time))])]),a("img",{staticClass:"cover",attrs:{src:e("9ad0"),alt:"",width:"60",height:"60"}})])}),t.Interests.length?t._e():a("div",{staticClass:"tip-wrap"},[a("p",[t._v("您还没有被@哦")]),a("p",{staticClass:"desc"},[t._v("赶快去和好友互动起来吧！")])])],2)],1)},i=[],n=e("89d4"),c={data:function(){return{Interests:[{id:1,avatar:"",name:"well啊",content:"@测试小号 艾特",time:"刚刚"}]}},components:{MyList:n["a"]}},l=c,o=(e("c2b6"),e("2877")),r=Object(o["a"])(l,a,i,!1,null,"01728b10",null);r.options.__file="MessageLike.vue";s["default"]=r.exports},7211:function(t,s,e){},"89d4":function(t,s,e){"use strict";var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"myList"},[e("div",{staticClass:"topBar"},[e("span",{staticClass:"backbtn iconfont icon-left",on:{click:t.GoBack}}),e("p",{staticClass:"title"},[t._v(t._s(t.Title))])]),e("scroll",{staticClass:"scroll-wrap",class:{"scroll-wrap-bottom":t.needBottomMargin},attrs:{pullup:!0},on:{scrollToEnd:t.scrollToEnd}},[e("ul",[t._t("default")],2)])],1)},i=[],n=e("e9fc"),c={props:{Title:{type:String,required:!0},needBottomMargin:{type:Boolean,default:!1}},methods:{GoBack:function(){this.$router.back()},scrollToEnd:function(){this.$emit("scrollToEnd")}},components:{Scroll:n["a"]}},l=c,o=(e("e20e"),e("2877")),r=Object(o["a"])(l,a,i,!1,null,"3ec6e589",null);r.options.__file="myList.vue";s["a"]=r.exports},"9ad0":function(t,s,e){t.exports=e.p+"assets/img/1.a9b784ef.jpg"},c2b6:function(t,s,e){"use strict";var a=e("7211"),i=e.n(a);i.a},e20e:function(t,s,e){"use strict";var a=e("2c78"),i=e.n(a);i.a}}]);