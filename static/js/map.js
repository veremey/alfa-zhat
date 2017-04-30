(function(window, google, mapster){
	// 'static/img/icons/marker.png',

	var options = mapster.MAP_OPTIONS,
			element = document.getElementById("map"),
			map = mapster.create(element, options);
			map.addMarker({
				lat: 56.349886,
				lng: 43.806164,
				draggale: true,
				icon: 'static/img/icons/marker.png'

			});




}(window, google, window.Mapster));
