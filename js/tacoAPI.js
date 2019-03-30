$.getJSON
( "https://taco-randomizer.herokuapp.com/random/",

  function(data) {

    var shell = data.shell.name;
    var base = data.base_layer.name;
    var condiment = data.condiment.name;
    var mixin = data.mixin.name;
    var seasoning = data.seasoning.name;

    $(".shell").append(shell);
    $(".base").append(base);
    $(".condiment").append(condiment);
    $(".mixin").append(mixin);
    $(".seasoning").append(seasoning);
  }
);
