export const ListCategories = ({categories})=>{

    return (
        <ul>
            {
                categories.map((category) => {
                    return <li key={category}>{category}</li>
                })

            }
        </ul>
    )
}