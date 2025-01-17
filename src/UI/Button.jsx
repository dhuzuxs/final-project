// eslint-disable-next-line react/prop-types
export default function Button({ children, variant = "primary", className }) {

    const variants ={
        primary: "bg-white text-black",
        secondary: "bg-gray-400 text-white",
        outline: "border border-black",
        ghost: "bg-red-500 text-white",
    }

    return (
        <button className={`rounded-full px-4 py-2 font-bold hover:opacity-50 transition-all ${variants[variant]} ${className}`}>
            {children}
        </button>
    );
}