import { Note } from './models'

export function getNotes(): Array<Note> {
  return JSON.parse(localStorage.getItem('notes') ?? '[]')
}

export function saveNote(note: Note) {
  const notes = [...getNotes(), note]
  localStorage.setItem('notes', JSON.stringify(notes))
}
