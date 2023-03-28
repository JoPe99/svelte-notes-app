import { Note } from "../App"

type NotesViewProps = {
    notes: Note[]
}

const NotesView = ({ notes }: NotesViewProps) => {
    const getTextColor = (color: string) => {
        if (color === 'white') {
            return 'black'
        } else {
            return 'white'
        }
    }

    return (
        <>
            {notes.map((note) => {
                return (
                    <p style={{
                        backgroundColor: note.color,
                        color: getTextColor(note.color)
                    }} key={note.id}>{note.title}: {note.text}</p>
                )
            })}
        </>
    )
}

export default NotesView