(function($) {
	'use strict';

	//window.element = {};

	var $document = $(document),
			$screen = $.screen;

	//screen
	$document.on('ready.layout', function(event) {
			$screen({
					state : [{
							name : 'wide',
							horizontal : {
									from : 9999,
									to : 1300
							}
					}, {
							name : 'web',
							horizontal : {
									from : 1280,
									to : 1001
							}
					}, {
							name : 'tablet',
							horizontal : {
									from : 1000,
									to : 641
							}
					}, {
							name : 'phone',
							horizontal : {
									from : 640,
									to : 0
							}
					}]
			});
	});
})(window.jQuery);