import { ApiReferenceReact } from "@scalar/api-reference-react";

const styles = {
  container: {
    maxWidth: "600px",
    margin: "auto",
    padding: "20px",
    textAlign: "center" as const,
    color: "white",
  },
  title: {
    color: "#fb2645",
    marginBottom: "20px",
  },
  text: {
    fontSize: "16px",
    marginBottom: "10px",
  },
};

const App = (): JSX.Element => {
  const params = window.location.search;
  const url = params.split("=").length > 1 ? params.split("=")[1] : "";

  if (url.length === 0) {
    return (
      <div style={{ backgroundColor: "black", width: "100%", height: "100vh" }}>
        <div style={styles.container}>
          <h1 style={styles.title}>Error: OpenAPI Schema URL Missing</h1>
          <p style={styles.text}>
            You need to pass the OpenAPI schema URL as a query string in the
            following format:
          </p>
          <p style={styles.text}>
            <i>https://scaler.rocketapi.net/?url=your_openapi_schema_url</i>
          </p>
        </div>
      </div>
    );
  }

  return (
    <div style={{ background: "black" }}>
      <ApiReferenceReact
        configuration={{
          spec: {
            url: url,
          },
        }}
      />
    </div>
  );
};

export default App;
