/*******************************************************************************************************
 * *************************************** BUTTON WITH PROP (DAY 28) ***********************************
 *
 * New Topics Covered in Day 28:
 * - Functional component properties (Props) destructuring
 * - Spread Operator (`...props`) for dynamic attribute forwarding
 *
 * Cross-File & Architecture References:
 * - Imported by: `pages/Home.jsx`
 * - Purpose: Provides a generic, styled button interface that forwards clicks and styling parameters
 *******************************************************************************************************/

const ButtonWithProp = ({label, onClick, ...props}) => {
    // Debug log to trace labels of buttons rendered on screen
    console.log(label);

    return (
        /*
        We define generic style configurations (margins, padding, background-color, border, font)
        - onClick: Triggers handleIncrement/handleDecrement event handler defined in parent component (Home.jsx)
        - ...props: Spread operator forwards any other properties (e.g. type, disabled, className) directly to the button element
        */
        <button style={{ margin: '5px', padding: '5px', backgroundColor: '#007bff', color: '#fff', border: 'none', fontSize: '1rem' }} onClick={onClick} {...props}>
            {label}
        </button>
    );
};

export default ButtonWithProp;
