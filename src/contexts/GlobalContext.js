import React, { useReducer, createContext, useEffect } from "react";
import { ThemeProvider } from "styled-components";

// Providers
import ModalContext from "./ModalContext";

// styles
import { theme } from "style/theme";

export const GlobalStateContext = createContext();
export const GlobalDispatchContext = createContext();

const initialState = {
  error: false,
  errorMsg: null,
  language: "en",
  isDark: false,
  slow: 0,
  fast: 0,
  isTable: false,
  isBurguerMenu: false,
  isOpen: false,
  modalNode: null,
  nodeId: "",
  closeOnOverlayClick: true,
};

// isOpen, nodeId, modalNode, setModalNode, onPresent, onDismiss, setCloseOnOverlayClick

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_ERROR": {
      sessionStorage.setItem("error", action.payload.error);
      sessionStorage.setItem("errorMsg", action.payload.errorMsg);
      return {
        ...state,
        error: action.payload.error,
        errorMsg: action.payload.errorMsg,
      };
    }
    case "SET_THEME": {
      sessionStorage.setItem("isDark", JSON.stringify(!state.isDark));
      return {
        ...state,
        isDark: !state.isDark,
      };
    }
    case "SET_LANG": {
      sessionStorage.setItem("language", action.payload.language);
      return {
        ...state,
        language: action.payload.language,
      };
    }
    case "SET_GRID": {
      localStorage.setItem("isTable", JSON.stringify(!state.isTable));
      return {
        ...state,
        isTable: !state.isTable,
      };
    }
    case "SET_FAST": {
      return {
        ...state,
        fast: action.payload.fast,
      };
    }
    case "SET_SLOW": {
      return {
        ...state,
        slow: action.payload.slow,
      };
    }
    case "SET_BURGUER_MENU": {
      localStorage.setItem(
        "isBurguerMenu",
        JSON.stringify(!state.isBurguerMenu)
      );
      return {
        ...state,
        isBurguerMenu: !state.isBurguerMenu,
      };
    }
    case "SET_OPENMODAL": {
      return {
        ...state,
        isOpen: true,
        modalNode: action.payload.modalNode,
        nodeId: action.payload.nodeId,
      };
    }
    case "SET_DISMISSMODAL": {
      return {
        ...state,
        modalNode: undefined,
        isOpen: false,
        nodeId: "",
      };
    }
    case "SET_MODALNODE": {
      return {
        ...state,
        modalNode: action.payload.modalNode,
      };
    }
    case "SET_OVERLAYCLOSE": {
      return {
        ...state,
        closeOnOverlayClick: action.payload.closeOnOverlayClick,
      };
    }
    case "RESET": {
      return initialState;
    }
    default:
      console.error(`Invalid action type: ${action.type}`);
      throw new Error(`Invalid action type: ${action.type}`);
  }
};

const init = () => {
  if (typeof window !== `undefined`) {
    return {
      error: sessionStorage.getItem("error")
        ? JSON.parse(sessionStorage.getItem("error"))
        : false,
      errorMsg: sessionStorage.getItem("errorMsg")
        ? sessionStorage.getItem("errorMsg")
        : null,
      language: sessionStorage.getItem("language")
        ? sessionStorage.getItem("language")
        : "en",
      isDark: sessionStorage.getItem("isDark")
        ? JSON.parse(sessionStorage.getItem("isDark"))
        : false,
      fast: 0,
      slow: 0,
      isTable: localStorage.getItem("isTable")
        ? sessionStorage.getItem("isTable")
        : false,
      isBurguerMenu: localStorage.getItem("isBurguerMenu")
        ? JSON.parse(sessionStorage.getItem("isBurguerMenu"))
        : false,
      isOpen: false,
      modalNode: null,
      nodeId: "",
      closeOnOverlayClick: true,
    };
  } else {
    return initialState;
  }
};

const GlobalContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState, init);
  const { fast, slow } = state;

  useEffect(() => {
    const interval = setInterval(async () => {
      dispatch({ type: "SET_FAST", payload: { fast: fast + 1 } });
    }, 10000);
    return () => clearInterval(interval);
  }, [fast]);

  useEffect(() => {
    const interval = setInterval(async () => {
      dispatch({ type: "SET_SLOW", payload: { slow: slow + 1 } });
    }, 60000);
    return () => clearInterval(interval);
  }, [slow]);

  return (
    <>
      <GlobalStateContext.Provider value={state}>
        <GlobalDispatchContext.Provider value={dispatch}>
          <ThemeProvider theme={{ ...theme }}>
            <ModalContext
              dispatch={dispatch}
              isOpen={state.isOpen}
              closeOnOverlayClick={state.closeOnOverlayClick}
              modalNode={state.modalNode}
            >
              {children}
            </ModalContext>
          </ThemeProvider>
        </GlobalDispatchContext.Provider>
      </GlobalStateContext.Provider>
    </>
  );
};

export default GlobalContextProvider;
