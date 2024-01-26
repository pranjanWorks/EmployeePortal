import { forwardRef, useState } from "react";
import styled from "styled-components";

const StyledTextField = styled.input`
    padding: 0.5em;
    margin-bottom: 1em;
    border: 2px solid #2872c6;
    border-radius: 0.5em;
`;

const TextField = forwardRef((props, ref) => {
    const [value, setValue] = useState(props.value);
    
    return <StyledTextField 
                ref={ref}
                type="text" 
                value={value} 
                placeholder={props.placeholder} 
                onChange={(e) => {
                    e.preventDefault();
                    setValue(e.target.value);
                }}
            />
});

export default TextField;