import React from "react";
import { CircularProgress } from "@mui/material";
import { useCompanyInfoQueryQuery } from "@gql/graphql";

export const GraphQLNewComponent = () => {
  const { data, error, loading } = useCompanyInfoQueryQuery();

  if (loading) {
    return <CircularProgress />;
  } else if (error) {
    return <div>error</div>;
  } else {
    return <div> {JSON.stringify(data)} </div>;
  }
};
