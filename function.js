//function.js
// CHANGE EMOJI OVER HERE  
var emojis = ['😠','😦','😑','😀','😍'];

$("input").mousemove(function(){
  var i = $(this).val();
  $(".emoji").html(emojis[i]);
});