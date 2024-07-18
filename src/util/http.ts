import { QueryClient } from '@tanstack/react-query'
export const queryClient = new QueryClient()
import { Media } from '../types/media'

interface FetchTrendingParams {
	category: string
	time: string
}

interface FetchSearchResultsParams {
	category: string
	searchTerm: string
}

export async function fetchTrending({ category, time }: FetchTrendingParams) {
	const url = `http://localhost:8000/api/media/trending?category=${category}&time=${time}`

	const response = await fetch(url)

	if (!response.ok) {
		throw new Error(`An error occurred while fetching trending section: ${response.status}`)
	}

	const result = await response.json()

	return result
}

export async function fetchRecommended() {
	const url = `http://localhost:8000/api/media/recommended`

	const response = await fetch(url)

	if (!response.ok) {
		throw new Error(`An error occurred while fetching recommended section: ${response.status}`)
	}

	const result = await response.json()

	return result
}

export async function fetchSearchResults({ category, searchTerm }: FetchSearchResultsParams) {
	const url = `http://localhost:8000/api/media/search?category=${category}&searchTerm=${searchTerm}`

	const response = await fetch(url)

	if (!response.ok) {
		throw new Error(`An error occurred while searching results: ${response.status}`)
	}

	let result = await response.json()
	result = result.filter((media: Media) => media.media_type !== 'person')
	result = result.filter((media: Media) => media.backdrop_path || media.poster_path)

	return result
}
