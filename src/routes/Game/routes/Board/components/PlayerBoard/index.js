import { useState } from "react";
import PokemonsCard from "../../../../../../components/PokemonsCard";
import cn from 'classnames';
import s from './playerBoard.module.css'

const PlayerBoard = ({player, cards, onClickCard }) => {
  const [isSelected, setSelected] = useState(null);

  return (
    <>
      {
        cards.map((item) => (
          <div className={cn(s.boardCard,
            { [s.selected]: isSelected === item.id })}
            onClick={() => {
              setSelected(item.id)
              onClickCard && onClickCard({
                player,
                ...item
              });  
            }
            }>
            <PokemonsCard
              key={item.id}
              id={item.id}
              type={item.type}
              name={item.name}
              img={item.img}
              values={item.values}
              isActive
              minimize
            />
          </div>
        ))
      }
    </>
  )
}

export default PlayerBoard;