import react from "react";

// const defaultTodos = [
//   {text: 'Iniciar curso', completed: false},
//   {text: 'Continuar curso', completed: true},
//   {text: 'Componentes de React.js', completed: false},
//   {text: 'Prueba eliminar', completed: false},
// ];
// localStorage.setItem("TODOS_V1", JSON.stringify(defaultTodos));

function useLocalStorage (itemName, initialValue) {
  const [item, setItem] = react.useState(initialValue);
  const [loading, setLoading] = react.useState(true);
  const [error, setError] = react.useState(false);


  react.useEffect(()=>{
    setTimeout(()=>{
      try {
        let localItem = localStorage.getItem(itemName);
        if ( !localItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          localItem = itemName;
        } else {
          localItem = JSON.parse(localItem);
          setItem(localItem);
        }
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(true);
      }
    }, 2000);
  }, []);
    
    const saveItem = (newItem) => {
      localStorage.setItem(itemName, JSON.stringify(newItem));
      setItem(newItem);
    };
  
    return {item, saveItem, loading, error};
  }


  export { useLocalStorage }