import { useState } from 'react'

const useDragAndDrop = () => {
  const [isDragging, setIsDragging] = useState<boolean>(false)
  const [draggedFile, setDraggedFile] = useState<File | null>(null)
  const [imageURL, setImageURL] = useState<string | null>(null)

  const handleReadImage = (image: File) => {
    const reader = new FileReader()
    reader.readAsDataURL(image)
    reader.onloadend = () => {
      setImageURL(reader.result as string)
    }
  }

  const handleRemoveFile = () => {
    setDraggedFile(null)
  }

  const handleDragEnter = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(true)
  }

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(false)
  }

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.dataTransfer.files) {
      setIsDragging(true)
    }
  }

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    e.stopPropagation()
    setDraggedFile(e.dataTransfer.files[0])
    handleReadImage(e.dataTransfer.files[0])
    setIsDragging(false)
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setDraggedFile(e.target.files[0])
      handleReadImage(e.target.files[0])
    }
  }

  return {
    isDragging,
    draggedFile,
    imageURL,
    handleRemoveFile,
    handleDragEnter,
    handleDragLeave,
    handleDragOver,
    handleDrop,
    handleFileChange
  }
}

export default useDragAndDrop
