import { atom } from 'jotai'
import { atomWithStorage } from 'jotai/utils'
import { Media } from '../types/media'

export const bookmarksAtom = atomWithStorage<Media[]>('bookmarks', [])
export const totalSearchResultsAtom = atom<number>(0)
