// Send Message to Background

chrome.runtime.sendMessage({name: "fetchWords"}, (response) => {


    // Wait Response
 
    console.log(response);

    //Update Display on Content Script

    document.querySelector('h1').innerHTML  = response.word  ;
    document.querySelector('p').innerHTML   = response.desc  ;

});