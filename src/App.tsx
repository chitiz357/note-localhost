import React from 'react'
import { NoteForm , NoteList} from './components'
import { Note } from './models'
import { getNotes } from './services'

// const notes = [
//   {tittle:'1',content:'hola mundo'}
//   ,{tittle: '2' , content: 'local storage'}
// ]
// localStorage.setItem('notes', JSON.stringify(notes))

function App() {
  const notes = getNotes()
  console.log(notes)

  return (
      <main>
      <NoteForm />
      <NoteList notes={notes} />
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
