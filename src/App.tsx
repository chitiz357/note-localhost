import React, { useEffect, useState } from 'react'
import { NoteForm, NoteList } from './components'
import { Note } from './models'
import { getNotes } from './services'
import { NoteState } from './context/note'

function App() {
  // const notes = getNotes()
  const [notes, useNotes] = useState<Array<Note>>([])
  useEffect(() => {
    useNotes(getNotes())
    console.log(notes)
  }, [NoteForm])

  return (
    <main>
      <NoteState>
        <h1 className="tittle"> notes</h1>
        <NoteForm />
        <NoteList notes={notes} />
      </NoteState>
    </main>
  )
}

export default App
