import { useEffect, useState } from "react";

export const useVisibility = (ref: any) => {
	const [isVisible, setIsVisible] = useState(false);
	const [pageId, setPageId] = useState('');

	const threshold = pageId === 'portfolio' ? 0.25 : 0.5;

	const observer = new IntersectionObserver((([entry]) => {
		setIsVisible(entry.isIntersecting)
		setPageId(entry.target.id)
	}), {
		threshold: threshold
  });

	useEffect(() => {
    observer.observe(ref.current);

    return () => observer.disconnect()
  })
  
  return isVisible;
}