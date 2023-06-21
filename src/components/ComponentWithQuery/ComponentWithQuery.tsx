import React from "react";
import {useGetCompanyLeadersQuery} from "@gql/graphql";
import {RequestLoader} from "@components/Loader/RequestLoader";


export const ComponentWithQuery = () => {
    const {data, loading, error} = useGetCompanyLeadersQuery();

    return <RequestLoader loading={loading} data={data} error={error}>
        <table>
            <tr>
                <th>CEO</th>
                <th>{data?.company?.ceo}</th>
            </tr>
            <tr>
                <td>COO</td>
                <td>{data?.company?.coo}</td>
            </tr>
            <tr>
                <td>CTO</td>
                <td>{data?.company?.cto}</td>
            </tr>
        </table>
    </RequestLoader>
}