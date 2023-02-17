import { useState } from 'react'
import { InputStyle, DivStyle} from './style'
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai'

export interface IProps{
    label: string
    register: Function
    name?: string
    error?: string
    [rest: string]:any
}

export function InputPassword({ label, register, name, error, type, ...rest}: IProps) {

    const [ showPassword, setShowPassword ] = useState(true)

    const teste = true

    return (
    <DivStyle>
        <p>
            {label} {!!error && <span> - {error}</span>}
        </p>

        <InputStyle>
        <input
            type={showPassword ? 'password' : 'text'}
            {...register(name)}
            {...rest}
            isErrored={!!error}
            >
        </input>
                {showPassword ?
                (<AiFillEyeInvisible style={{color: 'grey'}} onClick={() => setShowPassword(false)} /> ) :
                (<AiFillEye style={{color: 'grey'}} onClick={() => setShowPassword(true)} />)}
        </InputStyle>
    </DivStyle>
    );
}