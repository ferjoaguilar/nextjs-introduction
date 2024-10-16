'use client'
import { useState } from 'react'
import styles from './CommentForm.module.css'


export const CommentForm = () => {

    const [title, setTitle] = useState('')
    const [fullname, setFullname] = useState('')
    const [email, setEmail] = useState('')
    const [cellphone, setCellphone] = useState('')
    const [comment, setComment] = useState('')

    const [error, setError] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        if(title === ''){
            setError('el titulo esta vacio')
        } else if (title.length <= 3){
            setError('el titulo es demasiado corto')
        } else if (title.length >= 24){
            setError('el tutlo es demasiado largo')
        }

        if (fullname == ''){
            setError('el nombre esta vacio')
        }
        
    }

  return (
    <section className={styles.comment}>
        <h1>Crea un nuevo comentario</h1>
        <h2>Bootcamp FSJ-24B</h2>

        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                placeholder="Title" 
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            {
                error 
            }
            <input 
                type="text" 
                placeholder="Nombre completo" 
                value={fullname}
                onChange={(e) => setFullname(e.target.value)}
            />
            {
                error
            }
            <input type="email" placeholder="correo electronico" />
            <input type="text" placeholder="Telefono" />
            <textarea placeholder="Comentario"></textarea>
            <button type="submit">Submit</button>
        </form>
    </section>
  )
}
