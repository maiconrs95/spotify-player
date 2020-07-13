import Spotify from './spotify';
import searchEnterTrigger from './SearchTrigger';
import renderAlbumInfo from './AlbumInfo';
import renderAlbumTracks from './AlbumTracks';

searchEnterTrigger();

(async () => {
    try {
        const albumInfoEL = document.getElementById('album-info');
        const albumTracksEL = document.getElementById('album-tracks');
        const data = await Spotify.album.getAlbum('2Y9IRtehByVkegoD7TcLfi');

        const albumData = renderAlbumInfo(data, albumInfoEL);
        renderAlbumTracks(albumData.tracks.items, albumTracksEL);
    } catch (e) {
        console.log(e);
    }
})();
