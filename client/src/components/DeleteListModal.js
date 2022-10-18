import {useContext, useState} from "react";
import {useHistory} from "react-router-dom";
import {GlobalStoreContext} from "../store";

function DeleteListModal() {
    const {store} = useContext(GlobalStoreContext);
    let name = "";
    if(store.currentList) {
        name = store.currentList.name;
    }
    store.history = useHistory();

    function handleDeleteList(event) {
        event.stopPropagation();
        store.deleteMarkedList();
    }

    function closeDeleteListModal() {
        store.hideDeleteListModal();
    }

    return (
        <div 
            className="modal" 
            id="delete-list-modal" 
            data-animation="slideInOutLeft">
                <div class="modal-root" id='verify-delete-list-root'>
                    <div class="modal-north">
                        Delete playlist?
                    </div>
                    <div class="modal-center">
                        <div class="modal-center-content">
                            Are you sure you wish to permanently delete the {name} playlist?
                        </div>
                    </div>
                    <div class="modal-south">
                        <input type="button" 
                            id="delete-list-confirm-button" 
                            class="modal-button" 
                            onClick={handleDeleteList}
                            value='Confirm' />
                        <input type="button" 
                            id="delete-list-cancel-button" 
                            class="modal-button" 
                            onClick={closeDeleteListModal}
                            value='Cancel' />
                    </div>
                </div>
        </div>
    );

}

export default DeleteListModal;