import Spotify from './spotify';
import renderAlbumInfo from './AlbumInfo';
import renderAlbumTracks from './AlbumTracks';

const listAlbums = document.getElementById('album-list');
const albumInfoEL = document.getElementById('album-info');
const albumTracksEL = document.getElementById('album-tracks');

async function makeRequest(albumId) {
    try {
        const data = await Spotify.album.getAlbum(albumId);

        const albumData = renderAlbumInfo(data, albumInfoEL);
        renderAlbumTracks(albumData.tracks.items, albumTracksEL);
    } catch (e) {
        console.log(e);
    }
}

export default function searchEnterTrigger() {
    listAlbums.addEventListener('click', async (e) => {
        const { target } = e;
        const albumId = target.getAttribute('data-album-id');

        makeRequest(albumId);
    });
}
