'use client'

import exifr from 'exifr'

export default function Home() {
  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files![0]
    exifr
      .parse(file)
      .then((output) => console.log(output))
  }
  return (
    <div>
      <input
        type="file"
        name="myImage"
        accept="image/png, image/gif, image/jpeg"
        onChange={handleChange}
      />
    </div>
  )
}
