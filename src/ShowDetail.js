//import react from 'react';

function showDetail ({ type,status,akas}) { 

 return(
    <div>
        <p> Type: {type}</p>
        <p>Status: {status}</p>
        {akas.length > 0 && (
            <div>
                <h4>Alternate Names:</h4>
                <ul>
                    {akas.map((aka)=>(
                        <li key={aka.id}> {aka.name} ({aka.country.name})</li>
                    ))}
                </ul>
            </div>
        )}
    </div>
 )
  
}

export default showDetail
