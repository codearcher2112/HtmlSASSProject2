$(document).ready(function(){
    $(window).load(function() {
        auto_center_img();
    });
    $(window).resize(function(){
        setTimeout(function(){
            auto_center_img()
        }, 200);
        setTimeout(function(){
            auto_center_img()
        }, 700);
    });

	function auto_center_img(){
		$.each($('.immagine'), function(){
			var immagine_height_n = $(this).attr('data-immagine');
			var immagine_height = Math.round($(this).width() / immagine_height_n);
			$(this).height(immagine_height);
		});
		$.each($('.immagine img'), function(){
			$(this).css('position', 'absolute');
			if(($(this).parent().css('position') != 'absolute')&&($(this).parent().css('position') != 'relative')) $(this).parent().css('position', 'relative');
			if(!$(this).hasClass('noresize'))
			{
				var size = {'w': $(this).parent().width(), "h": $(this).parent().height()};
				var h, w;
				if(size.w / this.naturalWidth > size.h / this.naturalHeight){
					w = size.w;
					h = Math.ceil(size.w * this.naturalHeight / this.naturalWidth);
				}
				else{
					h = size.h;
					w = Math.ceil(size.h * this.naturalWidth / this.naturalHeight);
				}
				$(this).css({"height": h, "width": w, "max-width": w});
			}

			$(this).css({'top': (size.h - h) / 2, 'left': (size.w - w) / 2});

		});
	}

});
