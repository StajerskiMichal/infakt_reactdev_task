import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import infaktImage from '../assets/infaktLogo.png'
import ImageContainer from '../components/StyledComponents/ImageContainer'
import Ref from '../components/StyledComponents/Ref'
import { Routes } from '../enums/Route'
import Container from '../components/StyledComponents/Container'

const HomeView = () => {
  const { pathname } = useLocation()
  const navigate = useNavigate()

  return (
    <Container>
      <nav>
        <ImageContainer
          onClick={() => navigate(Routes.HomeView)}
          src={infaktImage}
          alt="icon"
        />
      </nav>
      <main>
        {pathname === Routes.HomeView && (
          <Ref to={Routes.AccountListView}>Przejdź do listy księgowych</Ref>
        )}
        <Outlet />
      </main>
    </Container>
  )
}

export default HomeView