import React, { useEffect, useState } from 'react';
import Card from "../../Card/Card";
import { getMeal, getMealByCategory, useAPI } from "../../../context/api/api";
import { useSearchParams } from 'react-router-dom';

export default function MainSection()
{
    const [foodDetails, setFoodDetails] = useState(null);
    const [param] = useSearchParams();
    const { meals } = useAPI();

    const pageNumber = () =>
    {
        return parseInt(param.get("page"));
    };

    const incrementPageNumber = () =>
    {


    };
    const decrementPageNumber = () =>
    {

    };


    useEffect(() =>
    {
        (async () =>
        {
            if (!meals) return;

            const details = await Promise.all(meals?.map(async (meal) =>
            {
                const mealDetails = await getMeal(meal?.idMeal);
                return {
                    name: mealDetails?.strMeal,
                    category: mealDetails?.strCategory,
                    country: mealDetails?.strArea,
                    tags: mealDetails?.strTags?.split(','),
                    image: mealDetails?.strMealThumb
                };
            }));

            setFoodDetails(details.slice(0, 5));
        })();

    }, [meals]);


    return (
        <section className='my-24 md:mx-16 mx-8'>
            {!foodDetails && <div className='flex justify-center my-20'><span className="loading loading-spinner loading-lg"></span></div>}
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10'>
                {foodDetails?.map((meal, idx) => <Card key={idx} foodDetails={meal}></Card>)}
            </div>
            <div className="mt-12 flex justify-center gap-2">
                {foodDetails && <>
                    <button className={`${pageNumber() <= 1 ? "btn-disabled" : 'btn-info'} btn-sm font-bold rounded-md btn-outline border-3 border-solid transition-transform duration-300 ease-in-out transform hover:scale-110`}>&lt; &lt; Previous Page</button>
                    <div className="px-2 border-solid font-bold rounded-md text-red-500">9</div>
                    <button className={`${foodDetails.length / 12 < pageNumber() ? "btn-disabled" : 'btn-success'} font-bold btn-sm rounded-md btn-outline border-3 border-solid transition-transform duration-300 ease-in-out transform hover:scale-110`}>Next Page &gt;&gt;</button>
                </>}

            </div>
        </section >
    );
}
