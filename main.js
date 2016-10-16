(function($){

    var images = 1;

    // Temporary
    addImage("http://i.imgur.com/y7cAttE.png");
    addImage("http://media.mercola.com/assets/images/food-facts/carrot-fb.jpg");
    addImage("http://nibbledish.com/public/images/cached/567x/recipe_images/9878c814026ced300b0e1aff65d75eb4.jpg");
    addImage("http://www.bbcgoodfood.com/sites/default/files/styles/category_retina/public/recipe-collections/collection-image/2013/05/rosewater-raspberry-sponge-cake.jpg?itok=OVpUSQm9.png");


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
        $newImage.attr("id", "img-cont" + images);

        $newImage.find("img").attr({
            id: "drag" + images,
            src: url
        });

        $newImage.find("img").src = url;
        $newImage.find("button").attr("id", "img-del" + images);

        // delete button
        $newImage.find("button").on("click", function() {
            $newImage.remove();
        });

        $newImage.appendTo($("#images"));

        imgDraggable(images);
        // since the sample is hidden so are copies
        $newImage.show();
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

    $("#add-img").on("click", function(){
        if ($("#add-txt").val().includes(" ") || !checkURL($("#add-txt").val()))
            return;
        addImage($("#add-txt").val());
        $("#add-txt").val("");
    });


})(jQuery);