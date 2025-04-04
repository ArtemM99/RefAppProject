import {z} from 'zod'

export const ProductsSchema = z.object({
    id: z.number(),
    name: z.string(),
    quantity: z.number(),
    expirationDate: z.date(),
    image: z.string(),
    userId: z.string(),
    categoryId: z.number(),
    
})

export type ProductsType = z.infer<typeof ProductsSchema>
export const ProductsArraySchema = z.array(ProductsSchema)

export type ProductsState = {
    products: ProductsType[]
    loading: boolean
    error: null | string ;
    
}