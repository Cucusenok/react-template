import React, { useState } from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
// import { GraphQLExample } from "@components/GraphQLExample/GraphQLExample";
// import { FragmentQueryExample } from "@components/FragmentQueryExample/FragmentQueryExample";
// import { GraphQLNewComponent } from '@components/GraphQLNewComponent/GraphQLNewComponent';
import { SignIn } from "./SignIn";
import { Register } from "./Register";
import "./App.css";

const client = new ApolloClient({
  uri: "https://spacex-production.up.railway.app",
  cache: new InMemoryCache()
});

function App() {
  const [isAuth, setIsAuth] = useState(true)

  return (
    <ApolloProvider client={client}>
      <div className="App">
        <header className="App-header">
          {/* <FragmentQueryExample /> */}
          {/* <GraphQLExample /> */}
          {isAuth ? (
            <SignIn setIsAuth={setIsAuth} />
          ) : (
            <Register setIsAuth={setIsAuth} />
          )}

          {/* <GraphQLNewComponent /> */}
        </header>
      </div>
    </ApolloProvider>
  );
}

export default App;
