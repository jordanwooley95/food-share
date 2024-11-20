'use client'
import Image from 'next/image'
import { useRef, useState } from 'react'

import classes from './image-picker.module.css'

export default function ImagePicker({ label, name }) {
  const [pickedImage, setPickedImage] = useState()
  const imageInput = useRef()

  function handleUpload() {
    imageInput.current.click()
  }

  function handleImageChange(event) {
    const file = event.target.files[0]
    if (!file) {
      return setPickedImage(null)
    }
    const fileReader = new FileReader()

    fileReader.onload = () => {
      setPickedImage(fileReader.result)
    }

    fileReader.readAsDataURL(file)
  }

  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <div className={classes.preview}>
          {!pickedImage && <p>No image picked yet.</p>}
          {pickedImage && <Image src={pickedImage} alt='Picked' fill />}
        </div>
        <input
          className={classes.input}
          type='file'
          id={name}
          name={name}
          accept='image/png, image/jpeg, image/jpg'
          ref={imageInput}
          onChange={handleImageChange}
          required
        />
        <button className={classes.button} type='button' onClick={handleUpload}>
          Upload Image
        </button>
      </div>
    </div>
  )
}
