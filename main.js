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
  return coordInImg(e);
}
// Gets mouse position relative to the image
function coordInImg(e)
{
  var tmp = getMousePos(e, "drag0");
  tmp.x -= 12.5;
  tmp.y -= 3;
  return tmp;
}
function dragOver()
{
  dragged = false
}
function drag(e)
{
  if (dragged)
  {
    var coord = getMousePos(e, "everything");
    // Start coordinates are necessary to change the image "center" to the clicked position
    $("#drag0").css({left: coord.x - startCoord.x, top: coord.y - startCoord.y});
    console.log("START: " + "X: " + startCoord.x + " " + "Y: " + startCoord.y);
    console.log("MAIN: " + "X: " + coord.x + " " + "Y: " + coord.y);
  }
}
function getMousePos(e, id)
{
  var rect = $("#" + id)[0].getBoundingClientRect();
  return { x: e.clientX - rect.left, y: e.clientY - rect.top};
}

})(jQuery);