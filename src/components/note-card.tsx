import React from 'react'
import { Note } from '../models'
import { deleteNote } from '../services'

export function NoteCard({ note }: { note: Note }) {
  return (
    <div className="card-note">
      <p className="card-note__tittle">{note.tittle}</p>
      <p className="card-note__content">{note.content}</p>
      <button onClick={() => deleteNote(note.id)} className='button--delete'>delete</button>
    </div>
  )
}
