import React from "react";
import { useRouteError } from "react-router-dom";

export default function Error() {

    const err = useRouteError();

    return (
        <div>
            <h1>Opps something went wrong!!!</h1>
            <p>{err.status} : {err.statusText}</p>
        </div>
    )
}