import { XCircleIcon } from '@heroicons/react/24/solid'
import PropTypes from 'prop-types'

export const OrderCard = ({ id, title, imageUrl, price, handleDelete }) => {

    let renderXCircleIcon
    if (handleDelete) {
        renderXCircleIcon = <XCircleIcon onClick={() => handleDelete(id)} className='w-6 h-6 text-black-500 cursor-pointer' />

    }


    OrderCard.propTypes = {
        title: PropTypes.node.isRequired,
        imageUrl: PropTypes.node.isRequired,
        price: PropTypes.node.isRequired,
        id: PropTypes.node.isRequired,
        handleDelete: PropTypes.node.isRequired,
    }

    return (
        <div className='flex justify-between items-center mb-3'>
            <div className='flex items-center gap-2'>
                <figure className='w-20 h-20'>
                    <img className='w-full h-full rounded-lg object-cover' src={imageUrl} alt={title} />
                </figure>
                <p className='text-sm'>{title}</p>
            </div>
            <div className='flex items-center gap-2'>
                <p className='text-lg font-medium'>{price}</p>
                {renderXCircleIcon}
            </div>
        </div>
    )
}

export default OrderCard
