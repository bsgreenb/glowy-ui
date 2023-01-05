import { Layout } from "gatsby-plugin-image";

// TODO: fix productFixture up from query
const productFixture = {
  id: "4b540cf6-a649-561c-9ff6-cd3ebb3c7db9",
  title: "Moodhoops Taped Beginner Hoop",
  slug: "moodhoops-taped-beginner-hoop",
  featuredImage: {
    gatsbyImageData: {
      images: {
        sources: [
          {
            srcSet:
              "https://images.ctfassets.net/recq25x3mcro/478WXCjH5nU3EUJNFs1K5R/51cc4c2c80c178c374b73d7b9e74d45f/moodhoops-lucid-beginner-hoop_0136.jpg?w=250&h=250&q=50&fm=webp 250w,\nhttps://images.ctfassets.net/recq25x3mcro/478WXCjH5nU3EUJNFs1K5R/51cc4c2c80c178c374b73d7b9e74d45f/moodhoops-lucid-beginner-hoop_0136.jpg?w=500&h=500&q=50&fm=webp 500w,\nhttps://images.ctfassets.net/recq25x3mcro/478WXCjH5nU3EUJNFs1K5R/51cc4c2c80c178c374b73d7b9e74d45f/moodhoops-lucid-beginner-hoop_0136.jpg?w=1000&h=1000&q=50&fm=webp 1000w",
            sizes: "(min-width: 1000px) 1000px, 100vw",
            type: "image/webp",
          },
        ],
        fallback: {
          src: "https://images.ctfassets.net/recq25x3mcro/478WXCjH5nU3EUJNFs1K5R/51cc4c2c80c178c374b73d7b9e74d45f/moodhoops-lucid-beginner-hoop_0136.jpg?w=1000&h=1000&fl=progressive&q=50&fm=jpg",
          srcSet:
            "https://images.ctfassets.net/recq25x3mcro/478WXCjH5nU3EUJNFs1K5R/51cc4c2c80c178c374b73d7b9e74d45f/moodhoops-lucid-beginner-hoop_0136.jpg?w=250&h=250&fl=progressive&q=50&fm=jpg 250w,\nhttps://images.ctfassets.net/recq25x3mcro/478WXCjH5nU3EUJNFs1K5R/51cc4c2c80c178c374b73d7b9e74d45f/moodhoops-lucid-beginner-hoop_0136.jpg?w=500&h=500&fl=progressive&q=50&fm=jpg 500w,\nhttps://images.ctfassets.net/recq25x3mcro/478WXCjH5nU3EUJNFs1K5R/51cc4c2c80c178c374b73d7b9e74d45f/moodhoops-lucid-beginner-hoop_0136.jpg?w=1000&h=1000&fl=progressive&q=50&fm=jpg 1000w",
          sizes: "(min-width: 1000px) 1000px, 100vw",
        },
      },
      layout: "constrained" as Layout,
      backgroundColor: "#080808",
      width: 1000,
      height: 1000,
    },
  },
  category: {
    title: "Hoops",
    slug: "hoops",
  },
};

export default productFixture;
