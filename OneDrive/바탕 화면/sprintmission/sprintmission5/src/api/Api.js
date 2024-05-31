const MarketApi = "https://panda-market-api.vercel.app/";
const Product = "product/";

export default async function getProducts(params = {}) {
  const query = new URLSearchParams(params).toString()

  try {
    const response = await fetch(`${MarketApi}${Product}?${query}`)
    const body = await response.json();
    return body;
} catch(error){
  console.error("Failed to fetch",error);
  throw error;
}}
