import axios from '../../axios'
import React, { useEffect, useState } from 'react'
import './RowPost.css'
import { imageUrl, API_KEY } from '../../Constants/Constants'
import YouTube from 'react-youtube'
function RowPost(props) {
    const [movies, setMovies] = useState([])
    const [urlId, seturlId] = useState()
    useEffect(() => {
        axios.get(props.url).then((response) => {
            setMovies(response.data.results)
        })
    }, [])

    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
        },
    };
    function handleMovie(id){
        axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response)=> {
            if(response.data.results.length !==0){
                seturlId(response.data.results[0])
            }
        })
    }
    return (
        <div className='row'>
            <h2>{props.title}</h2>
            <div className="posters">
                {movies.map((obj) =>
                    <img onClick={() => handleMovie(obj.id)} className={props.isSmall ? 'small-poster' : 'poster'} src={`${imageUrl + obj.backdrop_path}`} alt="poster" />
                )}
            </div>
           {urlId && <YouTube videoId={urlId.key} opts={opts} /> }
        </div>
    )
}

export default RowPost