'use strict';

describe('Service: Playlist', function () {

    // load the service's module
    beforeEach(module('europaApp'));

    // instantiate service
    var Playlist;
    beforeEach(inject(function (_Playlist_) {
        Playlist = _Playlist_;
    }));

    it('should create new playlist', function () {
        var playlist = new Playlist('test');
        expect(!!playlist).toBe(true);
    });

    it('should add songs to playlist', function () {
        var playlist = new Playlist('test');
        playlist.addSong({
            name: 'song',
            durarion_ms: 200000,
            popularity: 70
        })
        expect(playlist.songs.length).toBe(1);
    });

    it('should remove songs to playlist', function () {
        var playlist = new Playlist('test');
        var song = {
            name: 'song',
            durarion_ms: 200000,
            popularity: 70
        };

        playlist.addSong(song);
        playlist.removeSong(song);

        expect(playlist.songs.length).toBe(0);
    });

    it('should persist when save is called', function () {
        var playlist = new Playlist('test');
        var song = {
            name: 'song',
            durarion_ms: 200000,
            popularity: 70
        };

        playlist.addSong(song);
        playlist.save()

        expect(playlist.persisted()).toBe(true);
    });

    it('should persited data when query is called', function () {
        var playlist = new Playlist('test');
        var song = {
            name: 'song',
            durarion_ms: 200000,
            popularity: 70
        };

        playlist.addSong(song);
        playlist.save()

        expect(playlist.query().test).not.toBe(null);
    });

    it('should persited be falsy if save not called', function () {
        var playlist = new Playlist('test');
        var song = {
            name: 'song',
            durarion_ms: 200000,
            popularity: 70
        };

        playlist.addSong(song);

        expect(playlist.persisted()).toBe(false);
    });

});