import { HistoryContainer, HistoryList } from "./styles";

export function History() {
  return (
    <HistoryContainer>
      <h1>Meu histórico</h1>
      <HistoryList>
        <table>
          <thead>
            <tr>
              <th>Tarefa</th>
              <th>Duração</th>
              <th>Início</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Trabalhar</td>
              <td>40 minutos</td>
              <td>10 de Abril de 2022</td>
              <td>Concluído</td>
            </tr>
            <tr>
              <td>Estudar</td>
              <td>40 minutos</td>
              <td>10 de Abril de 2022</td>
              <td>Concluído</td>
            </tr>
            <tr>
              <td>Estudar</td>
              <td>40 minutos</td>
              <td>10 de Abril de 2022</td>
              <td>Concluído</td>
            </tr>
            <tr>
              <td>Estudar</td>
              <td>40 minutos</td>
              <td>10 de Abril de 2022</td>
              <td>Concluído</td>
            </tr>
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  );
}
