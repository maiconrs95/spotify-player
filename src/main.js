import Spotify from './spotify';
import rendeAlbums from './Album';

(async () => {
    try {
        const albums = await Spotify.search.albums('red-hot-chili-peppers');
        console.log(albums);
    } catch (e) {
        console.log(e);
    }
})();
