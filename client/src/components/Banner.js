import EditToolbar from "./EditToolbar";
import DeleteListModal from "./DeleteListModal";
/*
    Our Application's Banner, note we are using function-style
    React. Our banner just has a left-aligned heading and a
    right-aligned toolbar for undo/redo and close list buttons.
    
    @author McKilla Gorilla
*/
function Banner(props) {
    return (
        <div>    
            <DeleteListModal />   
            <div id="playlister-banner">
                Playlister
                <EditToolbar />
            </div>
        </div> 
    );
}

export default Banner;