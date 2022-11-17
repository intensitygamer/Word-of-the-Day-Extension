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


        let minimum, maximum, no_defs;

        wordObj = data;

        console.log(wordObj);

        minimum = 0;

        maximum = parseInt(wordObj.definitions.length)- 1;

        no_defs = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

        console.log(no_defs);

        //Update Display on Content Script

        document.querySelector('h1').innerHTML  = wordObj.word;

        document.querySelector('p').innerHTML   = wordObj.definitions[no_defs].text;


    });





});