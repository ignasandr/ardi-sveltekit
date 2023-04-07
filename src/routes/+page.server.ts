import { redirect } from "@sveltejs/kit";

/** @type {import('./$types').PageServerLoad} */
export async function load() {
  try {
    return await fetch("http://localhost:3000/api/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: `query getFront {
                Catalogs {
                  docs {
                    title
                    items {
                      image {
                        id
                        url
                        alt
                      } 
                    }
                  }
                }
              }`,
      }),
    }).then((res) => res.json());
  } catch (error) {
    console.error(`Error in load function for /news: ${error}`);
    throw redirect(302, "/");
  }
}
