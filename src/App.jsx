function App() {
    const cores = ['Azul', 'Amarelo', 'Verde', 'Roxo'];
    return (
        <div>
            <h2>Lista de cores</h2>
            <ul>
                {cores.map((cor, index) =>
                    <li key={index}>{cor}</li>)}
            </ul>
        </div>
    )

}
export default App
