import  React  from  'react';

const  DisplaySimpson = ({ character }) => {
    return (
        <div  className="DisplaySimpson">
            <img  src={character.image}  alt="picture"  />
            <ul>
                <li>
                    Name : {character.character}
                </li>
                <li>
                    Quote : {character.quote},
                </li>
            </ul>
        </div>
    );
};



export  default  DisplaySimpson;
