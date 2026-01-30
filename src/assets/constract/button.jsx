import { useNavigate } from "react-router";
import { Greenbtn } from "../../styless/geralStyle";

export const BackBtn = () => {
  const navigate = useNavigate();

  function handleBack() {
    navigate(-1);
  }

  return <Greenbtn onClick={handleBack}>back </Greenbtn>;
};
export const Logout = () => {
  const navigate = useNavigate();

  function handleLogout() {
    navigate("/login");
  }

  return <button onClick={handleLogout}>Logout </button>;
};
