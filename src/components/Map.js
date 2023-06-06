import React from 'react'
import { MapContainer, Marker, TileLayer, useMap, Popup } from 'react-leaflet';
import L from 'leaflet';
import { fireIcon, stormIcon, volcano } from '../icons.js'
import LocationMarker from './LocationMarker'

const corner1 = L.latLng(-90, -200)
const corner2 = L.latLng(90, 200)
const bounds = L.latLngBounds(corner1, corner2)

const Map = ( { data }) => {
  const markers = data.map((event) => {
    if(event.categories[0].id === 8) {
      const [lng, lat] = event.geometries[0].coordinates

      return <LocationMarker lat={lat} long={lng} icon={icon(fireIcon)} event={event}/>
    }
    else if(event.categories[0].id === 12) {
      const [lng, lat] = event.geometries[0].coordinates

      return <LocationMarker lat={lat} long={lng} icon={icon(volcano)} event={event}/>
    }
  return null
  })

  return (
    <div>
      <MapContainer maxBoundsViscosity={1.0}
  maxBounds={bounds} center={[	-15.78333333, -47.916667]} zoom={4} scrollWheelZoom={true} minZoom={3}>
        <TileLayer
          noWrap={true} attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" 
    />
        {markers}       

        
      </MapContainer>
      
    </div> 
      
     
 )
}

function icon(iconUrl) { 
  return L.icon({
    iconUrl: iconUrl,
    className: "",
    iconSize: [24, 24]
  })
}

export default Map;