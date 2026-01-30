import { useNavigate } from "react-router";
import { BackBtn, Logout } from "./assets/constract/button";
import { BgImg } from "./styless/navbarStyle";
import { MainContainer } from "./styless/geralStyle";

const Homepage = () => {
  const navigate = useNavigate();
  function backFunc() {
    navigate(-1);
  }
  return (
    <MainContainer>
      {/* <BgImg>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque aliquid
          nulla accusantium consequatur! Soluta illo quam vero praesentium
          eveniet recusandae hic adipisci. Magni, esse est rerum eum in
          dignissimos, magnam consectetur voluptatem eos deleniti
          necessitatibus! Officia sequi quis alias ratione iure molestiae quam.
          Hic sed, dignissimos soluta saepe accusantium illum placeat
          repudiandae voluptates ad excepturi magni quam sunt necessitatibus
          iste, dolorum dolor cum amet aperiam. Commodi voluptatem consequuntur,
          nam, corporis quae excepturi iste reiciendis voluptates libero sint
          vel! Dolor aspernatur velit mollitia! Illum alias qui adipisci soluta
          culpa, itaque laboriosam! Explicabo itaque corporis accusantium
          sapiente autem aut sint alias ducimus.
        </p>
      </BgImg> */}
      <button onClick={backFunc}>Back</button>
      <div>Home page</div>
      {/* <button onClick={BackBtn}>Back Btn</button> */}
      <BackBtn />
      <Logout />
    </MainContainer>
  );
};

export default Homepage;
