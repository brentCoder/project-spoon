import React, {useState} from 'react';
import Wrapper from './style';
import Navbar from '../Navbar';
import TabContainer from '../TabContainer';
import Content from '../Content';

function App() {
    const [filter, setFilter] = useState<string>("");

    return (
        <>
            <Navbar />
            <Wrapper>
                <div className="main-container">
                    <TabContainer setFilter={setFilter} />
                    <Content filter={filter} />
                </div>
            </Wrapper>
        </>
    )
}

export default App;