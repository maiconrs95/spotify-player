import Spotify from './spotify';
import renderAlbums from './AlbumList';
import renderAlbumInfo from './AlbumInfo';
import renderAlbumTracks from './AlbumTracks';

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
        const albumTracksEL = document.getElementById('album-tracks');
        const data = await Spotify.album.getAlbum('2Y9IRtehByVkegoD7TcLfi');

        const albumData = renderAlbumInfo(data, albumInfoEL);
        renderAlbumTracks(albumData.tracks.items, albumTracksEL);
    } catch (e) {}
})();
