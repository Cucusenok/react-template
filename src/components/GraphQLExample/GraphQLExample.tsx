import React from "react";
import { CircularProgress } from "@mui/material";
import {useGetSeoQuery} from "@gql/graphql";


export const GraphQLExample = () => {
    const { data, error, loading } = useGetSeoQuery();

    if(loading) {
        return <CircularProgress />
    }
    else if(error) {
        return <div>error</div>
    }

    else {
        return <div> {JSON.stringify(data)} </div>
    }
}