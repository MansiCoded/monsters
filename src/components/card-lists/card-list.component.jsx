import { Card } from '../card/card.component';
import './card-list.styles.css';

export const CardList = props => (
    <div className='card-list'>
        {props.monsters.map(monst => (
             <Card key={monst.id} monster={monst}></Card>
        ))}
    </div>
);
    