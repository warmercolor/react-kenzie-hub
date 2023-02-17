import styled from 'styled-components'
import { colors } from '../../style/colors'
import { typography } from '../../style/typography'

export const DashboardStyle = styled.div`
    display: flex;
    width: 100vw;
    margin: 0 auto;
    justify-content: center;

    hr{
        border: 1px solid ${colors.grey1};
        width: 100vw;
        border-radius: 10px;
    }

    figure, .user{
        width: 90vw;
        display: flex;
        justify-content: space-between;
        padding: 1rem;
        margin: 0 auto;
    }

    .logout{
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

    .user{
        flex-direction: column;
        gap: 20px;
    }

    .userCourser{
    color: ${colors.grey1};
    font-size: ${typography.headlineRegular.size};
    font-weight: ${typography.headlineRegular.weight};
    line-height: ${typography.headlineRegular.height};
    font-style: italic !important;
    }

    menu{
        display: flex;
        justify-content: space-between;
        width: 90vw;
        margin: 0 auto;
    }

    button {
        &:hover {
            background-color: ${colors.grey1};
        }
    }

    .modal{
        min-height: 400px;
        width: 90vw;
        background-color: ${colors.grey2};
        margin: 0 auto;
        margin-top: 20px;
        border-radius: 4px;
        display: flex;
        padding: 10px; 
        justify-content: flex-start;
        flex-direction: column;
        gap: 20px;
    }

    .registerTech{
        width: 90vw;
        height: 50vh;
        display: flex ;
        justify-content: center;
        h2{
            width: 90vw;
            height: 10%;
            padding: 10px;
            border-radius: 7px;
            background-color: ${colors.grey3};
        }
    }

    @media screen and (min-width: 800px){
        figure, .user{
            width: 70vw;
            flex-direction: row;
        }

        menu{
            width: 70vw;
        }


        hr{
            width: 95vw;
        }
    }
`
