'use client'

import React from 'react'
import MapBoxPresenter from './MapBox.Presenter'

function MapBoxContainer() {
  const [viewState, setViewState] = React.useState({
    longitude: 124,
    latitude: 33,
    zoom: 2.5,
    bearing: 0,
    pitch: 0
  })

  const handleMoveMap = (event: any) => {
    setViewState(event.viewState)
  }

  const handleClickMap = (event: any) => {
    const { lat, lng } = event.lngLat

    console.log(lat, lng)
  }

  return (
    <MapBoxPresenter
      viewState={viewState}
      onClickMap={handleClickMap}
      onMoveMap={handleMoveMap}
    />
  )
}

export default MapBoxContainer
