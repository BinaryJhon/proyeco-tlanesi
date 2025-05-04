'use client';

type Props = {
  onClick?: () => void;

};

export default function BotonCambiasPassword({ onClick }: Props){
  return(
    <button
      onClick={onClick}
      className="bg-green-500 hover:bg-green-700 text-black px-3 py-1 rounded transition"
    >
      Cambiar contraseña
    </button> 
  );
}
