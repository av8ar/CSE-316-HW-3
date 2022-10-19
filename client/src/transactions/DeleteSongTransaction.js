import jsTPS_Transaction from "../common/jsTPS.js"

/**
 * DeleteSong_Transaction
 * 
 * This class represents a transaction that works with adding songs. It will be managed by the transaction stack.
 * 
 * @author Victor Dai
 */
export default class DeleteSong_Transaction extends jsTPS_Transaction {
    constructor(store, initIndex, title, artist, id) {
        super();
        this.store = store;
        this.index = initIndex;
        // this.song = song;
        // this.removedSong = removedSong;
        this.title = title;
        this.artist = artist;
        this.id = id;
    }

    doTransaction() {
        this.store.deleteSong(this.index);
    }
    
    undoTransaction() {
        let song = {
            title: this.title,
            artist: this.artist,
            youTubeId: this.id
        };
        let list = this.store.currentList;
        list.songs.splice(this.index, 0, song);
        this.store.updatePlaylist();
    }
}