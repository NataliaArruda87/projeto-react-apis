import styled from "styled-components"


export const CardContainer = styled.div`
    width: 440px;
    height: 210px;
    left: 500px;
    top: 347px;
    border-radius: 0.625rem;
    padding: 16px;
    margin-top: 4px;
    background-color:  ${(props) => props.color};

    .textdetails{
        color: #FFFFFF;
        text-transform: capitalize;
    }

    .types {
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        gap: 10px;
        margin-top: 8px;
    }

    button {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 4px 10px;

        width: 136px;
        height: 38px;

        background: #FFFFFF;
        border-radius: 8px;
        border: none;
    }
    
    .detailsbutton {
        background: none;
        text-decoration: underline;
        color: #FFFFFF;
        font-weight: 700;
        justify-content: start;
    }

    .capturebutton{
        :hover {
            cursor: pointer;
            filter: brightness(1.2);
        }
        :active {
            filter: brightness(0.85);
        }
    }
    .buttonsContainer{
        display: flex;
        margin-top: 42px;
        justify-content: space-between;
        position: relative;
        top: -485px;
        padding-right: 16px;


    }
`
export const Imgpokebola = styled.img`
    position: relative;
    left: 166px;
    top: -166px;
    z-index: 0;
`
export const Imgpokemon = styled.img`
    position: relative;
    left: 210px;
    top: -448px;
    width: 193px;
    height: 193px;
    z-index: 1;
`