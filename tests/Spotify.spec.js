import { expect } from 'chai';
import spotify from '../src/spotify';

describe('Spotify', () => {
    it('should be an object', () => {
        expect(spotify).to.be.an('object');
    });

    it('should be search methods', () => {
        expect(spotify.search).to.exist;
    });

    it('should be album methods', () => {
        expect(spotify.search.albums).to.exist;
    });
});
