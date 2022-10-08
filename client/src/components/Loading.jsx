import s from './Loading.module.css'

const Loading = () => {
    return(
    <div>
        <div className={s.home}></div>
        <div className={s.load}>
           <h3>Loading...</h3>
           <img className={s.img} src='https://media.tenor.com/8sTMqGWjYAQAAAAC/ball-pokemon.gif' alt=''/>
        </div>
    </div>
    )
}

export default Loading