/* js file */

(function( window, undefined ){

	//random images on refresh.
	$(window).load(function () {
		var images = ['main1.jpg', 'main2.jpg', 'main3.jpg', 'main4.jpg'];
		$('#background').css({'background-image': 'url(img/' + images[Math.floor(Math.random() * images.length)] + ')'});
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