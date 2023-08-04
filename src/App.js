import Navbar from './components/navbar'
import Footer from './components/footer'
import Image from './assets/Image1.png'
import Insta from './assets/insta.png'
import Wpp from './assets/wpp.png'
import Elipse from './assets/Ellipse.png'
import Rectangle from './assets/Rectangle.png'
import Menor from './assets/menor.png'
import Maior from './assets/maior.png'

function App() {
  return (
    <div>
      <Navbar/>
      <div id="home" className="h-screen bg-gradient-to-r from-blue-800 to-blue-400">
        <div className="flex flex-col w-full h-full p-12 md:flex-row">
          <div className="flex-grow flex p-12 h-full flex-col justify-center p-6 mt-16">
            <div className=" text-white text-[32px] md:text-[45px] text-center md:text-left mt-20 font-custom font-bold ">
              WEBSITE PARA <br/>SUA EMPRESA
            </div>
            <div className=" text-white md:w-4/6 text-[15px] md:text-[20px] font-custom font-bold mt-4 text-center md:text-left">
              Desenvolvemos sites sob medida para empresas, comércios e diversos segmentos. 
              Entre em contato conosco e obtenha a melhor solução digital, alinhada com suas 
              necessidades e visão
            </div>
            <button 
              className='bg-white rounded-xl text-[10px] md:text-[20px] md:w-2/3 font-custom font-bold p-3 mt-7 
                          hover:bg-gradient-to-r from-blue-800 to-blue-400 hover:text-white
                          transition-all duration-300 ease-in-out'>
              FAÇA O ORÇAMENTO AQUI
            </button>
            <div className='flex flex-row md:mt-10 mt-5 items-center justify-center md:justify-start align-middle md:mb-6'>
              <a target="_blank" href="#">
                <img className='h-16 w-16 mr-3 duration-200 hover:scale-125 active:scale-100' src={Insta}></img>
              </a>
              <a target="_blank" href="#">
                <img className='h-16 w-16 duration-200 hover:scale-125 active:scale-100' src={Wpp}></img>
              </a>
            </div>
          </div>
          <div className='flex w-full h-full items-center justify-center'>
          <img className="items-center justify-center md:mt-32 h-30 w-32 md:h-1//2 md:w-1/2" src={Image} alt="Image" />
          </div>
        </div>
      </div>
      <div id='about' className='h-full w-full'>
        <div className='h-3/4 bg-white'>
          <div className='flex flex-col md:flex-row p-16 justify-center gap-10'>
            <div className='flex flex-col items-center justify-center'>
              <img className='h-60 w-60 ' src={Elipse}></img>
              <h3 className='mt-5 text-lg font-bold'>LAYOUT EXCLUSIVO</h3>
              <p className='w-60 text-center mt-5'>Experiência digital única com nosso layout exclusivo - Destaque-se!</p>
            </div>
            <div className='flex flex-col items-center justify-center'>
              <img className='h-60 w-60 ' src={Elipse}></img>
              <h3 className='mt-5 font-bold'>EFICIÊNCIA</h3>
              <p className='w-60 text-center mt-5'>Simplifique processos e alcance resultados excepcionais - Nossa eficiência é sua vantagem competitiva!</p>
            </div>
            <div className='flex flex-col items-center justify-center'>
              <img className='h-60 w-60 ' src={Elipse}></img>
              <h3 className='mt-5 font-bold'>SEGURANÇA</h3>
              <p className='w-60 text-center mt-5'>Soluções de segurança inovadoras que você pode confiar - Protegendo seus dados com excelência</p>
            </div>
          </div>
        </div>
        <div className='md:p-10 p-4 md:pr-20 h-1/4 flex md:gap-16 flex-col md:flex-row items-center justify-center bg-gradient-to-r from-blue-800 to-blue-400'>
          <div className='md:w-1/4 max-md:mt-4 items-center flex justify-center'>
            <img className="items-center justify-center md:mt-20 h-52 w-52 md:h-46 md:w-46" src={Image} alt="Image" />
          </div>
          <div className='md:w-1/3 w-2/3 text-white'>
            <h1 className='text-center md:text-right mt-4 font-bold text-3xl mb-4'>SOBRE NÓS</h1>
            <p className='text-center md:text-right'>Construímos o futuro digital através da nossa experiência em web development. Nossa equipe altamente qualificada oferece resultados excepcionais, focados no crescimento e na eficiência dos negócios dos nossos clientes.</p>
          </div>
        </div>
      </div>
      <div id='portfolio' className='h-full w-full justify-center p-20'>
        <div className='flex justify-center items-center align-middle gap-1 mb-10'>
          <img className='h-12 w-12 max-md:h-8 max-md:w-8' src={Menor}></img>
          <h1 className='justify-center flex font-bold text-4xl max-md:text-3xl'>PORTFOLIO</h1>
          <img className='h-12 w-12 max-md:h-8 max-md:w-8' src={Maior}></img>
        </div>
        
        <div className='flex flex-wrap items-center justify-center gap-5'>
          <img className='h-60 w-60 ' src={Rectangle}></img>
          <img className='h-60 w-60 ' src={Rectangle}></img>
          <img className='h-60 w-60 ' src={Rectangle}></img>
          <img className='h-60 w-60 ' src={Rectangle}></img>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
