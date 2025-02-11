'use client'
import { useRef, useState } from 'react'
import Image from 'next/image'

import classes from './image-picker.module.css'
export default function ImagePicker({ label, name }) {
    const [pickImage, setPickImage] = useState()
    const imageRef = useRef()
    const handleImage = () => {
        imageRef.current.click()
    }
    const handleChangeImage = (e) => {
        const file = e.target.files[0]
        if (!file) {
            setPickImage(null)
            return
        }

        const fileReader = new FileReader()
        fileReader.onload = () => {
            setPickImage(fileReader.result)
        }
        fileReader.readAsDataURL(file)
    }
    return (
        <div className={classes.picker}>
            <label htmlFor={name}>{label}</label>
            <div className={classes.controls}>
                <div className={classes.preview}>
                    {!pickImage && <span>No Meal Image Picked Yet!</span>}
                    {pickImage && (<Image src={pickImage} alt='Meal Image' fill />)}
                </div>
                <input
                    className={classes.input}
                    type="file"
                    id={name}
                    accept='image/png, image/jpeg'
                    name={name} ref={imageRef}
                    onChange={handleChangeImage}
                    required
                />
                <button onClick={handleImage} className={classes.button} type='button'>Pick Meal Image</button>
            </div>
        </div>
    )
}