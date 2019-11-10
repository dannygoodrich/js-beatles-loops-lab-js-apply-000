// add solution here
function theBeatlesPlay(musicians, instruments) {
  var array = ["John Lennon plays Guitar"];
for (var i= 0; i < musicians.length; i++) {
  array.push(musicians[i] + ' plays ' + instruments[i]);
  }
  return array;
}
