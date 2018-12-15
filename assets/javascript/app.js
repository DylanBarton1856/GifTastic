//topics array
topics = ['zelda', 'yoshi', 'falco lombardi', 'samus', 'donkey kong'];
var topicsArr = (topics.join());
console.log(topicsArr)


//for loop for array buttons
for (var i = 0; i < topics.length; i++) {
  var button = $('<button>' + topics[i] + '</button>')
  //append buttons
  $('#buttons').append(button);
}

//button onclick
$("button").on("click", function () {
  var person = $(this).attr("data-person");
  console.log(this);
  console.log(person);
  var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
    person + "&api_key=dc6zaTOxFJmzC&limit=10";
  //ajax GET
  $.ajax({
    url: queryURL,
    method: "GET"
  })

    //response
    .then(function (response) {
      console.log(response);
      var results = response.data;

      //for loop for rating and prepending GIFS
      for (var i = 0; i < results.length; i++) {
        var gifDiv = $("<div>");

        var rating = results[i].rating;

        var p = $("<p>").text("Rating: " + rating);

        var personImage = $("<img>");
        personImage.attr("src", results[i].images.fixed_height.url);

        gifDiv.prepend(p, personImage);
        $("#gifs-zone").prepend(gifDiv);
      }

    });

    //pause and play GIFS!


    // ADD A FORM!

    
});