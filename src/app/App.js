import Search from '../components/search'
import Posts from '../components/posts';
import SearchStyles from '../styles/SearchStyles.css'
import PostsStyles from '../styles/PostsStyles.css'

function App() {
  return (
    <div>
      <Search style={SearchStyles}/>
      <hr />
      <Posts style={PostsStyles}/>
    </div>
  );
}

export default App;
