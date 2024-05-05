## Fixing LLMs that Hallucinate

In this notebook we will learn how to query relevant contexts to our queries from Pinecone, and pass these to a generative OpenAI model to generate an answer backed by real data sources.

A common problem with using GPT-3 to factually answer questions is that GPT-3 can sometimes make things up. The GPT models have a broad range of general knowledge, but this does not necessarily apply to more specific information. For that we use the Pinecone vector database as our "external knowledge base" — like long-term memory for GPT-3.
