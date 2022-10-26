import { InputContainer, ListaContainer, ListaTarefasContainer, Tarefa, TaskInput, AddTaskButton, RemoveButton, LinhaHorizontal, TarefaCompleta } from "./styled";
import bin from "../../assets/bin.png";
import { useState } from "react";


export function ListaTarefas() {
  const [lista, setLista] = useState(["Fazer exercícios", "Estudar React"]);
  const [novaTarefa, setNovaTarefa] = useState("");
  const [tarefaConcluida, setTarefaConcluida] = useState([])

  const onChangeTarefa = (event) => {
    setNovaTarefa(event.target.value);
  };

  const adicionaTarefa = () => {
    const novaLista = [...lista, novaTarefa];
    setLista(novaLista);
    setNovaTarefa("");
  };

  const adicionaTarefaComEnter = (event) => {
    if (event.key === "Enter") {
      adicionaTarefa();
    }
  };

  const removeTarefa = (tarefa, indexTarefa) => {
    const listaFiltrada = lista.filter((item, index) => {
      return (item !== tarefa) || (indexTarefa !== index)
    })
    setLista(listaFiltrada);
    setTarefaConcluida([...tarefaConcluida, tarefa])
  };

  return (
    <ListaTarefasContainer>
      <InputContainer>
        <TaskInput
          placeholder="Digite aqui uma tarefa"
          value={novaTarefa}
          onChange={onChangeTarefa}
          onKeyPress={adicionaTarefaComEnter}
        />
        <AddTaskButton onClick={adicionaTarefa} >Adicionar</AddTaskButton>
      </InputContainer>
      <ListaContainer>
        <ul>
          {lista.map((tarefa, index) => {
            return (
              <Tarefa key={index}>
                <p>{tarefa}</p>
                <RemoveButton onClick={() => removeTarefa(tarefa, index)}>
                  <img src={bin} alt="" width="16px" />
                </RemoveButton>
              </Tarefa>
            );
          })}
        </ul>
      </ListaContainer>
      <LinhaHorizontal />
      <ListaContainer>
        <ul>
          {tarefaConcluida.map((tarefa, index) => {
            return (
              <TarefaCompleta key={index}>
                <p>{tarefa}</p>
              </TarefaCompleta>
            );
          })}
        </ul>
      </ListaContainer>
    </ListaTarefasContainer>
  );
}
