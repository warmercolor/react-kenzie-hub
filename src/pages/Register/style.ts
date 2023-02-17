import styled from 'styled-components';
import { colors } from '../../style/colors'

export const MainStyle = styled.div`
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    figure{
        width: 70vw;
        margin-bottom: 20px;
        display: flex;
        margin-top: 20px;
        justify-content: space-between;
    }

    .btnHome{
        width: fit-content;
        display: flex;
        align-items: center;
        padding: 1.288rem 0.825rem;
        height: 1.563rem;
        background-color: ${colors.grey2};
        border: none;
        border-radius: 4px;
        color: ${colors.whitePure}
    }
    @media (min-width: 400px) {
        figure{
            max-width: 399px;
        }
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
        background-color: ${colors.grey2};
        border: none;
        border-radius: 4px;
        width: 100%;
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