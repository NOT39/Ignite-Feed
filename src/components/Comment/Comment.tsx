import { ThumbsUp, Trash } from 'phosphor-react'
import { Avatar } from '../Avatar/Avatar'
import styles from './Comment.module.css'

export const Comment = () => {
  return (
    <div className={styles.comment}>
      <Avatar noBorder src="https://github.com/not39.png"/>

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Not</strong>
              <time title="20 de Fevereiro às 12:48h" dateTime="2023-02-20 12:48:36">Cerca de 1h atrás</time>
            </div>
            
            <button title='Deletar comentário'>
              <Trash size={24}/>
            </button>
          </header>

          <p>Muito bom, parabéns!!</p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}