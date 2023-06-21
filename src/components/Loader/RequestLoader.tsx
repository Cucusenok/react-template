import React from "react";
import {CircularProgress} from "@mui/material";
import {ApolloError} from "@apollo/client/errors";


/*
    Real type should be the @apollo/client - QueryResult,
 */
export type RequestLoaderProps = React.PropsWithChildren
& {
    data: any | undefined;
    error: ApolloError | undefined;
    loading: boolean;
}

export const RequestLoader = (props: RequestLoaderProps) => {
    if(props.loading) return <CircularProgress/>
    else if(props.error) return <div>Loading error</div>
    else return props.children
}