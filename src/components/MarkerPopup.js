import React from 'react'
import { Popup } from 'react-leaflet'

const MarkerPopup = ( { event } ) => {
  const id = event.id
  const title = event.title
  const type = event.categories[0].title


  return (
    <Popup className={'pop'}>
      <p><strong>EVENT INFO </strong></p>
      <ul> 
       <li>Id: {id}</li>
       <li>Name: {title}</li>
       <li>Type: {type}</li>    
      </ul>
    </Popup>
  )
}

export default MarkerPopup