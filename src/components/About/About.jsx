import style from './About.module.css'
import miImagen from './image.jpg'


const About = () => {
    return (
        <div className={style.perfil}>
            <div className={style.info}>
            <h2>Lemuel Fenske</h2>
            <h3 className={style.datos}>20 años</h3>
            <h3 className={style.datos}>Argentina</h3>
            <h3 className={style.datos}>Full Stack Web Develooper</h3>
            </div>
            <img src={miImagen} className={style.img} />
        </div>
    )
}
export default About;