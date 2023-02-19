interface PostProps {
  author: string
  content: string
}

export const Post = ({ author, content }: PostProps) => {
  return (
    <div>
      <strong>{author}</strong>
      <p>{content}</p>
    </div>
  )
}