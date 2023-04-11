<script lang="ts">
  import "./app.css";
  import { v4 as uuid } from 'uuid';
  import {
    MaterialApp,
    AppBar,
    TextField,
    Card,
    CardText,
    CardTitle,
    Select,
    Button,
  } from "svelte-materialify";

  interface Note {
    id: string;
    title: string;
    text: string;
    color: string;
  }

  let currentNoteIndex = 0;
  let notes: Note[] = [];
  //color options
  const items = ["blue", "red", "black", "white", "green", "indigo", "purple"];
  $: noteTitle = `Note #${currentNoteIndex + 1}`;
  $: noteText = "";
  $: noteColor = "";

  const clearNoteState = () => {
    noteTitle = `Note #${currentNoteIndex + 1}`;
    noteText = "";
    currentNoteIndex++;
  };

  function addNote() {
    notes = [
      ...notes,
      {
        id: uuid(),
        title: noteTitle,
        text: noteText,
        color: noteColor,
      },
    ];
    clearNoteState();
  }

  function deleteNote(id: string) {
    notes = notes.filter((note) => id != note.id);
  }
</script>

<MaterialApp>
  <AppBar class='pt-2'>Svelte Notes
    <TextField class="ma-4" bind:value={noteTitle}>Note name</TextField>
    <TextField class="ma-4" bind:value={noteText}>Text</TextField>
    <Select {items} class="ma-4" bind:value={noteColor} placeholder="Color" />
    <Button on:click={() => addNote()}>Add note</Button>
  </AppBar>

  <div class="note-container pa-4 d-flex flex-wrap justify-start">
    {#each notes as note}
      <Card
        class="note-card pa-4 ma-4 {note.color} {note.color === 'black' &&
          'theme--dark'}"
      >
        <CardTitle>{note.title}</CardTitle>
        <CardText>{note.text}</CardText>
        <Button on:click={() => deleteNote(note.id)}>
          <small>Delete</small>
        </Button>
      </Card>
    {/each}
  </div>
</MaterialApp>
