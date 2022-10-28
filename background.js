

//Listen for messages

chrome.runtime.onMessage.addListener((msg, sender, response) => {

    if(msg.name == "fetchWords"){

        const apiKey = "";
        const currentDate = new Date().toISOString().slice(0, 10); //2020-01-01
        const apiCall = "https://api.wordnik.com/v4/words.json/wordOfTheDay?date="+currentDate+"&api_key=" + apiKey;
    
        // We call api
        // wait for response
        // send response

        //fetch(.,,.);

        const wordsObj = ["surimono"];

        const wordsDescObj = [" kind of Japanese woodblock print, privately commissioned for special occasions such as the New Year"

        ];

        var number = 0;

        // Send response
        response({word: wordsObj[number], desc: wordsDescObj[number]});

    }

})