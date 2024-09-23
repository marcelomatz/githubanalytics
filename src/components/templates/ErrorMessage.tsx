import Link from "next/link";
import React from "react";

interface ErrorMessageProps {
  message: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  return (
    <div className="flex flex-col w-full max-w-7xl mx-auto justify-center items-center min-h-screen">
      <div
        className="mx-auto text-center bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
        role="alert"
      >
        <strong className="font-bold">Ocorreu um erro: </strong>
        <span className="block sm:inline">{message}</span>
      </div>
      <div className="flex justify-center items-center my-10">
        <Link href="/" className="text-xl font-bold hover:underline">
          <p>Volte para a página inicial</p>
        </Link>
      </div>
    </div>
  );
};

export default ErrorMessage;
