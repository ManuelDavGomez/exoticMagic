import "./right.css";
import { BiSearch } from "react-icons/bi";

const Side_right = () => {
  return (
    <section className="right_container_general">
      <article className="searchers_bar">
        <input type="text" placeholder="Buscar..." />
        <BiSearch className="searchers_icon" size={30} />
      </article>

      <section className="right_container">
        <article className="right_list">
          <div className="xx" />
          <p>Coco</p>
        </article>
        <article className="right_list">
          <div className="xx" />
          <p>Junior</p>
        </article>
        <article className="right_list">
          <div className="xx" />
          <p>Michigun</p>
        </article>
      </section>

      <hr style={{ width: "100%" }} />

      <article className="right_list">
        <div className="xx" />
        <p>Mico</p>
      </article>
      <article className="right_list">
        <div className="xx" />
        <p>Chispa</p>
      </article>
      <article className="right_list">
        <div className="xx" />
        <p>Rayo</p>
      </article>
      <article className="right_list">
        <div className="xx" />
        <p>Pluton</p>
      </article>
      <article className="right_list">
        <div className="xx" />
        <p>Luna</p>
      </article>
      <article className="right_list">
        <div className="xx" />
        <p>Linda</p>
      </article>
    </section>
  );
};

export default Side_right;
