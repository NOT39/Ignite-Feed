import { ThumbsUp, Trash } from 'phosphor-react'
import { format, formatDistanceToNow} from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

import { Avatar } from '../Avatar/Avatar'
import { PostProps } from '../Post/Post'

import styles from './Comment.module.css'
import { useState } from 'react'

export interface CommentProps extends Omit<PostProps, 'comments' | 'content'> {
  content: string
  onDeleteComment: (componentId: number) => void
}

export const Comment = ({id, author, content, publishedAt, onDeleteComment}: CommentProps) => {  
  const [ likeCount, setLikeCounts ] = useState(0)
  
  const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR
  })

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR, 
    addSuffix: true
  })

  function handleDeleteComment(id: number) {
    return () => onDeleteComment(id)
  }

  function handleLikeComment() {
    setLikeCounts(prevLikeCount => prevLikeCount + 1)
  }

  
  return (
    <div className={styles.comment}>
      <Avatar noBorder src={author.avatarUrl}/>

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>{author.name}</strong>
              <time title={publishedDateFormatted} dateTime={publishedAt.toDateString()}>{publishedDateRelativeToNow}</time>
            </div>
            
            <button onClick={handleDeleteComment(id)} title='Deletar comentário'>
              <Trash size={24}/>
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}