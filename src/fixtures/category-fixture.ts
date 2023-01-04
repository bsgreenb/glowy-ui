import { Layout } from "gatsby-plugin-image";
// TODO: update this to proper category image from query
const categoryFixture = {
  title: "Classic LED Hoops",
  slug: "classic-led-hoops",
  featuredImage: {
    gatsbyImageData: {
      images: {
        sources: [
          {
            srcSet:
              "https://images.ctfassets.net/recq25x3mcro/2aoufSI4Ja99Vgi5wHbbwB/0d6b68aad771bc6b8072535546a72edf/square_led_hoop.jpg?w=150&h=150&q=50&fm=webp 150w,\nhttps://images.ctfassets.net/recq25x3mcro/2aoufSI4Ja99Vgi5wHbbwB/0d6b68aad771bc6b8072535546a72edf/square_led_hoop.jpg?w=300&h=300&q=50&fm=webp 300w,\nhttps://images.ctfassets.net/recq25x3mcro/2aoufSI4Ja99Vgi5wHbbwB/0d6b68aad771bc6b8072535546a72edf/square_led_hoop.jpg?w=600&h=600&q=50&fm=webp 600w",
            sizes: "(min-width: 600px) 600px, 100vw",
            type: "image/webp",
          },
        ],
        fallback: {
          src: "https://images.ctfassets.net/recq25x3mcro/2aoufSI4Ja99Vgi5wHbbwB/0d6b68aad771bc6b8072535546a72edf/square_led_hoop.jpg?w=600&h=600&fl=progressive&q=50&fm=jpg",
          srcSet:
            "https://images.ctfassets.net/recq25x3mcro/2aoufSI4Ja99Vgi5wHbbwB/0d6b68aad771bc6b8072535546a72edf/square_led_hoop.jpg?w=150&h=150&fl=progressive&q=50&fm=jpg 150w,\nhttps://images.ctfassets.net/recq25x3mcro/2aoufSI4Ja99Vgi5wHbbwB/0d6b68aad771bc6b8072535546a72edf/square_led_hoop.jpg?w=300&h=300&fl=progressive&q=50&fm=jpg 300w,\nhttps://images.ctfassets.net/recq25x3mcro/2aoufSI4Ja99Vgi5wHbbwB/0d6b68aad771bc6b8072535546a72edf/square_led_hoop.jpg?w=600&h=600&fl=progressive&q=50&fm=jpg 600w",
          sizes: "(min-width: 600px) 600px, 100vw",
        },
      },
      layout: "constrained",
      backgroundColor: "#080808",
      width: 600,
      height: 600,
    },
  },
};

export default categoryFixture;
