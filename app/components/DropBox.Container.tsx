'use client'

import React, { useEffect, useState } from 'react'
import exifr from 'exifr'
import { days, months } from '@/constants/dateItem'
import dayjs from 'dayjs'
import useDragAndDrop from '../hooks/useDragAndDrop'
import DropBoxPresenter from './DropBox.Presenter'
import Selector from './Selector'

dayjs().locale('ko')

interface Metadata {
  Make: string
  Model: string
  DateTimeOriginal: string
  ISO: string
  LensModel: string
  latitude: number
  longitude: number
}

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
  const [day, setDay] = useState<string>(dayjs().date().toString())
  const [metadata, setMetadata] = useState<Partial<Metadata>>({})

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
    setMonth(months[Number(Fmonth)].value)
    setDay(days[Number(Fday)].value)
  }, [metadata])

  return (
    <div className="mt-10 flex flex-col gap-5">
      <DropBoxPresenter
        onChange={handleFileChange}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDragOver={handleDragOver}
        onRemove={handleRemoveFile}
        onDrop={handleDrop}
        isDragging={isDragging}
        imageURL={imageURL}
      />
      <Selector
        selectedItem={{ year, month, day }}
        onChange={handleSelectionChange}
      />
    </div>
  )
}
