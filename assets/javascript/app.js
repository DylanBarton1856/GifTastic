//topics array
topics = ['zelda', 'yoshi', 'falco+lombardi', 'samus', 'donkey+kong'];
var topicsArr = (topics.join());
console.log(topicsArr)

// function buttonGen()
// $("#buttons").empty();
//for loop for array buttons
for (var i = 0; i < topics.length; i++) {
  var button = $('<button data-person=' + topics[i] + '>' + topics[i] + '</button>')

  //append buttons
  $('#buttons').append(button);
}

//button onclick
$("button").on("click", function () {
  var person = $(this).attr("data-person");
  console.log(this);
  console.log(person);

  //giphysearch URL
  var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
    person + "&api_key=dc6zaTOxFJmzC&limit=10&rating=pg-13";

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

        var personImage = `<img class="gif" src="${results[i].images.fixed_height_still.url}" data-animate="${results[i].images.fixed_height.url}" data-state="still" data-still="${results[i].images.fixed_height_still.url}">`
        // personImage.attr("src", results[i].images.fixed_height.url);

        gifDiv.prepend(p, personImage);
        $("#gifs-zone").prepend(gifDiv);
      }

    });

  //pause and play GIFS!
  $(document).on("click", ".gif", function (event) {

    var state = $(this).attr("data-state");
    var animate = event.currentTarget.dataset.animate
    var still = event.currentTarget.dataset.still


    // console.log(state);



    if (state === "still") {

      $(this).attr("src", animate);
      $(this).attr("data-state", "animate");

    }
    else {
      $(this).attr("src", still);
      $(this).attr("data-state", "still");

    }
  });

  // ACCEPT USER INPUT/DISPLAY NEW BUTTONS!


});