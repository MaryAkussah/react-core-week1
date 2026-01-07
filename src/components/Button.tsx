interface ButtonProps {
    label : string;
    variant : "primary" | "secondary";
}

function Button({label , variant} : ButtonProps){
    const style = 
    variant === "primary" ? "background: blue; color: white": "background: gray";
    return(
        <button style={{ backgroundColor: variant === "primary" ? "blue" : "gray", color: "white" }}>
            {label} ({variant})
        </button>
    )
}

export default Button;