import { ButtonStyle } from './style'
import { MouseEventHandler, ReactNode } from 'react'

export interface IProps{
    children: ReactNode
    bgColor: string
    type?: "button" | "submit" | "reset" | undefined
    onClick?: MouseEventHandler<HTMLButtonElement> | undefined
    className?: string 
}

export const Button = ( { children, bgColor, type, onClick, className }: IProps ) => {
    return (
    <ButtonStyle bgColor={bgColor} type={type} onClick={onClick} className={className}>
        {children}
    </ButtonStyle>
    )
}