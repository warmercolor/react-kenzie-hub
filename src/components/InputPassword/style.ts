import styled from 'styled-components'
import { colors } from '../../style/colors'
export const DivStyle = styled.div`
html, body {
    overflow: hidden;
}

p{
    color: ${colors.grey0};
}

span {
    color: ${colors.colorNegativeYup};
}
`

export const InputStyle = styled.div`
    width: 100%;
    margin-bottom: 0.625rem ;
    background-color: ${colors.grey2};
    border: none;
    display: flex;
    justify-content: space-between;
    border-radius: 4px;
    align-items: center;
    
    svg{
        margin-right: 1rem;
    }
    
    input{
        color: ${colors.grey1};
        width: 100%;
        padding: 0.925rem ;
        border-radius: 4px;
        background-color: ${colors.grey2};
        border: none;
        outline: none;

    }

    @media (max-width: 400px) {
    width: 100%;
    }`