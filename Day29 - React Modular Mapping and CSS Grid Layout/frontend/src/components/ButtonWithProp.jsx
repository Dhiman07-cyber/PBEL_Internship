
const ButtonWithProp = ({label, onClick, ...props}) => {
    console.log(label);

    return (
        <button style={{ margin: '5px', padding: '5px', backgroundColor: '#007bff', color: '#fff', border: 'none', fontSize: '1rem' }} onClick={onClick} {...props}>
            {label}
        </button>
    );
};

export default ButtonWithProp;
