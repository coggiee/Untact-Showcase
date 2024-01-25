'use client'

import React, { useMemo, useState } from 'react'
import { Marker } from 'react-map-gl'
import CITIES from '@/data/cities.json'
import MapBoxPresenter from './MapBox.Presenter'
import Pin from './Pin'

function MapBoxContainer() {
  const [viewState, setViewState] = React.useState({
    longitude: 124,
    latitude: 33,
    zoom: 2.5,
    bearing: 0,
    pitch: 0
  })

  const [popupInfo, setPopupInfo] = useState<{
    longitude: number
    latitude: number
  } | null>(null)

  const pins = useMemo(
    () =>
      CITIES.map((city) => (
        <Marker
          key={`marker-${city.longitude}`}
          longitude={city.longitude}
          latitude={city.latitude}
          anchor="bottom"
          onClick={(e) => {
            e.originalEvent.stopPropagation()
            setPopupInfo(city)
          }}>
          <Pin size={20} />
        </Marker>
      )),
    []
  )

  const handleMoveMap = (event: any) => {
    setViewState(event.viewState)
  }

  const handleClickMap = (event: any) => {
    const { lat, lng } = event.lngLat
    console.log(lat, lng)
  }

  return (
    <section className="w-full h-3/5">
      <MapBoxPresenter
        viewState={viewState}
        onClickMap={handleClickMap}
        onMoveMap={handleMoveMap}
        pins={pins}
        popupInfo={popupInfo}
        onClickPopup={() => setPopupInfo(null)}
      />
    </section>
  )
}

export default MapBoxContainer
