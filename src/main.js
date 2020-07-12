import Spotify from './spotify';
import renderAlbums from './AlbumList';
import renderAlbumInfo from './AlbumInfo';

(async () => {
    try {
        const { albums } = await Spotify.search.albums('red-hot-chili-peppers');
        const albumListEL = document.getElementById('album-list');

        renderAlbums(albums.items, albumListEL);
    } catch (e) {}
})();

(async () => {
    try {
        const albumInfoEL = document.getElementById('album-info');
        const data = await Spotify.album.getAlbum('2Y9IRtehByVkegoD7TcLfi');

        renderAlbumInfo(data, albumInfoEL);
    } catch (e) {}
})();
