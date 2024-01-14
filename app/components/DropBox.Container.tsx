'use client'

import React from 'react'
import useDragAndDrop from '../hooks/useDragAndDrop'
import DropBoxPresenter from './DropBox.Presenter'

export default function DropBoxContainer() {
  const {
    isDragging,
    draggedFile: file,
    imageURL,
    handleDragEnter,
    handleDragLeave,
    handleDragOver,
    handleDrop,
    handleFileChange
  } = useDragAndDrop()

  return (
    <DropBoxPresenter
      onChange={handleFileChange}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      isDragging={isDragging}
      imageURL={imageURL}
    />
  )
}
