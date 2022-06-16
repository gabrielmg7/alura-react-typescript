import { ITarefa } from '../../types/tarefa';
import Item from './Item';
import style from './Lista.module.scss';



function Lista({tarefas}: {tarefas: Array<ITarefa>}) {

  return (
    <aside className={style.listaTarefas}>
      <h2> Tasks do dia </h2>
      <ul>
        {tarefas.map((item, index) => (
          <Item key={index}
            {...item} //exibe tudo dentro de item
          />
        ))}
      </ul>
    </aside>
  )
}

export default Lista;