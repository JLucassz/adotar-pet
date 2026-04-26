import { Outlet } from "react-router-dom";

// Componentes
import Footer from "./components/layouts/Footer";
import Navbar from "./components/layouts/Navbar";
import Container from "./components/layouts/Container";
import Message from "./components/layouts/Message";

// Contexto
import { UserProvider } from "./context/UserContext";

function App() {
  return (
    <div className="App">
      <UserProvider>
        <Navbar />
        <Message />
        <Container>
          <Outlet />
        </Container>
        <Footer />
      </UserProvider>
    </div>
  );
}

export default App;
