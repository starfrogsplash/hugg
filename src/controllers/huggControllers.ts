
import data from '../data/brands.json';
interface Brands {
  id: string
  created_at: string;
  updated_at: string;
  name: string;
  internal_name: string;
  logo: string;
  colour: string;
  success: string;
  share: string;
  weight: number;
  deleted_at: string | null;
  expiry: number;
  website: string | null;
  integration_id: number;
  user_id: string;
  email: string | null;
  vat: number;
  faq: string | null;
  description: string;
  redeem: string | null;
  location_text: string | null;
  map_pin_url: string;
  consolidated: number;
  default_location_description_markdown: string;
  products: string[];
  consolidated_products: string[];
  stores: string[];
  logo_url: string;
}

const brands: Brands[] = data.data
const stores = data.embedded.stores
const products = data.embedded.products

const getByBrandId = (brandId: string) => brands.find((brand) => brand.id === brandId)

const getAllproductsByBrandId = (brandId: string) => {
  const foundProducts = products.filter((product) => product.brand_id === brandId)

  const consolidatedProductIds: string[] = brands.find((brand) => brand.id ===
    brandId)?.consolidated_products || []

  if (consolidatedProductIds.length === 0) return { products: foundProducts }

  const consolidatedProducts = consolidatedProductIds.reduce((acc, cProduct) => {
    return [...acc, ...products.filter((product) => product.id === cProduct)]
  }, [] as Record<string, any>[])

  return {
    products: foundProducts,
    consolidated_products: consolidatedProducts
  }
}

const getAllstoresByBrandId = (brandId: string) => {
  const foundStores = stores.filter((store) => store.brand_id === brandId)
  return { stores: foundStores }
}

const getAllstoresByproductId = (productId: string) => {
  const foundProduct = products.find((product) => product.id === productId)

  if (!foundProduct) throw { message: `Product with ID: ${productId} does not exist`, cause: 'NOT_FOUND' }

  const foundStores = stores.filter((store) => store.brand_id === foundProduct.brand_id)
  const consolBrands = brands.filter((brand) => brand.consolidated_products.includes(productId))

  const allAccStoresIds = consolBrands.reduce((acc, brand) => {
    acc.push(...brand.stores)
    return acc
  }, [] as string[])

  const allStores = allAccStoresIds.map((storeId) => stores.find((store) => store.id === storeId))

  const combined = [...foundStores, ...allStores]
  const unique = [...new Set(combined)];
  return unique
}


export {
  getByBrandId,
  getAllproductsByBrandId,
  getAllstoresByBrandId,
  getAllstoresByproductId
}
