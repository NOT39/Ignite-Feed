import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react'

import { Avatar } from '../Avatar/Avatar'
import { Comment, CommentProps } from '../Comment/Comment'
import styles from './Post.module.css'

export interface PostProps {
  id: number
  author: {
    avatarUrl: string
    name: string
    role: string
  },
  content: {
    type: 'paragraph' | 'link',
    content: string
  }[],
  publishedAt: Date,
  comments: Omit<CommentProps, 'onDeleteComment'>[]
}

export const Post = ({author, publishedAt, content, comments}: PostProps) => { 
  const [ postComments, setPostComments ] = useState(comments) 
  const [ newCommentText, setNewCommentText ] = useState('')

  const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR
  })

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR, 
    addSuffix: true
  })

  function handleCreateNewComment(e: FormEvent) {
    e.preventDefault()
    if(isNewCommentEmpty) return;

    setPostComments(prevComments => [...prevComments, {
      id: prevComments.length + 1,
      content: newCommentText, 
      author: {
        avatarUrl: 'https://github.com/not39.png',
        name: 'Not',
        role: 'Front-End Developer'
      },
      publishedAt: new Date('2023-02-19 14:37:08')
    }])

    setNewCommentText('')
  }

  function handleNewCommentChange(e: ChangeEvent<HTMLTextAreaElement>) {
    e.target.setCustomValidity('')
    setNewCommentText(e.target.value)
  }
 
  function handleNewCommentInvalid(e: InvalidEvent<HTMLTextAreaElement>) {
    e.target.setCustomValidity('Esse campo é obrigatório!')
  }

  function deleteComment(id: number) {
    setPostComments(prevComments => prevComments.filter((comment) => comment.id !== id))
  }

  const isNewCommentEmpty = newCommentText.trim().length === 0


  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl}/>
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time title={publishedDateFormatted} dateTime={publishedAt.toDateString()}>
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {content.map(line => {
          switch(line.type) {
            case ('paragraph'): {
              return <p key={line.content}>{line.content}</p>
            }
            case ('link'): {
              return <p key={line.content}><a href="#">{line.content}</a></p>
            }
          }
        })}
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea
          value={newCommentText}
          placeholder="Deixe um comentário" 
          onChange={handleNewCommentChange}
          onInvalid={handleNewCommentInvalid}
          required
        />

        <footer>
          <button type="submit" disabled={isNewCommentEmpty}>Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {postComments.map(comment => {
          return (
            <Comment 
              key={comment.id} 
              id={comment.id}
              author={comment.author} 
              content={comment.content}
              publishedAt={comment.publishedAt}
              onDeleteComment={deleteComment}
            />
          )
        })}
      </div>
    </article>
  )
}