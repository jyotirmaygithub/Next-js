export default function product({ params } : {
    params : {productId : string}
}) {
    // params is usefull to know the id of the current page which we can use in nextjs without installing anything.
    return (
        <h1>Details of the product which i wnat them to show, let see dynamic routing {params.productId}</h1>
    )
}