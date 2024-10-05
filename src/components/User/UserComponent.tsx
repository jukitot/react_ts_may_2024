import React, {FC, ReactNode} from 'react';
import IUser from "../../model/IUser";

type UserComponentWithChildren<T> = T & {children ?: ReactNode}

const UserComponent: FC <UserComponentWithChildren<IUser>> = ({id, name, username, email}) => {
    return (
        <div>
            {id} - {name} - {username} - {email}
        </div>
    );
};

export default UserComponent;