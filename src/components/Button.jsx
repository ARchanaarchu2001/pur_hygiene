import { Link } from "react-router-dom";

const Button = ({ text, className }) => {
  return (
    <Link to="/products" className={`${className ?? ""} cta-wrapper`}>
      <div className="cta-button group">
        <div className="bg-circle" />
        <p className="text">{text}</p>
        <div className="arrow-wrapper">
          <img src="/images/arrow-right.svg" alt="arrow" />
        </div>
      </div>
    </Link>
  );
};

export default Button;
