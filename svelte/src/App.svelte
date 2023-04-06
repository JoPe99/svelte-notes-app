<script lang="ts">
  import "./app.css";
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

  let currentNodeId = 0;
  let notes: Note[] = [];
  //color options
  const items = ["blue", "red", "black", "white", "green", "indigo", "purple"];
  $: noteTitle = '';
  $: noteText = '';
  $: noteColor = '';

  const clearNoteState = () => {
    noteTitle = '';
    noteText = '';
    currentNodeId++;
  }

  function addNote() {
    notes = [...notes, {id: `${currentNodeId}`, title: noteTitle, text: noteText, color: noteColor }]
    clearNoteState();
  }
</script>

<MaterialApp>
  <AppBar
    >Svelte Notes
    <TextField class="ma-4" bind:value={noteTitle}>Note name</TextField>
    <TextField class="ma-4" bind:value={noteText}>Text</TextField>
    <Select {items} class="ma-4" bind:value={noteColor} placeholder="Color" />
    <Button on:click={() => addNote()}>Add note</Button>
  </AppBar>

  <div class="note-container pa-4 d-flex flex-wrap justify-start">
    {#each notes.reverse() as note}
      <Card class="note-card pa-4 ma-4">
        <CardTitle>{note.title}</CardTitle>
        <CardText>{note.text}</CardText>
      </Card>
    {/each}
  </div>
</MaterialApp>

