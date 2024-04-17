import style from "./style.module.css"

export default function Button( props ) {
    return(
        <a href={props.link} target="_blank">
            <button className={style.button}>
                {props.children}
            </button>
        </a>
    )
}