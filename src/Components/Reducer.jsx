import React from 'react'

const Reducer = (state, action) => {

    /*NAVBAR*/
    if (action.type === 'OPEN_NAVBAR') {
        return { ...state, isNavbarOpen: true }
    }
    if (action.type === 'CLOSE_NAVBAR') {
        return { ...state, isNavbarOpen: false }
    }

    /*FETCH*/
    if (action.type === 'GET_MEALS') {
        return { ...state, meals: action.payload, filter_Meals: action.payload, isLoading:true}
    }
    if (action.type === 'FETCH_SEARCH_MEALS') {
        return { ...state, meals: action.payload }
    }
    if (action.type === 'GET_SELECT_MEAL') {
        return { ...state, selected_Meals: action.payload }
    }


    /*SORT*/
    if (action.type === 'UPDATE_SORT') {
        return { ...state, sort: action.payload }
    }
    /*SORTING*/
    if (action.type === 'SORT_MEALS') {
        const { sort, meals } = state;
        let tempMeals = [...meals];
        /*SORTING PRICE LOWEST TO HIGHEST*/
        if (sort === 'price') {
            tempMeals = tempMeals.sort((a, b) => a.price - b.price)
        }
        /*SORTING PRICE HIGHEST TO LOWEST*/
        if (sort === '-price') {
            tempMeals = tempMeals.sort((a, b) => b.price - a.price)
        }
        /*SORTING NAME A TO Z*/
        if (sort === 'title') {
            tempMeals = tempMeals.sort((a, b) => {
                return a.title.localeCompare(b.title)
            })
        }
        /*SORTING NAME Z TO A*/
        if (sort === '-title') {
            tempMeals = tempMeals.sort((a, b) => {
                return b.title.localeCompare(a.title)
            })
        }
        return { ...state, meals: tempMeals }
    }
    if (action.type === 'UPDATE_SELECT') {
        return { ...state, select: action.payload }
    }
    if (action.type === 'LOAD_CATEGORIES') {
        const { select, filter_Meals, meals } = state;
        let tempMeals = [...filter_Meals];
        if (select === 'all') {
            return { ...state, meals: filter_Meals }
        }
        if (select) {
            tempMeals = tempMeals.filter((item => {
                return item.category.toLowerCase().startsWith(select)
            }))
            console.log(tempMeals)
        }
        return { ...state, meals: tempMeals }
    }


    /*SEARCHING*/
    if (action.type === 'SEARCH_BY_NAME') {
        return { ...state, text: action.payload, }
    }
    

    /*ADDING_TO_CART*/
    if (action.type === 'ADD_TO_CART') {
        const { _id, title, image, category, description, price, amount } = action.payload;
        /*CHECKING FOR SAME ID*/
        const tempItems = state.cart.find((i) => i._id === _id)
        /*IF ID MATCHES*/
        if (tempItems) {
            const tempCart = state.cart.map(cartItem => {
                if (cartItem._id === _id) {
                    let newAmount = cartItem.amount + amount
                    return { ...cartItem, amount: newAmount }
                } else {
                    return cartItem
                }
            })
            //console.log(tempItems);
            return { ...state, cart: tempCart }
        }
        /*IF ID DOESN'T MATCHES; RETURNS REGULAR PAYLOAD*/
        else {
            const newItems = {
                _id,
                title,
                image,
                category,
                description,
                price,
                amount
            }
            return { ...state, cart: [...state.cart, newItems] }
        }
        return { ...state }
    }

    /*REMOVE_MEAL*/
    if (action.type === 'REMOVE_MEAL') {
        const tempMeal = state.cart.filter(item => item._id !== action.payload)
        return { ...state, cart: tempMeal }
    }

    /*CLEAR_CART*/
    if (action.type === 'CLEAR_CART') {
        return { ...state, cart: [] }
    }
    /*TOGGLE_AMOUNT*/
    if(action.type === 'INCREASE_AMOUNT'){
        const tempKart = state.cart.map((items)=>{
            if(items._id === action.payload){
                let newAmount = items.amount + 1;
                return {...items, amount: newAmount}
            }else{
                return {...items}
            }
        })
        return {...state, cart:tempKart}
    }
    if(action.type === 'DECREASE_AMOUNT'){
        const tempKart = state.cart.map((items)=>{
            if(items._id === action.payload){
                let newAmount = items.amount - 1;
                return {...items, amount: newAmount}
            }else{
                return {...items}
            }
        }).filter(items => items.amount !== 0 )
        return {...state, cart:tempKart}
    }

    /*COUNT_CART_TOTAL; total_items && total_amount*/
    if(action.type === 'COUNT_CART_TOTAL'){
        const {total_items, total_amount} = state.cart.reduce((total, cartItem)=>{
            const {amount, price} = cartItem
            total.total_items += amount;
            total.total_amount += price*amount
            return total
        },{total_items:0, total_amount:0 })
        return {...state, total_items, total_amount }
    }
    /*EMPTY_CART_AFTER_PAYMENT*/
    if(action.type === 'CLEAR_CART_AFTER_PAYMENT'){
        return{...state, cart:[]}
    }
    return state

}

export default Reducer
