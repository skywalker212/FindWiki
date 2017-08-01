$(document).ready(function() {
  $(".src-btn").on("click", function(event) {
    event.preventDefault();
    console.log("search button was clicked!");
    var value = $(".text-content").val();
    if (value.length == 0) value = "Empty";
    console.log("Query: " + value);
    $(".search-results").html("<p class='wait text-center'><i>Please wait while we fetch the results...</i></p>");

    $.ajax({
      url: "https://en.wikipedia.org/w/api.php?action=opensearch&format=json&origin=*&namespace=0&search="+value+"&list=search",
      dataType: 'json',
      type: 'POST',
      headers: { 'Api-User-Agent': 'Mozilla/5.0' },
      success: function(data) {
        var htmlString = "";
        for(var i = 0;i<data[1].length;i++){
          if(data[2][i]=="") data[2][i] = "No Discription Available";
          htmlString += "<a class='link' style='text-decoration:none' href='" +data[3][i] +"' target='_null'>"+"<div class='result'>" +"<h4>" +data[1][i] +"</h4><p align='justify'>"+data[2][i]+"</p></div></a>";
        }
        $(".search-results").html(htmlString);
      }
    });
  });
});
