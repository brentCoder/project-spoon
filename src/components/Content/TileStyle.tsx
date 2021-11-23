import Styled from 'styled-components';

const Style = Styled.div`
    flex: 1;
    max-width: 300px;
    height: 300px;
    background-color: #fff;
    min-width: 300px;
    border-style: solid;
    border-width: 10px;
    border-color: #F9F4F4;
    display: flex;
    justify-content: center;
    overflow: hidden;

    .tile-image {
        width: 120%;
        height: 150%;
    }

    .button {
        padding: 0px;
        width: 100%;
        height: 100%;
        cursor: pointer;
        border-style: none;
        opacity: 0.8;
    }

    .button:hover {
        opacity: 1;
        transition: 0.333s;
    }
`;

export default Style;