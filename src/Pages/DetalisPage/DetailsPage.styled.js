import styled from "styled-components";

export const DetailsContainer = styled.div`
    background-color: #5e5e5e;
    width: 1500px;
   height: 860px;

    h1 {
        color: white;
        padding: 16px;
        padding-top: 48px;
        padding-bottom: 24px;
        padding-left: 100px;
    }
`
export const DetailsCards = styled.div`
    background-color:  ${(props) => props.color};
    width: 1300px;
    height: 640px;
    margin: 100px;
    margin-top: 0;
    border-radius: 0.625rem;

    .details {
        display: flex;
        
    }
   

    .pokemonPictures {
        display: flex;
        flex-direction: column;
        gap: 26px;
        padding: 24px;
       
        .front, .back {
            height: 280px;
            width: 280px;
            background-color: white;
            border-radius: 0.625rem;
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }

    .stats {
        height: 586px;
        width: 360px;
        background-color: white;
        border-radius: 0.625rem;
        padding: 24px;
        margin-top: 24px;

        h2 {
            margin-bottom: 8px;
        }

        .individualStats {
            padding: 4px;
            display: flex;
        
            .statsNames {
                color: #5e5e5e;
                font-weight: 700;
                padding-right: 4px;
                text-transform: capitalize;
            }

            .statsNumbers {
                font-weight: 700;
                padding-right: 12px;
            
            }

            progress {
                width: 120px;
                -webkit-appearance: none;
            }    

            progress::-webkit-progress-bar {
                background: lightgray;
                border-radius: 0.325rem;
            }

            progress::-moz-progress-bar {  
                background: lightgray;
                border-radius: 0.325rem;
            }

            progress::-webkit-progress-value {
                border-radius: 0.325rem;
                background-color: orange;
            }
        }
    }

    .pokemonId {
        padding: 24px;
        padding-left: 80px;
        z-index: 1;

        .textdetails{
            color: white;
            text-transform: capitalize;

            h1 {
                padding-left: 0;
                padding-top: 0;
                padding-bottom: 0;
            }
        }

        .types {
            display: flex;
            flex-direction: row;
            align-items: flex-start;
            gap: 10px;
            margin-top: 8px;
        }

        .moves{
            height: 436px;
            width: 210px;
            background-color: white;
            border-radius: 0.625rem;
            padding: 24px;
            margin-top: 50px;
        }

    }

    .moves {
        p {
            background-color: #dfdfdf;
            margin: 12px;
            margin-left: 0;
            padding: 8px;
            width: fit-content;
            border-radius: 0.625rem;
            text-transform: capitalize;
        }
    }
`

export const Image = styled.img`
    width: 250px;
    height: 250px;
`

export const Imgpokebola = styled.img`
    height: 850px;
    width: 850px;
    position: absolute;
    left: 664px;
    top: 164px;
    z-index: 0;
`
export const Imgpokemon = styled.img`
    position: absolute;
    left: 1116px;
    top: 170px;
    width: 260px;
    height: 260px;
    z-index: 1;
`

export const Excludebutton = styled.button`
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
    width: 254px;
    height: 70px;
    left: 1110px;
    top: 41px;

    background: #FF6262;
    border: none;
    border-radius: 8px;
    :hover {
        cursor: pointer;
        filter: brightness(1.3);
    }
    :active {
        filter: brightness(0.95);
    }
`