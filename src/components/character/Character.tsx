import React, {FC, ReactNode} from 'react';
import styles from './Character.module.css'
import './Character2.css'


interface IProps {
    name: string;
    image: string;
    //children?: React.ReactNode;
}

type PropsWithChildren<T> = T & {children?: ReactNode}
const Character: FC<PropsWithChildren<IProps>> = ({name, image, children}) => {

    return (
        <div>
            <h2 className={styles.bgGray}>{name}</h2>
            <img className={styles.w200} src={image} alt={name}/>
            <p>{children}</p>
        </div>
    );
};

export default Character;