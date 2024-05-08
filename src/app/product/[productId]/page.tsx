import { Metadata } from "next";

type Props = {
  params: {
    productId: string;
  };
};

export const generateMetaData = ({ params }: Props): Metadata => {
  return {
    title: `Product ${params.productId}`,
  };
};

export default function product({ params }: Props) {
  // params is usefull to know the id of the current page which we can use in nextjs without installing anything.
  return (
    <h1>
      Details of the product which i want them to show, let see dynamic routing{" "}
      {params.productId}
    </h1>
  );
}
