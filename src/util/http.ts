import { QueryClient } from '@tanstack/react-query'
export const queryClient = new QueryClient()
import { Media } from '../types/media'

const baseUrl = 'https://api.themoviedb.org/3'
const apiKey = import.meta.env.VITE_TMDB_API_KEY

interface FetchTrendingParams {
	category: string
	time: string
}

interface FetchSearchResultsParams {
	category: string
	searchTerm: string
}

export async function fetchTrending({ category, time }: FetchTrendingParams) {
	const response = await fetch(`${baseUrl}/trending/${category}/${time}?api_key=${apiKey}`)

	if (!response.ok) {
		throw new Error(`An error occurred while fetching trending section: ${response.status}`)
	}

	const { results } = await response.json()

	return results
}

export async function fetchRecommended() {
	const response = await fetch(`${baseUrl}/trending/all/day?page=2&api_key=${apiKey}`)

	if (!response.ok) {
		throw new Error(`An error occurred while fetching recommended section: ${response.status}`)
	}

	const { results } = await response.json()
	return results
}

export async function fetchSearchResults({ category, searchTerm }: FetchSearchResultsParams) {
	const response = await fetch(
		`${baseUrl}/search/${category}?query=${searchTerm}&include_adult=false&language=en-US&page=1&api_key=${apiKey}`
	)

	if (!response.ok) {
		throw new Error(`An error occurred while searching results: ${response.status}`)
	}

	let { results } = await response.json()
	results = results.filter((media: Media) => media.media_type !== 'person')
	results = results.filter((media: Media) => media.backdrop_path || media.poster_path)

	return results
}
