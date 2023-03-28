import { Note } from "../App"

type NotesViewProps = {
    notes: Note[]
}

const NotesView = ({ notes }: NotesViewProps) => {
    return (
        <>
            {notes.map((note) => {
                return (
                    <p key={note.id}>{note.title}: {note.text}</p>
                )
            })}
        </>
    )
}

export default NotesView