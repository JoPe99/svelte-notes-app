import { Note } from "../App"
import { Button, Card, Container, Row, Stack, Col } from 'react-bootstrap';

type NotesViewProps = {
    notes: Note[],
    deleteNote: (id: string) => void
}

const NotesView = ({ notes, deleteNote }: NotesViewProps) => {
    return (
        <Container>
            <Row>
                {notes.map((note) => {
                    return (
                        <Card key={note.id} className='m-3' style={{
                            width: '20%',
                            backgroundColor: note.color,
                            color: note.color === 'white' ? 'black' : 'white'
                        }}>
                            <Card.Header>{note.title}</Card.Header>
                            <Card.Body>
                                <Card.Text>{note.text}</Card.Text>
                                <Button onClick={() => deleteNote(note.id)}variant='danger'>Delete</Button>
                            </Card.Body>
                        </Card>
                    )
                })}
            </Row>
        </Container>
    )
}

export default NotesView