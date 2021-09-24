import React,{useState} from 'react'
import logo from '../../assets/img/logo.svg'
import {addSearchValue} from '../../redux/actions'
import {connect} from 'react-redux'

const mapStateToProps = state => ({
    searchValue: state.search.value,
  })
  
  const mapDispatchToProps = dispatch => ({
    addToSearchValue: (value) => dispatch(addSearchValue(value)),
  })

function Navbar(props) {

    const [state, setstate] = useState('');

    const inputHandler = (event) => {
        setstate(event.target.value);
      };
      
      const submitHandler = () => {
        props.addToSearchValue(state)
      };


    return (
        <div>
            <div class="container-fluid bg-light">
                <nav class="navbar navbar-expand-lg navbar-light bg-light container">
                    <a class="navbar-brand" href="#">
                        <img src={logo} alt="Logo" style={{height: "30px",marginRight: "5px"}}/>City Weather</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse justify-content-end" id="navbarScroll">
                        
                       <div className="col-md-4 d-flex">
                       <input class="form-control mr-2"
                         type="search" 
                         placeholder="Type a city Name" 
                         aria-label="Search"
                         onChange={inputHandler}
                         value={state} />
                        <button class="btn btn-outline-success" type="submit" onClick={submitHandler}>Search</button>
                       
                       </div>
                    </div>
                </nav>
            </div>
            
        </div>
    )
}
export default connect(mapStateToProps, mapDispatchToProps)(Navbar);