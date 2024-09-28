import React, {FC} from 'react';
import './App.css';
import Character from "./components/character/Character";

const App: FC = () => {
    return (
        <>
            <Character name={'Bart'}
                       image={'https://upload.wikimedia.org/wikipedia/ru/2/29/Bart_Simpson.gif'}/>
            <Character name={'Homer'}
                       image={'https://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab asperiores consequuntur corporis error, est eum explicabo harum, illum ipsa magni neque nesciunt nobis, officia omnis pariatur ullam velit veritatis.
            </Character>
            <Character name={'Marge'} image={'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus alias beatae delectus deserunt doloribus fugiat, hic
                illo mollitia odio perspiciatis praesentium provident quo ratione rem similique soluta tempora veritatis voluptatum!
            </Character>
        </>
    );
}

export default App;
