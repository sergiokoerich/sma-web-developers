import React, { useState, useEffect } from 'react';
import Insta from '../assets/insta.png'
import Wpp from '../assets/wpp.png'

export default function Footer () {
    const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

    useEffect(() => {
    const interval = setInterval(() => {
        setCurrentYear(new Date().getFullYear());
        }, 1000); // Atualiza a cada segundo para garantir que a data seja sempre atualizada

        return () => {
        clearInterval(interval); // Limpa o intervalo quando o componente é desmontado
        };
    }, []);
    return (
        
      <footer className="flex flex-col md:flex-row h-full w-full items-center justify-between p-5 bg-gradient-to-r from-blue-800 to-blue-400">
        <div className='flex flex-row mb-2'>
            <a target="_blank" href="#">
                <img className='h-20 w-20 mr-3 duration-200 hover:scale-125 active:scale-100' src={Insta}></img>
            </a>
            <a target="_blank" href="#">
                <img className='h-20 w-20 duration-200 hover:scale-125 active:scale-100' src={Wpp}></img>
            </a>
        </div>
        <p>&copy; {currentYear} SMA Web Developers. Todos os direitos reservados.</p>

      </footer>
  );
}