import { colors } from "@/styles/theme";

export default function Button({ children, onClick }) {
  return(
    <>
      <button onClick={onClick}>
        {children}
      </button>

      <style jsx>{`
          button {
            background-color: ${colors.black};
            padding: .7rem 2rem;
            border-radius: 100vh;
            font-size: 14px;
            border: 0;
            font-weight: 700;
            display: flex;
            align-items: center;
            transition: opacity .3s ease;
          }

          button:hover {
            opacity: .7;
          }

          button > :global(svg){  /* > solo evalua el primer nivel */
            margin-right: 5px;
          }

        `}</style>
    </>
  )
}