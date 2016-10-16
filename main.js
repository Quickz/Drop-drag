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
        var $newImage = $("#img-cont0").clone();
        $newImage.id = "img-cont" + images;
        $newImage.find("img").attr({
            id: "drag" + images,
            src: url
        });
        $newImage.find("img").src = url;
        $newImage.find("button").id = "img-del" + images;
        
        $newImage.appendTo($("#images"));

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