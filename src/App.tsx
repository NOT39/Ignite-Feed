import { Header, Post, Sidebar } from './components'
import { posts } from './mock'

import styles from './App.module.css'

export const App = () => {

  return (
    <div>
      <Header />
      
      <div className={styles.wrapper}>

        <Sidebar />
        
        <main>
          {posts.map((post) => {
            return (
              <Post 
                key={post.id} 
                id={post.id}
                author={post.author} 
                content={post.content} 
                publishedAt={post.publishedAt}
                comments={post.comments}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}
