import Styled from 'styled-components';

const Style = Styled.div`
    background: #000000d6;
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: 1;
    left: 0px;
    top: 0px;
    display: flex;
    flex-direction: column;
    padding: 10px;
    align-items:center;
    justify-content: center;

    .button {
        width: 50px;
        height: 50px;
        position: absolute;
        right: 10.5%;
    }

    .container {
        display: flex;
        flex-direction: row;
        background-color: white;
        width: 80%;
        height: 80%;
    }

    .panel {
        background-color: white;
        height: 100%;
        flex: 1;
        display: flex;
    }

    .post-image {
        width: 100%;
        height: auto;
        max-width: 100%;
        max-height: 100;
    }
`;

export default Style;