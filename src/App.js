import './App.css';
import {Users} from "./components/Users/Users";
import {Comments} from "./components/Comments/Comments";

function App() {
    return (
        <div className="App" style={{display:"flex"}}>
            <Comments/>
            <Users/>
        </div>
    );
}

export default App;
