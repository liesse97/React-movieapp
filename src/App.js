import React,{useState,useEffect} from 'react';
import './App.css';
import FilmCard from './component/FilmCard';
import {Navbar,Nav,Container,FormControl,Form,Button} from 'react-bootstrap';

function App() {
  const [film, setFilm] = useState([]);
  const [movieSearch,setmovieSearch] = useState('');

  useEffect(() => {
    fetch(process.env.REACT_APP_API_URL)
    .then((res)=>res.json())
    .then(data=>{
      console.log(data);
      setFilm(data.results)
  })
  }, [])

const search = async(e)=>{
  e.preventDefault();
  console.log('search')
  //variable search api
  // try{
const urlSearch=`https://api.themoviedb.org/3/search/movie?api_key=222cb242b670484d3d3c617737aec12e&query=${movieSearch}`;
// const urlSearch=`${process.env.REACT_APP_API_SEARCH}=${movieSearch}`;


  //convert url inton json
  const res= await fetch(urlSearch);
  const data= await res.json();
  console.log(data);
  setFilm(data.results)

// }
//   catch(e){
// console.log(e)
//   }

}

const handler =(e)=>{
  setmovieSearch(e.target.value)

}

  
  return (
    <>
    <Navbar bg='dark' expand='lg' variant='dark' >
      <Container fluid style={{
    fontWeight:'600'}}> 
      <Navbar.Brand href ='/home'> MovieApp</Navbar.Brand>
            {/* <Navbar.Brand href ='/home'> Popular</Navbar.Brand>*/}
            {/* collapsible navbar bar */}
          <Navbar.Toggle arial-controls='navbarSroll'></Navbar.Toggle>
 
              <Navbar.Collapse id="navbarScroll">
                <Nav 
                className="me-auto my-2 my-lg-3" 
                style={{maxHeight:'110px'}}
                navbarScroll></Nav>
              <Form className="d-flex" onSubmit={search}>
              <FormControl
              type="search"
              placeholder="Movie Search"
              className="me-2"
              aria-label="search"
              name="search movies"
              value={movieSearch} onChange={handler}></FormControl>
              <Button variant="secondary" type="submit">Search</Button>
            </Form>


              </Navbar.Collapse>



      </Container>

    </Navbar>

    <div>
      { film && film.length > 0 ?(
<div className="App-cont">
          <div className="grid-cont">
      {/* mappping moviesattribute into moviecard components */}
{film.map((filmAttr)=><FilmCard key={filmAttr.id} {...filmAttr}/>)}  
    </div>
     </div>
    ):(
      
                 <h2>Movie Not Found!</h2>

    )}
    
        </div>
</>

  );
}

export default App;

