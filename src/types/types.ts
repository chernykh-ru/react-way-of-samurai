export type PostType = {
  id: number | null,
  message: string | null,
  likeCounter: number | null
}

export type ContactsType = {
  facebook: string | null,
  website: string | null,
  vk: string | null,
  twitter: string | null,
  instagram: string | null,
  youtube: string | null,
  github: string | null,
  mainLink: string | null,
}

export type PhotosType = {
  small: string | null,
  large: string | null,
}

export type ProfileType = {
  aboutMe: string | null,
  contacts: ContactsType,
  lookingForAJob: boolean,
  lookingForAJobDescription: string | null,
  fullName: string | null,
  userId: number | null,
  photos: PhotosType,
}

export type UsersType = {
  name: string | null,
  id: number | null,
  uniqueUrlName:null,
  photos: PhotosType,
  status: string | null,
  followed: boolean,
}