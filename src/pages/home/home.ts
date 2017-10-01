import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
declare var google;
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
    let that = this;
    setTimeout(function() {
        that.initialize();
    }, 2000);
   }

  initialize() {
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 15,
          center: {lat: 19.02850, lng: 99.89634},
          mapTypeId: 'terrain'
        });

        var flightPlanCoordinates = [
          {lat: 19.03067, lng: 99.92293},
          {lat: 19.03031, lng: 99.91918},
          {lat: 19.02942, lng: 99.91771},
          {lat: 19.03111, lng: 99.91130},
          {lat: 19.02974, lng: 99.91095},
          {lat: 19.02983, lng: 99.90931},
          {lat: 19.02974, lng: 99.91095},
          {lat: 19.02974, lng: 99.91095},
        ];
        var flightPath = new google.maps.Polyline({
          path: flightPlanCoordinates,
          geodesic: true,
          strokeColor: '#FF0000',
          strokeOpacity: 1.0,
          strokeWeight: 5
        });

        this.addLine();
        
    }

    addLine() {
        var flightPath;
        var map;
      flightPath.setMap(map);
    }

    removeLine() {
        var flightPath;
      flightPath.setMap(null);
    }
 }
 
