import Header from '../components/header';
import Container from '../../components/container';
import { Title, Subtitle } from '../../components/title'



export default function Culture(){
        return(
            <Container>
                <Header/>
                <div>
                    <div className='pt-6'><Title>Escolha sua <br/>Cultura</Title></div>

                    <div class="grid grid-cols-2 gap-4">
                        <div className='mt-3 content-evenly '>
                            <img src="/avatar.png" className='inline-block'></img>
                            <p className='text-base font-serif'>Filhos da <br/>Floresta</p>
                        </div>
                        <div className='mt-3 text-'>
                            <img src="/avatar.png" className='inline-block'></img>
                            <p className='text-base font-serif'>Filhos da <br/>Floresta</p>
                        </div>
                        <div className='mt-3 text-'>
                            <img src="/avatar.png" className='inline-block'></img>
                            <p className='text-base font-serif'>Filhos da <br/>Floresta</p>
                        </div>
                        <div className='mt-3 text-'>
                            <img src="/avatar.png" className='inline-block'></img>
                            <p className='text-base font-serif'>Filhos da <br/>Floresta</p>
                        </div>
                    </div>
                </div>            
            </Container>  
    );
}