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

  let notes: Note[] = [];
  const items = ["blue", "red", "black", "white", "green", "indigo", "purple"];
  let note: Note = { id: "", title: "", text: "", color: "" };

  function addNote() {
    notes.push(note);
    notes = notes;
  }
</script>

<MaterialApp>
  <AppBar
    >Svelte Notes
    <TextField class="ma-4" bind:value={note.title}>Note name</TextField>
    <TextField class="ma-4" bind:value={note.text}>Text</TextField>
    <Select {items} class="ma-4" placeholder="Color" />
    <Button on:click={() => addNote()}>Add note</Button>
  </AppBar>

  <div class="note-container pa-4 d-flex flex-wrap justify-start">
    {#each notes as note}
      <Card class="note-card pa-4 ma-4">
        <CardTitle>{note.title}</CardTitle>
        <CardText>{note.text}</CardText>
      </Card>
    {/each}
  </div>
</MaterialApp>
