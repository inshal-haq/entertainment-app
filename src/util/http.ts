import { QueryClient } from '@tanstack/react-query'
export const queryClient = new QueryClient()

const baseUrl = 'https://api.themoviedb.org/3'
const apiKey = import.meta.env.VITE_TMDB_API_KEY

export async function fetchTrending() {
	const response = await fetch(`${baseUrl}/trending/all/week?api_key=${apiKey}`)

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
