import { useState } from "react";
import Button from "./Button";
import style from "./style.module.css"

export default function Profile({ avatar, name, bio, phone, email }) {
    const [followText, setFollowText] = useState("seguir")

    function handleClick(){
        alert("Você agora está seguindo")
        setFollowText("Seguindo")
    }
    return (
        <div className={style.profileContainer}>
            <img src={avatar} alt="Imagem de perfil" />
            <h1>{name}</h1>
            <p>{bio}</p>
            <p>{phone}</p>
            <p>{email}</p>
            <Button link="https://www.youtube.com/">YouTube</Button>
            <Button link="https://www.linkedin.com/feed/">Linkedln</Button>
            <button onClick={handleClick}>{followText}</button>
        </div>
    )
}