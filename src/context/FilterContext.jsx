import { createContext, useContext, useReducer } from "react";
import { filterReducer } from "../reducer/FilterReducer"

const filterInitialState = {
    productList: [],
    onlyInStock: false,
    bestSellerOnly: false,
    sortBy: null,
    ratings: null
}

export const FilterContext = createContext(filterInitialState);
// provider
export const FilterProvider = ({ children }) => {
    const [state, dispatch] = useReducer(filterReducer, filterInitialState);
    //product list
    const initialProductList = (products) => (
        dispatch({
            type: "FILTER_PRODUCT_LIST",
            payload: {
                products: products
            }
        })
    )
    // Best seller
    function bestSeller(products) {
        return state.bestSellerOnly ? products.filter(product => product.best_seller === true) : products
    }
    // Instock
    function inStock(products) {
        return state.onlyInStock ? products.filter(product => product.in_stock === true) : products
    }
    // Short
    function sortProducts(products) {
        if (state.sortBy === "lowtohigh") {
            return [...products].sort((a, b) => a.price - b.price);
        }
        if (state.sortBy === "hightolow") {
            return [...products].sort((a, b) => b.price - a.price);
        }
        return products;
    }
    // Rating
    function rating(products) {
        if (state.ratings === "4STARABOVE") {
            return products.filter(product => product.rating >= 4);
        }
        if (state.ratings === "3STARABOVE") {
            return products.filter(product => product.rating >= 3);
        }
        if (state.ratings === "2STARABOVE") {
            return products.filter(product => product.rating >= 2);
        }
        return products;
    }

    const filterProductList = rating(sortProducts(inStock(bestSeller(state.productList))));
    // value
    const value = {
        state,
        dispatch,
        productList: filterProductList,
        initialProductList
    }


    return (
        <FilterContext.Provider value={value}>
            {children}
        </FilterContext.Provider>
    )

}
// Consumer
export const useFilter = () => {
    const context = useContext(FilterContext);
    return context;
}