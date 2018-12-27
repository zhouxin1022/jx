//js原生代码
"use strict";//严格模式
var jx= {}
  //页面加载
  jx.readyEvent = function(fn){
    if(fn == null){
      fn = document;
    }
    var oldonload = window.onload;
    if(typeof window.onload != "function"){
      window.onload = fn;
    }else{
      window.onload = function(){
        oldonload();
        fn();
      }
    }

  },
  //获取ID
  jx.getId = function(id){
    return document.getElementById(id);
  }
  //
  //添加绑定事件
  jx.addEvent = function (target,type,callback){
            if(target.addEventListener){
              //target.addEventListener(type, listener, useCapture);
              //target： 文档节点、document、window 或 XMLHttpRequest。
              // type： 字符串，事件名称，不含“on”，比如“click”、“mouseover”、“keydown”等。
              // listener ：实现了 EventListener 接口或者是 JavaScript 中的函数。
              // useCapture ：是否使用捕捉，一般用 false 。例如：document.getElementById("testText").addEventListener("keydown", function (event) { alert(event.keyCode); }, false);
              target.addEventListener(type,callback,false);

            }else if(target.attachEvent){
              //target.attachEvent(type, listener);
              // target： 文档节点、document、window 或 XMLHttpRequest。
              // type： 字符串，事件名称，含“on”，比如“onclick”、“onmouseover”、“onkeydown”等。
              // listener ：实现了 EventListener 接口或者是 JavaScript 中的函数。
              target.attachEvent("on"+type,callback);
            }else{
              target["on"+type] = callback;
            }
          },
  //删除绑定事件
  jx.removeEvent = function(target,type,callback){
          //callback 方法/函数名称
            if(target.removeEventListener){
              target.removeEventListener(type,callback,false);
            }else if(target.detachEvent){
              target.detachEvent("on"+type,callback)
            }else{
              target["on"+type] = null;
            }

          },
   //阻止冒泡事件
   jx.stopProragation = function(){
     if(event.stopProragation){
       event.stopProragation();
     }else{
       event.cancelBubble = true;
     }
   },

   //阻止元素的默认事件
  jx.preventDefault = function(ev){
    if(ev && ev.preventDefault){
      ev.preventDefault();
    }else{
      window.event.returnValue = false;
      return false;
    }
  },
  //获取事件目标
  jx.getTarget = function(event){
    return event.target || event.srcElement;
  }
  //获取css样式
  jx.getStyle = function(ele, prop){
    if(window.getComputedStyle) {
          return window.getComputedStyle(ele,null)[prop];
      }else{
          return ele.currentStyle[prop];
      }
  }
