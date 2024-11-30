import styles from '../styles/Card.module.css'
import Link from './Link'

export default function Card(props){
    return (
        <div className={styles.cardContainer}>
            <img src="./starwars.jpg" alt="Imagem" className={styles.image}/>

            <div className={styles.textContainer}>
                <h1 className={styles.title}>{props.title}</h1>

                <p className={styles.paragraph}>Um pôster decorativo épico do fime Star Wars, com moldura de MDF e tamanho A3. Um ótima recordação de um dos mais icônicos filmes de todos os tempos.Este clássico pôster trará aventura, nostalgia e a magia de Star Wars para qualquer lugar que você decidir pedurar. Não perca a chance de adicionar essa linda memória ao seu acervo!</p>

                <button className={styles.button}>Comprar agora</button>

                <Link text='Click Aqui' />
            </div>
        </div>
    )
}