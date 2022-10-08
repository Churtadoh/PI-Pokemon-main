import React from 'react'
import { useState } from 'react'
import SideBar from './SideBar'
import s from './Home.module.css'
import { useSelector } from 'react-redux'
import Loading from './Loading'

const Home = (props) =>{

    const loading = useSelector(state => state.isLoading)

    const arrayPokemon = props.arrayPokemon

    const itemsPage = 12

    const itemsRow = 3

    const[items , setItems] = useState([...arrayPokemon].splice(0,itemsPage))

    const[currentPage, setCurrentPage] = useState(1)

    const totalPages = Math.ceil(arrayPokemon.length/itemsPage)

    const nextHandler = () => {
        const totalElementos = arrayPokemon.length
        const nextPage = currentPage + 1
        const firstIndex = (nextPage-1) * itemsPage

        if(totalElementos/(nextPage-1) <= itemsPage) {return;}
        else {
            setItems([...arrayPokemon].splice(firstIndex,itemsPage))
            setCurrentPage(nextPage)
        } 
    }
  
    const prevHandler = () => {
        const prevPage = currentPage - 1
        if(prevPage<1) {return}

        const firstIndex = (prevPage-1) * itemsPage

        setItems([...arrayPokemon].splice(firstIndex,itemsPage))
        setCurrentPage(prevPage)
    }

    let matrix = []

    for(let i=0; i<=items.length; i++){
      let row = []
      for(let j=0; j<itemsRow; j++){
        row.push(items[i])
        i++
      }
      i = i-1
      matrix.push(<div key={i} className={s.grid}>{row}</div>)
    }

    return(loading? <Loading/> :
        <div>
           <h1 className={s.home}>Home: Pokemon</h1>
           <div className={s.general}>
              <div className={s.list}>
                <h3>Pagina: {currentPage} de {totalPages}</h3>
                  <div>
                    <button className={s.button} onClick={prevHandler}>Prev</button>
                    <button className={s.button} onClick={nextHandler}>Next</button>
                  </div>
                  <div>
                  {matrix}
                  </div>
              </div>
           <SideBar/>
           </div>
        </div>
    )
}

export default Home

