import "./Instructions.css";
import Comentarios from "../../../assets/Comentarios.png";
import BarraBusqueda from "../../../assets/BarraBusqueda.png";
import ExplorarApuntes from "../../../assets/ExplorarApuntes.png";
import Info from "../../../assets/InformacionesImg.png";
import MisArchivosImg from "../../../assets/MisArchivos.png";
import SubirArchivo from "../../../assets/SubirArchivo.png";
import VisualizarPublicacion from "../../../assets/VisualizarPublicacion.png";
import Progreso from "../../../assets/Progreso.png";
import Metricas from "../../../assets/Metricas.png";
import Pomodoro from "../../../assets/Pomodoro.png";

const instrucciones = [
  {
    titulo: "Busca apuntes de tu interés",
    cuerpo: "En la pestaña <b>'Explorar'</b>, podrás buscar y acceder a apuntes compartidos por otros estudiantes. Para visualizar más información sobre un apunte, solo debes hacer clic en él, lo que desplegará una ventana con detalles adicionales y opciones para guardar o comprar el material.",
    imagen: ExplorarApuntes,
  },
  {
    titulo: "Sube y comparte tus apuntes",
    cuerpo: "Comparte tus materiales a la comunidad UC, a través de la pestaña <b>'Mi página'</b>, podrás subir archivos en formato PDF o imagen, donde deberás colocarles un título descriptivo, un ramo y una breve descripción para que otros usuarios puedan encontrarlos fácilmente. Además, podrás asignarles un precio si es que deseas venderlos o compartirlos de forma gratuita.",
    imagen: SubirArchivo,
  },
  {
    titulo: "Organiza tus metas",
    cuerpo: "Desde <b>'Mi página'</b> puedes crear metas académicas personalizadas. Agrega tareas, marca tu progreso y mantén el foco en tus objetivos. Esta herramienta te permite visualizar tu avance y mantenerte motivado durante el semestre.",
    imagen: Progreso,
  }, 
  {
    titulo: "Revisa tus estadísticas",
    cuerpo: "En tu perfil encontrarás la sección <b>'Mi página'</b>, donde podrás ver cuántos likes has recibido, cuántos pomodoros has completado, cuántos archivos has publicado y cuántos apuntes has adquirido. Es una forma de medir tus avances y tu impacto en la comunidad.",
    imagen: Metricas,
  },
  {
    titulo: "Gestiona tus archivos",
    cuerpo: "En la pestaña <b>'Mis archivos'</b> puedes acceder a todos tus materiales. Se dividen en <i>Publicados</i> (visibles para otros), <i>Borradores</i> (aún no compartidos) y <i>Adquiridos</i> (archivos que guardaste o compraste). Desde aquí puedes editar, eliminar o publicar tus borradores.",
    imagen: MisArchivosImg,
  },
  {
    titulo: "Recibe y da retroalimentación",
    cuerpo: "Cada archivo tiene una sección de <b>comentarios</b> donde puedes dejar tu opinión, agradecer al autor o hacer sugerencias. También puedes recibir feedback sobre tus propios apuntes, lo que ayuda a mejorar su calidad y utilidad.",
    imagen: Comentarios,
  },
  {
    titulo: "Explora por ramo, contenido o usuario",
    cuerpo: "La barra de búsqueda en <b>'Explorar'</b> permite filtrar por ramo, contenido específico o nombre de usuario. Así puedes encontrar rápidamente lo que necesitas o seguir a quienes comparten materiales útiles. Además, puedes ordenar los archivos según popularidad o precio, para facilitar tu búsqueda según tus necesidades.",
    imagen: BarraBusqueda,
  },
  {
    titulo: "Recibe anuncios importantes",
    cuerpo: "En la pestaña <b>'Informaciones'</b> verás mensajes del moderador sobre actualizaciones, nuevos cursos disponibles, mejoras técnicas o recordatorios académicos. Es el canal oficial para mantenerte al día con lo que pasa en Lumen.",
    imagen: Info,
  },
  {
    titulo: "Visualiza tus archivos fácilmente",
    cuerpo: "Los archivos que adquieres se pueden visualizar directamente desde la plataforma en <b>'Mis archivos'</b>. Hemos mejorado la experiencia para que puedas hacer zoom, buscar dentro del PDF y navegar sin necesidad de descargar.",
    imagen: VisualizarPublicacion,
  },
  {
    titulo: "Usa el pomodoro para estudiar",
    cuerpo: "En <b>'Mi página'</b> puedes activar el temporizador Pomodoro para estudiar en ciclos de 25 minutos. Cada sesión se registra en tus estadísticas, ayudándote a medir tu concentración y progreso durante la semana.",
    imagen: Pomodoro,
  },
];

const Instructions = () => {
  return (
    <div className="instructions-wrapper">
      <header className="instructions-header">
        <h1 className="instructions-title">🧑🏼‍🏫 ¿Cómo usar Lumen? 🧑🏼‍🏫</h1>
      </header>

      <section className="instructions-grid">
        {instrucciones.map((item, index) => (
          <div className="instruction-card" key={index}>
            <h3>{item.titulo}</h3>
            <p dangerouslySetInnerHTML={{ __html: item.cuerpo }} />
            <img src={item.imagen} alt={item.titulo} className="instruction-img" />
          </div>
        ))}
      </section>
    </div>
  );
};

export default Instructions;
