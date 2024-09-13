import React, { createContext, useContext, useEffect } from 'react';
import { useState } from 'react';
import axios from "axios";

const CategoryURL = "https://www.themealdb.com/api/json/v1/1/categories.php";
const IngredientURL = "https://www.themealdb.com/api/json/v1/1/list.php?i=list";
const CountryURL = "https://www.themealdb.com/api/json/v1/1/list.php?a=list";


const ContextProvider = createContext();

export function useAPI()
{
    return useContext(ContextProvider);
}

export default function APIProvider({ children })
{
    const [category, setCategory] = useState(null);
    const [ingredient, setIngredient] = useState(null);
    const [country, setCountry] = useState(null);

    useEffect(() =>
    {
        (async () =>
        {
            await axios.get(CategoryURL)
                .then(res => setCategory(res.data.categories))
                .catch(err => console.error(err));

            await axios.get(IngredientURL)
                .then(res => setIngredient(res.data.meals))
                .catch(err => console.error(err));

            await axios.get(CountryURL)
                .then(res => setCountry(res.data.meals))
                .catch(err => console.error(err));

        })();



    }, []);

    return (
        <ContextProvider.Provider value={{ category, ingredient, country }}>
            {children}
        </ContextProvider.Provider>
    );
}
