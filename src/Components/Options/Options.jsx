import css from './Options.module.css'


export const Options = ({onUpdate, isHidden, onReset}) => {
  return (
      <div>
          <button className = {css.button} onClick={()=>onUpdate("good")} name="good">Good</button>
          <button className = {css.button} onClick={()=>onUpdate("neutral")} name="neutral">Neutral</button>
          <button className = {css.button} onClick={()=>onUpdate("bad")} name="bad">Bad</button>
          {!isHidden && <button className = {css.button} onClick={onReset}>Reset</button>}
      </div>
  )
}