import React from 'react'
import { NoteForm } from './componens'
import { Note } from './models'

// const notes = [
//   {tittle:'1',content:'hola mundo'}
//   ,{tittle: '2' , content: 'local storage'}
// ]
// localStorage.setItem('notes', JSON.stringify(notes))

function App() {
  const notes = JSON.parse(localStorage.getItem('notes') ?? '[]')
  console.log(notes)

  return (
      <main>
      <NoteForm />
      </main>
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



export default App
