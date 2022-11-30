import React, { useContext } from 'react'
import { NoteContext } from '../context/note'
import { Note } from '../models'
import { deleteNote } from '../services'

export function NoteCard({ note }: { note: Note }) {
  const noteContext = useContext(NoteContext)
  return (
    <div className="card-note">
      <article>
        <p className="card-note__tittle">{note.tittle}</p>
        <p className="card-note__content">{note.content}</p>
      </article>
      <button
        onClick={() => noteContext.delNote(note.id)}
        className="button--delete"
      >
        delete
      </button>
    </div>
  )
}
