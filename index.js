var mymap = L.map('mapid').setView([2.9198, 101.7809], 13);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiZmFyaGFuaGVsbXkiLCJhIjoiY2tpa2drY2sxMDJibDJ4bzZka3pueTgzZCJ9.kM36SmH_1IWDoG5y2TrBiw'
}).addTo(mymap);

var marker = L.marker([2.9198, 101.7809]).addTo(mymap);
marker.bindPopup("<b>Hello!</b><br>I am the nearest petrol station.").openPopup();