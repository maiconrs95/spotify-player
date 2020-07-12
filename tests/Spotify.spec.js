import { expect } from 'chai';
import spotify from '../src/spotify';

describe('Spotify', () => {
    it('should be an object', () => {
        expect(spotify).to.be.an('object');
    });

    it('should be seatch methods', () => {
        expect(spotify.search).to.exist;
    });
});
