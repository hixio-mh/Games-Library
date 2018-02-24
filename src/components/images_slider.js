import React, { Component } from 'react';
import Slider from 'react-slick';

import './images_slider.css';

class ImageSlider extends Component {
	constructor(props) {
		super(props);

		this.state = {
			slideOpts: {				
	      autoplay: true,
	      autoplaySpeed: 6000,
	      centerPadding: '370px',
	      dots: false,
	      focusOnSelect: false,
	      infinite: true,
	      initialSlide: 0,
	      responsive: [
	      	{ breakpoint: 768, settings: { slidesToShow: 2 } },
	      	{ breakpoint: 1366, settings: { slidesToShow: 4 } },
	      	{ breakpoint: 10000, settings: { slidesToShow: 5 } }
      	],
      	slidesToScroll: 1,
	      speed: 500,
			}
		};
	}

	render() {
		const wrapperStyle = {
			// backgroundImage: `url(${imageUrl})`,
			backgroundPosition: 'center',
			backgroundSize: 'cover',
			backgroundRepeat: 'no-repeat'
		}
		const { games } = this.props;
		return(
			<div className="row">
				<Slider {...this.state.slideOpts}>
				{
					games.map((data) => {
					  return(<div className="game-cover card" key={data.title}>
					    <div className="wrapper" style={{...wrapperStyle, backgroundImage: `url(${data.imageUrl})`}}>
					      <div className="header">
					      </div>
					      <div className="data">
					        <div className="content">
					          <a href="#" className="button">Read more</a>
					        </div>
					      </div>
					    </div>
					    <p className="game-title">{data.title}</p>
					  </div>)
					})
				}
				</Slider>
			</div>
		);
	}
}

export default ImageSlider;