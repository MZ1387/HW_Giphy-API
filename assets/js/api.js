$(document).ready(function() {

    // array of initial jim carrey gifs to be displayed
    var gifs = ["Man On The Moon", "The Cable Guy", "The Truman Show", "Eternal Sunshine of the Spotless Mind", "Me, Myself and Irene", "In Living Color"];
    // array of the ids for the thumbnail and ratings header
    var thumbnails = ["gif-one", "gif-two", "gif-three", "gif-four", "gif-five", "gif-six", "gif-seven", "gif-eight", "gif-nine", "gif-ten", "gif-eleven", "gif-twelve"];
    var thumbnailsRating = ["gif-one-rating", "gif-two-rating", "gif-three-rating", "gif-four-rating", "gif-five-rating", "gif-six-rating", "gif-seven-rating", "gif-eight-rating", "gif-nine-rating", "gif-ten-rating", "gif-eleven-rating", "gif-twelve-rating"];

    // function creates gif in the ajax response
    function createGifs(response) {
        // for loop takes the response data and fills it with information for the orresponding thumbnail
        for (var i = 0; i < response.data.length; i++) {
            // the gifURL animated and still paths from the response
            var gifURL = response.data[i].images.original.url;
            var gifURLStill = response.data[i].images.original_still.url;
            // appending the response information to the thumbnail
            $("#" + thumbnails[i]).attr("src", gifURLStill);
            $("#" + thumbnails[i]).attr("data-still", gifURLStill);
            $("#" + thumbnails[i]).attr("data-animate", gifURL);
            $("#" + thumbnails[i]).attr("data-state", "still");
            $("#" + thumbnails[i]).addClass("gifSize");
            var rating = response.data[i].rating;
            $("#" + thumbnailsRating[i]).text("Rating: " + rating.toUpperCase());
        };
    };

    // function  executes ajax call and displays gifs associated with the title when response is returnes
    function displayGifs() {
        // the variables that make up the query
        var api = "https://api.giphy.com/v1/gifs/search?limit=12&q=";
        var gif = "jim carrey " + $(this).attr("data-name");
        var apiKey = "&api_key=dc6zaTOxFJmzC";
        var queryURL = api + gif + apiKey;

        $.ajax({
            url: queryURL,
            method: "GET"
        }).done(function(response) {
            createGifs(response);
        });
    };

    // renders the values of the gifs array into links in the dropdown menu
    function renderGifList() {
        // empties the dropdown menu before rendering the gifs in the array to be visible in the menu
        $(".gifDropdown").empty();
        // for loop loop goes throught the array and creates each link
        for (var i = 0; i < gifs.length; i++) {
            // elements created to be appended with information from the gifs array
            var newGif = $("<li>");
            var newGifLink = $("<a>");
            // appending gifs array information to elements to be put in the dropdown menu
            newGifLink.addClass("gif");
            newGifLink.attr("data-name", gifs[i]);
            newGifLink.text(gifs[i]);
            newGif.append(newGifLink);
            $(".gifDropdown").append(newGif);
        };
    };

    // conditional statement that switches the gif's state between still and animated
    function animate() {
        // variable that holds the src attribute of the gif
        var checkEnd = $(this).attr("src");
        // variable that holds the method that replaces the still state with the animated state and vice versa
        var newEnd;
        // conditional statement that switches states depending on current state
        if (checkEnd.indexOf("_s.gif") != -1) {
            newEnd = checkEnd.replace("_s.gif", ".gif");
        } else {
            newEnd = checkEnd.replace(".gif", "_s.gif");
        }
        // the src attribute of the gif pressed now takes on the src ending that enables still and animated atates
        $(this).attr('src', newEnd);
    };

    // when the button is clicked the value of the input is added to the array and the title is displayed in the dropdown
    $("#add-gif").on("click", function(event) {
        event.preventDefault();
        // input value is taken from input and trimmed, set to lowercase and split at the space into an array
        var gif = $("#gif-input").val().trim().toLowerCase().split(' ');
        // for loop capitalizes the first letter of each word
        for (var i = 0; i < gif.length; i++) {
            gif[i] = gif[i].charAt(0).toUpperCase() + gif[i].substring(1);
        }
        // the array is joined with the first letter of each word capitalized
        var capitalized = gif.join(' ');
        // gif value is pushed to the gifs array
        gifs.push(capitalized);
        // a new list in the dropdown is created from the updated array
        renderGifList();
        $("#gif-input").val("");
    });

    // the document is listening to clicks on the gif class and img element class
    $(document).on("click", ".gif", displayGifs);
    $(document).on("click", ".gifSize", animate);
    // the render is first executed to populate the dropdown menu when the page loads
    renderGifList();
});
