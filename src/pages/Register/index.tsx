import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { AuthContext } from '../../context/AuthContext'
import { schema }from '../../schema/schemaRegister'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { colors } from '../../style/colors'
import { MainStyle, ContentStyle } from './style'
import { InputPassword } from '../../components/InputPassword'
import Logo from '../../assets/Logo.svg'

export interface ISubmit{
    id: string
    name: string
    email: string
    password: string
    confirmPassword: string
    bio: string
    contact: string
    course_module: string
    }

export const Register = () => {

    const navigate = useNavigate()
    const { submit } = useContext(AuthContext)

    const {
        register, 
        handleSubmit,
        formState: { errors }
    } = useForm<ISubmit>({
        resolver: yupResolver(schema)
    })


    return (
    <MainStyle>
    <figure>
        <img src={Logo} alt='Logo da Kenzie' />
        <button onClick={() => navigate('/')} className='btnHome'>Voltar</button>
    </figure>
    <ContentStyle>
    <form onSubmit={handleSubmit(submit)}>
        <Input
        label='Nome'
        placeholder='Digite aqui seu nome'
        register={register}
        name='name'
        error={errors.name?.message}
        />
        <Input
        label='Email'
        placeholder='Digite aqui seu email'
        register={register}
        name='email'
        error={errors.email?.message}
        />
        <InputPassword
        label='Senha'
        placeholder='Digite aqui sua senha'
        register={register}
        name='password'
        error={errors.password?.message}
        />
        <InputPassword
        label='Confirmar Senha'
        placeholder='Digite novamente sua senha'
        register={register}
        name='confirmPassword'
        error={errors.confirmPassword?.message}
        />
        <Input
        label='Bio'
        placeholder='Fale sobre voc??'
        type='text'
        register={register}
        name='bio'
        error={errors.bio?.message}
        />
        <Input
        label="Contato"
        placeholder="Op????o de contato"
        type="number"
        register={register}
        name="contact"
        error={errors.contact?.message}
        />
        <p className='white'>Selecionar M??dulo</p>
        <select {...register('course_module')}>
        <option value='Primeiro m??dulo (Introdu????o ao Frontend)'>Primeiro m??dulo</option>
        <option value='Segundo m??dulo (Frontend Avan??ado)'>Segundo m??dulo</option>
        <option value='Terceiro m??dulo (Introdu????o ao Backend)'>Terceiro m??dulo</option>
        <option value='Quarto m??dulo (Backend Avan??ado)'>Quarto m??dulo</option>
        {<p className='error'>{errors.course_module?.message}</p>}
        </select>
        <Button 
        className='btnRegister'
        type='submit'
        bgColor={colors.colorPrimaryNegative}
        >
            Cadastrar
        </Button>
    </form>
    </ContentStyle>
    </MainStyle>
    )
}
