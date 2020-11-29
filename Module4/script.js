

(function () {

var names = ["Yaakov", "Jaswant", "Jasdeep", "Janki", "Preeti", "Arpita", "Jyoti", "Amisha", "Aniket", "Jacob"];

for (var i = 0; i < names.length; i++) {
  var firstLetter = names[i].charAt(0).toLowerCase();

  if (firstLetter === 'j') {
    byeSpeaker(names[i]);
  }
  else {
    helloSpeaker(names[i]);
  }
}

})();
