(function($){

	//for (let i = 0; i < 3; i++)
	var images = 1;
	imgDraggable(0);

	function imgDraggable(n)
	{
		$("#drag" + n).draggable({
			containment: "#everything",
			revert: "invalid",
			helper: "clone"
		});
	}
	function addImage(url)
	{
		/*
			<div id="img-cont0" class="img-cont">
				<div class="drg-border">
					<img id="drag0" class="drgble" src="http://i.imgur.com/y7cAttE.png"></img>
				</div>
				<button id="img-del0" class="img-del">Delete</button>
			</div>
		*/
		$("#images").append('<div id="img-cont' + images + '" class="img-cont">' +
				'<div class="drg-border">' +
					'<img id="drag' + images + '" class="drgble" src="' + url + '"></img>' +
				'</div>' +
				'<button id="img-del' + images + '" class="img-del">Delete</button>' +
			'</div>');
		//$("#images").append('<img id=drag' + images + ' class="drgble" src=' + 
		//	url + ' ></img>');
		imgDraggable(images);
		images++;
	}
	function checkURL(url)
	{
    	return url.match(/\.(jpeg|jpg|gif|png)$/) != null;
	}
	for (let i = 0; i < 12; i++)
		$("#slot" + i).droppable({
			drop: function(e, ui) {
				$(this).empty();
				// Makes a copy of the original
				$(this).append(ui.draggable.clone());
			}
		});
	/*$("#test").on("click", function(){
		$("#images").append('<img id=drag' + images + ' class="drgble"' + 
			' src="http://i.imgur.com/y7cAttE.png" width="50px"></img>');
		imgDraggable(images);
		images++;
	});*/
	$("#add-img").on("click", function(){
		if ($("#add-txt").val().includes(" ") || !checkURL($("#add-txt").val()))
			return;
		addImage($("#add-txt").val());
		$("#add-txt").val("");
	});


})(jQuery);