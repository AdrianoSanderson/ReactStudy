import Button from "./Button";
import style from "./style.module.css"

export default function Profile({ avatar, name, bio, phone, email }) {
    return (
        <div className={style.profileContainer}>
            <img src={avatar} alt="Imagem de perfil" />
            <h1>{name}</h1>
            <p>{bio}</p>
            <p>{phone}</p>
            <p>{email}</p>
            <Button text="Youtube" link="https://www.youtube.com/" />
            <Button text="Linkedln" link="https://www.linkedin.com/feed/" />
        </div>
    )
}