'use client';

type Props = {
  onClick?: () => void;
};

export default function BotonEditar({ onClick }: Props){
  return(
    <button 
      onClick={onClick}
      className="bg-green-500 hover:bg-green-700 text-black px-3 py-2 rounded transition"  
    >
    Editar Informacion
    </button>
  );
}


