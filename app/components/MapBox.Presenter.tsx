'use client'

import React from 'react'
import Map, { Popup } from 'react-map-gl'
import 'mapbox-gl/dist/mapbox-gl.css'

interface MapBoxPresenterProps {
  viewState: any
  onClickMap: (event: any) => void
  onMoveMap: (event: any) => void
  onClickPopup: () => void
  pins: any
  popupInfo: any
}

function MapBoxPresenter({
  viewState,
  onClickMap,
  onMoveMap,
  onClickPopup,
  pins,
  popupInfo
}: MapBoxPresenterProps) {
  return (
    <Map
      {...viewState}
      reuseMaps
      style={{ width: '100%', height: '100%', marginTop: 20, borderRadius: 10 }}
      mapStyle="mapbox://styles/mapbox/dark-v9"
      mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}
      onClick={onClickMap}
      onMove={onMoveMap}
      scrollZoom={false}>
      {pins}

      {popupInfo && (
        <Popup
          anchor="top"
          longitude={Number(popupInfo.longitude)}
          latitude={Number(popupInfo.latitude)}
          onClose={onClickPopup}>
          <div>
            <span>{Number(popupInfo.longitude)}</span>
            <span>{Number(popupInfo.latitude)}</span>
          </div>
        </Popup>
      )}
    </Map>
  )
}

export default MapBoxPresenter
