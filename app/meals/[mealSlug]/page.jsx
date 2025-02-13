import { getMeal } from "@/lib/Meals";
import { notFound } from "next/navigation";
import Image from "next/image";

import classes from './page.module.css'

export async function generateMetadata({params}){
    const {mealSlug} = await params
    const meals = await getMeal(mealSlug)
    if (!meals) {
        notFound()
    }
    return{
        title: meals.title,
        description: meals.summary,
    }
}

export default async function MealCard ({params}){
    const {mealSlug} = await params
    const meals = await getMeal(mealSlug)
    if (!meals) {
        notFound()
    }
    meals.instructions = meals.instructions.replace(/\n/g, '<br />' )

    return(
        <>
        <header className={classes.header}>
            <div className={classes.image}>
                <Image className={classes.img} src={meals.image} alt={meals.title} fill/>
            </div>
            <div className={classes.headerText}>
                <h1 className={classes.h1}>{meals.title}</h1>
                <p className={classes.creator}>By <a className={classes.a} href={`mailto:${meals.creator_email}`}>{meals.creator}</a></p>
                <p className={classes.summary}>{meals.summary}</p>
            </div>
        </header>
        <main className={classes.instructions}>
            <p dangerouslySetInnerHTML={{__html: meals.instructions}}></p>
        </main>
        </>
        
    )
}