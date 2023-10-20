import "./left.css";
import { BiHome, BiMessage, BiGame } from "react-icons/bi";
import { RiMemoriesLine, RiVideoAddFill } from "react-icons/ri";
import { CiSaveDown2 } from "react-icons/ci";
import { MdGroups2, MdEventAvailable } from "react-icons/md";
import { BsShop } from "react-icons/bs";
import { Link } from "react-router-dom";

const Side_left = () => {
  return (
    <section className="left_container_general">
      <section className="left_container">
        <article className="left_list">
          <Link to="/profile">
            <div className="xx" />
          </Link>
          <Link to="/profile">
            <p>Ligre el leon</p>
          </Link>
        </article>

        <article className="left_list">
          <Link to="/">
            <BiHome size={30} color="blue" />
          </Link>
          <Link to="/">
            <p>Inicio</p>
          </Link>
        </article>

        <article className="left_list">
          <BiMessage size={30} color="orange" />
          <p>Mensajes</p>
        </article>
      </section>

      <hr style={{ width: "100%" }} />

      <article className="left_list">
        <RiMemoriesLine size={30} color="skyblue" />
        <p>Recuerdos</p>
      </article>

      <article className="left_list">
        <CiSaveDown2 size={30} color="purple" />
        <p>Guardado</p>
      </article>

      <article className="left_list">
        <MdGroups2 size={30} color="DarkCyan" />
        <p>Grupos</p>
      </article>

      <article className="left_list">
        <RiVideoAddFill size={30} color="MediumAquamarine" />
        <p>Videos</p>
      </article>

      <article className="left_list">
        <MdEventAvailable size={30} color="FireBrick" />
        <p>Eventos</p>
      </article>

      <article className="left_list">
        <BiGame size={30} color="SteelBlue" />
        <p>Juegos</p>
      </article>

      <article className="left_list">
        <BsShop size={30} color="DodgerBlue" />
        <p>Marketplace</p>
      </article>
    </section>
  );
};

export default Side_left;
