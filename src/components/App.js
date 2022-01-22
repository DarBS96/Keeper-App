import Heading from "./Header";
import Footer from "./Footer";
import CreateArea from "./CreateArea";
import Note from "./Note";
import { useState } from "react/cjs/react.development";

function App() {
  const [notes, setNotes] = useState([]);
  const addNote = (note) => {
    setNotes((prevNotes) => {
      return [...prevNotes, note];
    });
  };

  const deleteNote = (id) => {
    setNotes((prevNotes) => {
      return prevNotes.filter((note, index) => {
        return index !== id;
      });
    });
  };

  return (
    <div>
      <Heading />
      <CreateArea onAdd={addNote} />
      {notes.map((note, index) => {
        return <Note onDeleted={deleteNote} id={index} key={index} title={note.title} content={note.content} />;
      })}
      <Footer />
    </div>);
}

export default App;
