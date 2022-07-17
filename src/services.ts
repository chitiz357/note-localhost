import UUIDClass from 'uuidjs'
import { Note } from './models'

export function getNotes(): Array<Note> {
  return JSON.parse(localStorage.getItem('notes') ?? '[]')
}

export function saveNote(note: Omit<Note,'id'>) {
  const id = UUIDClass.genV4().toString()
  const notes = [...getNotes(), { ...note, id }]
  localStorage.setItem('notes', JSON.stringify(notes))
}

export function deleteNote(id: string) {
  
  
  const notes = getNotes().filter((note) => note.id !== id)

  localStorage.setItem('notes', JSON.stringify(notes))
}
