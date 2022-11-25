import Logo from '../components/logo'
import Button from '../components/button'
import Input from '../components/input'
import Container from '../components/container'
import { BsArrowLeftCircle } from 'react-icons/bs'
import Checkbox from '../components/checkbox'
import Link from '../components/link'
import Title from '../components/title'

function Signup() {
    return (
        <div>
            <Container>
                <p>
                    <a href="/">
                        <span className='text-4xl float-left'><BsArrowLeftCircle></BsArrowLeftCircle></span>
                        <span className='align-middle text-xl ml-3 mt-1 inline-block'>
                            Voltar
                        </span>
                    </a>
                </p>
            </Container>
            <div className="pt-14">
                <Logo></Logo>
            </div>
            <Container>
                <div className='mt-12'>
                    <Title>Nova conta</Title>
                </div>
                <form action="">
                    <div className='mt-7'>
                        <Input label={'Nome'} placeholder='Ex: Fulano da Silva' type={'name'}> </Input>
                    </div>
                    <div className='mt-7'>
                        <Input label={'Nickname'} placeholder='Ex: fulano29' type={'name'}> </Input>
                    </div>
                    <div className='mt-7'>
                        <Input label={'E-mail'} placeholder='Ex: fulano29@gmail.com' type={'e-mail'}> </Input>
                    </div>
                    <div className='mt-7'>
                        <Input label={'Senha'} placeholder='Ex: SenhaSecreta123' type={'password'}> </Input>
                    </div>
                    <div className='mt-7'>
                        <Input label={'Confirme sua senha'} placeholder='Ex: SenhaSecreta123' type={'password'}> </Input>
                    </div>
                    <div className='mt-10'>
                        <Checkbox>Estou de acordo com a <Link>Politica de Privacidade.</Link></Checkbox>
                    </div>
                    <div className='mt-5'>
                        <Checkbox>Aceito receber novidades sobre a marca.</Checkbox>
                    </div>
                    <div className='mt-7'>
                    <Button>Enviar</Button>
                    </div>
                </form>
            </Container>
        </div>
    )
}

export default Signup
