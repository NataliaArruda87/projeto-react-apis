import styled from "styled-components"

export const HeaderContainer = styled.header`
    width: 1348px;
    height: 160px;
    left: 0px;
    top: 0px;

    img {
        position: absolute;
        width: 307px;
        height: 113px;
        left: 580px;
        top: 21px;
    }

    button {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 4px 10px;
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 36px;
        color: white;

        position: absolute;
        width: 246px;
        height: 70px;
        left: 1110px;
        top: 41px;

        background: #33A4F5;
        border: none;
        border-radius: 8px;
        :hover {
            cursor: pointer;
            filter: brightness(1.3);
        }
        :active {
            filter: brightness(0.95);
        }
    }

    .allPokemonsButton {
        color: black;
        text-decoration: underline;
        background: none;
        left: 74px;
    }

    .removeFromPokedexButton {
        background: #FF6262;
        width: 254px;
    }
`