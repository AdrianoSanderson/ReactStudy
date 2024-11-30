import { useState } from "react"
import TextInput from "./TextInput"

export default function NewGameForm({ addGame }) {
    const [title, setTitle] = useState("")
    const [cover, setCover] = useState("")

    const handleSubmit = (ev) => {
        ev.preventDefault()
        addGame({ title, cover })
        setCover("")
        setTitle("")
    }

    return (
        <form onSubmit={handleSubmit}>
            <TextInput label="Titulo:" value={title} setValue={setTitle} />
            <TextInput label="Capa:" value={cover} setValue={setCover} />

            <button type="submit">Adicionar à biblioteca</button>
        </form>
    )
}