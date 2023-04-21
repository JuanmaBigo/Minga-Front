import { configureStore } from "@reduxjs/toolkit";
import textReducer from './search/reducer'
import mangaReducer from './Mangas/reducer'
import checkReducer from './checks/reducer'
import alertReducer from './Alert/reducer'
import authorReducer from './AuthorProfile/reducer'
import getmangas_reducer from './MyMangas/reducer'
import modalDelete_reducer from  './ModalDelete/reducer'
import modalEdit_reducer from './ModalEdit/reducer' 
import authorPanel_reducer from './PanelAuthors/reducer'
import SwitchPanel_reducer from './SwitchPanel/reducer'
import companyPanel_reducer from './PanelCompanies/reducer'

export const store = configureStore({
    reducer:{
        text: textReducer,
        mangas: mangaReducer,
        checks: checkReducer, 
        alert: alertReducer,
        author:authorReducer,
        getmangas: getmangas_reducer,
        showModalDelete: modalDelete_reducer,
        showModalEdit: modalEdit_reducer,
        panelAuthors: authorPanel_reducer,
        switchPanel: SwitchPanel_reducer,
        panelCompanies: companyPanel_reducer
    }
})