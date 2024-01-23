'use client'

import React from 'react'
import Map from 'react-map-gl'
import 'mapbox-gl/dist/mapbox-gl.css'

interface MapBoxPresenterProps {
  viewState: any
  onClickMap: (event: any) => void
  onMoveMap: (event: any) => void
}

function MapBoxPresenter({
  viewState,
  onClickMap,
  onMoveMap
}: MapBoxPresenterProps) {
  return (
    <Map
      {...viewState}
      reuseMaps
      style={{ width: '100%', height: 400, marginTop: 20 }}
      mapStyle="mapbox://styles/mapbox/dark-v9"
      mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}
      onClick={onClickMap}
      onMove={onMoveMap}
    />
  )
}

export default MapBoxPresenter
