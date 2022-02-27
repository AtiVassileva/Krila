import GenderSliderItem from './GenderSliderItem';
import PricesSliderItem from './PricesSliderItem';

const Slider = () => {
  return (
    <div id="main-slider">
      <div id="home-slider" className="owl-carousel owl-theme">
        <GenderSliderItem />
        <PricesSliderItem />
      </div>
    </div>
  );
}

export default Slider;