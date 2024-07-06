import React from 'react'
import {Pill} from '@phosphor-icons/react'
import { Link } from 'react-router-dom'


function Navbar() {
 

  return (
    <>
     <div className='w-full bg-red-700 text-white flex justify-center py-4'>
          <div className="container flex justify-between text-lg">
            <div className='text-2xl font-bold uppercase flex'>Farmacia 
                <Pill size={32} weight='bold'/>
            </div>

            <div className='flex gap-4'>
                <Link to='/home'className='hover:underline'>Home</Link>
                <Link to='/categorias' className='hover:underline'>Categorias</Link>
                <Link to='/cadastroCategoria' className='hover:underline'>Cadastrar Categoria</Link>
              <div className='hover:underline'>Produtos</div>
              <div className='hover:underline'>Sair</div>
            </div>
          </div>
        </div>
    </>
  )
}

export default Navbar