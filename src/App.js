import React, {useMemo, useState} from 'react'
import MyModal from './components/MyModal/MyModal';
import PostFilter from './components/PostFilter';
import PostForm from './components/PostForm';
import PostList from './components/PostList';
import MyButton from './components/UI/button/MyButton';
import MyInput from './components/UI/input/MyInput';
import MySelect from './components/UI/select/MySelect';
import './styles/App.css'

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'JavaScript', body: 'Web'},
    {id: 2, title: 'Python', body: 'bots'},
    {id: 3, title: 'C++', body: 'games'},
    {id: 4, title: 'Java', body: 'Descreption'}
  ])

  const[filter, setFilter] = useState({sort: '', query: ''})
  const[modal, setModal] = useState(false)

  const sortedPosts = useMemo(() => {
    console.log('getSortedPosts()')
    if (filter.sort) {
      return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))
    }
    return posts
  }, [filter.sort, posts])

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query.toLowerCase()))
  }, [filter.query, sortedPosts])

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
    setModal(false)
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))

  }

  return (
    <div className="App">
      <MyButton style={{marginTop: '30px'}} onClick={() => setModal(true)}>Создать пользователя</MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost}></PostForm>
      </MyModal>
      <hr style={{margin: '15px 0'}}/>
      <div>
       <PostFilter 
       filter={filter}
       setFilter={setFilter}
       ></PostFilter>
      </div>
      <PostList remove={removePost} posts={sortedAndSearchedPosts} title="Посты про JS"></PostList>
    </div>
    
  );
}

export default App;
