import './TokenCard.css';

const TokenCard = ({ stateToken, selectedToken, onCardClick }) => {
  return (
    <div
      className={`token-card-container ${stateToken === selectedToken ? 'token-card-container--selected' : ''}`}
      onClick={onCardClick}
    >
      <span className='token-text'>
        {stateToken}
      </span>
    </div>
  );
};

export default TokenCard;
