import Slider from 'react-slick'
import MovieItem from '../MovieItem'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './index.css'

const MoviesSlider = props => {
  const {moviesList} = props

  const settings = {
    dots: false,
    slidesToShow: 4,
    slidesToScroll: 1,
  }
  return (
    <div style={{padding: '30px'}}>
      <h1 className="heading">Action Movies</h1>
      <div style={{marginBottom: '30px'}}>
        <Slider {...settings}>
          {moviesList.map(eachItem =>
            eachItem.categoryId === 'ACTION' ? (
              <MovieItem eachItem={eachItem} />
            ) : (
              ''
            ),
          )}
        </Slider>
      </div>
      <h1 className="heading">Comedy Movies</h1>
      <div style={{marginBottom: '50px', paddingBottom: '30px'}}>
        <Slider {...settings}>
          {moviesList.map(eachItem =>
            eachItem.categoryId === 'COMEDY' ? (
              <MovieItem eachItem={eachItem} />
            ) : (
              ''
            ),
          )}
        </Slider>
      </div>
    </div>
  )
}

export default MoviesSlider
