import Styled from 'styled-components';

const Container = Styled.div`
    display: flex;
    flex-direction: column;
    padding: 4em;
    padding-top: 0px;
    box-sizing: border-box;
    height: 100vh;
    width: auto;
    
    .main-container {
        display: inline-flex;   
        flex-direction: column; 
        padding: 1rem;
        box-sizing: border-box;
        width: 100%;
        height: 100%;
        position: relative;
    }

`;

export default Container;
