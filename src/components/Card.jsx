export default function Card({id, name, species, gender, image, onClose}) {
   return (
      <div>
         <hr />
         <button onClick={() => onClose(id)}>X</button>
         <h2>{name}</h2>
         <h2>{species}</h2>
         <h2>{gender}</h2>
         <img src={image} alt='' />
         <hr />
      </div>
   );
}
