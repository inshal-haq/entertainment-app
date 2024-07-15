import { atom } from 'jotai'
import { Media } from '../types/media'

export const bookmarksAtom = atom<Media[]>([])
