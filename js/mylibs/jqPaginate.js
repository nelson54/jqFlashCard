(function( $ ){

 var settings = {
	url : ''
 };
 
 var cards;
 var html;
 var methods = {
    init : function( options ) { 
		methods.settings(options);
		
		methods.load();
    },
    show : function( ) {

    },
    hide : function( ) { 
      // GOOD
    },
    update : function( data ) {
      cards = data;
      html = methods.createHTML(cards);
      $('body').append(html);
      methods.first();
      methods.show();
    },
    load : function( data ){

    },
    createHTML : function (){

    },
    first : function(){

    },
    next : function(){

    },
    prev : function(){

    },
    settings : function(options){
		$.extend( settings, options);
    }
  };
	  
  $.fn.jqFlashCard = function( method ) {
    // Method calling logic
    if ( methods[method] ) {
      return methods[ method ].apply( this, Array.prototype.slice.call( arguments, 1 ));
    } else if ( typeof method === 'object' || ! method ) {
      return methods.init.apply( this, arguments );
    } else {
      $.error( 'Method ' +  method + ' does not exist on jQuery.jqFlashCard' );
    } 
  };
})( jQuery );