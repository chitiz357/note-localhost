import React from 'react'
import { NoteForm, NoteList } from './components'
import { getNotes } from './services'


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

export default App
