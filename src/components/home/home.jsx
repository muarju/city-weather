import { useState, useEffect } from 'react'
import { Container, Row, Col,Spinner } from 'react-bootstrap'
import { addSearchResult } from '../../redux/actions'

import { connect } from 'react-redux'

const mapStateToProps = state => ({
    searchResult: state.searchResult.result,
    searchValue: state.search.value,
})

const mapDispatchToProps = dispatch => ({
    addResultToSearchResult: (result) => dispatch(addSearchResult(result)),
})


function Home(props) {
    // State
    const [apiData, setApiData] = useState({});
    const [getState, setGetState] = useState('lisbon');
    const [state, setState] = useState('lisbon');

    // API KEY AND URL
    const apiKey = process.env.REACT_APP_API_KEY;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.searchValue}&appid=${apiKey}`;

    // Side effect
    useEffect(() => {
        fetch(apiUrl)
            .then((res) => res.json())
            .then((data) => {
                setApiData(data)
                return data
            })
            .then((data) => {
                return props.addResultToSearchResult(data)
            });
    }, [apiUrl]);


    const kelvinToFarenheit = (k) => {
        return (k - 273.15).toFixed(2);
    };
    return (
        <Container>
            <Row>
                <Col>
                    <div className="container">
                        <div className="card mt-3 mx-auto" style={{ width: '60vw' }} >
                            {props.searchResult[0] ===undefined ? <Spinner animation="border" /> : 
                            
                            <div class="card-body text-center">
                            <img
                                src={`http://openweathermap.org/img/w/${props.searchResult[0].weather[0].icon}.png`}
                                alt="weather status icon"
                                className="weather-icon"
                            />

                            <h2 className="h2">
                                {kelvinToFarenheit(props.searchResult[0].main.temp)}&deg; C <br />
                                <small style={{ fontSize: "small" }}>Feels Like {kelvinToFarenheit(props.searchResult[0].main.feels_like)}&deg; C</small>
                            </h2>

                            <p className="h5">
                                <i className="fas fa-map-marker-alt"></i>{' '}
                                
                                <strong>{props.searchResult[0].name}</strong>
                            </p>

                            <div className="row mt-4">
                                <div className="col-md-6">
                                    <p>Today's Lowest
                                        <i class="fas fa-temperature-low "></i>{' '}
                                        <strong>
                                            {kelvinToFarenheit(props.searchResult[0].main.temp_min)}&deg; C
                                        </strong>
                                    </p>
                                    <p>Today's Heights
                                        <i className="fas fa-temperature-high"></i>{' '}
                                        <strong>
                                            {kelvinToFarenheit(props.searchResult[0].main.temp_max)}&deg; C
                                        </strong>
                                    </p>
                                </div>
                                <div className="col-md-6">
                                    <p>
                                        {' '}
                                        <strong>{props.searchResult[0].weather[0].main}</strong>
                                    </p>
                                    <p>Humidity
                                        {' '}
                                        <strong>{props.searchResult[0].main.humidity}%</strong>
                                    </p>
                                </div>
                            </div>
                        </div>
                            
                            }
                            {/* {props.searchResult[0].main ? (
                                <div class="card-body text-center">
                                    <img
                                        src={`http://openweathermap.org/img/w/${props.searchResult[0].weather[0].icon}.png`}
                                        alt="weather status icon"
                                        className="weather-icon"
                                    />

                                    <h2 className="h2">
                                        {kelvinToFarenheit(props.searchResult[0].main.temp)}&deg; C <br />
                                        <small style={{ fontSize: "small" }}>Feels Like {kelvinToFarenheit(props.searchResult[0].main.feels_like)}&deg; C</small>
                                    </h2>

                                    <p className="h5">
                                        <i className="fas fa-map-marker-alt"></i>{' '}
                                        
                                        <strong>{props.searchResult[0].name}</strong>
                                    </p>

                                    <div className="row mt-4">
                                        <div className="col-md-6">
                                            <p>Today's Lowest
                                                <i class="fas fa-temperature-low "></i>{' '}
                                                <strong>
                                                    {kelvinToFarenheit(props.searchResult[0].main.temp_min)}&deg; C
                                                </strong>
                                            </p>
                                            <p>Today's Heights
                                                <i className="fas fa-temperature-high"></i>{' '}
                                                <strong>
                                                    {kelvinToFarenheit(props.searchResult[0].main.temp_max)}&deg; C
                                                </strong>
                                            </p>
                                        </div>
                                        <div className="col-md-6">
                                            <p>
                                                {' '}
                                                <strong>{props.searchResult[0].weather[0].main}</strong>
                                            </p>
                                            <p>Humidity
                                                {' '}
                                                <strong>{props.searchResult[0].main.humidity}%</strong>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <h1>Loading</h1>
                            )} */}
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);