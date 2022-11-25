import Logo from '../components/logo'
import Button from '../components/button'
import Input from '../components/input'
import Container from '../components/container'
import { BsArrowLeftCircle } from 'react-icons/bs'
import Checkbox from '../components/checkbox'
import Link from '../components/link'
import Title from '../components/title'
import { useState } from 'react'

function Signup() {
    const [nickname, setNickName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [terms, setTerms] = useState('')

    function handleSubmit(event) {
        event.preventDefault()
        console.log("enviou")
        if (password == confirmPassword && terms) {
            fetch('/api/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ nickname, email, password })
            })
        } else {
            console.log("Errorrr")
        }
    }



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
                        <Input
                            label={'Nome'}
                            placeholder='Ex: Fulano da Silva'
                            type={'name'}>
                        </Input>
                    </div>
                    <div className='mt-7'>
                        <Input
                            onChange={e => setNickName(e.target.value)}
                            label={'Nickname'}
                            placeholder='Ex: fulano29'
                            type={'name'}>
                        </Input>
                    </div>
                    <div className='mt-7'>
                        <Input
                            onChange={e => setEmail(e.target.value)}
                            label={'E-mail'}
                            placeholder='Ex: fulano29@gmail.com'
                            type={'e-mail'}>
                        </Input>
                    </div>
                    <div className='mt-7'>
                        <Input
                            onChange={e => setPassword(e.target.value)}
                            label={'Senha'}
                            placeholder='Ex: SenhaSecreta123'
                            type={'password'}>
                        </Input>
                    </div>
                    <div className='mt-7'>
                        <Input
                            onChange={e => setConfirmPassword(e.target.value)}
                            label={'Confirme sua senha'}
                            placeholder='Ex: SenhaSecreta123'
                            type={'password'}>
                        </Input>
                    </div>
                    <div className='mt-10'>
                        <Checkbox onChange={e => setTerms(e.target.checked)}>Estou de acordo com a <Link>Politica de Privacidade.</Link></Checkbox>
                    </div>
                    <div className='mt-5'>
                        <Checkbox>Aceito receber novidades sobre a marca.</Checkbox>
                    </div>
                    <div className='mt-7'>
                        <Button onClick={event => handleSubmit(event)}>Enviar</Button>
                    </div>
                </form>
            </Container>
        </div>
    )
}

export default Signup
