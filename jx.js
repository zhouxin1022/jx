//js原生代码

var jx= {
  //添加绑定事件

  addEvent : function (target,type,callback){
            if(target.addEventListener){
              //target.addEventListener(type, listener, useCapture);
              //target： 文档节点、document、window 或 XMLHttpRequest。
              // type： 字符串，事件名称，不含“on”，比如“click”、“mouseover”、“keydown”等。
              // listener ：实现了 EventListener 接口或者是 JavaScript 中的函数。
              // useCapture ：是否使用捕捉，一般用 false 。例如：document.getElementById("testText").addEventListener("keydown", function (event) { alert(event.keyCode); }, false);
              target.addEventListener(type,callback,false);

            }else if(obj.attachEvent){
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
  removeEvent : function(target,type,callback){
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
   stopProragation : function(){
     if(event.stopProragation){
       event.stopProragation();
     }else{
       event.cancelBubble = true;
     }
   },

   //阻止元素的默认事件
  preventDefault : function(ev){
    if(ev && ev.preventDefault){
      ev.preventDefault();
    }else{
      window.event.returnValue = false;
      return false;
    }
  },


}





function a2(){
  alert("2");


}
function a3(ev){
  alert("3");
  jx.preventDefault(ev);
  jx.stopProragation();
}
jx.addEvent(window,"load",function(){
  console.log("~~~~~~~~~~~~");
  var block_dis = document.getElementById("block_dis");
  var ba = block_dis.getElementsByTagName("a")[0];
  jx.addEvent(block_dis,"click",a2);
  jx.addEvent(ba,"click",a3);
  console.log("~~~~~~~~~~~~~~");

});
