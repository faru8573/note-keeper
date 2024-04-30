import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);

  function createNote(data) {
    console.log("data", data);
    setNotes((prevValue) => {
      return [data, ...prevValue];
    });
  }

  function deleteNote(id) {
    setNotes((prevValue) => {
      return prevValue.filter((item, index) => index !== id);
    });
  }

  return (
    <div>
      <Header />
      <CreateArea addNote={createNote} />
      {notes.map((note, index) => (
        <Note
          key={index}
          id={index}
          title={note.title}
          content={note.content}
          deleteNote={deleteNote}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
