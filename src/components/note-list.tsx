import { Note } from '../models'
import React from 'react'
import { NoteCard } from './note-card'

export function NoteList({ notes }: { notes: Array<Note> }) {
  return (
    <div className='list'>
      {notes.map((note) => (
        <NoteCard note={note} key={note.id}/>
      ))}
    </div>
  )
}
