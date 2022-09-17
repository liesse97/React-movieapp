import React,{useState} from 'react'
import{Modal,show,Button} from 'react-bootstrap'


const FilmCard = ({title,poster_path,release_date,vote_average,overview}) => {
 const [show, setShow] = useState(false)

 const handleOpen=()=> setShow(true)
  const handleClose=()=> setShow(false)

 
  return (
    <div className='card text-center bg-secondary mb-4'>
        <div className='card-body' style={{
    backgroundColor:'#212529'}}>
                    <img className='card-img-top'src={process.env.REACT_APP_API_IMG + poster_path} alt="" />
 <div className='card-body'>
    <button type="button" className="btn btn-warning" onClick={handleOpen}>Read more</button>
<Modal show={show} onHide={handleClose}>
<Modal.Header closeButton>
    <Modal.Title>{title}</Modal.Title>
  </Modal.Header>

  <Modal.Body>
      <img className='card-img-top' style={{width:'224px'}}src={process.env.REACT_APP_API_IMG +poster_path} alt="" />
      <h4>Overview</h4>
      <p>{overview}</p>
      <h6>Release Date:{release_date}</h6>
      <h6>ImDB: {vote_average}</h6>
        </Modal.Body>
<Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>


 
</Modal>
 </div>
        </div>
    </div>

  )
}

export default FilmCard
