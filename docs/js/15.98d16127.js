(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[15],{"7b1d":function(t,e,a){"use strict";var i=a("ad01"),s=a.n(i);s.a},ad01:function(t,e,a){},fd7b:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"q-ma-md row justify-evenly",staticStyle:{"max-width":"700px",width:"100%"}},[a("div",{staticClass:"q-ma-md row justify-center items-center full-width"},[a("q-toggle",{attrs:{label:"Toggle Hover"},model:{value:t.hover,callback:function(e){t.hover=e},expression:"hover"}}),a("q-toggle",{attrs:{label:"Toggle Transitions"},model:{value:t.active,callback:function(e){t.active=e},expression:"active"}})],1),a("div",{staticClass:"description text-center rounded-borders"},[a("q-flashcard",{style:t.style,attrs:{"no-hover":t.hover}},[a("q-flashcard-section",{attrs:{transition:"flip-left-in",active:t.active}},[a("img",{attrs:{src:t.getImage(0),width:"300",height:"200"}})])],1),a("div",{staticClass:"text-h5 q-pt-sm"},[t._v('transition="flip-left-in"')])],1),a("div",{staticClass:"description text-center rounded-borders"},[a("q-flashcard",{style:t.style,attrs:{"no-hover":t.hover}},[a("q-flashcard-section",{attrs:{transition:"flip-left-out",active:t.active}},[a("img",{attrs:{src:t.getImage(0),width:"300",height:"200"}})])],1),a("div",{staticClass:"text-h5 q-pt-sm"},[t._v('transition="flip-left-out"')])],1),a("div",{staticClass:"description text-center rounded-borders"},[a("q-flashcard",{style:t.style,attrs:{"no-hover":t.hover}},[a("q-flashcard-section",{attrs:{transition:"flip-right-in",active:t.active}},[a("img",{attrs:{src:t.getImage(1),width:"300",height:"200"}})])],1),a("div",{staticClass:"text-h5 q-pt-sm"},[t._v('transition="flip-right-in"')])],1),a("div",{staticClass:"description text-center rounded-borders"},[a("q-flashcard",{style:t.style,attrs:{"no-hover":t.hover}},[a("q-flashcard-section",{attrs:{transition:"flip-right-out",active:t.active}},[a("img",{attrs:{src:t.getImage(1),width:"300",height:"200"}})])],1),a("div",{staticClass:"text-h5 q-pt-sm"},[t._v('transition="flip-right-out"')])],1)])},s=[],r={data:function(){return{hover:!1,active:!1}},computed:{style:function(){return{width:"320px",height:"220px",backgroundImage:"url('https://raw.githubusercontent.com/quasarframework/quasar-ui-qflashcard/dev/demo/public/bgimg.jpg')",padding:"10px",border:"10px solid #fff",textAlign:"center",boxShadow:"1px 1px 2px #e6e6e6"}}},methods:{getImage:function(t){return t%2?"https://raw.githubusercontent.com/quasarframework/quasar-ui-qflashcard/dev/demo/public/1.jpg":"https://raw.githubusercontent.com/quasarframework/quasar-ui-qflashcard/dev/demo/public/2.jpg"}}},o=r,n=(a("7b1d"),a("2877")),c=a("9564"),l=a("eebe"),d=a.n(l),h=Object(n["a"])(o,i,s,!1,null,"1f132d48",null);e["default"]=h.exports;d()(h,"components",{QToggle:c["a"]})}}]);