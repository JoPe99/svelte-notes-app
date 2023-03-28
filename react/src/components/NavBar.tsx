import { FormEvent, FormHTMLAttributes, Ref, RefObject, useRef, useState } from 'react';
import { Col, Container, Form, Button, Navbar, Row, Stack } from 'react-bootstrap';

type NavBarProps = {
    addNoteHandler: (_title: string, _text: string, _color: string) => void,
    noteColors: string[],
    amountOfNotes: number
}

const NavBar = ({ addNoteHandler, amountOfNotes }: NavBarProps) => {
    const titleRef = useRef<HTMLInputElement>(null);
    const textRef = useRef<HTMLInputElement>(null);
    const colorRef = useRef<any>('blue');
    const formRef = useRef<HTMLFormElement>(null);

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        addNoteHandler(titleRef.current!.value, textRef.current!.value, colorRef.current!.value)

        formRef.current!.reset();
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
                                <Col sm='auto'>
                                    <Button type='submit' variant='light' onClick={() => {
                                        
                                    }}>Add Note</Button>
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