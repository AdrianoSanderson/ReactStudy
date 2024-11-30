import Profile from "./components/Profile";
import style from "./components/style.module.css"


export default function App() {
  return (
    <div className={style.app}>
      <Profile
        avatar="./profile.png"
        name="Adriano Sanderson"
        bio="Desenvolvedor Web Full-Stack"
        phone="829293493"
        email="adrianoramos06@gmail.com"
      />
    </div>
  )
}