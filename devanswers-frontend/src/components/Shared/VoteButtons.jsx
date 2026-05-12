import { Button } from 'react-bootstrap';
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';
import './VoteButtons.css';

const VoteButtons = ({ voteCount = 0, onUpvote, onDownvote, variant = 'link', size = 'sm' }) => {
  const btnClass =
    variant === 'outline'
      ? `vb-btn-outline vb-btn-outline-${size}`
      : 'vb-btn-link';

  return (
    <div className="vb-wrapper">
      <Button
        variant={variant === 'outline' ? 'outline-secondary' : 'link'}
        onClick={onUpvote}
        className={`vb-btn-up ${btnClass}`}
      >
        <FaArrowUp className="vb-icon-up" />
      </Button>

      <span className={`vb-count vb-count-${size}`}>{voteCount}</span>

      <Button
        variant={variant === 'outline' ? 'outline-secondary' : 'link'}
        onClick={onDownvote}
        className={`vb-btn-down ${btnClass}`}
      >
        <FaArrowDown className="vb-icon-down" />
      </Button>
    </div>
  );
};

export default VoteButtons;
