import { redirect } from "@sveltejs/kit";

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
  const { slug } = params;

  try {
    return await fetch("http://localhost:3000/api/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: `query getCatalog($slug: String!) {
                Catalogs(where: {slug: {equals: $slug }})
                  { docs 
                    { items {
                      image {
                        url
                        alt
                      }
                    }}
                  }
              }`,
        variables: { slug },
      }),
    }).then((res) => res.json());
  } catch (error) {
    console.error(`Error in load function for /news: ${error}`);
    throw redirect(302, "/");
  }
}
