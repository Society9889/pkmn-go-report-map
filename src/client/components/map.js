import React from 'react';

import {connect } from 'react-redux';

var map = null,
	gymsOnMap = {};

class Map extends React.Component {

	componentDidMount() {
	  	this.loadMap();
	}

	loadMap(){
		//TODO move this to a setting file
		var bedford = {lat: 42.490430, lng: -71.278493};

		this.map = new google.maps.Map(document.getElementById('map-cont'), {
			zoom: 14,
			mapTypeId: google.maps.MapTypeId.ROADMAP,
			streetViewControl: false,
			center: bedford,
			minZoom: 3,
			mapTypeControl: false,
			gestureHandling: "greedy"
		});
	}

	makeMarkers(gyms){
		var markers = [];

		for(var i = 0; i < gyms.length; i++){

			if(!gymsOnMap[gyms[i].name]){
				gymsOnMap[gyms[i].name] = gyms[i];

				var contentString = 'Place to raid';

				var infowindow = new google.maps.InfoWindow({
					content: contentString
				});

				var marker = new google.maps.Marker({
					position: gyms[i].pos,
					name: gyms[i].name,
					des: gyms[i].isex,
					icon: {
						url: "/images/gymIcon.png",
						labelOrigin: new google.maps.Point(15,35),
						scaledSize: new google.maps.Size(30, 30), // scaled size
						origin: new google.maps.Point(0,0), // origin
						anchor: new google.maps.Point(15,15) // anchor
					},
					map: this.map
				});
				marker.addListener('click', function() {
					infowindow.setContent(this.name + '\n' + 'Is ex gym? ' + this.des);
					infowindow.open(this.map, this);
				});
				markers.push(marker);
			}
		}

		// var markerCluster = new MarkerClusterer(this.map, markers,
		// 	{imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});
	}

	render(){
		const {gyms} = this.props;
		if(gyms && gyms.length > 0){
			this.makeMarkers(gyms);
		}

		return(
			<div ref="map" className='map-cont' id='map-cont'> Making a map...</div>
		)
	}
}

const mapState = store => ({
	gyms: store.gyms.gyms
});

export default connect(mapState, {})(Map);