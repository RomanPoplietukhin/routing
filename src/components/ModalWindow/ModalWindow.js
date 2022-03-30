export function ModalWindow() {
    return(
        <div>
            <h2>
                are you sure?
            </h2>
            <button
                onClick={() => console.log('yes')}>
                yes
            </button>
            <button
                onClick={() => console.log('no')}
            >
                no
            </button>
        </div>
    )
}