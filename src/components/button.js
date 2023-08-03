export default function Button({ text, href }) {
    return (
      <>
        <a
          href={href}
          className="
            inline-flex items-center justify-center h-12 px-10 py-0 text-xl font-semibold text-center
          text-black no-underline align-middle transition-all duration-300 ease-in-out bg-transparent border-2
          border-white border-solid bg-white rounded-full cursor-pointer select-none 
            font-custom hover:bg-gradient-to-r from-blue-800 to-blue-400 hover:text-white
          "
        >
          {text}
        </a>
      </>
  );
}