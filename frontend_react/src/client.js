import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: "ud7t21jp",
  dataset: "production",
  apiVersion: "2022-02-01",
  useCdn: true,
  token:
    "skaPA9Fe51nVXbKY0dfYE7KKd2T88X0UHfHPOPHvvyBMhoHVItKb5Yow19WmJnTPh9JEmoYvCn8qIW304aPOdQseO72num9BZrp7WGjHDDul0Crp4gEH5e7N3NAA5ghaMC9gRegzCM6Oq06CMSLTlKEYVi0ASSbJA7UFkwPDnBK4ggrpVPZY",
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
