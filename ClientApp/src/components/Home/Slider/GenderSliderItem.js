import { Link } from 'react-router-dom';

const GenderSliderItem = () => {
  return (
    <div className="item">
      <img src="images/slider-1.jpg" alt="slide-1" className="img-responsive" />
      <div className="slider-desc">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="slide-offers-left">
                <div className="slide-offers-title"><span>За</span><br />Него</div>
                <p>Ексклузивни предложения <br />и нови колекции</p>
                <Link to="/men" className="btn btn-blue">Пазарувай </Link>
              </div>
            </div>
            <div className="col-md-6">
              <div className="slide-offers-right">
                <div className="slide-offers-title"><span>За</span><br />НЕЯ</div>
                <p>Ексклузивни предложения <br />и нови колекции</p>
                <Link to="/women" className="btn btn-blue">Пазарувай </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GenderSliderItem;