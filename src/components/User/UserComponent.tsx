import React, {FC, ReactNode} from 'react';
import IUser from "../../model/IUser";

type UserComponentWithChildren<T> = T & {children ?: ReactNode} & {xxx:()=>void}

const UserComponent: FC <UserComponentWithChildren<IUser>> = ({id, name, username, email, xxx}) => {
    return (
        <div>
            {id} - {name} - {username} - {email}
            <button onClick={xxx}>choose</button>
        </div>
    );
};

export default UserComponent;