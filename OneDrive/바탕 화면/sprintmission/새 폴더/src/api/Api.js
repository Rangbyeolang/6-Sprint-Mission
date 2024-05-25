const PANDA_API = "https://panda-market-api.vercel.app/docs/";
const PRODUCTS = "products";

export async function getItem(params={}) {
    const query = new URLSearchParams(params).toString();
    try {
        const response = await fetch(`${PANDA_API}${PRODUCTS}?${query}`)
        const body = await response.json();
        return body;
    }catch(error){
        console.error("Failed to fetch products:", error);
        throw error;
    }
  };