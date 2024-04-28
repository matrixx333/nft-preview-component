import './card.css';
import equilibriumImage from '../../assets/image-equilibrium.jpg'
import Price from '../../components/price/Price';
import Creator from '../../components/creator/Creator';

function Card() {
  return (
    <div className="card">
      <div className="card-content">
        <img src={equilibriumImage} alt="Equilibrium" />
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