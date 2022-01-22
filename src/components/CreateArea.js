import { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';


function CreateArea(props) {
    const [isExpended, setIsExpended] = useState(false);
    const [note, setNote] = useState({ title: '', content: '' });
    const handleChange = (event) => {
        const { name, value } = event.target;

        setNote((prevNote) => {
            return {
                ...prevNote,
                [name]: value
            };
        });
    };
    const submitNote = (event) => {
        event.preventDefault();
        props.onAdd(note);

    };

    const expand = () => {
        setIsExpended(true);
    };
    return <div>

        <form className="create-note">
            {isExpended && <input onChange={handleChange} name='title' placeholder="Title" value={note.title} rows={isExpended ? 3 : 1} />}
            <textarea onClick={expand} onChange={handleChange} name="content" placeholder="Take a note..." value={note.content} />
            <Zoom in={isExpended}><Fab onClick={submitNote}><AddIcon /></Fab></Zoom>
        </form>
    </div>;
}

export default CreateArea; 