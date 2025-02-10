import { getMeal } from "@/lib/Meals";
import { notFound } from "next/navigation";

import classes from './page.module.css'

export function MealCard ({params}){
    const meals = getMeal(params.mealSlug)
    if (!meals) {
        notFound()
    }
    meals.instructions = meals.instructions.replace(/\n/g, '<br />' )

    return(
        <>
        <header className={classes.header}>
            <div className={classes.image}>
                <Image className={classes.img} src={meals.image} fill/>
            </div>
            <div className={classes.headerText}>
                <h1 className={classes.h1}>{meals.title}</h1>
                <p className={classes.creator}>By <a className={classes.a} href={`mailto:${meals.creator_email}`}>{meals.creator}</a></p>
                <p className={classes.summary}>{meals.summary}SUMMARY</p>
            </div>
        </header>
        <main className={classes.instructions}>
            <p dangerouslySetInnerHTML={{__html: meals.instructions}}>COOKING INSTRUCTIONS</p>
        </main>
        </>
        
    )
}