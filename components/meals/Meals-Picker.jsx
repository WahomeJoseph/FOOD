'use client'
import { useRef } from 'react'
import classes from './image-picker.module.css'
export default function ImagePicker({ label, name }) {
    const imageRef = useRef()
    const handleImage = () => {
        imageRef.current.click()
    }
    return (
        <div className={classes.picker}>
            <label htmlFor={image}>{label}</label>
            <div className={classes.controls}>
                <input className={classes.input} type="file" id={image} accept='image/png, image/jpeg' name={name} ref={imageRef}/>

                <button onClick={handleImage} className={classes.button} type='button'>Pick Meal Image</button>
            </div>
        </div>
    )
}