import React from "react";

// const notes = [
//   {tittle:'1',content:'hola mundo'}
//   ,{tittle: '2' , content: 'local storage'}
// ]
// localStorage.setItem('notes', JSON.stringify(notes))

function App() {
  const notes = JSON.parse(localStorage.getItem('notes')! )||[]
  console.log(notes)

  return (
    <div className="App">
      <h1>daffafd</h1>
      <NoteForm />
      <NotesList notes={notes} />
    </div>
  )
}

function NoteForm() {
  return (
    <form>
      <h2>notes</h2>
      <label htmlFor="">notes</label>
      <input type="text" />
    </form>
  )
}

function NotesList({ notes }: { notes: Note[] }) {
  return (
    <div>
      {notes.map((note) => (
        <NoteCard note={note} key={Math.random()} />
      ))}
    </div>
  )
}

function NoteCard({ note }: { note: Note }) {
  return (
    <div>
      <h3>{note.tittle}</h3>
      <p>{note.content}</p>
    </div>
  )
}

interface Note {
  tittle: string
  content: string
  id: number
}

export default App
