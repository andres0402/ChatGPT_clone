import { useState } from "react";
import { useRef } from 'react';


export function SearchBar(){

    const fileInputRef = useRef(null);
    const [isEmpty, setIsEmpty] = useState(true)

    const handleClick = () => {
        fileInputRef.current.click(); // Simular el clic en el input de tipo file
    };

    const handleInputChange = (event) =>{
        if (event.target.value == '' && !isEmpty){
            setIsEmpty(true)
        }
        else if (event.target.value != '' && isEmpty){
            setIsEmpty(false)
        }
    }


    return (
        <>
        <div className="flex flex-col gap-1 items-center">
			<div className="flex flex-row gap-2 bg-zinc-700 rounded-full px-4 py-3 w-[50%]">
                <input type="file" ref={fileInputRef} className="hidden"/>
				<button onClick={handleClick}>
					<svg width="24" color="white" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M9 7C9 4.23858 11.2386 2 14 2C16.7614 2 19 4.23858 19 7V15C19 18.866 15.866 22 12 22C8.13401 22 5 18.866 5 15V9C5 8.44772 5.44772 8 6 8C6.55228 8 7 8.44772 7 9V15C7 17.7614 9.23858 20 12 20C14.7614 20 17 17.7614 17 15V7C17 5.34315 15.6569 4 14 4C12.3431 4 11 5.34315 11 7V15C11 15.5523 11.4477 16 12 16C12.5523 16 13 15.5523 13 15V9C13 8.44772 13.4477 8 14 8C14.5523 8 15 8.44772 15 9V15C15 16.6569 13.6569 18 12 18C10.3431 18 9 16.6569 9 15V7Z" fill="currentColor"></path></svg>
				</button>
				<input placeholder="Envía un mensaje a ChatGPT" className="bg-transparent w-full outline-none caret-white text-white" onChange={handleInputChange}/>
				<button className={`rounded-full bg-zinc-400 gap-3 ${isEmpty ? "pointer-events-none" : "bg-white"}`}>
					<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="icon-2xl"><path fill-rule="evenodd" clip-rule="evenodd" d="M15.1918 8.90615C15.6381 8.45983 16.3618 8.45983 16.8081 8.90615L21.9509 14.049C22.3972 14.4953 22.3972 15.2189 21.9509 15.6652C21.5046 16.1116 20.781 16.1116 20.3347 15.6652L17.1428 12.4734V22.2857C17.1428 22.9169 16.6311 23.4286 15.9999 23.4286C15.3688 23.4286 14.8571 22.9169 14.8571 22.2857V12.4734L11.6652 15.6652C11.2189 16.1116 10.4953 16.1116 10.049 15.6652C9.60265 15.2189 9.60265 14.4953 10.049 14.049L15.1918 8.90615Z" fill="currentColor"></path></svg>
				</button>
			</div>
			<span className="text-xs text-zinc-400">ChatGPT puede cometer errores. Comprueba la información importante.</span>
		</div>
        </>
    )
}