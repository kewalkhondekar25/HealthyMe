import React, { useEffect, useReducer, useState } from "react";
import reducer from './Reducer'
import axios from "axios";
import { meals_URL as url } from "../../Utils/constants";
import { search_Meals_URL as URI } from "../../Utils/constants";
import { useAuth0 } from "@auth0/auth0-react";



/*TO INITALIZE CART STATE*/
const getLocalStorage = ()=>{
    const init = localStorage.getItem('cart')
    if(init){
        return JSON.parse(localStorage.getItem('cart'))
    }else{
        return []
    }
}
/*SATES*/
const initialState = {
    isNavbarOpen: false,
    isLoading:false,
    meals: [],
    filter_Meals: [],
    selected_Meals: [],
    sort: '',
    select: '',
    text: '',
    cart: getLocalStorage(),
    total_items:0,
    total_amount:0
}

const AppContext = React.createContext()

const AppProvider = ({ children }) => {

    /*AUTH0*/
    const {isAuthenticated, loginWithRedirect, logout, user} = useAuth0();
    if(isAuthenticated){
        console.log(user.name)
        console.log(user.email)
    }

    const [myUser, setMyUser] = useState(null);

    useEffect(()=>{
       setMyUser(user) 
    },[user])


    /*NAVBAR FUNCTIONALITY*/
    const [state, dispatch] = useReducer(reducer, initialState)

    const openNavbar = () => {
        dispatch({ type: 'OPEN_NAVBAR' })
    }
    const closeNavbar = () => {
        dispatch({ type: 'CLOSE_NAVBAR' })
    }


    /*FETCH MEALS*/
    const fetchMeals = async (url) => {
        try {
            const response = await axios(url);
            const data = response.data;
            dispatch({ type: 'GET_MEALS', payload: data })
        } catch (error) {
            console.log(error)
        }
    }

    const fetchMealsBySearch = async (URI) => {
        try {
            const response = await axios(URI);
            const data = response.data;
            dispatch({ type: 'FETCH_SEARCH_MEALS', payload: data })
        } catch (error) {
            console.log(error)
        }
    }

    const fetchSelectMeal = async (url) => {
        try {
            const response = await axios(url);
            const data = response.data;
            dispatch({ type: 'GET_SELECT_MEAL', payload: data })
        } catch (error) {
            console.log(error)
        }
    }


    /*SORTING*/
    const updateSort = (e) => {
        const value = e.target.value;
        dispatch({ type: 'UPDATE_SORT', payload: value })
    }

    const updateSelect = (e) => {
        const value = e.target.value;
        dispatch({ type: 'UPDATE_SELECT', payload: value })
    }

    /*SEARCHING*/
    const searchByName = (e) => {
        const value = e.target.value;
        dispatch({ type: 'SEARCH_BY_NAME', payload: value })
    }


    /*ADDTOCART*/
    const addToCart = (_id, title, image, category, description, price, amount) => {
        dispatch({type:'ADD_TO_CART', payload:{_id, title, image, category, description, price, amount}})
    }

    /*LOCAL_STORAGE*/
    useEffect(()=>{
        dispatch({type:'COUNT_CART_TOTAL'})
        localStorage.setItem('cart',JSON.stringify(state.cart))
    },[state.cart])

    /*REMOVE MEAL*/
    const removeMeal = (_id)=>{
        dispatch({type:'REMOVE_MEAL', payload:_id})
    }
    /*TOGGLE_AMOUNT*/
    const increaseAmount = (_id)=>{
        console.log(_id)
        dispatch({type:'INCREASE_AMOUNT', payload: _id})
    }
    const decreaseAmount = (_id)=>{
        console.log(_id)
        dispatch({type:'DECREASE_AMOUNT', payload: _id})

    }
    /*CLEAR_CART*/
    const clearCart = (_id)=>{
        dispatch({type:'CLEAR_CART', payload:_id})
    }
    /*CLEAR_CART_AFTER_PAYMENT*/
    const emptyCart = ()=>{
        dispatch({type:'CLEAR_CART_AFTER_PAYMENT'})
    }


    /*MOUNTING*/
    useEffect(() => {
        fetchMeals(url);
    }, [])

    /*ON SEARCH FIX*/ 
    useEffect(() => {
        fetchMeals(url);
    }, [state.selected_Meals])

    useEffect(() => {
        dispatch({ type: 'SORT_MEALS' });
    }, [state.sort])

    useEffect(() => {
        fetchMealsBySearch(`${URI}${state.text}`);
        //dispatch({type: 'GET_SEARCH_MEALS'})
    }, [state.text])

    useEffect(() => {
        dispatch({ type: 'LOAD_CATEGORIES' })
    }, [state.select])


    return <AppContext.Provider
        value={{
            ...state,
            openNavbar,
            closeNavbar,
            updateSort,
            searchByName,
            updateSelect,
            fetchSelectMeal,
            addToCart,
            removeMeal,
            clearCart,
            increaseAmount,
            decreaseAmount,
            loginWithRedirect,
            logout,
            emptyCart,
            user,
            myUser,
        }}>
        {children}
    </AppContext.Provider>
}

export { AppContext, AppProvider }