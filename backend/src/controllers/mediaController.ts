import { Media } from '../../../src/types/media'
import { Request, Response } from 'express'

const baseApiUrl = 'https://api.themoviedb.org/3'
const TMDB_API_KEY = process.env.TMDB_API_KEY

// @desc    Get trending media
// @route   GET /api/media/trending
const getTrendingMedia = async (req: Request, res: Response) => {
	const { category, time } = req.query

	const response = await fetch(`${baseApiUrl}/trending/${category}/${time}?api_key=${TMDB_API_KEY}`)
	const data = await response.json()

	const media: Media[] = data.results

	res.status(200).json(media)
}

// @desc    Get recommended media
// @route   GET /api/media/recommended
const getRecommendedMedia = async (req: Request, res: Response) => {
	const response = await fetch(`${baseApiUrl}/trending/all/day?page=2&api_key=${TMDB_API_KEY}`)
	const data = await response.json()

	const media: Media[] = data.results

	res.status(200).json(media)
}

// @desc    Get searched media
// @route   GET /api/media/search
const getSearchedMedia = async (req: Request, res: Response) => {
	const { category, searchTerm } = req.query

	const response = await fetch(
		`${baseApiUrl}/search/${category}?query=${searchTerm}&include_adult=false&language=en-US&page=1&api_key=${TMDB_API_KEY}`
	)
	const data = await response.json()

	const media: Media[] = data.results

	res.status(200).json(media)
}

export { getTrendingMedia, getRecommendedMedia, getSearchedMedia }
