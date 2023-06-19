import React from "react";
import {useGetSeoQuery} from "@gql/graphql";

export const Launches = () => {
    const {} = useGetSeoQuery();
    return <div>test</div>
}