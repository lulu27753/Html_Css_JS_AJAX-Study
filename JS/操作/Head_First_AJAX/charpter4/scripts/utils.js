function createRequest() {
  try {
    request = new XMLHttpRequest();
  } catch (tryMS) {
    try {
      request = new ActiveXObject("Msxml2.XMLHTTP");
    } catch (otherMS) {
      try {
        request = new ActiveXObject("Microsoft.XMLHTTP");
      } catch (failed) {
        request = null;
      }
    }
  }	
  return request;
}
// 为一个事件添加多个事件触发函数，注意事件触发函数不能有
function addEventHandler (obj, eventName, handler) {
  if (document.attachEvent) {
    obj.attachEvent("on" + eventName, handler);
  } else if (document.addEventListener) {
    obj.addEventListener(eventName, handler, false);
  }
}
// 得到触发事件的对象
function getActivatedObject (e) {
  var obj;
  if (!e) {
    obj = window.event.srcElement;
  } else if (e.srcElement) {
    obj = e.srcElement;
  } else{
    obj = e.target;
  }
  return obj;
}