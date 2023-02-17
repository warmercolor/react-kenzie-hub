import { useContext } from 'react'
import Logo from '../../assets/Logo.svg'
import { Tech } from '../../components/Tech'
import { AuthContext } from '../../context/AuthContext'
import { DashboardStyle } from './style'
import { BasicModal } from '../../components/BasicModal'


export const Dashboard= () => {

    const token = localStorage.getItem('@KenzieHub: token')
    
    const { user, setUser, loading, loginApi, techs, setTechs, submit, logout} = useContext(AuthContext)

    const username = user.name
    const course = user.course_module

    
    if ( loading ) {
        return null
    }

    return (
        <DashboardStyle>
        <div>
            <figure>
                <img src={Logo} alt="Kenzie Hub Logo" />
                <button
                onClick={logout}
                className='logout'
                >Logout</button>
            </figure>
            <hr />
            <div className='user'>
                <h2>Olá, {username} </h2>
                <p>{course}</p>
            </div>
            <hr />
            <menu>
                <h3>Tecnologias</h3>
                <BasicModal token={token}>
                    +
                </BasicModal>
            </menu>
                <div className='modal'>
                    {techs.length < 1 ? (
                        <div className='registerTech'>
                            <h2>Ainda não foi cadastrada nenhuma tecnologia :( </h2>
                        </div>
                    ): (
                    techs.map((t) => (
                        <Tech
                        key={t.id}
                        title={t.title} 
                        status={t.status} 
                        tecId={t.id}>
                        <button>
                                x
                        </button>
                        </Tech>
                        ))
                    )}
                </div>
        </div>
        </DashboardStyle>
    )
}
