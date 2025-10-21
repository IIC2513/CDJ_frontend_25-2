import "./Instructions.css";
import ejemploImg from "../../../assets/cdj.png";

const instrucciones = [
  {
    titulo: "Sube tus apuntes",
    cuerpo: "Comparte tus materiales con la comunidad UC.",
    imagen: ejemploImg,
  },
  {
    titulo: "Organiza tus metas",
    cuerpo: "Crea listas de tareas y sigue tu progreso académico.",
    imagen: ejemploImg,
  },
  {
    titulo: "Organiza tus metas",
    cuerpo: "Lorem ipsum dolor sit amet consectetur adipiscing elit morbi, lectus quisque felis mattis condimentum luctus cum, magnis fringilla aliquet scelerisque mollis quis velit. Nullam placerat facilisi dictumst id justo enim taciti sociis malesuada, hendrerit consequat est felis potenti nulla tellus bibendum porta egestas, feugiat vestibulum torquent laoreet nascetur sociosqu habitant montes. Suspendisse hendrerit tellus mauris ante accumsan netus dignissim facilisi, platea montes erat potenti sollicitudin vestibulum porta neque parturient, imperdiet felis feugiat rutrum cras maecenas velit. Venenatis gravida quisque donec vulputate congue sapien vestibulum felis lobortis, montes fames nisi cubilia nostra porta fermentum mi tortor, dapibus praesent nec massa curae enim euismod hendrerit. \n Eros parturient nec quam semper nascetur ac habitasse curabitur pretium, dictum viverra conubia penatibus nunc vestibulum a dis, interdum cursus sollicitudin mattis duis erat in quis. Nulla per integer mus vel aliquet dapibus commodo, montes luctus ut dictumst phasellus nostra, vehicula eleifend lacus in erat condimentum. Molestie vehicula facilisis praesent pretium litora faucibus nibh tristique pulvinar, cursus nam magna purus mollis egestas enim aliquet lacinia, habitasse gravida potenti euismod interdum elementum sodales congue.",
    imagen: ejemploImg,
  },{
    titulo: "Organiza tus metas",
    cuerpo: "Crea listas de tareas y sigue tu progreso académico.",
    imagen: ejemploImg,
  },{
    titulo: "Organiza tus metas",
    cuerpo: "Crea listas de tareas y sigue tu progreso académico.",
    imagen: ejemploImg,
  },{
    titulo: "Organiza tus metas",
    cuerpo: "Crea listas de tareas y sigue tu progreso académico.",
    imagen: ejemploImg,
  },{
    titulo: "Organiza tus metas",
    cuerpo: "Crea listas de tareas y sigue tu progreso académico.",
    imagen: ejemploImg,
  },{
    titulo: "Organiza tus metas",
    cuerpo: "Crea listas de tareas y sigue tu progreso académico.",
    imagen: ejemploImg,
  },{
    titulo: "Organiza tus metas",
    cuerpo: "Crea listas de tareas y sigue tu progreso académico.",
    imagen: ejemploImg,
  },
  // ...agrega hasta 20 elementos
];

const Instructions = () => {
  return (
    <div className="instructions-wrapper">
      <header className="instructions-header">
        <h1 className="instructions-title">¿Cómo usar Lumen?</h1>
      </header>

      <section className="instructions-grid">
        {instrucciones.map((item, index) => (
          <div className="instruction-card" key={index}>
            <h3>{item.titulo}</h3>
            <p>{item.cuerpo}</p>
            <img src={item.imagen} alt={item.titulo} className="instruction-img" />
          </div>
        ))}
      </section>
    </div>
  );
};

export default Instructions;
