'use client'

import React, { useEffect, useState } from 'react'
import exifr from 'exifr'
import { days, months } from '@/constants/dateItem'
import dayjs from 'dayjs'
import { Button, Image } from '@nextui-org/react'
import useDragAndDrop from '../hooks/useDragAndDrop'
import DropBoxPresenter from './DropBox.Presenter'
import Selector from './Selector'
import RemoveIcon from '../icons/RemoveIcon'
import MetadataContainer from './Metadata.Container'
import LocationContainer from './Location.Container'

dayjs().locale('ko')

export default function DropBoxContainer() {
  const {
    isDragging,
    draggedFile: file,
    imageURL,
    handleDragEnter,
    handleDragLeave,
    handleDragOver,
    handleDrop,
    handleFileChange,
    handleRemoveFile
  } = useDragAndDrop()

  const [year, setYear] = useState<string>(dayjs().year().toString())
  const [month, setMonth] = useState<string>(months[dayjs().month()].value)
  const [day, setDay] = useState<string>(days[dayjs().date()].value)
  const [metadata, setMetadata] = useState<Partial<MetadataField>>({})

  const handleSelectionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target
    if (name === 'year') setYear(value)
    if (name === 'month') setMonth(value)
    if (name === 'day') setDay(value)
  }

  useEffect(() => {
    const extractMetadata = async () => {
      await exifr.parse(file!).then((output) => {
        const {
          Make,
          Model,
          DateTimeOriginal,
          ISO,
          LensModel,
          latitude,
          longitude
        } = output

        setMetadata({
          Make,
          Model,
          DateTimeOriginal,
          ISO,
          LensModel,
          latitude,
          longitude
        })
      })
    }

    extractMetadata()
  }, [file])

  useEffect(() => {
    const date = dayjs(metadata.DateTimeOriginal).format('YYYY-MM-DD')
    const [Fyear, Fmonth, Fday] = date.split('-')

    setYear(Fyear)
    setMonth(months[Number(Fmonth) - 1].value)
    setDay(days[Number(Fday) - 1].value)
  }, [metadata])

  return (
    <div className="w-full h-full flex flex-col gap-5 py-5">
      {!imageURL && (
        <DropBoxPresenter
          onChange={handleFileChange}
          onDragEnter={handleDragEnter}
          onDragLeave={handleDragLeave}
          onDragOver={handleDragOver}
          onDrop={handleDrop}
          isDragging={isDragging}
          imageURL={imageURL}
        />
      )}
      {imageURL && (
        <section className="flex flex-col items-center gap-5">
          <Image
            width={500}
            height={300}
            isBlurred
            shadow="lg"
            radius="lg"
            src={imageURL}
            alt="preview"
          />
          <Button
            isIconOnly
            variant="ghost"
            radius="full"
            aria-label="Delete photo"
            onClick={handleRemoveFile}>
            <RemoveIcon className="w-full h-full text-[#71717A]" />
          </Button>
          <Selector
            selectedItem={{ year, month, day }}
            onChange={handleSelectionChange}
          />
          <div className="w-full flex flex-col gap-3 md:flex-row container max-w-xl">
            <MetadataContainer metadata={metadata} />
            <LocationContainer
              latitude={metadata.latitude!}
              longitude={metadata.longitude!}
            />
          </div>
          <Button
            color="primary"
            className="w-full max-w-xl mb-3"
            disabled={!file}>
            Save
          </Button>
        </section>
      )}
    </div>
  )
}
