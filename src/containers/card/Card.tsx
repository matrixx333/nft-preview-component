import './card.css';
import eyeIcon from '../../assets/Eye.png'
import Price from '../../components/price/Price';
import Creator from '../../components/creator/Creator';

function Card() {
  return (
    <div className="card">
      <div className="card-content">
        <div className="img-container">
          {/* <img className="equilibrium" src={equilibriumImage} alt="Equilibrium" /> */}
          <div className="img-overlay"><img className="eye-icon" src={eyeIcon} alt="Eye"></img></div>
        </div>
        <div id="title" className="heading">Equilibrium #3429</div>
        <div id="description">Our Equilibrium collection promotes balance and calm.</div>
        <Price></Price>
        <hr />
        <Creator></Creator>
      </div>
    </div>
  );
}

export default Card;