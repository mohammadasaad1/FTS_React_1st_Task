import './searchStyle.css'
export function SearchBar({setQuery}){
    
    return (
    
       
        <div className='search-row'>
            <div className='search'>
             <span className="search-icon">🔍</span>
                <input
                    type="text"
                    placeholder="Find members"
                    className="search-input"
                    onChange={e => setQuery(e.target.value)}
                    />
            </div>
        </div>

    );
}