import { Link } from "react-router-dom"
function Button({children, disabled, to, type, onClick}) {
    
    const base= " font-serif text-sm inline-block duration-300 rounded-lg bg-yellow-500  hover:bg-yellow-400  font-bold uppercase text-white tracking-wide italic focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-500 focus:ring-offset-2 disabled:cursor-not-allowed  ";
    const styles={
        primary:base + 'px-4 py-3 md:px-6 md:py-4',
        small:base + 'px-4 py-2 md:px-5 md:py-2.5 text-xs',
        round:base + 'px-2.5 py-1 md:px-3.5 md:py-2 text-sm',
        secondary:" text-sm px-4 py-2.5 text-stone-400 md:px-6 md:py-4 font-serif inline-block duration-300 rounded-lg   hover:bg-yellow-400  font-bold uppercase text-yellow-600 tracking-wide italic focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-500 focus:ring-offset-2 disabled:cursor-not-allowed  border-2 border-stone-400 md:px-6 md:py-3.5 hover:text-stone-100 focus:ring-stone-300 focus:text-stone-100 ",
    };

           if(to)
           return(
           <Link to={to} className={styles[type]}>{children}</Link>
        )

        if(onClick)
        return (
        <button  onClick={onClick} disabled={disabled}
        className={styles[type]}>
            {children}
        </button>
    );
    
    return (
        <button disabled={disabled}
        className={styles[type]}>
            {children}
        </button>
    );
}

export default Button;