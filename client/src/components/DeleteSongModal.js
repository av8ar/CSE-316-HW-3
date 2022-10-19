import React,{ Component } from 'react';
import { GlobalStoreContext } from '../store';
import { useContext } from 'react';
const DeleteSongModal = () => {

        const { store } = useContext(GlobalStoreContext);
        
        // let song = list.songs[index];
        // let title = song.title;
        // let artist = song.artist;
        // let id = song.id;
        let handleDeleteSong = (event) => {
            let index = store.index;
            // let song = store.currentList.songs[index];
            store.addDeleteSongTransaction(index);
        }
    
        return (
            <div 
                class="modal" 
                id="delete-song-modal" 
                data-animation="slideInOutLeft">
                    <div class="modal-root" id='verify-delete-song-root'>
                        <div class="modal-north">
                            Remove song?
                        </div>
                        <div class="modal-center">
                            <div class="modal-center-content">
                                Are you sure you wish to permanently remove {} from the playlist?
                            </div>
                        </div>
                        <div class="modal-south">
                            <input type="button" 
                                id="delete-song-confirm-button" 
                                class="modal-button" 
                                onClick={handleDeleteSong}
                                value='Confirm' />
                            <input type="button" 
                                id="delete-song-cancel-button" 
                                class="modal-button" 
                                onClick={store.hideDeleteSongModal}
                                value='Cancel' />
                        </div>
                    </div>
            </div>
        );
}

export default DeleteSongModal;