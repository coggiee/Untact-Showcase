import React from 'react'
import MetadataPresenter from './Metadata.Presenter'

function MetadataContainer({ metadata }: Metadata) {
  return <MetadataPresenter metadata={metadata} />
}

export default MetadataContainer
