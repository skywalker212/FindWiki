$(document).ready(function() {
  $(".src-btn").on("click", function(event) {
    event.preventDefault();
    console.log("search button was clicked!");
    var value = $(".text-content").val();
    if (value.length == 0) value = "Empty";
    console.log("Query: " + value);

    $.ajax({
      url: "https://en.wikipedia.org/w/api.php?action=query&titles=" + value + "&prop=revisions&rvprop=content&format=json",
      dataType: 'json',
      type: 'POST',
      headers: {
        'Api-User-Agent': 'Example/1.0',
      },
      success: function(data) {
        // do something with data
      }
    });
  });
});
