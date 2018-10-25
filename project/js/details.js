$(function(){
    var $mImg=$(mImg),$lgDiv=$(lgDiv),$mask=$("#mask"),$smask=$("#super-mask");
    var MSIZE=176,MAX=352-MSIZE;
    $smask.hover(
        	function(){
          		$mask.toggleClass("d-none");
          		$lgDiv.toggleClass("d-none");
        	}
      	)
    .mousemove(function(e){
        var left=e.offsetX-MSIZE/2;
        var top=e.offsetY-MSIZE/2;
       	if(left<0) left=0;
        else if(left>MAX) left=MAX;
        if(top<0) top=0;
        else if(top>MAX) top=MAX;
        $mask.css({left,top});
        $lgDiv.css("background-position",`-${16/7*left}px -${16/7*top}px`)
    })
})

/*
      	
      	
      	*/