import { Note } from "../App"
import { Button, Card } from 'react-bootstrap';

type NotesViewProps = {
    notes: Note[],
    deleteNote: (id: string) => void
}

const NotesView = ({ notes, deleteNote }: NotesViewProps) => {
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
                    <Card key={note.id} style={{
                        backgroundColor: note.color,
                        color: getTextColor(note.color)
                    }}>
                        <Card.Header>{note.title}</Card.Header>
                        <Card.Body>
                            <Card.Text>{note.text}</Card.Text>
                        </Card.Body>
                        <Button onClick={() => deleteNote(note.id)}variant='danger'>Delete</Button>
                    </Card>
                )
            })}
        </>
    )
}

export default NotesView