(function($) {
	$.fn.moltenLeading = function( config ) {
		var o = $.extend( {
				minline: 1.2,
				maxline: 1.6,
				minwidth: 320,
				maxwidth: 1024
			}, config ),
			hotlead = function( el ) {
				var $el = $( this !== window ? this : el ),
					widthperc = parseInt( ( $el.width() - o.minwidth ) / ( o.maxwidth - o.minwidth ) * 100, 10 ),
					linecalc = o.minline + ( o.maxline - o.minline ) * widthperc / 100;

				if ( widthperc <= 0 || linecalc < o.minline ) {
					linecalc = o.minline;
				} else if ( widthperc >= 100 || linecalc > o.maxline ) {
					linecalc = o.maxline;
				}

				$el.css( "lineHeight", linecalc );

				$( window ).one( "resize", function() {
					hotlead( $el );
				});
			};

		return this.each( hotlead );
	};
})(jQuery);