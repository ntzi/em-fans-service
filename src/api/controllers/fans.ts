import { Fan } from '../models/fan.js';

const getFansOfArtists = async (req, res) => {
	const { artistIds: ids } = req.params;

	const artistIds: number[] = ids.split(',').map((id) => parseInt(id, 10));

	const fans = await Fan.createQueryBuilder('fan')
		.innerJoin('fan.artists', 'artist')
		.where('artist.id IN (:...artistIds)', { artistIds })
		.cache(true)
		.getMany();

	return res.ok(fans);
};

export { getFansOfArtists };
