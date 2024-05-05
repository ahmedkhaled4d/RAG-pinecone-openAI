import { pc } from "./init";

const indexName = "docs-quickstart-index";
async function main() {
  try {
    await pc.createIndex({
      name: indexName,
      dimension: 8,
      metric: "cosine",
      spec: {
        serverless: {
          cloud: "aws",
          region: "us-east-1",
        },
      },
    });
  } catch (e) {
    console.error(e);
  }
}

main();
