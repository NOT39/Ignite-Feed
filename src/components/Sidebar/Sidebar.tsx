import styles from './Sidebar.module.css'

export const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <img 
        className={styles.cover} 
        src="https://picsum.photos/500/300" 
      />

      <div className={styles.profile}>
        <img className={styles.avatar} src="https://github.com/not39.png" />
        
        <strong>Not</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href="#">
          Editar seu perfil
        </a>
      </footer>
    </aside>
  )
}