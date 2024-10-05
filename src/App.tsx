import React, {FC, useEffect, useState} from 'react';
import './App.css';
import IUser from "./model/IUser";
import UserComponent from "./components/User/UserComponent";

const App: FC = () => {


    // let data = 'some data'

    const [users, setUsers] = useState<IUser[]>([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(value => {
                setUsers(value);
            })

        return () => {
            console.log('end');
        }

    }, [])

    console.log('hey')


    return (
        <>
            {/*{data}*/
                users.map(({id, name, username, email}, index) =>
                    <UserComponent
                        key={index}
                        id={id}
                        name={name}
                        username={username}
                        email={email}> </UserComponent>)
            }

        </>
    );
}

export default App;
