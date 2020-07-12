import 'jsdom-global/register';
import { expect } from 'chai';
import renderAlbumInfo from '../src/AlbumInfo';

describe('Album Info', () => {
    it('should exist', () => {
        expect(renderAlbumInfo).to.exist;
    });
});
