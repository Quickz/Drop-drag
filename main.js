(function($){

var dragged = false;
var startCoord;

$("#drag0").mousedown(function(e) { startCoord = dragStart(e); });
$("html").mouseup(function() { dragOver(); });
$("html").mousemove(function(e) { drag(e); });

// Preventing default drag
$("#drag0").on("dragstart", function() { return false; });



function dragStart(e)
{
  dragged = true;
  // gets mouse position relative to image
  // This insure that the mouse position doesn't change inside the image
  return getMousePos(e, "drag0")
}
function dragOver()
{
  dragged = false
}
function drag(e)
{
  if (dragged)
  {
    $("#drag0").css({left: e.clientX - startCoord.x, top: e.clientY - startCoord.y});
    console.log("START: " + "X: " + startCoord.x + " " + "Y: " + startCoord.y);
    console.log("MAIN: " + "X: " + e.clientX + " " + "Y: " + e.clientY);
  }
}
function getMousePos(e, id)
{
  var rect = $("#" + id)[0].getBoundingClientRect();
  return { x: e.clientX - rect.left, y: e.clientY - rect.top};
}

})(jQuery);