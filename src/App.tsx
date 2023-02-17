import { Authorization } from './context/AuthContext'
import { RoutesUrl } from './routes/index'
import { Global } from './style/global'
import { DashboardApi } from './context/DashContext'
import { ToastContainer } from "react-toastify";

export const App = () => {



  return (
    <>
      <Global/>
      <Authorization>
        <DashboardApi>
        <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
        <RoutesUrl/>
        </DashboardApi>
      </Authorization>
    </>
  )
}

