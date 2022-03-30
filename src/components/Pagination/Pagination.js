export function Pagination({ data, setPaginationPage, productsPerPage }) {
    const currentPosts = [];
    for(let i = 1; i <= Math.floor(data / productsPerPage ); i++) {
        currentPosts.push(i)
    }
    return(
        <div>
            { currentPosts.map((post, index) => (
                <button
                    key={ index }
                    onClick={() => setPaginationPage(post)}
                >
                    { post }
                </button>
            )) }
        </div>
    )
}