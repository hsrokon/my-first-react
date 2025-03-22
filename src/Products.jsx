export default function ProductShow({product}) {
    const {name, price} = product
    // return <li>Item: {product.name}. Price: {product.price}.</li>
    return <li>Item: {name}. Price: {price}</li>
}