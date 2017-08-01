$(document).ready(function() {
  $(".src-btn").on("click", function(event) {
    event.preventDefault();
    console.log("search button was clicked!");
    var value = $(".text-content").val();
    if (value.length == 0) value = "Empty";
    console.log("Query: " + value);

    $.ajax({
      url: "https://en.wikipedia.org/w/api.php?action=query&format=json&origin=*&srsearch="+value+"&list=search",
      dataType: 'json',
      type: 'POST',
      headers: { 'Api-User-Agent': 'Mozilla/5.0' },
      success: function(data) {
        // do something with data
        console.log(data);
        var resultNo=0;
        var htmlString = "";
        for(var i = 0;i<data.query.search.length;i++){
          htmlString += "<div class='result'><a href='https://en.wikipedia.org/wiki/"+data.query.search[i].title +"'><h4>" +data.query.search[i].title +"</h4></a><p>"+data.query.search[i].snippet+"</p></div>";
        }
        $(".search-results").html(htmlString);
      }
    });
  });
});
