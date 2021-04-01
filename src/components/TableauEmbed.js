import React, {useRef, useEffect} from "react";

const { tableau } = window;

function TableauEmbed(){

    const ref = useRef(null);
    const url = "https://public.tableau.com/views/opendata_16169571385730/Dashboard1";
   const options = {device: "desktop"};


    function initViz(){
        new tableau.Viz(ref.current, url, options);
    }

    useEffect(() => {
        initViz();
    }, []);

    return (
    
        <div style={{
            position: 'absolute', left: '50%', top: '127%',
            transform: 'translate(-50%, -50%)'
        }}>
        <div ref={ref}>
        </div>
        </div>)
}



export default TableauEmbed;