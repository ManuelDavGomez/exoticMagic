import "./profile.css";
import banner from "../../img/banner.jpg";
import tigre from "../../img/tigre.jpg";
import { BiHeart, BiComment, BiShare } from "react-icons/bi";

const profile = () => {
  return (
    <>
      <section className="banner_container">
        <img className="banner_img" src={banner} alt="banner" />
      </section>

      <section className="perfil_container">
        <div>
          <img src={tigre} alt="" />
        </div>
      </section>

      <section className="info_container_general">
        <section className="info_container">
          <h1>Ligre el tigre</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure velit
            blanditiis vel, repellendus sapiente tenetur possimus, laborum
            dolore dolor nostrum maxime fugiat dolorum corporis, aut placeat
            impedit commodi recusandae quae?
          </p>
          <button>Follow</button>
        </section>
      </section>

      <section className="container_general">
        <section className="publicacion_container_general">
          <section className="publicacion_container">
            <div className="y"></div>
            <section className="names_container">
              <p className="name_publicacion">Ligre el leon</p>
              <p className="hora_publicacion">Hace 16 horas</p>
            </section>
          </section>

          <section className=" contenido_container">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis
              sequi, omnis, assumenda explicabo, accusantium iure impedit
              pariatur cum mollitia nemo perspiciatis odit inventore quae harum
              reiciendis incidunt sunt ducimus aspernatur.
            </p>
          </section>

          <section className=" publicacion_icons">
            <article className=" publi_icons_text">
              <BiHeart size={24} />
              <p>0 likes</p>
            </article>
            <article className=" publi_icons_text">
              <BiComment size={24} />
              <p>Comentarios</p>
            </article>
            <article className=" publi_icons_text">
              <BiShare size={24} />
              <p>Compartir</p>
            </article>
          </section>
        </section>

        <section className=" publicacion_container_general">
          <section className=" publicacion_container">
            <div className=" y"></div>
            <section className=" names_container">
              <p className=" name_publicacion">Ligre el leon</p>
              <p className=" hora_publicacion">Hace 16 horas</p>
            </section>
          </section>

          <section className="contenido_container">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis
              sequi, omnis, assumenda explicabo, accusantium iure impedit
              pariatur cum mollitia nemo perspiciatis odit inventore quae harum
              reiciendis incidunt sunt ducimus aspernatur.
            </p>
          </section>

          <section className=" publicacion_icons">
            <article className=" publi_icons_text">
              <BiHeart size={24} />
              <p>0 likes</p>
            </article>
            <article className="publi_icons_text">
              <BiComment size={24} />
              <p>Comentarios</p>
            </article>
            <article className="publi_icons_text">
              <BiShare size={24} />
              <p>Compartir</p>
            </article>
          </section>
        </section>

        <section className="publicacion_container_general">
          <section className="publicacion_container">
            <div className="yy"></div>
            <section className="names_container">
              <p className="name_publicacion">Ligre el leon</p>
              <p className="hora_publicacion">Hace 16 horas</p>
            </section>
          </section>

          <section className="contenido_container">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis
              sequi, omnis, assumenda explicabo, accusantium iure impedit
              pariatur cum mollitia nemo perspiciatis odit inventore quae harum
              reiciendis incidunt sunt ducimus aspernatur.
            </p>
          </section>

          <section className="publicacion_icons">
            <article className="publi_icons_text">
              <BiHeart size={24} />
              <p>0 likes</p>
            </article>
            <article className="publi_icons_text">
              <BiComment size={24} />
              <p>Comentarios</p>
            </article>
            <article className="publi_icons_text">
              <BiShare size={24} />
              <p>Compartir</p>
            </article>
          </section>
        </section>
      </section>
    </>
  );
};

export default profile;
