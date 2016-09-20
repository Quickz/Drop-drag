(function($){

function getMousePos(e)
{
  var rect = $(e.target)[0].getBoundingClientRect();
  return { x: e.clientX - rect.left, y: e.clientY - rect.top};
}

$.fn.draggable = function() {
  if (this.css("position") == "static")
  {
    throw("Unable to set " + this.attr("id") +
      " to a draggable object due to the static position.");
    return;
  }

  // Storing a variable inside the element
  this.data("dragged", false);

  // Preventing default drag
  this.on("dragstart", function() { return false; });

// Drag Start
  this.mousedown(function(e) {
    $(e.target).data("dragged", true)
    // gets mouse position relative to image
    // This insures that the mouse position doesn't change inside the image
    .data("startCoord", JSON.stringify( getMousePos(e, $(e.target).attr("id")) ));
  });

  // Storing this into a variable so it can be accessed in inside
  var element = this;

  // Drag Stop
  $("html").mouseup(function(e) {
    element.data("dragged", false);
  });

  // Drag - locks the element on your cursor
  $("html").mousemove(function(e) {
    if (element.data("dragged"))
    {
      var startCoord = JSON.parse(element.data("startCoord"));
      element.css({left: e.clientX - startCoord.x, top: e.clientY - startCoord.y});
      //console.log("START: " + "X: " + startCoord.x + " " + "Y: " + startCoord.y);
      //console.log("MAIN: " + "X: " + e.clientX + " " + "Y: " + e.clientY);
    }
  });
};

$("#drag0").draggable();
$("#drag1").draggable();
$("#drag2").draggable();









})(jQuery);