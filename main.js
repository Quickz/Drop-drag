(function($){

	for (let i = 0; i < 3; i++)
		$("#drag" + i).draggable({
			containment: "#everything",
			revert: "invalid",
			helper: "clone"
		});
	for (let i = 0; i < 11; i++)
		$("#slot" + i).droppable({
			drop: function(e, ui) {
				ui.draggable.detach().appendTo($(this));
			}
		});




})(jQuery);