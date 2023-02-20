import styles from './Avatar.module.css'

interface AvatarProps {
  src: string
  noBorder?: boolean
}

export const Avatar = ({src, noBorder}: AvatarProps) => {
  return (
    <img 
      className={noBorder ? styles.avatarWithoutBorder : styles.avatar} 
      src={src} 
      alt="" 
    />
  )
}