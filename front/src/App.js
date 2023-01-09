import { Route, Routes } from 'react-router-dom'
import Weapons from './components/weapons/weapons';
import './App.css'
function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Routes>
                    <Route path="/" element={<Weapons/>} exact/>
                </Routes>
            </header>
        </div>
    );
}

export default App;
