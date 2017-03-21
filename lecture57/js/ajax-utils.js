(function(global){

  var ajaxUtils = {};

  function getRequestObject() {
    if (window.XMLHttpRequest) {
      return (new XMLHttpRequest());
    } else if (window.ActiveXObject) {
      return (new ActiveXObject("Microsoft.XMLHTTP"));
    } else {
      global.alert("AJax is not supported");
      return (null);
    }
  }

  ajaxUtils.sendGetRequest = 
    function(requestUrl, responseHandler, isJsonResponse) {
        var request = getRequestObject();
        request.onreadystatechange = 
          function(){
            handleResponse(request, responseHandler, isJsonResponse);
          }

          request.open("GET", requestUrl, true);
          request.send();
    };

    function handleResponse(request, responseHandler, isJsonResponse) {
      if ((request.readyState == 4) && (request.status == 200)) {

        if(isJsonResponse) {
          responseHandler(JSON.parse(request.responseText));
        } else {
          responseHandler(request);  
        }
      }
    }

    global.$ajaxUtils = ajaxUtils;

})(window);