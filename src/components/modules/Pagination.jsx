import { useState } from "react"

function Pagination() {
    const [page, setPage] = useState(1);

    const perviousHandeler = () => {
        if (page <= 1) return;
        setPage((page) => page - 1);
    }

    const nextHandeler = () => {
        (page >= 10 ? setPage((page) => page + 1) : setPage(0));
    }
    // Choon Be Andaze 10 ta perpage=20 | Element darim

    return (
        <div>
            <button onClick={perviousHandeler}>Pervious</button>
            <p style={{ color: page == 1 ? "red" : "inherit" }}>1</p>
            <p style={{ color: page == 2 ? "red" : "inherit" }} >2</p>

            {
                page > 2 && page < 9 && (<>
                    <span>...</span>
                    <p >{page}</p>
                </>)
            }
            <span>...</span>
            <p>9</p>
            <p>10</p>
            <button onClick={nextHandeler}>Next</button>
        </div>
    )
}

export default Pagination