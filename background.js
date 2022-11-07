

//Listen for messages

async function fetchWord(apiCall) {
    const response = await fetch(apiCall);
    // waits until the request completes...
    console.log("from async" + response);
  }


chrome.runtime.onMessage.addListener((msg, sender, response) => {

    if(msg.name == "fetchWords"){

    }

})


