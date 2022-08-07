import { createContext, useState } from "react";
import { Keyboard } from "react-native";

export const NotesContext = createContext(null);

export const NotesContextProvider = ({ children }) => {
  const [notes, setNotes] = useState([]);

  const handleAddNotes = (text) => {
    Keyboard.dismiss();
    const note = {
      id: Math.floor(Math.random() * 999999),
      title: text,
    };
    if (text) {
      setNotes([...notes, note]);
    }
  };

  const handleDeleteNotes = (id) => {
    setNotes(notes.filter((item) => item.id !== id));
  };

  return (
    <NotesContext.Provider
      value={{
        notes,
        setNotes,
        handleAddNotes,
        handleDeleteNotes,
    
      
      }}
    >
      {children}
    </NotesContext.Provider>
  );
};
