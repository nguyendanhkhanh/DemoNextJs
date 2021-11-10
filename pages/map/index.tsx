import Link from 'next/link'
import React, { useState } from 'react'
import StandaloneSearchBox from 'react-google-maps/lib/components/places/StandaloneSearchBox';
import MapView from '../../components/MapView';

const Map = () => {
  const key = 'AIzaSyC2u32QZBnGewrIdVtFXhFwf87aD2yiEB8'
  const [place, setPlace] = useState([])
  return (
    <>
      <h1> This is map </h1>
      <h2>
        Back to {' '}
        <Link href="/">Home</Link>
      </h2>
      <MapView
        googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${key}&libraries=places`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `90vh`, margin: `auto`, border: '2px solid black' }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />

    </>
  )
}

export default Map;