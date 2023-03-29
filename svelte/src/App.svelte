<main>
  <TopAppBar bind:this={topAppBar} variant="fixed">
    <Row>
      <Section>
        testi
      </Section>
    </Row>
  </TopAppBar>
  <AutoAdjust {topAppBar}>
    Testi
  </AutoAdjust>
</main>

<script lang="ts">
  import TopAppBar, {
    Row,
    Section,
    Title,
    AutoAdjust,
  } from '@smui/top-app-bar';  
  import Card from "@smui/card";
  import Select from "@smui/select";
  import Button from "@smui/button";
  import {v4 as uuidv4} from 'uuid';

  let topAppBar: TopAppBar;


  // Types
  interface Note {
    id: string;
    title: string;
    text: string;
    color: string;
  }

  // Reactive variables
  let currentTitle = "";
  let currentText = "";
  let currentColor = "";

  // Functions
  function addNote() {
        this.notes.push({id: uuidv4(), title: this.currentTitle, text: this.currentText, color: this.currentColor});
        this.currentTitle = "Note #" + (this.notes.length + 1);
        this.currentText = "";
        this.currentColor = "";                                 
    };
  function deleteNote(id: string) {
        this.notes = this.notes.filter(item => item.id != id);
    };
</script>

<style>
  /* Hide everything above this component. */
  :global(#smui-app),
  :global(body),
  :global(html) {
    display: block !important;
    height: auto !important;
    width: auto !important;
    position: static !important;
  }
</style>
