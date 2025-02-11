'use client'
import { useFormStatus } from "react-dom";

export default function SubmitMeals(){
    const {pending} = useFormStatus()
    return (
        <button>
            {pending ? 'Submitting your meal...' : 'Share Meal'}
        </button>
    )
}