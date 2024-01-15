'use client'

import { Button, Image } from '@nextui-org/react'
import RemoveIcon from '../icons/RemoveIcon'

interface DropBoxProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  onDragEnter: (e: React.DragEvent<HTMLDivElement>) => void
  onDragLeave: (e: React.DragEvent<HTMLDivElement>) => void
  onDragOver: (e: React.DragEvent<HTMLDivElement>) => void
  onDrop: (e: React.DragEvent<HTMLDivElement>) => void
  onRemove: () => void
  isDragging: boolean
  imageURL: string | null
}

function DropBoxPresenter({
  onChange,
  onDragEnter,
  onDragLeave,
  onDragOver,
  onDrop,
  onRemove,
  isDragging,
  imageURL
}: DropBoxProps) {
  return (
    <div>
      {!imageURL && (
        <>
          <input
            type="file"
            id="myImage"
            name="myImage"
            accept="image/png, image/gif, image/jpeg, image/jpg"
            className="hidden"
            onChange={onChange}
          />
          <div
            onDragEnter={onDragEnter}
            onDragLeave={onDragLeave}
            onDragOver={onDragOver}
            onDrop={onDrop}
            className={`border-3 border-dashed rounded-2xl p-5 flex flex-col items-center gap-5 ${
              isDragging ? 'border-[#fff]' : 'border-[#626262]'
            }`}>
            <span>Drag and Drop your file on here.</span>
            <label
              htmlFor="myImage"
              className="font-bold text-[#808080]">
              Get your Image
            </label>
          </div>
        </>
      )}
      {imageURL && (
        <section className="flex flex-col items-center gap-5">
          <Image
            width={500}
            height={300}
            isBlurred
            radius="lg"
            src={imageURL}
            alt="preview"
          />
          <Button
            isIconOnly
            variant="ghost"
            radius="full"
            aria-label="Delete photo"
            onClick={onRemove}>
            <RemoveIcon className="w-full h-full text-[#71717A]" />
          </Button>
        </section>
      )}
    </div>
  )
}

export default DropBoxPresenter
