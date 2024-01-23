interface MetadataField {
  Make: string
  Model: string
  DateTimeOriginal: string
  ISO: string
  LensModel: string
  latitude: number
  longitude: number
}

interface Metadata {
  metadata: Partial<MetadataField>
}

interface LocationField {
  latitude: number
  longitude: number
}
