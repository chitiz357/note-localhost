import { Note } from '../models'
import React, { useContext, useEffect } from 'react'
import { NoteCard } from './note-card'
import { NoteContext } from '../context/note'

export function NoteList({ notes }: { notes: Array<Note> }) {
const noteContext = useContext(NoteContext)

  return (
    <div className='list'>
      {noteContext.notes.map((note) => (
        <NoteCard note={note} key={note.id}/>
      ))}
    </div>
  )
}
