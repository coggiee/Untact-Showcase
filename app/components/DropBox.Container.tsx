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
    handleFileChange,
    handleRemoveFile
  } = useDragAndDrop()

  return (
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
  )
}
