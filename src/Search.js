import { Card } from "react-bootstrap";
import './App.css';

function Search() {
  return (

    <div style={{ backgroundColor: "white", margin: "10px", borderRadius: "5px"}} class="search">
      <Card>
        <input type="text" placeholder="Search..."></input>
      </Card>
    </div>

  )
}

export default Search