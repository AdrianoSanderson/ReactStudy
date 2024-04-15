import style from "./style.module.css"

export default function Button({ text, link }) {
    return(
        <a href={link}>
            <button className={style.button}>{text}</button>
        </a>
    )
}