export type Project = {
  thumbnail: string
  galleryImages: string[]
  title: string
  subTitle: string
  desc: string
  type: string
  stack: string
  country: string
  liveURL: string
}

export type ProjectGallery = {
  [key: string]: {
    thumbnail: string
    galleryImages: string[]
  }
}
