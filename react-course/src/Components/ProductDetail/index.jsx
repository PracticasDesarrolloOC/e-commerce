import { useContext } from 'react'
import { XCircleIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from '../../Context'
import './styles.css'

const ProductDetail = () => {
    const context = useContext(ShoppingCartContext)

    return (
        <aside className={`${context.isProductDetailOpen ? 'flex' : 'hidden'} product-detail flex-col fixed right-0 border border-black rounded-lg bg-white`}>
            <div className='flex justify-between items-center p-4'>
                <h2 className='font-medium text-xl'>Detail</h2>
                <XCircleIcon className='size-6 text-black-500 cursor-pointer'
                    onClick={context.toggleProductDetail}
                ></XCircleIcon>
            </div>
            <figure className='px-14'>                                            
                <img className='w-60 h-100 rounded-lg'src={context.ProductToShow.image} alt={context.ProductToShow.title} />
            </figure>
            <p className='flex flex-col p-6'>
                <span className='font-medium text-2xl mb-2'>${context.ProductToShow.price}</span>
                <span className='font-medium text-md'>${context.ProductToShow.title}</span>
                <span className='font-light text-sm'>${context.ProductToShow.description}</span>
            </p>
        </aside>
    )
}
export default ProductDetail