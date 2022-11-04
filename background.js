

//Listen for messages

chrome.runtime.onMessage.addListener((msg, sender, response) => {

    if(msg.name == "fetchWords"){

        // const apiKey = "w9kjsupvpof48df9ri74twu55f8jtke5yy2qqqrdwxlq9jeog";
        // const currentDate = new Date().toISOString().slice(0, 10); //2020-01-01
        // const apiCall = "https://api.wordnik.com/v4/words.json/wordOfTheDay?date="+currentDate+"&api_key=" + apiKey;

        //https://api.wordnik.com/v4/words.json/wordOfTheDay?date=2020-01-01&api_key=w9kjsupvpof48df9ri74twu55f8jtke5yy2qqqrdwxlq9jeog


        // We call api

        var resdata;

        fetchwordres = fetch(apiCall)
        .then((response)  =>  response.json() )
        .then((data) => { console.log(data)});


        response(fetchwordres);

        // Send response
        //response({word: wordsObj[number], desc: wordsDescObj[number]});

    }

})