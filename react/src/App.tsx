import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./components/NavBar"
import NotesView from "./components/NotesView"
import { v4 as uuid } from 'uuid';
import { useState } from 'react';

export interface Note {
  id: string;
  title: string;
  text: string;
  color: string;
}

const App = () => {
  const [ notes, setNotes ] = useState<Note[]>([]);
  const [ noteCount, setNoteCount ] = useState([]);

  const possibleNoteColors = ["blue", "red", "black", "white", "green", "indigo", "purple"];

  const addNoteHandler = (_title: string, _text: string, _color: string) => {
    setNotes(notes => [...notes, {
      id: uuid(),
      title: _title,
      text: _text,
      color: _color
    }])
  }

  const deleteNoteHandler = (id: string) => {
    setNotes((prevNotes) => {
      return (prevNotes.filter((note) => {
        return id !== note.id
      }))
    })
  }

  return (
    <>
      <NavBar addNoteHandler={addNoteHandler} noteColors={possibleNoteColors} amountOfNotes={notes.length} />
      <NotesView notes={notes} deleteNote={deleteNoteHandler} />
    </>
  )
}

export default App
