import React, { useContext, useState } from 'react'
import { GlobalStoreContext } from '../store'

function SongCard(props) {
    const { store } = useContext(GlobalStoreContext);
    const [isDragging, setIsDragging] = useState(false);
    const [draggedTo, setDraggedTo] = useState(false); 

    const { song, index } = props;
    let cardClass = "list-card unselected-list-card";
    let space = " "

    function handleDeleteSong(event) {
        event.stopPropagation();
        store.showDeleteSongModal(index);
    }

    function handleDragStart(event) {
        event.dataTransfer.setData("song", event.target.id);
        setIsDragging(true);
        setDraggedTo(true);
    }

    function handleDragOver(event) {
        event.preventDefault();
        setIsDragging(isDragging);
        setDraggedTo(true);
    }

    function handleDragEnter(event) {
        event.preventDefault();
        setIsDragging(isDragging);
        setDraggedTo(true);
    }

    function handleDragLeave(event) {
        event.preventDefault();
        setIsDragging(isDragging);
        setDraggedTo(false);
    }

    function handleDrop(event) {
        event.preventDefault();
        let target = event.target;
        let targetId = target.id;
        targetId = targetId.substring(target.id.indexOf("-") + 1);
        let sourceId = event.dataTransfer.getData("song");
        sourceId = sourceId.substring(sourceId.indexOf("-") + 1);
        setDraggedTo(false);
        setIsDragging(false);

        // UPDATE THE LIST
        store.addMoveItemTransaction(parseInt(sourceId), parseInt(targetId));
    }


    
    return (
        <div
            key={index}
            id={'song-' + index + '-card'}
            className={cardClass}
            onDragStart={handleDragStart}
            onDragOver={handleDragOver}
            onDragEnter={handleDragEnter}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            draggable="true"
        >
            {index + 1}.{space}
            <a
                id={'song-' + index + '-link'}
                className="song-link"
                href={"https://www.youtube.com/watch?v=" + song.youTubeId}>
                {song.title} by {song.artist}
            </a>
            <input
                type="button"
                id={"remove-song-" + index}
                className="list-card-button"
                value={"\u2715"}
                onClick={handleDeleteSong}
            />
        </div>
    );
}

export default SongCard;