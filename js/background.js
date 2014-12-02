debugger;
// chrome.browserAction.setBadgeText({text: "chori"});
chrome.runtime.onMessage.addListener(function (request) {
    console.log('7. This is from background call');
    console.log(request);
    if (request.cmd === "storage") {
        saveToLocalStorage(request.content);
    }
});

function saveToLocalStorage(DOMdata){
    console.log('8. Saving To Local storage');
    // console.log(DOMdata);
    // var key = 'content';
    var DOMContent = DOMdata;
    var objectToStore = {};
    objectToStore['content'] = JSON.stringify(DOMContent);
    // console.log(objectToStore);
    //set to local storage
    chrome.storage.local.set(objectToStore, function(data) {
       if(chrome.runtime.lastError) {
           console.log(chrome.runtime.lastError.message);
           return;
       }
       console.log(data);
       console.log('9. Saved to local storage');
    });
    //get the local storage
    chrome.storage.local.get(objectToStore, function(){
      console.info('10. Getting storage content');
      console.log(objectToStore);
    })
}


