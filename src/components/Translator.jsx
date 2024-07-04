import React, { useRef, useState } from 'react'


function Translator() {

	const inputRef = useRef()
	const [translationResult, setTranslationResult] = useState('')
		const [selectedLanguage, setSelectedLanguage] = useState('en');
	  
		const handleChange = (event) => {
		  setSelectedLanguage(event.target.value);
		};
  

	const translateData = async(data, selectedLanguage)=> {
		if(data === ''){
			alert("Enter text")
			return;
		}
		try{
		
		const url = 'https://google-translate113.p.rapidapi.com/api/v1/translator/text';
	const options = {
		method: 'POST',
		headers: {
			'x-rapidapi-key': `${import.meta.env.VITE_APP_ID}`,
			'x-rapidapi-host': 'google-translate113.p.rapidapi.com',
			'Content-Type': 'application/json'
		},
		  body: JSON.stringify({		
			from: 'auto',
			to: `${selectedLanguage}`,
			text: `${data}`
		})
	};
	const response = await fetch(url, options);
	const result = await response.text();
	let parsedData = JSON.parse(result)
	setTranslationResult(parsedData.trans)
	
}
	
	catch(error){
		console.log(error);
	}

	}

const handleKeyDown = (event) => {
    if(event.key === 'Enter'){
      event.preventDefault();
      translateData(inputRef.current.value, selectedLanguage);
    }
  }

  return (
    <div className='box'>
        
        <input ref={inputRef} type="text" placeholder='Type here' onKeyDown={handleKeyDown} />
        

		<label>
      
      <select name={selectedLanguage} onChange={handleChange}>
	  <option value="en">English</option>
            <option value="hi">Hindi</option>
            <option value="zh">Chinese</option>
            <option value="ja">Japanese</option>
            <option value="es">Spanish</option>
            <option value="fr">French</option>
            <option value="ru">Russian</option>
            <option value="ar">Arabic</option>
            <option value="pt">Portuguese</option>
      </select>
    </label>

		<button onClick={()=>translateData(inputRef.current.value, selectedLanguage)}>Translate</button>
        <br/>
        <div>{translationResult}</div>
    </div>
  )
}
export default Translator