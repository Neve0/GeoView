import { useState, useEffect } from 'react'
import './App.css';
import Map from "./components/Map"

export default function App() {
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://eonet.gsfc.nasa.gov/api/v2.1/events")
      const { events }= await response.json()
      
      setData(events)
    }
    
    fetchData()
  }, [])
  
   
  return (
    <> 
      <div className="header">
        <h1>GeoView</h1>
      </div>
      <Map data={data} />
    </>
  );
}

