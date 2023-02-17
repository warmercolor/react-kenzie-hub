import { DivStyle, InputStyle } from './style'

export interface IProps{
    label: string
    register: Function
    name?: string
    error?: string
    [rest: string]:any
}

export function Input({ label, register, name, error, ...rest }: IProps ) {
    return (
    <DivStyle>
        <p>
            {label} {!!error && <span> - {error}</span>}
        </p>

        <InputStyle>
        <input
            type='text'
            {...register(name)}
            {...rest}
            isErrored={!!error}
            >
        </input>
        </InputStyle>
    </DivStyle>
    )
}