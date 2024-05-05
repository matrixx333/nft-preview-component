import './price.css';
import etheriumIcon from '../../assets/icon-ethereum.svg';
import clockIcon from '../../assets/icon-clock.svg';

function Price() {
    return (
        <div className="price-container">
            <div className="price-group">
                <img id="eth-icon" src={etheriumIcon} alt="Ethereum Icon" />
                <div id="price" className="caption-bold">0.041 ETH</div>
            </div>
            
            <div className="time-left-group">
                <img id="clock-icon" src={clockIcon} alt="Clock Icon" />
                <div id="time-left">3 days left</div>
            </div>
        </div>
    );
};

export default Price;