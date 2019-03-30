$.getJSON
("https://api.punkapi.com/v2/beers/random",

  function(data) {

    var name = data[0].name;
    var tagline = data[0].tagline;
    var abv = data[0].abv;
    var image = data[0].image_url;

    if (image == null) {
      $("#beerbutton").hide();
    }
    else {
      $("#beerbutton").show();
    }

    $(".name").append(name);
    $(".tagline").append(tagline);
    $(".abv").append(abv);
    $('#beerimage').attr('src',image);

  }
)

function showImage() {
  $(".toggle").toggle();
}
