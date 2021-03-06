import { StandaloneSearchBox } from '@react-google-maps/api'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { withGoogleMap, withScriptjs, GoogleMap, Marker, OverlayView, InfoWindow, DirectionsRenderer } from 'react-google-maps'
import InfoBox from 'react-google-maps/lib/components/addons/InfoBox'
// import 

const MapView = () => {
  const [coordinates, setCoordinates] = useState({ lat: 21.017555, lng: 105.783073 })
  const [infoBoxHover, setInfoBoxHover] = useState(false)
  const [infoBoxClick, setInfoBoxClick] = useState(false)
  const [directions, setDirections] = useState<any>()
  const [markers, setMarkers] = useState()
  const [place, setPlace] = useState([])
  const marker = { lat: 21.032739, lng: 105.792463 }

  const [order, setOrder] = useState({
    order_title: 'Đơn online',
    customer_name: 'Nguyễn Danh Khánh',
    distance: '4km',
    amount: '120,000 đ',
    status: 0
  })

  let refs: any

  useEffect(() => {
    const DirectionsService = new google.maps.DirectionsService();

    DirectionsService.route({
      origin: new google.maps.LatLng(coordinates),
      destination: new google.maps.LatLng(marker),
      travelMode: google.maps.TravelMode.DRIVING,
    }, (result, status) => {
      if (status === google.maps.DirectionsStatus.OK) {
        setDirections(result)
      } else {
        console.error(`error fetching directions ${result}`);
      }
    })
  }, [])

  return (
    <>
      <GoogleMap
        defaultZoom={15}
        defaultCenter={coordinates}
        // defaultOptions={{ mapId: 'a9b5f754b0b222ed' }}
      >
        <Marker
          position={marker}
          onClick={() => setInfoBoxClick(true)}
          onMouseOver={() => setInfoBoxHover(true)}
          onMouseOut={() => setInfoBoxHover(false)}
        >
          <InfoBox options={{ closeBoxURL: '', enableEventPropagation: true }}  >
            <div style={{ backgroundColor: 'yellow', padding: 10 }}>
              <span style={{ fontWeight: 'bold', fontSize: 13 }}>Đơn online mới !</span>
            </div>
          </InfoBox>
          {(infoBoxHover || infoBoxClick) && <InfoWindow
            onCloseClick={() => setInfoBoxClick(false)}
          // onLoad={onLoad}
          >
            <div style={{}}>
              <h4>{order.order_title}</h4>
              <h5>{`Khách hàng: ${order.customer_name}`}</h5>
              <p style={{ margin: 0, padding: 0 }}>{`Khoảng cách: ${order.distance}`}</p>
              <p style={{ margin: 0, padding: 0 }}>{order.amount ? ('Tổng tiền: ' + order.amount) : 'Tổng tiền: Đang cập nhật'}</p>
              {order.status === 0 && <button onClick={() => { }} className="button">Nhận đơn</button>}
            </div>
          </InfoWindow>}
        </Marker>

        <Marker
          icon={{
            url: 'https://insulationpads.co.uk/wp-content/uploads/2017/10/Home.png',
            scaledSize: new google.maps.Size(40, 40),
          }}
          position={coordinates}
          title="Medlink"
          defaultTitle="Medlink"
        >
          <InfoBox
            options={{ closeBoxURL: '', enableEventPropagation: true }}
          >
            <div style={{ backgroundColor: 'transparent', color: 'green', borderRadius: '1em' }}>
              <span style={{ fontWeight: 'bold', fontSize: 14 }}>Nhà thuốc Medlink</span>
            </div>
          </InfoBox>
        </Marker>

        {directions && <DirectionsRenderer directions={directions} />}

        <StandaloneSearchBox
          ref={(ref: any) => {
            console.log(ref)
            refs = ref
          }}
          onPlacesChanged={() => {
            console.log(refs)
            setPlace(refs.getPlaces())
          }}
        >
          <input
            type="text"
            placeholder="Customized your placeholder"
            style={{
              boxSizing: `border-box`,
              border: `1px solid transparent`,
              width: `240px`,
              height: `32px`,
              marginTop: `27px`,
              padding: `0 12px`,
              borderRadius: `3px`,
              boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
              fontSize: `14px`,
              outline: `none`,
              textOverflow: `ellipses`,
            }}
          />
        </StandaloneSearchBox>
      </GoogleMap>
    </>
  )
}

export default withScriptjs(withGoogleMap(MapView));