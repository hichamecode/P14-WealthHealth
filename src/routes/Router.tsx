import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { ThemeProvider } from "@mui/material";
import { lightTheme, darkTheme } from "../utils/theme"; 
import { RootState } from "../store/store"; 

import CreateEmployee from "../pages/CreateEmployee";
import NewHome from "../pages/NewHome";
import Error from "../pages/Error";
import EmployeeList from "../pages/EmployeeList";

export default function Router() {
  const isDarkMode = useSelector((state: RootState) => state.theme.isDarkMode);

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <Routes>
        <Route path="/" element={<NewHome />} />
        <Route path="/create-employee" element={<CreateEmployee />} />
        <Route path="/employee-list" element={<EmployeeList />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </ThemeProvider>
  );
}


// creer readme pour expliquer le projet, ajouter la fonctionnalité de recherche pour la Table
// documentation obligatoire JSDOC , créer une lib à publier sur NPM avec son readme 
// créer un projet avec mon hichamebelyazid-modal, une seule lib pour la modale une props et un bool une fonction callback onclose 
// se renseigner comment créer une lib sur NPM avec Vite, créer compte npm, npm login et npm p
// ajouter author et keywords au package.json
// readme comme celle sur npm install

// lien vers le repo hr net, lien vers le repo projet modal et lien vers lib npm 
// je dois installer la lib et l'installer (faire des commits)


// exemple de code comment s'en servir + doc complete 
