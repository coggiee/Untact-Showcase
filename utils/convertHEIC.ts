import heic2any from 'heic2any'

const handleConvertHEIC = async (file: File) => {
  if (file) {
    if (file.type === 'image/heic' || file.type === 'image/HEIC') {
      const convertedFile = await heic2any({
        blob: file,
        toType: 'image/jpeg'
      }).then((resultBlob: any) => {
        const jpgFile = new File(
          [resultBlob],
          `${file.name.split('.')[0]}.jpg`,
          {
            type: 'image/jpeg'
          }
        )
        return jpgFile
      })
      return convertedFile
    }
  }
  return file
}

export default handleConvertHEIC
