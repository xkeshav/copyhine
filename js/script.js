;debugger;
/* Listen for messages */
console.log('1. content script');
chrome.runtime.onMessage.addListener(function(msg, sender, sendResponse) {
    console.group('3. Get message from popup');
        console.log(msg);
    // console.log(sender);
    //     console.log(sendResponse);
    // console.groupEnd();
    /* If the received message has the expected format... */
    // var storyID = msg.tabURL.split('/');
    // console.log(storyID);
    if (msg.text && (msg.text == "content_text")) {
        //Call the specified callback, passing the web-pages DOM content as argument
        //extracting data from http://www.pratilipi.com/read/story/4879888423059456
           var pageStory = document.getElementById('PageContent-Pratilipi-Content').innerText;
           console.info('4. Sending response to popup.js');
           sendResponse(pageStory);
    }
});


