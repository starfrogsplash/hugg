
import data from '../data/brands.json';

const brands: string[] | any = data.data
const stores = data.embedded.stores
const products = data.embedded.products

const getByBrandId = (brandId: string) => brands.find((brand: Record<string, any>) => brand.id === brandId)

const getAllproductsByBrandId = (brandId: string) => {
   const productRes = products.filter((product: Record<string, any>) => product.brand_id === brandId)

    const consolidatedProductIds: string[] | any = brands?.find((brand: Record<string, any>) => brand.id === 
    brandId).consolidated_products

      const consolidatedProducts = consolidatedProductIds.reduce((acc: any[], cProduct: Record<string, any>) => {
       acc.push(...products.filter((product:Record<string, any>) => product.id === cProduct))
        return acc
     },[])

    return {
      products : productRes,
      consolidated_products: consolidatedProducts
    }
}

const getAllstoresByBrandId = (brandId: string) => stores.filter((store: Record<string, any>) => store.brand_id === brandId)

const getAllstoresByproductId = (productId: string) => {
  const productRes: string[] | any = products.find((product: Record<string, any>) => product.id === productId)
  const store = stores.filter((store: Record<string, any>) => store.brand_id === productRes.brand_id)
  const consolBrands = brands.filter((brand: Record<string, any>) => brand.consolidated_products.includes(productId))

  const allAccStoresIds = consolBrands.reduce((acc: any[], brand: Record<string, any>) =>{ 
   acc.push(...brand.stores)
    return acc
  }, [])

  const allStores = allAccStoresIds.map((storeId: Record<string, any>) => stores.find((store: Record<string, any>) => store.id === storeId))
  
  console.log('main store===', store)
  console.log('All stores===', allStores)

  const combined = [...store, ...allStores]

  const unique = [...new Set(combined)];

  return unique
}


export {
  getByBrandId,
  getAllproductsByBrandId,
  getAllstoresByBrandId,
  getAllstoresByproductId
}
