<script>
  import "./app.css";
  import {
    MaterialApp,
    AppBar,
    TextField,
    Card,
    CardText,
    Select,
    Button,
  } from "svelte-materialify";

  const items = ["blue", "green"];
</script>

<MaterialApp class="app-container">
  <AppBar
    >Svelte Notes

    <TextField class="ma-4">Note name</TextField>
    <TextField class="ma-4">Text</TextField>
    <Select {items} class="ma-4" placeholder="Color" />
    <Button>Add note</Button>
  </AppBar>

  <Card>
    <CardText>Testi</CardText>
  </Card>
</MaterialApp>
