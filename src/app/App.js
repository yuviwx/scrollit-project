import Search from '../components/search'
import Posts from '../components/posts';
import SearchStyles from '../styles/SearchStyles.css'

function App() {
  return (
    <div>
      <Search style={SearchStyles}/>
      <hr />
      <Posts />
    </div>
  );
}

export default App;
