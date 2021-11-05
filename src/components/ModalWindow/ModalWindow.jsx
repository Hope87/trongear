import React, { useEffect, useRef } from 'react';
import styles from './ModalWindow.module.scss';

const ModalWindow = ({setModal}) => {
    const ref = useRef(null);
    useEffect(() => {
        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside)
        }
    })
    const handleClickOutside = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
            setModal(false);
        }
    }
    return (
        <div className = {styles.window} ref = {ref}>
            <h2>settings</h2>
            <h2>start chat</h2>
            <h2>notification</h2>
        </div>
    );
}

export default ModalWindow;