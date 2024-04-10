import { Card, CardBody, CardHeader, Chip, Divider } from '@nextui-org/react'
import React from 'react'

function MetadataPresenter({ metadata }: Metadata) {
  return (
    <Card
      isHoverable
      isFooterBlurred
      radius="lg"
      shadow="lg"
      className="w-full">
      <CardHeader className="font-bold">Metadata</CardHeader>
      <Divider />
      <CardBody className="flex flex-col gap-3">
        <div className="flex items-center gap-2">
          <Chip size="sm">Make</Chip>
          <span className="text-xs">{metadata.Make}</span>
        </div>
        <div className="flex items-center gap-2">
          <Chip size="sm">Model</Chip>
          <span className="text-xs">{metadata.Model}</span>
        </div>
        <div className="flex items-center gap-2">
          <Chip size="sm">ISO</Chip>
          <span className="text-xs">{metadata.ISO}</span>
        </div>
        <div className="flex items-center gap-2">
          <Chip size="sm">Lens-Model</Chip>
          <span className="text-xs">{metadata.LensModel}</span>
        </div>
      </CardBody>
    </Card>
  )
}

export default MetadataPresenter
