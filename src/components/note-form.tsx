import React, { useContext, useState } from 'react'
import { NoteContext } from '../context/noteContext'
import { saveNote } from '../services'

export function NoteForm() {
  const noteContext = useContext(NoteContext)
  const [tittle, useTittle] = useState('')
  const [content, useContent] = useState('')

  function handleTittle(event: React.ChangeEvent<HTMLInputElement>) {
    event.preventDefault()
    useTittle(event.target.value)
    console.log(tittle)
  }

  function handleContent(event: React.ChangeEvent<HTMLTextAreaElement>) {
    useContent(event.target.value)
    console.log(content)
  }

  function save(event:React.FormEvent<HTMLFormElement>){
    event.preventDefault()
    noteContext.postNote({tittle,content})
    useTittle('')
    useContent('')
  }

  return (
    <form onSubmit={save}>
      <label htmlFor="tittle">tittle</label>
      <input
        name="tittle"
        className="input"
        value={tittle}
        onChange={handleTittle}
      />
      <label htmlFor="content">content</label>
      <textarea
        name="content"
        id="content"
        className="input"
        value={content}
        onChange={handleContent}
      />
      <input type="submit"  />

    </form>
  )
}
