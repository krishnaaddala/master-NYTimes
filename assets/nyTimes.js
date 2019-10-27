//create a variable for search
//create a variable for num of records
//create a variable for start Year
//create a variable for end Year
//buttons for search and clear results

function enterForm(){
   var search =  $("#searchBar").val().trim();
    var numOfRecords = $("numrecrds").val().trim();
    var startYear = $("startYear").val().trim();
}

var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=6KMjeJ1CwtNIDE34TorZOVs6Ot1EfJq";

$.ajax({
  url: queryURL,
    method: "GET"
}).then(function(response){
    console.log(response);
});
