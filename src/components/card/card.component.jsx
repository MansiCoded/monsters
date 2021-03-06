import './card.styles.css';
export const Card = props => (
    <div className='card-container'>
         <img alt='monsterImage' src={`https://robohash.org/${props.monster.name}?size=180x180`}/>
        <h2>{props.monster.name}</h2>
        <p>{props.monster.email}</p>
    </div>
);