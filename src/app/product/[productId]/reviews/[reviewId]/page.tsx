export default function reviewsId({ params } : {params : {
    productId : string,
    reviewId :  string,
}}) {
    const { reviewId , productId} = params
        // params is usefull to know the id of the current page which we can use in nextjs without installing anything.
    console.log("let see more of params = " ,params)
    return (
        <h1>These reviews will be specific of the id of the rewview {reviewId} and of product {productId}</h1>
    )
}