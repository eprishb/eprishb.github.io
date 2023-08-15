import { useContext, useEffect, useRef } from "react"
import { NavContext } from "../context/NavContext";
import { useVisibility } from "./useVisibility";

export const useScrollIntoView = (pageId: string) => {
	console.log('page id: ', pageId);
	const ref = useRef(null);
	const { activePage, dispatch } = useContext(NavContext);

	const isVisible = useVisibility(ref);
	if(isVisible) console.log(pageId, 'is visible');
	useEffect(() => {
    if(isVisible && pageId !== activePage) {
			dispatch({ type: "UPDATE_PAGE", payload: pageId });
    }
	}, [isVisible, dispatch, pageId, activePage])
	
  return ref;
}