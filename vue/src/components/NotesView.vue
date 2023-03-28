<!-- Components -->
<template>
    <v-container fluid class="fill-height">
        <!-- Upper app bar -->
        <v-app-bar class="fluid align-center" color="blue-lighten-1">
            <h1 class="ml-4">Vue Notes App</h1>
            <v-spacer></v-spacer>
            <v-text-field class="ma-4" variant="underlined" placeholder="Title" v-model="currentTitle"></v-text-field>
            <v-text-field class="ma-4" variant="underlined" placeholder="Text" v-model="currentText"></v-text-field>
            <v-combobox class="ma-4" variant="underlined" label="Color" :items="noteColors" v-model="currentColor"></v-combobox>
            <v-btn
            elevation="4"
            class="float-right"
            @click.stop="addNote()"
            >
                Add note
            </v-btn>

        </v-app-bar>

        <!-- Note container -->
        <div class="note-container fluid fill-height d-flex flex-wrap justify-start pa-4">
                <v-card 
                v-for="note in notes"
                class="note-card ma-4"
                :color=note.color>
                    <v-container>
                        <v-row class="align-center">
                            <v-card-title>
                                {{ note.title }}
                            </v-card-title>
                            <v-spacer></v-spacer>
                            <v-btn size="small" class="ma-4" color="red" elevation="4" @click.stop="deleteNote(note.id)">
                                <v-icon icon="mdi-delete"></v-icon>
                            </v-btn>
                        </v-row>
                    </v-container>
                    <v-card-text>
                        {{ note.text }}
                    </v-card-text>
                </v-card>
        </div>
    </v-container>
</template>

<!-- Logic -->
<script lang="ts">
import {v4 as uuidv4} from 'uuid';

export default {
  data() {

    // Types
    interface Note {
        id: string;
        title: string;
        text: string;
        color: string;
    }

    // Reactive variables
    return {
      currentTitle: 'Note #1' as string,
      currentText: '' as string,
      currentColor: '' as string,
      notes: [] as Note[],

      noteColors: ["blue", "red", "black", "white", "green", "indigo", "purple"]
    }
  },

  // Functions with side-effects
  methods: {
    addNote() {
        this.notes.push({id: uuidv4(), title: this.currentTitle, text: this.currentText, color: this.currentColor});
        this.currentTitle = "Note #" + (this.notes.length + 1);
        this.currentText = "";
        this.currentColor = "";                                 
    },
    deleteNote(id: string) {
        this.notes = this.notes.filter(item => item.id != id);
    },
  }
}
</script>

<!-- CSS -->
<style>
    .note-container {
        height: 100%;
        width: 100%;
    }

    .note-card {
        height: 20%;
        width: 20%;
    }
</style>