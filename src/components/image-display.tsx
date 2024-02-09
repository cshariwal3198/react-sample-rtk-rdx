import React, { memo, useCallback, useState } from "react";
import Chance from "chance";
import { useDispatch, useSelector } from "react-redux";
import { addImage, deleteAllImages, deleteImage } from "../app/image-slices";

export const DisplayImages = memo(() => {
    const data = useSelector((state: any) => (state.images))
    const dispatch = useDispatch();
    const chance = new Chance();

    const getImage = () => (chance.country())

    const onDelete = useCallback((image: string) => {
        dispatch(deleteImage(image));
    }, []);

    const onAddImage = useCallback(() => {
        dispatch(addImage(getImage()))
    }, []);

    const onRemoveAllImages = useCallback(() => {
        dispatch(deleteAllImages())
    }, []);

    return (
        <>
            <div>
                <button onClick={onAddImage}>Add Image</button>
                <button onClick={onRemoveAllImages}>Delete All</button>
            </div>
            {
                data.map((image: string) => (
                    <div key={image} style={{ alignItems: 'center', display: 'flex', columnGap: '10px' }}>
                        <span>{image}</span>
                        <button onClick={() => onDelete(image)}>Delete</button>
                    </div>
                ))
            }
        </>
    )
});