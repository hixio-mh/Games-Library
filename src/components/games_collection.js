import React, { Component } from 'react';
import Slider from 'react-slick';

import './games_collection.css';

class GamesCollection extends Component {
	constructor(props) {
		super(props);

		this.state = {
			slideOpts: {
	      autoplay: true,
	      autoplaySpeed: 6000,
	      centerMode: true,
	      dots: false,
	      focusOnSelect: false,
	      infinite: true,
	      initialSlide: 0,
	      responsive: [
	      	{ breakpoint: 768, settings: { slidesToShow: 2 } },
	      	{ breakpoint: 1024, settings: { slidesToShow: 4 } },
	      	{ breakpoint: 1366, settings: { slidesToShow: 6 } },
	      	{ breakpoint: 10000, settings: { slidesToShow: 6 } }
      	],
      	slidesToScroll: 1,
	      speed: 500,
			}
		};
	}

	render() {
		const { games } = this.props;
		return(
			<div className="row">
				<Slider {...this.state.slideOpts}>
				{
					games.map((data) => {
					  return(
					  	<div className="game-cover" key={data.title}>
					  		<a href="/check">
						  		<img src={data.imageUrl} style={{ width: '100%' }} alt={data.title}/>
					  		</a>
						    <p className="game-title">{data.title}</p>
						  </div>
					  )
					})
				}
				</Slider>
			</div>
		);
	}
}

export default GamesCollection;