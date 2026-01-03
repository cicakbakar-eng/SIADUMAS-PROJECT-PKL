import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

function ServiceButton({ text, to, icon, variant }) {
  const navigate = useNavigate();

  return (
    <Button onClick={() => navigate(to)} variant={variant}>
      {icon && <span className="me-2">{icon}</span>}
      {text}
    </Button>
  );
}

export default ServiceButton;
