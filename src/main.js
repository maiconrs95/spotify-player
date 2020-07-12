import Spotify from './spotify';
import renderAlbums from './AlbumList';

(async () => {
    try {
        const { albums } = await Spotify.search.albums('red-hot-chili-peppers');
        const albumListEL = document.getElementById('album-list');

        renderAlbums(albums.items, albumListEL);
    } catch (e) {}
})();
