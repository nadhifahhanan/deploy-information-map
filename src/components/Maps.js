import React, { useState } from "react";
import Dropdowns from './Dropdown'
import "../App.css"

class Maps extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      namaTempat: '',
      latitude: null,
      longitude: null,
      img: '',
      jam: '',
      harga: '',
      makanan: [],
      fasilitas: [],
      hari: '',
      alamat: '',
      telp: '',
      email: '',
      keys: "",
      showAllItems: null,
      isShowAll: null,
      renderCounter: 0,
    };
    this.getLocation = this.getLocation.bind(this);
    this.getLocationSelect = this.getLocationSelect.bind(this);
  }

  getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => this.setState({ latitude: position.coords.latitude, longitude: position.coords.longitude }),
        function (error) {
          console.error("Error Code = " + error.code + " - " + error.message);
        },
        {
          enableHighAccuracy: true,
          maximumAge: 10000,
          timeout: 5000
        }
      );
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }

  showAll() {
    this.setState({ showAllItems: this.props.showAllItems });
  }

  getLocationSelect() {
    if(this.props.keys === 'fakultas'){
      this.setState({namaTempat : this.props.namaTempat,
                    latitude : this.props.latitude,
                    longitude : this.props.longitude,
                    img : this.props.img,
                    alamat : this.props.alamat,
                    telp : this.props.telp,
                    email : this.props.email,
                    keys : this.props.keys})
    } else if (this.props.keys === 'umum'){
      this.setState({namaTempat : this.props.namaTempat,
                    latitude : this.props.latitude,
                    longitude : this.props.longitude,
                    img : this.props.img,
                    alamat : this.props.alamat,
                    telp : this.props.telp,
                    keys : this.props.keys})
    } else if (this.props.keys === 'parkir'){
      this.setState({namaTempat : this.props.namaTempat,
                    latitude : this.props.latitude,
                    longitude : this.props.longitude,
                    img : this.props.img,
                    jam : this.props.jam,
                    keys : this.props.keys})
    } else if (this.props.keys === 'makan'){
      this.setState({namaTempat : this.props.namaTempat,
                    latitude : this.props.latitude,
                    longitude : this.props.longitude,
                    img : this.props.img,
                    makanan : this.props.makanan,
                    harga : this.props.harga,
                    jam : this.props.jam,
                    keys : this.props.keys})
    } else if (this.props.keys === 'halte' || this.props.keys === 'stasiun'){
      this.setState({namaTempat : this.props.namaTempat,
                    latitude : this.props.latitude,
                    longitude : this.props.longitude,
                    img : this.props.img,
                    keys : this.props.keys})
    } else if (this.props.keys === 'lapangan'){
      this.setState({namaTempat : this.props.namaTempat,
                    latitude : this.props.latitude,
                    longitude : this.props.longitude,
                    img : this.props.img,
                    jam : this.props.jam,
                    keys : this.props.keys})
    } else if (this.props.keys === 'bank'){
      this.setState({namaTempat : this.props.namaTempat,
                    latitude : this.props.latitude,
                    longitude : this.props.longitude,
                    img : this.props.img,
                    alamat : this.props.alamat,
                    telp : this.props.telp,
                    fasilitas : this.props.fasilitas,
                    hari: this.props.hari,
                    jam : this.props.jam,
                    keys : this.props.keys})
    }
 
  }

  errorHandler(error) {
    switch (error.code) {
      case error.PERMISSION_DENIED:
        alert("User denied the request for Geolocation.");
        break;
      case error.POSITION_UNAVAILABLE:
        alert("Location information is unavailable.");
        break;
      case error.TIMEOUT:
        alert("The request to get user location timed out.");
        break;
      case error.UNKNOWN_ERROR:
        alert("An unknown error occurred.");
        break;
      default:
        alert("An unknown error occurred.");
    }
  }

  handleChange(e) {

  }


  initMap = () => {

    var feature = {}
    var usrLoc = {}
   

    if (this.props.keys === 'fakultas'){
      feature = {
        namaTempat: this.state.namaTempat,
        position: new window.google.maps.LatLng(this.state.latitude, this.state.longitude),
        img : this.state.img,
        alamat: this.state.alamat,
        telp: this.state.telp,
        email: this.state.email,
        type: this.state.keys }
    } else if (this.props.keys === 'umum'){
    
      feature = {
        namaTempat: this.state.namaTempat,
        position: new window.google.maps.LatLng(this.state.latitude, this.state.longitude),
        img : this.state.img,
        alamat: this.state.alamat,
        telp: this.state.telp,
        type: this.state.keys }
    } else if (this.props.keys === 'parkir'){
      feature = {
        namaTempat: this.state.namaTempat,
        position: new window.google.maps.LatLng(this.state.latitude, this.state.longitude),
        img : this.state.img,
        jam : this.state.jam,
        type: this.state.keys }
    } else if (this.props.keys === 'makan'){
      feature = {
        namaTempat: this.state.namaTempat,
        position: new window.google.maps.LatLng(this.state.latitude, this.state.longitude),
        img : this.state.img,
        makanan: this.state.makanan,
        harga: this.state.harga,
        jam: this.state.jam,
        type: this.state.keys }
    } else if (this.props.keys === 'halte' || this.props.keys === 'stasiun'){
      feature = {
        namaTempat: this.state.namaTempat,
        position: new window.google.maps.LatLng(this.state.latitude, this.state.longitude),
        img : this.state.img,
        type: this.state.keys }
    } else if (this.props.keys === 'lapangan'){
      feature = {
        namaTempat: this.state.namaTempat,
        position: new window.google.maps.LatLng(this.state.latitude, this.state.longitude),
        img : this.state.img,
        jam : this.state.jam,
        type: this.state.keys }
    } else if (this.props.keys === 'bank'){
      feature = {
        namaTempat: this.state.namaTempat,
        position: new window.google.maps.LatLng(this.state.latitude, this.state.longitude),
        img : this.state.img,
        alamat: this.state.alamat,
        telp: this.state.telp,
        fasilitas: this.state.fasilitas,
        hari : this.state.hari,
        jam : this.state.jam,
        type: this.state.keys }
    } else {
      console.log(this.state.latitude, this.state.longitude)
      usrLoc = {
        position: new window.google.maps.LatLng(this.state.latitude, this.state.longitude),
        type: "initial",
        namaTempat: 'You are here'}
    }

    console.log(this.state.latitude, this.state.longitude)
    var map = new window.google.maps.Map(document.getElementById("map"), {
      center: { lat: this.state.latitude, lng: this.state.longitude },
      zoom: 17,
      styles:
        [
          {
            featureType: 'administrative',
            elementType: 'geometry',
            stylers: [
              {
                visibility: 'off'
              }
            ]
          },
          {
            featureType: 'poi',
            stylers: [
              {
                visibility: 'off'
              }
            ]
          },
          {
            featureType: 'poi',
            elementType: 'geometry.fill',
            stylers: [
              {
                color: '#6c81a7'
              }
            ]
          },
          {
            featureType: 'poi.park',
            elementType: 'geometry.fill',
            stylers: [
              {
                color: '#49b655'
              }
            ]
          },
          {
            featureType: 'road',
            elementType: 'labels.icon',
            stylers: [
              {
                visibility: 'off'
              }
            ]
          },
          {
            featureType: 'transit',
            stylers: [
              {
                visibility: 'off'
              }
            ]
          }
        ]
    });

    var infoObj = [];

    var icons = {
      initial: {
        icon: 'https://img.techpowerup.org/200629/here.jpg'
      },
      fakultas: {
        icon: 'https://img.techpowerup.org/200629/fakultas.jpg'
      },
      umum: {
        icon: 'https://img.techpowerup.org/200629/umum.jpg'
      },
      parkir: {
        icon: 'https://img.techpowerup.org/200629/parkir.jpg'
      },
      makan: {
        icon: 'https://img.techpowerup.org/200629/makan.jpg'
      },
      halte: {
        icon: 'https://img.techpowerup.org/200629/bus.jpg'
      },
      stasiun: {
        icon: 'https://img.techpowerup.org/200629/kereta.jpg'
      },
      lapangan: {
        icon: 'https://img.techpowerup.org/200629/lapangan.jpg'
      },
      bank: {
        icon: 'https://img.techpowerup.org/200629/bank.jpg'
      }
    };
  
    console.log(this.state.showAllItems + 'yang pertama')
    console.log(this.props.showAllItems + 'yang pertama')
    
    
    if (this.state.showAllItems === null ) {
      console.log('masuk content info')

      function addMarkerSingle(feature) {
        let contentInfo;
        if(feature.type === 'fakultas'){
          contentInfo  = '<div class="content">' +
                            '<h3>' + feature.namaTempat + '</h3>' +
                            '<img class="contentImg" src=' + feature.img + '>' +
                            '<div class="info">' +
                              '<span class="nextLine">' + '<span class="bold">' + 'Alamat     : ' + '</span>' + '<span class="contentInfo">' + feature.alamat + '</span>' + '</span>' +
                              '<span class="nextLine">' + '<span class="bold">' + 'No. Telfon : ' + '</span>' + '<span class="contentInfo">' + feature.telp + '</span>' + '</span>' +
                              '<span class="nextLine">' + '<span class="bold">' + 'Email      : ' + '</span>' + '<span class="contentInfo">' + feature.email + '</span>' + '</span>' +
                            '</div>' +
                          '</div>';
        } else if (feature.type === 'umum'){
          contentInfo  = '<div class="content">' +
                            '<h3>' + feature.namaTempat + '</h3>' +
                            '<img class="contentImg" src=' + feature.img + '>' +
                            '<div class="info">' +
                              '<span class="nextLine">' + '<span class="bold">' + 'Alamat     : ' + '</span>' + '<span class="contentInfo">' + feature.alamat + '</span>' + '</span>' +
                              '<span class="nextLine">' + '<span class="bold">' + 'No. Telfon : ' + '</span>' + '<span class="contentInfo">' + feature.telp + '</span>' + '</span>' +
                            '</div>' +
                          '</div>';
        } else if (feature.type === 'parkir'){
          contentInfo  = '<div class="content">' +
                            '<h3>' + feature.namaTempat + '</h3>' +
                            '<img class="contentImg" src=' + feature.img + '>' +
                            '<div class="info">' +
                              '<span class="nextLine">' + '<span class="bold">' + 'Jam Operasional     : ' + '</span>' + '<span class="contentInfo">' + feature.jam + '</span>' + '</span>' +
                            '</div>' +
                          '</div>';
        } else if (feature.type === 'makan'){
          contentInfo  = '<div class="content">' +
                            '<h3>' + feature.namaTempat + '</h3>' +
                            '<img class="contentImg" src=' + feature.img + '>' +
                            '<div class="info">' +
                              '<span class="nextLine">' + '<span class="bold">' + 'Menu   : ' + '</span>' + '<span class="contentInfo">' + feature.makanan + '</span>' + '</span>' +
                              '<span class="nextLine">' + '<span class="bold">' + 'Harga : ' + '</span>' + '<span class="contentInfo">' + feature.harga + '</span>' + '</span>' +
                              '<span class="nextLine">' + '<span class="bold">' + 'Jam Operasional      : ' + '</span>' + '<span class="contentInfo">' + feature.jam + '</span>' + '</span>' +
                            '</div>' +
                          '</div>';
        } else if (feature.type === 'halte' || feature.type === 'stasiun'){
          contentInfo  = '<div class="content">' +
                            '<h3>' + feature.namaTempat + '</h3>' +
                            '<img class="contentImg" src=' + feature.img + '>' +
                          '</div>';
        } else if (feature.type === 'lapangan'){
          contentInfo  = '<div class="content">' +
                            '<h3>' + feature.namaTempat + '</h3>' +
                            '<img class="contentImg" src=' + feature.img + '>' +
                            '<div class="info">' +
                              '<span class="nextLine">' + '<span class="bold">' + 'Jam Operasional     : ' + '</span>' + '<span class="contentInfo">' + feature.jam + '</span>' + '</span>' +
                            '</div>' +
                          '</div>';
        } else if (feature.type === 'bank'){
          contentInfo  = '<div class="content">' +
                            '<h3>' + feature.namaTempat + '</h3>' +
                            '<img class="contentImg" src=' + feature.img + '>' +
                            '<div class="info">' +
                              '<span class="nextLine">' + '<span class="bold">' + 'Alamat     : ' + '</span>' + '<span class="contentInfo">' + feature.alamat + '</span>' + '</span>' +
                              '<span class="nextLine">' + '<span class="bold">' + 'No. Telfon : ' + '</span>' + '<span class="contentInfo">' + feature.telp + '</span>' + '</span>' +
                              '<span class="nextLine">' + '<span class="bold">' + 'Fasilitas      : ' + '</span>' + '<span class="contentInfo">' + feature.fasilitas + '</span>' + '</span>' +
                              '<span class="nextLine">' + '<span class="bold">' + 'Hari Operasional      : ' + '</span>' + '<span class="contentInfo">' + feature.hari + '</span>' + '</span>' +
                              '<span class="nextLine">' + '<span class="bold">' + 'Jam Operasional      : ' + '</span>' + '<span class="contentInfo">' + feature.jam + '</span>' + '</span>' +
                            '</div>' +
                          '</div>';
        } else {
          contentInfo = '<h3>' + usrLoc.namaTempat + '</h3>'
        }
        
        var marker = new window.google.maps.Marker({
          position: feature.position,
          icon: icons[feature.type].icon,
          map: map
        });

        const infowindow = new window.google.maps.InfoWindow({
          content: contentInfo
        });

        marker.addListener('click', function () {
          infowindow.open(map, marker);
        });
      }

      if (!(this.props.latitude == null) && !(this.props.longitude == null)) {
        addMarkerSingle(feature)
      } else {
        addMarkerSingle(usrLoc)
      }

    } else if(this.state.showAllItems == this.props.showAllItems){
      console.log('masuk else')
      var itemToDisplay = this.state.showAllItems
      console.log(itemToDisplay.length)
      function addMarkerShowAll(feature){
        let contentInfo;
        if(feature.key === 'fakultas'){
          contentInfo  = '<div class="content">' +
                            '<h3>' + feature.title + '</h3>' +
                            '<img class="contentImg" src=' + feature.img + '>' +
                            '<div class="info">' +
                              '<span class="nextLine">' + '<span class="bold">' + 'Alamat     : ' + '</span>' + '<span class="contentInfo">' + feature.alamat + '</span>' + '</span>' +
                              '<span class="nextLine">' + '<span class="bold">' + 'No. Telfon : ' + '</span>' + '<span class="contentInfo">' + feature.telp + '</span>' + '</span>' +
                              '<span class="nextLine">' + '<span class="bold">' + 'Email      : ' + '</span>' + '<span class="contentInfo">' + feature.email + '</span>' + '</span>' +
                            '</div>' +
                          '</div>';
        } else if (feature.key === 'umum'){
          contentInfo  = '<div class="content">' +
                            '<h3>' + feature.title + '</h3>' +
                            '<img class="contentImg" src=' + feature.img + '>' +
                            '<div class="info">' +
                              '<span class="nextLine">' + '<span class="bold">' + 'Alamat     : ' + '</span>' + '<span class="contentInfo">' + feature.alamat + '</span>' + '</span>' +
                              '<span class="nextLine">' + '<span class="bold">' + 'No. Telfon : ' + '</span>' + '<span class="contentInfo">' + feature.telp + '</span>' + '</span>' +
                            '</div>' +
                          '</div>';
        } else if (feature.key === 'parkir'){
          contentInfo  = '<div class="content">' +
                            '<h3>' + feature.title + '</h3>' +
                            '<img class="contentImg" src=' + feature.img + '>' +
                            '<div class="info">' +
                              '<span class="nextLine">' + '<span class="bold">' + 'Jam Operasional     : ' + '</span>' + '<span class="contentInfo">' + feature.jam + '</span>' + '</span>' +
                            '</div>' +
                          '</div>';
        } else if (feature.key === 'makan'){
          contentInfo  = '<div class="content">' +
                            '<h3>' + feature.title + '</h3>' +
                            '<img class="contentImg" src=' + feature.img + '>' +
                            '<div class="info">' +
                              '<span class="nextLine">' + '<span class="bold">' + 'Menu   : ' + '</span>' + '<span class="contentInfo">' + feature.makanan + '</span>' + '</span>' +
                              '<span class="nextLine">' + '<span class="bold">' + 'Harga : ' + '</span>' + '<span class="contentInfo">' + feature.harga + '</span>' + '</span>' +
                              '<span class="nextLine">' + '<span class="bold">' + 'Jam Operasional      : ' + '</span>' + '<span class="contentInfo">' + feature.jam + '</span>' + '</span>' +
                            '</div>' +
                          '</div>';
        } else if (feature.key === 'halte' || feature.key === 'stasiun'){
          contentInfo  = '<div class="content">' +
                            '<h3>' + feature.title + '</h3>' +
                            '<img class="contentImg" src=' + feature.img + '>' +
                          '</div>';
        } else if (feature.key === 'lapangan'){
          contentInfo  = '<div class="content">' +
                            '<h3>' + feature.title + '</h3>' +
                            '<img class="contentImg" src=' + feature.img + '>' +
                            '<div class="info">' +
                              '<span class="nextLine">' + '<span class="bold">' + 'Jam Operasional     : ' + '</span>' + '<span class="contentInfo">' + feature.jam + '</span>' + '</span>' +
                            '</div>' +
                          '</div>';
        } else if (feature.key === 'bank'){
          contentInfo  = '<div class="content">' +
                            '<h3>' + feature.title + '</h3>' +
                            '<img class="contentImg" src=' + feature.img + '>' +
                            '<div class="info">' +
                              '<span class="nextLine">' + '<span class="bold">' + 'Alamat     : ' + '</span>' + '<span class="contentInfo">' + feature.alamat + '</span>' + '</span>' +
                              '<span class="nextLine">' + '<span class="bold">' + 'No. Telfon : ' + '</span>' + '<span class="contentInfo">' + feature.telp + '</span>' + '</span>' +
                              '<span class="nextLine">' + '<span class="bold">' + 'Fasilitas      : ' + '</span>' + '<span class="contentInfo">' + feature.fasilitas + '</span>' + '</span>' +
                              '<span class="nextLine">' + '<span class="bold">' + 'Hari Operasional      : ' + '</span>' + '<span class="contentInfo">' + feature.hari + '</span>' + '</span>' +
                              '<span class="nextLine">' + '<span class="bold">' + 'Jam Operasional      : ' + '</span>' + '<span class="contentInfo">' + feature.jam + '</span>' + '</span>' +
                            '</div>' +
                          '</div>';
        }

        var markers = new window.google.maps.Marker({
          position: {lat: feature.latitude , lng: feature.longitude},
          icon: icons[feature.key].icon,
          map: map
        });

        const infoWindow = new window.google.maps.InfoWindow({
          content: contentInfo
        });

        markers.addListener('click', function () {
          closeOtherInfo()
          infoWindow.open(map, markers);
          infoObj[0] = infoWindow
        });
      }
      for (var i = 0; i < itemToDisplay.length; i++) {
        addMarkerShowAll(itemToDisplay[i])
       
      };

      this.setState({
        showAllItems: null
      })

    }

    function closeOtherInfo() {
      if (infoObj.length > 0) {
        infoObj[0].set("markers", null);
        infoObj[0].close();
        infoObj[0].length = 0;
      }

    }

  }



  renderMap = () => {
    loadScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyCKUUD3dldVl3k7IDcOe12CYdb2HKo8u3g&callback=initMap")
    window.initMap = this.initMap
  }

  changeEvent() {
    this.getLocationSelect();
    this.renderMap();
  }

  componentDidUpdate(pP) {
    if (pP.latitude != this.props.latitude && pP.longitude != this.props.longitude) {
      this.getLocationSelect();
      this.componentDidMount();

    } else if(pP.showAllItems != this.props.showAllItems){
      this.showAll();
      this.componentDidMount();
    }
  }

  incrementItem() {
    this.setState({ renderCounter: this.state.renderCounter + 1 }, () => {
      console.log(this.state.renderCounter, 'dealersOverallTotal1');
    });
  }


  componentDidMount() {
    if (this.state.renderCounter == 0) {
      this.renderMap();
      this.getLocation();
      this.incrementItem()
    } else {
      this.renderMap();
    }
  }


  render() {
    return (
      <main>
        <div id="map"></div>
      </main>
    );
  }
}

function loadScript(url) {
  var index = window.document.getElementsByTagName('script')[0]
  var script = window.document.createElement("script")
  script.src = url
  script.async = true
  script.defer = true
  index.parentNode.insertBefore(script, index)
}


//   Maps.defaultProps = googleMapStyles;

export default Maps;
// export default GoogleApiWrapper({
//   apiKey: "AIzaSyCKUUD3dldVl3k7IDcOe12CYdb2HKo8u3g",
// })(Maps);