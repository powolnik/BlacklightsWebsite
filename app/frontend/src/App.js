import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen'
import ProjectDisplay from './screens/ProjectDisplay'

function App() {
  return (
    <Router>
      <div>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomeScreen />} exact />
            <Route path="/home" element={<HomeScreen />} />
            <Route path="/projects" element={<ProjectDisplay />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
