import { ReactNode, useContext } from 'react'
import { useForm } from 'react-hook-form'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import { Input } from '../Input'
import { ButtonModal, HeaderModal, ContentModal } from './style'
import { colors } from '../../style/colors'
import { Button } from '../Button'
import { AuthDash } from '../../context/DashContext'
import { style } from './style'
import { yupResolver } from '@hookform/resolvers/yup'
import { schema } from '../../schema/schemaDashboard'

export interface IPropTech{
    title: string
    status: string
}

export interface IToken{
    token: string | null
    children: ReactNode
}

export const BasicModal = ({token}:IToken) => {

    const { open, handleOpen, handleClose, technology} = useContext(AuthDash)

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IPropTech>( { resolver: yupResolver(schema) } )

    return (
    <>
    <ButtonModal onClick={handleOpen} > &#43; </ButtonModal>
    <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
            <HeaderModal>
                <div>
                <h2>Cadastrar Tecnologia</h2>
                </div>
                <button onClick={handleClose} > &#215; </button>
            </HeaderModal>
            <ContentModal>
                <form onSubmit={handleSubmit(technology)}>
                    <Input
                    label='Nome'
                    placeholder='Ex: Typescript'
                    register={register}
                    name='title'
                    />
                    <p className='white'>Selecionar status</p>

                    <select {...register('status')}>
                    <option value="">Conhecimento</option>
                    <option value="Iniciante">Iniciante</option>
                    <option value="Intermediário">Intermediário</option>
                    <option value="Avançado">Avançado</option>
                    </select>
                    <Button bgColor={colors.colorPrimary} type='submit'>
                    Cadastrar Tecnologia
                    </Button>
                </form>
            </ContentModal>
        </Box>
    </Modal>
    </>
    )
}
