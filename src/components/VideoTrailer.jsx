import axios from 'axios';
import React, { useEffect, useState } from 'react'
import styled from 'styled-components';

function VideoTrailer({ id, setPlayBtn, type }) {
  const [videoData, setVideoData] = useState([])


  async function getVideoMovie(id, type) {
    let { data } = await axios.get(`https://api.themoviedb.org/3/${type}/${id}/videos?api_key=c636ed7787cc302d96bf88ccf334e0d8&language=en-US`)
    setVideoData(data.results[0].key)
  }
  console.log(videoData)

  useEffect(() => {
    if (type === 'series') {
      getVideoMovie(id, 'tv')
    }
    if (type === 'movies') {
      getVideoMovie(id, 'movie')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  return (
    <>
      {videoData ?
        <ContainerVideo>
          <CloseVideo onClick={() => setPlayBtn(false)}></CloseVideo>
          <Video>
            <iframe
              width="700"
              height="400"
              src={`https://www.youtube.com/embed/${videoData}`}
              title="YouTube video player"
            ></iframe>
          </Video>
        </ContainerVideo>
        : ''}
    </>
  )
}

const ContainerVideo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(255, 255, 255, .20);   
    backdrop-filter: blur(3px);
    position:fixed;
    top:0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1000;
    `

const Video = styled.div`
  z-index: 1000;

  iframe{
    border-radius: 10px;
    border: none;
  }
`
const CloseVideo = styled.div`
  position:fixed;
  top:0;
  left: 0;
  right: 0;
  bottom: 0;
`
export default VideoTrailer