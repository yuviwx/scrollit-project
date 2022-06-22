import Search from '../components/search'
import Posts from '../components/posts';
import SearchStyles from '../styles/SearchStyles.css'

function App() {
  return (
    <main>
      <Search style={SearchStyles}/>
      <Posts />
    </main>
  );
}

export default App;
