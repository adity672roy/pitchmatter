
const Button = ({ children, type = "button", onClick }) => (
  <button
    type={type}
    onClick={onClick}
    className="w-full bg text-white py-2 rounded-lg"
  >
    {children}
  </button>
);

export default Button;
