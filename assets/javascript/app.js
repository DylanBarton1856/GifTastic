topics = ['zelda', 'yoshi', 'falco lombardi', 'samus', 'donkey kong'];
var topicsArr = (topics.join());

console.log (topicsArr)
for (i=0; i<topicsArr.length; i++);{
    var btn = $("<button>");
    btn.text(topicsArr[i]);
    $("#buttons").append(btn);
// buttons.prepend("dog food" +topicsArr[i])
console.log(topicsArr)

}
$("button").on("click", function() {
    var person = $(this).attr("data-person");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
      person + "&api_key=dc6zaTOxFJmzC&limit=10";

    $.ajax({
      url: queryURL,
      method: "GET"
    })
      .then(function(response) {
        var results = response.data;

        for (var i = 0; i < results.length; i++) {
          var gifDiv = $("<div>");

          var rating = results[i].rating;

          var p = $("<p>").text("Rating: " + rating);

          var personImage = $("<img>");
          personImage.attr("src", results[i].images.fixed_height.url);

          gifDiv.prepend(p);
          gifDiv.prepend(personImage);

          $("#gifs-appear-here").prepend(gifDiv);
        }
      });
  });