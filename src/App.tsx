import { Header, Post, Sidebar } from "./components"

import styles from './app.module.css'

export const App = () => {

  return (
    <div>
      <Header />
      
      <div className={styles.wrapper}>

        <Sidebar />
        
        <main>
          <Post 
            author="Not"
            content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni sit sapiente quam officiis itaque, at vero cupiditate nihil dolor fugit? Necessitatibus sint tempora, eaque qui officia maxime non inventore quasi?"
          />
          <Post 
            author="Luna"
            content="Mais um post"
          />
        </main>
      </div>
    </div>
  )
}
