import handleConvertHEIC from '@/utils/convertHEIC'
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
    setImageURL(null)
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

  const handleDrop = async (e: React.DragEvent<HTMLDivElement>) => {
    const file = e.dataTransfer.files[0]
    e.preventDefault()
    e.stopPropagation()

    const handledFile = (await handleConvertHEIC(file)) ?? file

    setDraggedFile(handledFile)
    handleReadImage(handledFile)
    setIsDragging(false)
  }

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files![0]

    const handledFile = (await handleConvertHEIC(file)) ?? file

    setDraggedFile(handledFile)
    handleReadImage(handledFile)
    setIsDragging(false)
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
