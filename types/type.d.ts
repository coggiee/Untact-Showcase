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
