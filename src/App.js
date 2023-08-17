import Navbar from './components/navbar'
import Footer from './components/footer'
import Image from './assets/Image1.png'
import Image2 from './assets/arte-2.png'
import Insta from './assets/insta.png'
import Wpp from './assets/wpp.png'
import Layout from './assets/layout-icone.png'
import Eficiencia from './assets/eficiencia-icone.png'
import Seguranca from './assets/seguranca-icone.png'
import Rectangle from './assets/Rectangle.png'
import Menor from './assets/menor.png'
import Maior from './assets/maior.png'

function App() {
  return (
    <div>
      <Navbar/>
      <div id="home" className="h-screen bg-gradient-to-r from-blue-800 to-blue-400">
        <div className="flex flex-col w-full h-full p-12 lg:flex-row">
          <div className="flex-grow flex  h-full flex-col justify-center p-6 lg:mt-16 ">
            <div className=" text-white text-[32px] lg:text-[45px] text-center lg:text-left mt-20 font-custom font-bold ">
              WEBSITE PARA <br/>SUA EMPRESA
            </div>
            <div className=" text-white lg:w-4/6 text-[15px] lg:text-[20px] font-custom font-bold mt-4 text-center lg:text-left">
              Desenvolvemos sites sob medida para empresas, comércios e diversos segmentos. 
              Entre em contato conosco e obtenha a melhor solução digital, alinhada com suas 
              necessidades e visão
            </div>
            <button 
              className='bg-white rounded-xl text-[10px] lg:text-[20px] lg:w-2/3 font-custom font-bold p-3 mt-7 
                          hover:bg-gradient-to-r from-blue-800 to-blue-400 hover:text-white
                          transition-all duration-300 ease-in-out'>
              FAÇA O ORÇAMENTO AQUI
            </button>
            <div className='flex flex-row lg:mt-10 mt-3 items-center justify-center lg:justify-start align-middle lg:mb-8'>
              <a target="_blank" href="#">
                <img className='h-16 w-16 mr-3 duration-200 hover:scale-125 active:scale-100' src={Insta}></img>
              </a>
              <a target="_blank" href="#">
                <img className='h-16 w-16 duration-200 hover:scale-125 active:scale-100' src={Wpp}></img>
              </a>
            </div>
          </div>
          <div className='flex w-full h-full items-center justify-center'>
          <img className="items-center justify-center lg:mt-32 lg:h-1//2 lg:w-1/2" src={Image} alt="Image" />
          </div>
        </div>
      </div>
      <div id='about' className='h-full w-full'>
        <div className='h-3/4 bg-white'>
          <div className='flex flex-col lg:flex-row p-16 justify-center gap-10'>
            <div className='flex flex-col items-center justify-center'>
              <img className='h-60 w-60' src={Layout}></img>
              <h3 className='mt-5 text-lg font-bold'>LAYOUT EXCLUSIVO</h3>
              <p className='w-60 text-center mt-5'>Explore uma experiência digital verdadeiramente única por meio do nosso layout exclusivo. Destaque-se!</p>
            </div>
            <div className='flex flex-col items-center justify-center'>
              <img className='h-60 w-60' src={Eficiencia}></img>
              <h3 className='mt-5 text-lg font-bold'>EFICIÊNCIA</h3>
              <p className='w-60 text-center mt-5'>Simplifique processos e alcance resultados excepcionais. Nossa eficiência é sua vantagem competitiva!</p>
            </div>
            <div className='flex flex-col items-center justify-center'>
              <img className='h-60 w-60' src={Seguranca}></img>
              <h3 className='mt-5 text-lg font-bold'>SEGURANÇA</h3>
              <p className='w-60 text-center mt-5'>Soluções de segurança inovadoras que você pode confiar. Protegendo seus dados com excelência</p>
            </div>
          </div>
        </div>
        <div className='lg:p-10 p-4 lg:pr-20 h-1/4 flex lg:gap-16 flex-col lg:flex-row items-center justify-center bg-gradient-to-r from-blue-800 to-blue-400'>
          <div className='lg:w-1/4 max-lg:mt-4 items-center flex justify-center'>
            <img className="items-center justify-center lg:mt-8 h-52 w-52 lg:h-60 lg:w-60" src={Image2} alt="Image" />
          </div>
          <div className='lg:w-1/3 w-2/3 text-white'>
            <h1 className='text-center lg:text-right font-bold text-[32px] lg:text-[45px]   mb-4'>SOBRE NÓS</h1>
            <p className='text-center lg:text-right'>Construímos o futuro digital através da nossa experiência em web development. Nossa equipe altamente qualificada oferece resultados excepcionais, focados no crescimento e na eficiência dos negócios dos nossos clientes.</p>
          </div>
        </div>
      </div>
      <div id='portfolio' className='h-full w-full justify-center p-20'>
        <div className='flex justify-center items-center align-middle gap-1 mb-10'>
          <img className='h-12 w-12 max-lg:h-8 max-lg:w-8' src={Menor}></img>
          <h1 className='justify-center flex font-bold text-4xl max-lg:text-3xl'>PORTFOLIO</h1>
          <img className='h-12 w-12 max-lg:h-8 max-lg:w-8' src={Maior}></img>
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
