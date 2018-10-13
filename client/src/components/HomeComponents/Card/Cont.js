import React from 'react';
import Card from './Card';

export const Cont = ({devs}) => (
    
    <div className="row">{devs.map((dev, i) => {
        return <Card key={i} git={dev.gitUrl} img={dev.img} name={dev.name} job={dev.job}/>
    })} </div>
);