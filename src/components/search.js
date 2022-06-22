

export default function Search() {
    return (
        <header id="searchbar">
            <h1 id="headline">
                <span id="icon"></span>Scrollit</h1>
            <input 
            id="input-bar"
            type="text"
            //value=""
            //onChange={}
            placeholder="search" />
            <form>
                <label htmlFor="sort">sort</label>
                <select name="sort" id="sort">
                    <option value="best match">best match</option>
                    <option value="Newest first">Newest first</option>
                    <option value="Oldest first">Oldest first</option>
                    <option value="most populer">most populer</option>
                </select>
            </form>
        </header>
    );
}