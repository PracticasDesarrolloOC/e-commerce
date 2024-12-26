import PropTypes from 'prop-types'
import { ChevronRightIcon } from '@heroicons/react/24/solid'
import { CalendarDaysIcon } from '@heroicons/react/24/solid'
import { ShoppingCartIcon } from '@heroicons/react/24/solid'




export const OrdersCard = ({ totalPrice, totalProducts }) => {
    const currentDate = () => {
        const date = new Date().toLocaleDateString();
        return date
    }
    OrdersCard.propTypes = {
        totalPrice: PropTypes.node.isRequired,
        totalProducts: PropTypes.node.isRequired
    }

    return (
        <div className='flex justify-between items-center mb-3 border border-black rounded-lg w-80 p-4 mt-5'>
            <div className='flex justify-between w-full'>
                <p className='flex flex-col'>
                    <span className='flex items-center gap-2'>
                        <CalendarDaysIcon className='h-5 w-5 text-black cursor-pointer' />
                        {currentDate()}
                    </span>
                    <span className='flex items-center gap-2'>
                        <ShoppingCartIcon className='h-5 w-5 text-black-500' />
                        {totalProducts} articles
                    </span>
                </p>
                <p className='flex items-center gap-2'>
                    <span className='font-medium text-2xl'>${totalPrice}</span>
                    <ChevronRightIcon className='h-6 w-6 text-black cursor-pointer' />
                </p>
            </div>
        </div>
    )
}

export default OrdersCard