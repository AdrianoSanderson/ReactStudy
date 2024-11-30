import { useState } from "react"

export default function App() {
    const [author, setAuthor] = useState("")
    const [content, setContent] = useState("")
    const [comments, setComments] = useState([])

    const handleSubmit = (ev) => {
        ev.preventDefault()

        const newComment = {
            id: Math.floor(Math.random() * 1000000),
            author: author,
            content: content,
            createdAt: new Date()
        }

        setComments((state) => [newComment, ...state])
        setAuthor("")
        setContent("")
    }

    return (
        <div id="app">
            <h2>Seção de comentários</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="author">Email:</label>
                <input
                    type="email"
                    id="author"
                    required
                    value={author}
                    onChange={(ev) => setAuthor(ev.target.value)}
                />

                <label htmlFor="content">Comentário:</label>
                <textarea
                    id="constent"
                    cols="30"
                    rows="6"
                    required
                    value={content}
                    onChange={(ev) => setContent(ev.target.value)}
                >
                </textarea>

                <button type="submit">Enviar comentário</button>
            </form>
            <hr />
            <section id="comments">
                {comments.length > 0
                    ? (
                        comments.map((comments) => (
                            <div key={comments.id}>
                                <h3>{comments.author}</h3>
                                <span>Em {comments.createdAt.toLocaleString()}</span>
                                <p>{comments.content}</p>
                            </div>
                        ))
                    ) : (
                        <p>Seja o primeiro a comentar!</p>
                    )
                }
            </section>
        </div>
    )
}