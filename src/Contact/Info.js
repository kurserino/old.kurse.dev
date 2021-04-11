import React from "react";
import { css, jsx } from "@emotion/react";


const Info = ({children, ...props}) => {
    return (
        <div css={css`
            float: left;
            width: 50%;
            padding: 50px;
            display: flex;
            flex-direction: column;
        `}>
            {children}
        </div>
    )
}

export default Info