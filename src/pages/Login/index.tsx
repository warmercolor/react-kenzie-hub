import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { schema } from '../../schema/schemaLogin'
import { AuthContext } from '../../context/AuthContext'
import { ContentStyle, MainStyle } from './style'
import { Button } from '../../components/Button'
import { colors } from '../../style/colors'
import { Input } from '../../components/Input'
import { InputPassword } from '../../components/InputPassword'
import Logo from '../../assets/Logo.svg'


export interface ILogin {
    email: string
    password: string
}

export const Login = () => {

    const navigate = useNavigate()

    const { loginApi } = useContext(AuthContext)

    const {
        register,
        handleSubmit, 
        formState: { errors } 
    } = useForm<ILogin>({
        resolver: yupResolver(schema)
    })

    return (
    <div>
        <MainStyle>
            <figure>
                <img src={Logo} alt="Logo Kenzie Hub" />
            </figure>
        <ContentStyle>
            <form onSubmit={handleSubmit(loginApi)}>
            <Input 
            label='Email'
            placeholder='Digite aqui seu email'
            register={register}
            name='email'
            error = {errors.email?.message}
            />
            <InputPassword
            label = 'Senha'
            placeholder = 'Digite aqui sua senha'
            type = 'password'
            register = {register}
            name = 'password'
            error = {errors.password?.message}
            />

            <Button className='btnEntry' bgColor={colors.colorPrimary} type='submit'>Entrar</Button>

            <p className='center'> Ainda não possui uma conta &#63; </p>

            <Button
            className='btnRegister'
            bgColor={colors.grey1}
            onClick={() => 
            navigate('/register')}>
                Cadastre-se
            </Button>
            </form>
        </ContentStyle>
        </MainStyle>
    </div>
    )
}
