import { createContext, ReactNode, useContext, useState } from 'react'
import  { toast } from 'react-toastify'
import { useNavigate, useLocation } from 'react-router-dom'
import { ILogin } from '../../pages/Login'
import { Api } from '../../services/Api'
import { SubmitHandler } from 'react-hook-form'
import { AuthContext, IProps, ITechs } from '../AuthContext'
import 'react-toastify/dist/ReactToastify.css'
import { IPropTech } from '../../components/BasicModal'



export interface IRegisterTech{
    title: string
    status: string
    created_at: Date
    id: string
    updated_at: Date
    user:  {}
}

export interface IDataTech{
    created_at: Date
    id: string
    status: string
    title: string
    updated_at: Date
    user: {}
}

export interface IResponseTech{
    title: string
    status: string
    data: string
    techs: ITechs[]
    created_at: string | Number
    id: string
    updated_at: Date
    user:  {}
}

export interface IAuthContext{
    modal: boolean
    logout: any
    techs: ITechs[]
    setTechs: (value: ITechs[]) => void
    deleteTechs: (tech_id: string) => Promise<void>
    technology: (data:IPropTech) => Promise<void>
    course: string | null
    open: boolean
    handleOpen: () => void
    handleClose: () => void
}

export interface IProp{
    children: ReactNode
}

export const AuthDash = createContext({} as IAuthContext)

export const DashboardApi = ({children}:IProps) => {
    
    const [modal, setModal] = useState(false)
    const { logout } = useContext(AuthContext)
    const { techs, setTechs } = useContext(AuthContext)
    
    const [open, setOpen] = useState(false)
    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)

    const course = window.localStorage.getItem('course')

        const technology:SubmitHandler<IPropTech> = async(data) => {

            try{
                const result = await Api.post('users/techs', data)
                
                toast.success('Tecnologia cadastra com sucesso!')
                setModal(false)
                setTechs([...techs, result.data])
                handleClose()
            }
            catch(error){
                console.log(error)
                toast.error('Erro ao cadastrar tecnologia')
            }
        }

    const deleteTechs = async (tech_id: any) => {
        try{
            const result = await Api.delete(`users/techs/${tech_id}`, tech_id)
            const listTech = techs.filter((tech) => {
                return tech.id !== tech_id
            })
            setTechs(listTech)
            toast.success('Tecnologia deletada')
        }
        catch ( error ) {
            console.log(error)
            toast.error('Não foi possivel deletar.')
        }
    }

    return (
        <AuthDash.Provider value={{modal, logout, techs, setTechs, deleteTechs, technology, course, open, handleOpen, handleClose}}>
            {children}
        </AuthDash.Provider>
    )
}
