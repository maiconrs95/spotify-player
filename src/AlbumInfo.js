export default function renderAlbumInfo(album, element) {
    const markup = `
        <img class="album-image" src="${album.images[0].url}" alt="${album.name}">
        <p class="album-title">${album.name}</p>
        <p class="album-artist">${album.artists[0].name}</p>
        <p class="album-counter">${album.tracks.total} Músicas</p>
    `;

    element.innerHTML = markup;

    return album;
}
