import { notFound } from "next/navigation";
import React from "react";

export default function Page({
  params,
}: {
  params?: {
    slug?: string[];
  };
}) {
  console.log("params =", params?.slug);
  if (params?.slug?.length === 1) {
    return <h1>heading element is displaying when slug length is one</h1>;
  } else if (params?.slug?.length === 2) {
    return <p>paragraph element is displaying when slug length is 2</p>;
  }
  else if(params?.slug?.length == 3){
    notFound()
    // so this is the notfound method
  }
  return <h5>heading 5 element now</h5>;
}
