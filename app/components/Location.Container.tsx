import React from 'react'
import LocationPresenter from './Location.Presenter'

function LocationContainer({ latitude, longitude }: LocationField) {
  return (
    <LocationPresenter
      latitude={latitude}
      longitude={longitude}
    />
  )
}

export default LocationContainer
