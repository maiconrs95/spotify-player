import Spotify from './spotify';
import renderAlbums from './AlbumList';

const searchForm = document.getElementById('search-form');
const albumListEL = document.getElementById('album-list');
const searchInput = document.getElementById('search-input');

export default function searchEnterTrigger() {
    searchForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        try {
            const { albums } = await Spotify.search.albums(searchInput.value);

            renderAlbums(albums.items, albumListEL);

            searchInput.value = '';
            searchInput.focus();
        } catch (e) {
            console.log(e);
        }
    });
}
