import { useEffect, useState } from 'react';
import { FormEvent, useRef } from 'react';
import { Col, Container, Form, Button, Navbar, Row, Stack } from 'react-bootstrap';

type NavBarProps = {
    addNoteHandler: (_title: string, _text: string, _color: string) => void,
    noteColors: string[],
    amountOfNotes: number
}

const NavBar = ({ addNoteHandler, noteColors, amountOfNotes }: NavBarProps) => {
    const titleRef = useRef<HTMLInputElement>(null);
    const textRef = useRef<HTMLInputElement>(null);
    const formRef = useRef<HTMLFormElement>(null);
    const [ color, setColor ] = useState(noteColors[0]);

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        addNoteHandler(titleRef.current!.value, textRef.current!.value, color)

        formRef.current!.reset();
        setColor(noteColors[0]);
    }

    return (
        <>
            <Navbar bg='primary' variant='dark' className='p-3'>
                <Container fluid>
                    <Navbar.Brand>React Notes App</Navbar.Brand>
                    <Form onSubmit={handleSubmit} ref={formRef}>
                        <Stack>
                            <Row>
                                <Col>
                                    <Form.Group controlId='title'>
                                        <Form.Control 
                                            placeholder='Note title...'
                                            defaultValue={`Note #${amountOfNotes + 1}`}
                                            ref={titleRef}
                                        />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group controlId='text'>
                                        <Form.Control 
                                            placeholder='Note text...'
                                            ref={textRef}
                                        />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Select>
                                        {noteColors.map((color) => {
                                            return (
                                                <option key={color} value={color} onClick={
                                                    () => setColor(color)
                                                }>{color}</option>
                                            )
                                        })}
                                    </Form.Select>
                                </Col>
                                <Col sm='auto'>
                                    <Button type='submit' variant='light'>Add Note</Button>
                                </Col>
                            </Row>
                        </Stack>
                    </Form>
                </Container>
            </Navbar>
        </>
    )
}

export default NavBar