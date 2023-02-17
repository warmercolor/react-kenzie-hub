import styled from "styled-components"
import { colors } from "../../style/colors"

export const Technology = styled.div`
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 85vw;
        border-radius: 6px;
        padding: 10px;
        background-color: ${colors.grey4};
        margin: 0 auto;

    div{
        display: flex;

        button{
            background-color: transparent;
            border: none;
            outline: none;
            /* margin-left: 1rem; */
        }
    }

` 