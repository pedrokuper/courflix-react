import React from 'react';
import {Link} from 'react-router-dom'
import './style.scss'


class Card extends React.Component {
  render(){
    const {thumbnail, alt,content} = this.props
    return(
      <>
      <Link to={`/content/${content.title.replace(/\s/g, "-").toLowerCase()}`}>
        <img className="carousel-thumbnail" src={thumbnail} alt={`${alt} thumnail`}/>
        </Link> 
      </>
    )
  }
}

export default Card;




