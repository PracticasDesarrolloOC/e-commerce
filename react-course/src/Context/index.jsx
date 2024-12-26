import { createContext, useState, useEffect } from 'react'
import PropTypes from 'prop-types'
export const ShoppingCartContext = createContext()

export const ShoppingCartProvider = ({ children }) => {
    const [count, setCount] = useState(0)

    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)
    const toggleProductDetail = () => setIsProductDetailOpen(!isProductDetailOpen)

    const [ProductToShow, setProductToShow] = useState({})

    const [cartProducts, setCartProducts] = useState([])

    const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false)
    const toggleCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(!isCheckoutSideMenuOpen)

    const [order, setOrder] = useState([])

    const [items, setItems] = useState(null)
    const [filteredItems, setFilteredItems] = useState(null)

    const [searchByTitle, setSearchByTitle] = useState(null)

    const [searchByCategory, setSearchByCategory] = useState(null)



    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(data => setItems(data))
    }, [])

    const filteredItemsByTitle = (items, searchByTitle) => {
        return items?.filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
    }

    const filteredItemsByCategory = (items, searchByCategory) => {
        return items?.filter(item => item.category.toLowerCase().includes(searchByCategory.toLowerCase()))
    }    

    const filterBy = (searchType) => {
        if (searchType === 'BY_TITLE') {
            return filteredItemsByTitle(items, searchByTitle)
        }
    
        if (searchType === 'BY_CATEGORY') {
            return filteredItemsByCategory(items, searchByCategory)
        }
    
        if (searchType === 'BY_TITLE_AND_CATEGORY') {
            return filteredItemsByCategory(items, searchByCategory).filter(item =>
                item.title.toLowerCase().includes(searchByTitle.toLowerCase())
            );
        }
    
        if (!searchType) {
            return items
        }
    }
    

    useEffect(() => {
        if (searchByTitle && searchByCategory) {
            setFilteredItems(filterBy('BY_TITLE_AND_CATEGORY'))
        } else if (searchByTitle) {
            setFilteredItems(filterBy('BY_TITLE'))
        } else if (searchByCategory) {
            setFilteredItems(filterBy('BY_CATEGORY'))
        } else {
            setFilteredItems(items)
        }
    }, [items, searchByTitle, searchByCategory])
    


    return (
        <ShoppingCartContext.Provider value={{
            count,
            setCount,
            isProductDetailOpen,
            toggleProductDetail,
            ProductToShow,
            setProductToShow,
            cartProducts,
            setCartProducts,
            isCheckoutSideMenuOpen,
            toggleCheckoutSideMenu,
            order,
            setOrder,
            items,
            setItems,
            searchByTitle,
            setSearchByTitle,
            filteredItems,
            searchByCategory,
            setSearchByCategory,
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}

ShoppingCartProvider.propTypes = {
    children: PropTypes.node.isRequired,
}