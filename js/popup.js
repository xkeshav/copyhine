debugger;

function doStuffWithDOM(pageStoryReceived) {
        console.info("5. Received the respose back from content script");
        console.log(pageStoryReceived);
        // chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
        //     console.group('onMessage add listener');
        //         console.log(message);
        //         console.log(sender);
        //         console.log(sendResponse);
        //     console.groupEnd();
        // });
        console.info('6. Sending DOM data to background page');
        chrome.runtime.sendMessage({cmd: "storage", content: pageStoryReceived });
}

chrome.tabs.query({active: true, currentWindow: true}, function(tab) {
    console.info('2. Send message to the content script');
    console.log(tab);
    chrome.tabs.sendMessage(tab[0].id, { text: "content_text" , tabURL : tab[0].url }, doStuffWithDOM);
});