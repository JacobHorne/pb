/* js file */

(function( window, undefined ){

	$(document).ready(function(){	
		  $('.slider').slick({
		  dots: false,
		  arrows:false,
		  infinite: true,
		  speed: 600,
		  autoplay: true,
  		  autoplaySpeed: 5000,
  		  fade: true,
		});
	});

	//Adding Active States to Navigation
	$(function() {
     	var url = window.location.href.substr(window.location.href.lastIndexOf("/")+1);
    
	    $(".full-navigation a").each(function(){
	        if($(this).attr("href") == url || $(this).attr("href") == '' ) {
	        	$(this).attr('id', 'activeNav');
	        }
	    })
	});


	//Adding Active States to Sidebar
	$(function() {
     	var url = window.location.href.substr(window.location.href.lastIndexOf("/")+1);
    
	    $(".sidebar ul a").each(function(){
	        if($(this).attr("href") == url || $(this).attr("href") == '' ) {
	        	$(this).attr('id', 'activeSideBar');
	        }
	    })
	});

})( window, undefined );