'use client';
type Props = {
  onClick?: () => void;
};

export default function BotonCambiarFoto({ onClick }: Props){
  return(
    <button 
      onClick={onClick}
      className="bg-green-500 bg-purpose-500 hover:bg-green-700 text-black px-4 py-2 rounded transition"
    >
       Cambiar Foto
    </button>
  );
}
