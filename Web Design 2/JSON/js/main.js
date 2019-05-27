
var crimeContainer = document.getElementById("hate-crimes");
var btn = document.getElementById("btn");

btn.addEventListener("click", function(){
    var ourRequest  = new XMLHttpRequest();
    ourRequest.open('GET','https://data.ny.gov/api/views/6xda-q7ev/rows.json?accessType=DOWNLOAD')
    ourRequest.onload = function() {
        var ourData =  JSON.parse(ourRequest.responseText); 
        renderHTML(ourData);   
    };
    ourRequest.send();
});
//adds HTML to the page/empty div element in html doc
function renderHTML(data) {
    var htmlString = "this is a test";
    
    for(var i=0; i<data.length, i++){
        htmlString += "<p>" + data[i].item + ".</p>"
    }
    
    crimeContainer.insertAdjacentHTML('beforeend', htmlString);
    
}





