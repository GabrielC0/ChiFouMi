import './Button.css';

function Button(props)
{
    console.log("My button");

    return(

        <div className="Button" onClick={props.onClick}>
            {props.name}
        </div>

    )
}

export default Button;