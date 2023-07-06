import '../../App.css'
import '../layout/Programas.css'
const Programas = (props) => {
    return( <>
        <section id="programas">
    <div className="container">
        <h2 className="color-principal">PROGRAMAS</h2>
        <div className="container-cartas">
            <div className="cartas">
                <h3 >Css y HTML</h3>
                <p> HTML y CSS son dos lenguajes de programación esenciales para la creación de páginas web. HTML
                    (Hypertext Markup Language) se utiliza para definir la estructura y el contenido de una página
                    web,
                    mientras que CSS (Cascading Style Sheets) se utiliza para definir la presentación y el estilo
                    visual
                    de la página.</p>
                <form action="">
                    <button>Información</button>
                </form>
            </div>
            <div className="cartas">
                <h3> Java Script</h3>
                <p>JavaScript es un lenguaje de programación que se utiliza para crear interactividad y
                    funcionalidad en
                    las páginas web. Es uno de los lenguajes de programación más populares del mundo y es compatible
                    con
                    la mayoría de los navegadores web modernos.</p>
                <form action=""><button>Información</button></form>
            </div>
            <div className="cartas">
                <h3> Python</h3>
                <p>Python es un lenguaje de programación de alto nivel, interpretado y de propósito general.Es
                    utilizado
                    en muchos campos, desde la ciencia de datos y el aprendizaje automático hasta el desarrollo web
                    y la
                    automatización de tareas.</p>
                <form action=""><button>Información</button></form>
            </div>
        </div>
    </div>
</section>
</>



    )}
    export default Programas;