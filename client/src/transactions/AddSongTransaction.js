import jsTPS_Transaction from "../common/jsTPS.js"

/**
 * MoveSong_Transaction
 * 
 * This class represents a transaction that works with adding songs. It will be managed by the transaction stack.
 * 
 * @author Victor Dai
 */
export default class AddSong_Transaction extends jsTPS_Transaction {
    constructor(store) {
        super();
        this.store = store;
    }

    doTransaction() {
        this.store.addSong();
    }
    
    undoTransaction() {
        this.store.currentList.songs.pop();
        this.store.updatePlaylist();
    }
}