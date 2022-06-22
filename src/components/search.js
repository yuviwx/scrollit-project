

export default function Search() {
    return (
        <header>
            <h1 id="headline">Scroll<span>it</span></h1>
            <input 
            id="search-bar"
            type="text"
            //value=""
            //onChange={}
            placeholder="search" />
            <div>
                <form>
                    <label htmlFor="sort">sort</label>
                    <select name="sort" id="sort">
                        <option value="best match">best match</option>
                        <option value="Newest first">Newest first</option>
                        <option value="Oldest first">Oldest first</option>
                        <option value="most populer">most populer</option>
                    </select>
                </form>
                <hr />
            </div>
        </header>
    );
}