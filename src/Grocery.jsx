import ProductShow from "./Products"
export default function GroceryStore({store}) {
    return(
        <div>
            <li>Length: {store.length}</li>
            {
            store.map(product => <ProductShow product={product}></ProductShow>)
            }
        </div>
    )
}