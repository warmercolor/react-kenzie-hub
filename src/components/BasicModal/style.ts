import styled from 'styled-components'
import { colors } from '../../style/colors'


export interface IProps{
    bgColor?: string
}

export const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "96%",
    maxWidth: "500px",
    heigth: 800,
    p: 4,
}


export const ButtonModal = styled.button<IProps>`
    width: fit-content;
    padding: 3px 10px;
    height: 25px;
    background-color: ${({bgColor}) => 
        bgColor ? bgColor : `${colors.grey3}`};
    border: none;
    border-radius: 4px;
    color: ${colors.grey0};
`

export const HeaderModal = styled.header`
    height: 50px;
    padding: 20px;
    background-color: ${colors.colorPrimary};
    display: flex;
    align-items: center;
    justify-content: space-between;
    button {
    background-color: transparent;
    border: none;
    font-size: 30px;
    color: ${colors.grey1};
    }
`

export const ContentModal = styled.div`
    background-color: ${colors.grey3};
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 30px;
    select,
    option {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 10px;
        margin-bottom: 10px;
        background-color: ${colors.grey2};
        border: none;
        border-radius: 4px;
        width: 400px;
        color: ${colors.grey1};
        font-size: 16px;
    }
    .white {
        color: ${colors.grey0};
        align-self: flex-start;
        margin: 10px 0;
    }
    @media (max-width: 400px) {
    ButtonLong {
        font-size: 12px;
    }
    select,
    option {
        width: 100%;
    }
}
`