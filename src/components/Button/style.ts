import styled from 'styled-components'
import { colors } from '../../style/colors'
import { typography } from '../../style/typography'

export interface IProps{
    bgColor: string
}

export const ButtonStyle = styled.button<IProps>`
    width: 100%;
    height: 3.125rem;
    background-color: ${({bgColor}) => 
        bgColor ? bgColor : `${colors.grey3}`};
    border: none;
    border-radius: 4px;
    color: ${colors.whitePure};
    margin-top: 0.625rem;

    @media (max-width: 400px) {
    width: 100%;
    }
` 