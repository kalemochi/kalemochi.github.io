var ourRequest = = new XMLHttpRequest();
ourRequest.open('GET','https://data.ny.gov/api/views/6xda-q7ev/rows.json?accessType=DOWNLOAD')
ourRequest.onload = function() {
    console.log(ourRequest.responseText);
    
};

ourRequest.send();