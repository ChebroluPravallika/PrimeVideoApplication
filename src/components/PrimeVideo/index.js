import {Component} from 'react'
import MoviesSlider from '../MoviesSlider'
import './index.css'

class PrimeVideo extends Component {
  render() {
    const {moviesList} = this.props
    return (
      <div
        className="container"
        style={{backgroundColor: '#000000', height: '100%'}}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
          alt="prime video"
          className="Image"
        />
        <MoviesSlider moviesList={moviesList} />
      </div>
    )
  }
}

export default PrimeVideo
