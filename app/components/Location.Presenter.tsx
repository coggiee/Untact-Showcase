import {
  Card,
  CardBody,
  CardHeader,
  Chip,
  Divider,
  Spacer
} from '@nextui-org/react'
import React from 'react'

function LocationPresenter({ latitude, longitude }: LocationField) {
  return (
    <Card
      isHoverable
      isFooterBlurred
      radius="lg"
      shadow="lg"
      className="w-full font-bold">
      <CardHeader>Location</CardHeader>
      <Divider />
      <CardBody className='h-full'>
        <div className="flex items-center gap-2">
          <Chip size="sm">Latitude</Chip>
          <span className="text-xs">{latitude}</span>
        </div>
        <Spacer y={3} />
        <div className="flex items-center gap-2">
          <Chip size="sm">Longitude</Chip>
          <span className="text-xs">{longitude}</span>
        </div>
      </CardBody>
    </Card>
  )
}

export default LocationPresenter
