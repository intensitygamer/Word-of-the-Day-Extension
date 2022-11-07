// Send Message to Background

chrome.runtime.sendMessage({name: "fetchWords"}, (response) => {

    console.log("response from background- ");
    console.log(response);

    const apiKey = "w9kjsupvpof48df9ri74twu55f8jtke5yy2qqqrdwxlq9jeog";
    const currentDate = new Date().toISOString().slice(0, 10); //2020-01-01

    const apiCall = "https://api.wordnik.com/v4/words.json/wordOfTheDay?date="+currentDate+"&api_key=" + apiKey;

    const res =  fetch(apiCall)
    .then((response) => response.json())
    .then((data) => {

        // Wait Response

        console.log(data);

        wordObj = data;

        //Update Display on Content Script

        document.querySelector('h1').innerHTML  = wordObj.word;
        document.querySelector('p').innerHTML   = wordObj.note;

    });





});