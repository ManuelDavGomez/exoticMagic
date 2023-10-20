import "./home.css";
import { BiImage, BiVideo, BiHeart, BiComment, BiShare } from "react-icons/bi";

const Home = () => {
  return (
    <>
      <section className="containers_general">
        <section className="news_container_general">
          <section className="news_container">
            <div className="z"></div>
            <section className="searcher_bar">
              <input type="text" placeholder="En que piensas hoy...." />
            </section>
          </section>

          <section className="news_icons">
            <article className="news_icons_text">
              <BiImage size={30} />
              <p>Agregar Imagen</p>
            </article>

            <article className="news_icons_text">
              <BiVideo size={30} />
              <p>Agregar video</p>
            </article>
          </section>
          <button>Publicar</button>
        </section>

        <section className="publicacion_container_general">
          <section className="publicacion_container">
            <div className="y"></div>
            <section className="names_container">
              <p className="name_publicacion">Junior el perro</p>
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

        <section className="publicacion_container_general">
          <section className="publicacion_container">
            <div className="y"></div>
            <section className="names_container">
              <p className="name_publicacion">Junior el perro</p>
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

        <section className="publicacion_container_general">
          <section className="publicacion_container">
            <div className="y"></div>
            <section className="names_container">
              <p className="name_publicacion">Junior el perro</p>
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

export default Home;
