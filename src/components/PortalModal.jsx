import { useEffect } from 'react';
import reactDom from 'react-dom';


const PortalRoot = document.getElementById("portalmodal")

const PortalModal = ({ props }) => {
    const container = document.createElement("div")

    useEffect(() => {
       PortalRoot.appendChild(el)
        return () => PortalRoot.removeChild(el);
      });

      const { children } = props


    return reactDom.createPortal(children, container)
}

export default PortalModal