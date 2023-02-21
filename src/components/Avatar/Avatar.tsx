import { ImgHTMLAttributes } from 'react'
import styles from './Avatar.module.css'

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement>{
  src: string
  noBorder?: boolean
}

export const Avatar = ({noBorder, ...props}: AvatarProps) => {
  return (
    <img 
      className={noBorder ? styles.avatarWithoutBorder : styles.avatar} 
      {...props}
    />
  )
}