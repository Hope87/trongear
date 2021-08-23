import { useEffect } from 'react';

function useOutsideModal(ref, modalOff) {
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        modalOff(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, modalOff]);
}

export default useOutsideModal;
