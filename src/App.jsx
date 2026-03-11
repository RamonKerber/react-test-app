import { useState } from "react";

function App() {
  const [contador, setContador] = useState(0);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100%",
        textAlign: "center"
      }}
    >
      <div
        style={{
          background: "#2d2d2d",
          padding: "40px",
          borderRadius: "12px",
          boxShadow: "0 10px 25px rgba(0,0,0,0.3)"
        }}
      >
        <div>
          <h1>Aplicação de Teste com React 🚀</h1>
          <p>Contador de cliques:</p>

          <h2>{contador}</h2>

          <button
            onClick={() => setContador(contador + 1)}
            style={{
              padding: "10px 20px",
              fontSize: "16px",
              cursor: "pointer",
              borderRadius: "8px",
              border: "none",
              backgroundColor: "#4CAF50",
              color: "white"
            }}
          >
            Clique aqui
          </button>

          {contador >= 5 && (
            <p style={{ marginTop: "20px", color: "green" }}>
              Você clicou bastante! 👏
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;