import React from 'react';
import { EventosConsumer } from "../context/EventosContext";//se importa el consumer para obtener los valores del provider
import Evento from './Evento'

const ListaEventos = () => {
    return (
        <div className="uk-child-width-1-3@m" uk-grid="true">
            <EventosConsumer>
                {
                    (value)=>{// así se utilizan los valores del provider
                        return value.eventos.map(evento=>{
                            return <Evento key={evento.id} evento={evento}/>
                        })
                    }
                }    
            </EventosConsumer>            
        </div>
    );
};

export default ListaEventos;