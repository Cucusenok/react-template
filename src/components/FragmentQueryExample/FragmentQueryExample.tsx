import React from "react";
import {Address, useGetCompanyInfoWithFragmentQuery} from "@gql/graphql";

const getAddressCity = (address: Address) => {
    return address.city
}
export const FragmentQueryExample = () => {
    const { loading, data, error } = useGetCompanyInfoWithFragmentQuery();
    if(loading) return null
    return <div>{ getAddressCity(data?.company?.headquarters as Address) }</div>
}