import Header from '../components/header';
import Container from '../../components/container';
import { Title, Subtitle } from '../../components/title'
import React, { useEffect, useState } from 'react';

export async function gett (){
      useEffect(() => {
        const getInfo = async () => {
          const culture = await fetch('http://localhost:5000/motor_admin/data/cultures', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        })
          const data = await culture.json()
        }
      getInfo()
    })

}


export default function Culture(){
    const cultures = [
        {
            title: 'Filhos de Timéria',
            permalink: 'filhos-de-timeria'
        }, 
        {
            title: 'Filhos de Eregor',
            permalink: 'filhos-de-eregor'
        }, 
        {
            title: 'Filhos de Arcádia',
            permalink: 'filhos-de-arcadia'
        }
    ];

    console.log(cultures);

    return(
        <Container>
            <Header/>
            <div>
                <div className='pt-6'><Title>Escolha sua <br/>Cultura</Title></div>

                <div className="grid grid-cols-2 gap-4">
                    {
                        cultures.map(function bring(culture){
                            return(
                            <div className='mt-3 content-evenly '>
                            <img src={`/cultures/${culture.permalink}.png`} className='inline-block'></img>
                            <p className='text-base font-serif'>{culture.title}</p>
                            </div>
                        )
                        }) 
                    }

                </div>
            </div>            
        </Container>  
    );
}