import { VscMenu } from 'react-icons/vsc';
import { CgProfile } from 'react-icons/cg';

export default function Header(){
    return(
        <div>
            <div className='text-3xl flex flex-row justify-between'>
                <p className='mt-5'><VscMenu/></p>
                <img src="/logo_flame.png" alt="" className='w-14'/>
                <p className='mt-5 text-4xl'><CgProfile/></p>
            </div>
        </div>
    )
}
