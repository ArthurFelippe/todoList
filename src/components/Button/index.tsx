import react from 'react'
// eslint-disable-next-line
import './styles.css'

interface Props {
    onClick: () => void
}

const Button: React.FC<Props> = ({children, onClick}) => {
     return(
         <button className="btn-component" onClick={onClick}>
        {children}
         </button>
     )

}

export default Button