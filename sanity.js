import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const client = createClient({
    projectId: "3dkzxt0r",
    dataset: "production",
    useCdn: true,
    apiVersion: "2022-03-07",
});

const builder = imageUrlBuilder(client);

export function urlFor(source) {
    return builder.image(source);
}

export default client;