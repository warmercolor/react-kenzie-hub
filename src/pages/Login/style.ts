import styled from 'styled-components'
import { colors } from '../../style/colors'

export const MainStyle = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    img{
    margin-bottom: 20px;
    }
`

export const ContentStyle = styled.div`
    width: 70vw;
    display: flex;
    flex-direction: column;
    background-color: ${colors.grey3};
    border-radius: 10px;
    gap: 20px;
    padding: 20px;

    h2,
    p {
        align-self: center;
    }

    select,
    option {
        padding: 10px;
        margin: 10px auto;
        background-color: ${colors.grey2};
        border: none;
        border-radius: 4px;
        width: 400px;
        color: ${colors.grey1};
        font-size: 16px;
    }
    .white {
        color: ${colors.grey0};
    }

    .center {
        padding-top: 50px;
        text-align: center;
    }

    .btnEntry{
        &:hover {
            background-color: ${colors.colorPrimaryFocus};
        }
    }

    .btnRegister{
        &:hover {
            background-color: ${colors.grey2};
        }
    }


    @media (min-width: 400px) {
        max-width: 369px;
    }
`