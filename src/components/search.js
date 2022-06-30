import { useSelector } from "react-redux";
import { selectFilters } from "../features/filtersSlice";
import {changeTerm, changeLimit, changeSort} from "../features/filtersSlice";
import { useDispatch } from "react-redux/es/exports";
export default function Search() {
    const dispatch = useDispatch();
    const {searchTerm, searchLimit, sortBy} = useSelector(selectFilters);
    const actions = {
        searchTerm: changeTerm,
        searchLimit: changeLimit,
        sortBy: changeSort
    }

    function handleChange({target}) {
        dispatch(actions[target.name](target.value));
    }

    function handleSubmit(e) {
        e.preventDefault()
        if(searchTerm.length === 0){
            return
        }
    }

    return (
        <header id="searchbar">
            <h1 id="headline">
                <span id="icon"></span>Scrollit</h1>
            <form onSubmit={handleSubmit}>
                <input 
                name="searchTerm"
                id="input-bar"
                type="text"
                value= {searchTerm}
                onChange= {handleChange}
                placeholder="search" required/>
                <div>
                    <section>
                    <label htmlFor="searchLimit">Limit</label>
                    <select name="searchLimit" id="searchLimit" value={searchLimit} onChange={handleChange}>
                        <option value="25">25</option>
                        <option value="50">50</option>
                        <option value="75">75</option>
                        <option value="100">100</option>
                    </select>
                    </section>
                    <input type= "submit" value="submit" />
                    <section>
                    <label htmlFor="sortBy">sort</label>
                    <select name="sortBy" id="sortBy" value={sortBy} onChange={handleChange}>
                        <option value="relevance">Relevance</option>
                        <option value="hot">Hot</option>
                        <option value="top">Top</option>
                        <option value="new">New</option>
                        <option value="comments">Most Comments</option>
                    </select>
                    </section>
                </div>
            </form>
        </header>
    );
}