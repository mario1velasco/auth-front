// Llama Hooks solo en el nivel superior
// No llames Hooks dentro de ciclos, condicionales o funciones anidadas.
// En vez de eso, usa siempre Hooks en el nivel superior de tu función en React.
// Siguiendo esta regla, te aseguras de que los hooks se llamen en el mismo
// orden cada vez que un componente se renderiza. Esto es lo que permite a
// React preservar correctamente el estado de los hooks entre multiples
// llamados a useState y useEffect. (Si eres curioso, vamos a explicar esto
//   en detalle más abajo.)

// Llama Hooks solo en funciones de React
// No llames Hooks desde funciones JavaScript regulares. En vez de eso, puedes:

// ✅ Llama Hooks desde componentes funcionales de React.
// ✅ Llama Hooks desde Hooks personalizados (aprenderemos acerca de ellos en
//   la siguiente página).
// Siguiendo esta regla, te aseguras de que toda la lógica del estado de un
// componente sea claramente visible desde tu código fuente.

import React, { useState, useEffect } from 'react';

function FriendStatus(props) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `You clicked ${count} times`;
    // Se actualiza count si varía
  }, [count]);


  const [isOnline, setIsOnline] = useState(null);
  useEffect(() => {
    function handleStatusChange(status) {
      setIsOnline(status.isOnline);
    }

    ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);
    // Especifica cómo sanear este efecto:
    return function cleanup() {
      ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
    };
  });

  if (isOnline === null) {
    return 'Loading...';
  }
  // return isOnline ? 'Online' : 'Offline';

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}