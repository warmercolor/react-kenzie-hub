import { ReactNode, useContext } from 'react'
import { AuthDash } from '../../context/DashContext'
import { Technology } from './style'
import Vector from '../../assets/icons/Vector.svg'

export interface IProps{
    title: string
    status: string
    tecId: string
    children: ReactNode
}

export function Tech({ title, status, tecId, children }: IProps) {
    const {deleteTechs} = useContext(AuthDash)

    return (
    <Technology>
        <p>{title}</p>
        <div>
            <p>{status}</p>
            <button onClick={() => deleteTechs(tecId)}>
            <img src={Vector} alt="lixeira" />
            </button>
        </div>
    </Technology>
    )
}