import Spotify from './spotify';
import renderAlbums from './Album';

(async () => {
    const { albums } = await Spotify.search.albums('red-hot-chili-peppers');
    const albumListEL = document.getElementById('album-list');

    renderAlbums(albums.items, albumListEL);
})();
