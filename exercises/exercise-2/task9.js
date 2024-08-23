// 9. Write​ ​ a ​ ​ JavaScript​ ​ function​ ​ to​ ​ convert​ ​ a ​ ​ Unix​ ​timestamp​ ​ to​ ​ time.

// Input = 1607518718
// Output = Wednesday, December 9, 2020 6:28:38 PM GMT+05:30


// 1723201070

function convertUnixTimeStamp() {
    let unixTimeStamp = 1723201070;
    let timeStampInMs = unixTimeStamp * 1000;
    let date = new Date(timeStampInMs);

    let options = {
        weekday: 'long',
        month: 'long',
        year: 'numeric',
        day: 'numeric',
        hours: 'numeric',
        timeZoneName: 'short',
        timeZone: 'Asia/Kolkata'
    }

    let convertedDate = date.toLocaleString('en-IN', options);
    console.log(convertedDate);
}

convertUnixTimeStamp();