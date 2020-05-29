import React from 'react';

interface CardStatelessProps {
    name: string,
    email: string,
    id: number
}

const Card: React.SFC<CardStatelessProps> = ({name, email, id}) => {
    return (
        <div className='bg-light-green dib br3 pa3 ma2 grow bw22 shadow-5'>
            <img alt='robots' src={`https://robohash.org/${id}?size=200x200`}/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;