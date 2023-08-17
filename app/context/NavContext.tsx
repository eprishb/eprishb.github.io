import { createContext, useReducer } from "react"

const INITIAL_STATE = {
	activePage: '',
	dispatch: (arg0: any) => arg0,
}

export const NavContext = createContext(INITIAL_STATE)

const NavProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(NavReducer, INITIAL_STATE);

  const providerValues = {
		activePage: state.activePage,
		dispatch
  }

  return (
    <NavContext.Provider value={providerValues}>
      {children}
    </NavContext.Provider>
  )
}

export default NavProvider

export const NavReducer = (state: any, action: any) => {
	switch (action.type) {
		case 'UPDATE_PAGE':
			return {
				activePage: action.payload,
			};
		default:
			return state;
	}
}