import React, { memo, useCallback, useEffect, useState } from 'react';
import Chance from 'chance';
import { addNewUser, deleteUser, removeAllUsers } from '../app/user-slices';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { useDispatch } from 'react-redux';

export const FirstComponent = memo(() => {
    const dispatch = useDispatch();

    const data = useSelector((state: any) => state.users)
    // const images = useSelector((state: any) => (state.images))

    const chance = new Chance();

    const getName = useCallback(() => (chance.name({ nationality: 'en' })), []);

    const onDelete = useCallback((name: string) => {
        dispatch(deleteUser(name))
    }, []);

    const renderName = useCallback((name: string) => (
        <div key={name} style={{ display: 'grid', gridTemplateColumns: 'auto 50px' }}>
            <div key={name} style={{ width: 'fitContent' }}>{name}</div>
            <button onClick={() => onDelete(name)}>Delete</button>
        </div>
    ), []);

    const onAddUser = useCallback(() => {
        dispatch(addNewUser(getName()));
    }, []);

    const deleteAllNames = useCallback(() => {
        dispatch(removeAllUsers())
    }, []);

    return (
        <>
            <div>
                <button onClick={onAddUser}>Add Name</button>
                <button onClick={deleteAllNames}>Delete All</button>
            </div>
            <div>
                {
                    data.map(renderName)
                }
                {/* {
                    images.map((name: string) => (
                        <span key={name}>{name}</span>
                    ))
                } */}
            </div>
        </>
    );
});