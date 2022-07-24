import React, { createContext, useEffect, useState } from 'react'

import { Note } from '../models'
import { deleteNote, getNotes, saveNote } from '../services'

interface NoteContent {
  notes: Array<Note>
  postNote: (note: Omit<Note,'id'>) => void
  delNote: (id: string) => void
}
export const NoteContext = createContext<NoteContent>({
  notes: [],
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  delNote: () => {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  postNote: () => {},
})

export function NoteState(props: {
  children: React.ReactElement | Array<React.ReactElement>
}) {
  const [notes, setNotes] = useState<Array<Note>>([])
  useEffect(function () {
    setNotes(getNotes())
  }, [])

  function postNote(note: Omit<Note, 'id'>) {
    saveNote(note)
    setNotes(getNotes())
  }

  function delNote(id: string) {
    deleteNote(id)
    setNotes(getNotes)
  }
  return (
    <NoteContext.Provider value={{ notes, postNote, delNote }}>
      {props.children}
    </NoteContext.Provider>
  )
}
