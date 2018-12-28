/*
//获取浏览器信息
  brow 那个浏览器
  rv 版本号
*/
"use strict";
  //获取浏览器的所有信息
  // var nGator = {
  // 获取浏览器的名称
  //   nGname : window.navigator.appName,
  //浏览器的平台和版本信息
  //   nGVersion : window.navigator.appVersion,
  // 返回运行浏览器的操作系统平台。
  //    oSp : window.navigator.platform,
  //用户代理头的字符串
  //   userAg :  window.navigator.userAgent.toLowerCase(),
  // };
//用户代理头的字符串（获取字符串转换成小写）
var ua = window.navigator.userAgent.toLowerCase();
//判断浏览器
var brow = {
  isChrome : !!(ua.indexOf("chrome") != -1 && ua.indexOf("safari") != -1 && ua.indexOf("edge") == -1 && ua.indexOf("opr") == -1),
  isFirefox : !!(ua.indexOf("firefox") != -1),
  isEdge : !!(ua.indexOf("chrome") != -1 && ua.indexOf("edge") != -1),
  isOpera : !!(ua.indexOf("chrome") != -1 && ua.indexOf("opr") != -1),
  isSafari : !!(ua.indexOf("wow64") != -1 && ua.indexOf("safari") != -1),
  isIE: !!(ua.indexOf("msie") != -1 || ua.indexOf("trident") != -1 ),
}
//版本号
var rv = 0;
if(brow.isIE){
  // IE11--------Mozilla/5.0 (Windows NT 10.0; WOW64; Trident/7.0; .NET4.0C; .NET4.0E; .NET CLR 2.0.50727; .NET CLR 3.0.30729; .NET CLR 3.5.30729; rv:11.0) like Gecko
  //IE 10--------mozilla/5.0 (compatible; msie 10.0; windows nt 10.0; wow64; trident/7.0; .net4.0c; .net4.0e; .net clr 2.0.50727; .net clr 3.0.30729; .net clr 3.5.30729)
  //IE 9--------mozilla/5.0 (compatible; msie 9.0; windows nt 10.0; wow64; trident/7.0; .net4.0c; .net4.0e; .net clr 2.0.50727; .net clr 3.0.30729; .net clr 3.5.30729)
  //IE 8--------mozilla/4.0 (compatible; msie 8.0; windows nt 10.0; wow64; trident/7.0; .net4.0c; .net4.0e; .net clr 2.0.50727; .net clr 3.0.30729; .net clr 3.5.30729)
  rv = ua.match(/(msie\s+|rv:)(\d+(\.\d+)?)(;\s+|\))/)[2];
//  rv = ua.match(/(rv:)(\d+(\.\d+)?)\)/);
}
if(brow.isChrome){
  //Chrome--------Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/71.0.3578.98 Safari/537.36
  rv = ua.match(/(chrome\/)(.*?)\s/)[2];
}
if(brow.isFirefox){
  // FF--------Mozilla/5.0 (Windows NT 10.0; WOW64; rv:64.0) Gecko/20100101 Firefox/64.0
  rv = ua.match(/(firefox\/)(\d+\.\d+$)/)[2];
}
if(brow.isEdge){
  // edge--------Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.140 Safari/537.36 Edge/17.17134
  rv = ua.match(/(edge\/)(\d+\.\d+$)/)[2];
}
if(brow.isOpera){
  // op--------Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.102 Safari/537.36 OPR/57.0.3098.106
  rv = ua.match(/(opr\/)(.*?)$/)[2];
}
if(brow.isSafari){
  // safari--------Mozilla/5.0 (Windows NT 6.2; WOW64) AppleWebKit/534.57.2 (KHTML, like Gecko) Version/5.1.7 Safari/534.57.2
  rv = ua.match(/(version\/)(.*?)\s/)[2];
}
