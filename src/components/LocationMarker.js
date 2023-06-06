import React from 'react'
import { Marker, Popup } from 'react-leaflet'
import MarkerPopup from './MarkerPopup'


const LocationMarker = ({ lat, long, icon, event }) => {
  
  return (
 <Marker position={[lat, long]} icon={icon}>  
     <MarkerPopup event={event} />
  </Marker>
)}

export default LocationMarker;

