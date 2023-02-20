import { Header, Post, Sidebar } from "./components"

import styles from './App.module.css'

export const App = () => {

  return (
    <div>
      <Header />
      
      <div className={styles.wrapper}>

        <Sidebar />
        
        <main>
          <Post />
          <Post />
        </main>
      </div>
    </div>
  )
}
