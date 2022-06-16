import Popup from 'reactjs-popup'

import 'reactjs-popup/dist/index.css'

import ReactPlayer from 'react-player'

import {IoMdClose} from 'react-icons/io'

import './index.css'

const MovieItem = props => {
  const {eachItem} = props

  return (
    <div className="popup-container">
      <Popup
        modal
        trigger={
          <button type="button" className="button">
            <img
              src={eachItem.thumbnailUrl}
              alt="thumbnail"
              className="thumbNailImg"
            />
          </button>
        }
      >
        {close => (
          <>
            <button
              type="button"
              className="trigger-button closeButton"
              onClick={() => close()}
              testid="closeButton"
            >
              <IoMdClose />
            </button>
            <div>
              <ReactPlayer url={eachItem.videoUrl} width="100%" />
            </div>
          </>
        )}
      </Popup>
    </div>
  )
}

export default MovieItem
