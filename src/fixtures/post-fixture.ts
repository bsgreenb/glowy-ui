const postFixture = {
  id: "17386573-3e61-5a21-9796-001cc80ca957",
  title: "How to Make Your Own Wearables",
  subTitle: "subtitle yo",
  lead: {
    lead:
      "This would be the lead of the wearables article.  That article would be dope I bet.",
  },
  slug: "how-to-make-your-own-wearables",
  updatedAt: "Oct 16th, 2020",
  body: {
    raw:
      '{"nodeType":"document","data":{},"content":[{"nodeType":"heading-2","content":[{"nodeType":"text","value":"Heading 2","marks":[],"data":{}}],"data":{}},{"nodeType":"paragraph","content":[{"nodeType":"text","value":"Heading 2 text ya dig","marks":[],"data":{}}],"data":{}},{"nodeType":"heading-3","content":[{"nodeType":"text","value":"Heading 3","marks":[],"data":{}}],"data":{}},{"nodeType":"paragraph","content":[{"nodeType":"text","value":"Heading 2 text ya dig","marks":[],"data":{}}],"data":{}},{"nodeType":"heading-4","content":[{"nodeType":"text","value":"Heading 4","marks":[],"data":{}}],"data":{}},{"nodeType":"paragraph","content":[{"nodeType":"text","value":"Heading 2 text ya dig","marks":[],"data":{}}],"data":{}},{"nodeType":"paragraph","content":[{"nodeType":"text","value":"Heer is an ","marks":[],"data":{}},{"nodeType":"hyperlink","content":[{"nodeType":"text","value":"External Link","marks":[],"data":{}}],"data":{"uri":"http://reddit.com"}},{"nodeType":"text","value":" . And also here\'s a ","marks":[],"data":{}},{"nodeType":"entry-hyperlink","content":[{"nodeType":"text","value":"Product Link","marks":[],"data":{}}],"data":{"target":{"sys":{"id":"6a4pYHgNPMd9I6K4o3LFL9","type":"Link","linkType":"Entry"}}}},{"nodeType":"text","value":".","marks":[],"data":{}}],"data":{}},{"nodeType":"paragraph","content":[{"nodeType":"text","value":"","marks":[],"data":{}},{"nodeType":"embedded-entry-inline","content":[],"data":{"target":{"sys":{"id":"LKFT9E1STc5lhrFHbRwPP","type":"Link","linkType":"Entry"}}}},{"nodeType":"text","value":"","marks":[],"data":{}}],"data":{}},{"nodeType":"paragraph","content":[{"nodeType":"text","value":"Can\'t forget assets","marks":[],"data":{}}],"data":{}},{"nodeType":"embedded-asset-block","content":[],"data":{"target":{"sys":{"id":"5K1UwZzPw1KAauwiOK375N","type":"Link","linkType":"Asset"}}}},{"nodeType":"paragraph","content":[{"nodeType":"text","value":"Making lists like:","marks":[],"data":{}}],"data":{}},{"nodeType":"unordered-list","content":[{"nodeType":"list-item","content":[{"nodeType":"paragraph","content":[{"nodeType":"text","value":"a","marks":[],"data":{}}],"data":{}}],"data":{}},{"nodeType":"list-item","content":[{"nodeType":"paragraph","content":[{"nodeType":"text","value":"b","marks":[],"data":{}}],"data":{}}],"data":{}},{"nodeType":"list-item","content":[{"nodeType":"paragraph","content":[{"nodeType":"text","value":"c","marks":[],"data":{}}],"data":{}}],"data":{}}],"data":{}},{"nodeType":"paragraph","content":[{"nodeType":"text","value":"And numeric lists like","marks":[],"data":{}}],"data":{}},{"nodeType":"ordered-list","content":[{"nodeType":"list-item","content":[{"nodeType":"paragraph","content":[{"nodeType":"text","value":"one","marks":[],"data":{}}],"data":{}}],"data":{}},{"nodeType":"list-item","content":[{"nodeType":"paragraph","content":[{"nodeType":"text","value":"two","marks":[],"data":{}}],"data":{}}],"data":{}},{"nodeType":"list-item","content":[{"nodeType":"paragraph","content":[{"nodeType":"text","value":"three","marks":[],"data":{}}],"data":{}}],"data":{}}],"data":{}},{"nodeType":"paragraph","content":[{"nodeType":"text","value":"","marks":[],"data":{}}],"data":{}}]}',
    references: [
      {
        __typename: "ContentfulProduct",
        contentful_id: "6a4pYHgNPMd9I6K4o3LFL9",
        slug: "moodhoops-rainbow-led-hoop",
      },
      {
        __typename: "ContentfulProductCard",
        contentful_id: "LKFT9E1STc5lhrFHbRwPP",
        title: "Badass Hat x2",
        body: {
          raw:
            '{"data":{},"content":[{"data":{},"content":[{"data":{},"marks":[],"value":"Cover that beautiful face of yours from the constant sun.","nodeType":"text"}],"nodeType":"paragraph"}],"nodeType":"document"}',
          references: [],
        },
        product: {
          __typename: "ContentfulExternalProduct",
          contentful_id: "1PcOyBVfHWb5bA2Ur3jXHi",
          title: "Dorfman Pacific Men's Band Binding Hat,Brown,Large",
          variantImageUrls: [
            "https://m.media-amazon.com/images/I/41L2knnWrPL.jpg",
          ],
          buyUrl:
            "https://www.amazon.com/dp/B002BTQTEY?tag=glostu-20&linkCode=ogi&th=1&psc=1",
        },
        productTitleOverride: "Dorfman Outback Hat with Chin Cord",
      },
      {
        __typename: "ContentfulAsset",
      },
    ],
  },
  featuredImage: {
    fluid: {
      base64:
        "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAlgCWAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRT/2wBDAQMEBAUEBQkFBQkUDQsNFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBT/wAARCAALABQDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAgJAv/EACcQAAEDBAAEBwEAAAAAAAAAAAECAwQABREhBwgiMQYSE0FCUXKB/8QAFAEBAAAAAAAAAAAAAAAAAAAABv/EACARAAEDBAIDAAAAAAAAAAAAAAEAAgMEBREhFDJxwdH/2gAMAwEAAhEDEQA/AJjXG5JmQorIQoKZGPMTr+Cqf8jviK127libgPek3IkW6WrKkk9QefBBH5wc+2RsbqWSu9O1w4uku1cHohiPqjkWR49Gvhnf32FLbHTcyWRzj1b7HxHr1PNTwsEBwS7fjB0kkeGHljIOFHYOQd0ViijCQr//2Q==",
      aspectRatio: 1.7777777777777777,
      src:
        "//images.ctfassets.net/recq25x3mcro/6y6jioA1m1jlftcGX1sOsE/980563c6079bc51a87bd3b631e192d77/LED_dress_by_Hussein_Chalayan.jpg?w=800&q=50",
      srcSet:
        "//images.ctfassets.net/recq25x3mcro/6y6jioA1m1jlftcGX1sOsE/980563c6079bc51a87bd3b631e192d77/LED_dress_by_Hussein_Chalayan.jpg?w=200&h=113&q=50 200w,\n//images.ctfassets.net/recq25x3mcro/6y6jioA1m1jlftcGX1sOsE/980563c6079bc51a87bd3b631e192d77/LED_dress_by_Hussein_Chalayan.jpg?w=400&h=225&q=50 400w,\n//images.ctfassets.net/recq25x3mcro/6y6jioA1m1jlftcGX1sOsE/980563c6079bc51a87bd3b631e192d77/LED_dress_by_Hussein_Chalayan.jpg?w=800&h=450&q=50 800w,\n//images.ctfassets.net/recq25x3mcro/6y6jioA1m1jlftcGX1sOsE/980563c6079bc51a87bd3b631e192d77/LED_dress_by_Hussein_Chalayan.jpg?w=1200&h=675&q=50 1200w,\n//images.ctfassets.net/recq25x3mcro/6y6jioA1m1jlftcGX1sOsE/980563c6079bc51a87bd3b631e192d77/LED_dress_by_Hussein_Chalayan.jpg?w=1600&h=900&q=50 1600w,\n//images.ctfassets.net/recq25x3mcro/6y6jioA1m1jlftcGX1sOsE/980563c6079bc51a87bd3b631e192d77/LED_dress_by_Hussein_Chalayan.jpg?w=2400&h=1350&q=50 2400w,\n//images.ctfassets.net/recq25x3mcro/6y6jioA1m1jlftcGX1sOsE/980563c6079bc51a87bd3b631e192d77/LED_dress_by_Hussein_Chalayan.jpg?w=3648&h=2052&q=50 3648w",
      srcWebp:
        "//images.ctfassets.net/recq25x3mcro/6y6jioA1m1jlftcGX1sOsE/980563c6079bc51a87bd3b631e192d77/LED_dress_by_Hussein_Chalayan.jpg?w=800&q=50&fm=webp",
      srcSetWebp:
        "//images.ctfassets.net/recq25x3mcro/6y6jioA1m1jlftcGX1sOsE/980563c6079bc51a87bd3b631e192d77/LED_dress_by_Hussein_Chalayan.jpg?w=200&h=113&q=50&fm=webp 200w,\n//images.ctfassets.net/recq25x3mcro/6y6jioA1m1jlftcGX1sOsE/980563c6079bc51a87bd3b631e192d77/LED_dress_by_Hussein_Chalayan.jpg?w=400&h=225&q=50&fm=webp 400w,\n//images.ctfassets.net/recq25x3mcro/6y6jioA1m1jlftcGX1sOsE/980563c6079bc51a87bd3b631e192d77/LED_dress_by_Hussein_Chalayan.jpg?w=800&h=450&q=50&fm=webp 800w,\n//images.ctfassets.net/recq25x3mcro/6y6jioA1m1jlftcGX1sOsE/980563c6079bc51a87bd3b631e192d77/LED_dress_by_Hussein_Chalayan.jpg?w=1200&h=675&q=50&fm=webp 1200w,\n//images.ctfassets.net/recq25x3mcro/6y6jioA1m1jlftcGX1sOsE/980563c6079bc51a87bd3b631e192d77/LED_dress_by_Hussein_Chalayan.jpg?w=1600&h=900&q=50&fm=webp 1600w,\n//images.ctfassets.net/recq25x3mcro/6y6jioA1m1jlftcGX1sOsE/980563c6079bc51a87bd3b631e192d77/LED_dress_by_Hussein_Chalayan.jpg?w=2400&h=1350&q=50&fm=webp 2400w,\n//images.ctfassets.net/recq25x3mcro/6y6jioA1m1jlftcGX1sOsE/980563c6079bc51a87bd3b631e192d77/LED_dress_by_Hussein_Chalayan.jpg?w=3648&h=2052&q=50&fm=webp 3648w",
      sizes: "(max-width: 800px) 100vw, 800px",
    },
  },
  category: {
    id: "9989269b-6b26-542e-a74f-d6be5867fe30",
    title: "Wearables",
    slug: "wearables",
  },
  author: {
    name: "Ben Greenberg",
    photo: {
      fixed: {
        base64:
          "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAlgCWAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRT/2wBDAQMEBAUEBQkFBQkUDQsNFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBT/wAARCAAUABQDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAAgHBQn/xAAoEAACAQMDBAIBBQAAAAAAAAABAgMEBREABhIHITFBCBRRExUyYYH/xAAYAQACAwAAAAAAAAAAAAAAAAADBQAEBv/EACURAQABAwIEBwAAAAAAAAAAAAECAAMEESEFMTNxQYGRsbLh8P/aAAwDAQACEQMRAD8AhfoJ04/d9zUUM8sEVTXxZillHJadPJYjwzEY7HA/OfGqd6tfGqy2Dp/LdYL7Jc6qKFqhUdYnjfgMkBR3Hj0dYF8T+p1tsu56axXqnSV5pVamqmiUGIBJA8bNn+JBVh/a6s7dldRWWz1VZU0UEVpp4ZiVnK8YQEGGAxgewMeeXbSbJvXI3dDlWs4fi2LthlIF38q84rnbPp1bJQwxRwsAxjd4wUb2MMc6a5d8u0u4LtU16wrB+q2SsfIgnAyxyScnyfWScADtpqyiuux+70uEiab+v1WxfEXZdqvt8qbpXwfaqIpUpUWTBRVkUhzjHkjIz+CdUzurbkcttawVNZV1lliDAUdQ6spUHARm48ioz2BPoaaaBldePY92pgykYl1HxfiVHm4aRNu7qv8AaaZYmpqGvlp4jJTxciqntkhACf8ANNNNFnCJJ0KHbuTYCrX/2Q==",
        aspectRatio: 1,
        src:
          "//images.ctfassets.net/recq25x3mcro/7BF1qxU5TZpYKj8GMMU0Nq/40b283d854a85eab5330d06f62d330b8/I_look_pretty_good_in_a_hat.jpg?w=30&q=50",
        srcSet:
          "//images.ctfassets.net/recq25x3mcro/7BF1qxU5TZpYKj8GMMU0Nq/40b283d854a85eab5330d06f62d330b8/I_look_pretty_good_in_a_hat.jpg?w=30&h=30&q=50 1x,\n//images.ctfassets.net/recq25x3mcro/7BF1qxU5TZpYKj8GMMU0Nq/40b283d854a85eab5330d06f62d330b8/I_look_pretty_good_in_a_hat.jpg?w=45&h=45&q=50 1.5x,\n//images.ctfassets.net/recq25x3mcro/7BF1qxU5TZpYKj8GMMU0Nq/40b283d854a85eab5330d06f62d330b8/I_look_pretty_good_in_a_hat.jpg?w=60&h=60&q=50 2x,\n//images.ctfassets.net/recq25x3mcro/7BF1qxU5TZpYKj8GMMU0Nq/40b283d854a85eab5330d06f62d330b8/I_look_pretty_good_in_a_hat.jpg?w=90&h=90&q=50 3x",
        srcWebp:
          "//images.ctfassets.net/recq25x3mcro/7BF1qxU5TZpYKj8GMMU0Nq/40b283d854a85eab5330d06f62d330b8/I_look_pretty_good_in_a_hat.jpg?w=30&q=50&fm=webp",
        srcSetWebp:
          "//images.ctfassets.net/recq25x3mcro/7BF1qxU5TZpYKj8GMMU0Nq/40b283d854a85eab5330d06f62d330b8/I_look_pretty_good_in_a_hat.jpg?w=30&h=30&q=50&fm=webp 1x,\n//images.ctfassets.net/recq25x3mcro/7BF1qxU5TZpYKj8GMMU0Nq/40b283d854a85eab5330d06f62d330b8/I_look_pretty_good_in_a_hat.jpg?w=45&h=45&q=50&fm=webp 1.5x,\n//images.ctfassets.net/recq25x3mcro/7BF1qxU5TZpYKj8GMMU0Nq/40b283d854a85eab5330d06f62d330b8/I_look_pretty_good_in_a_hat.jpg?w=60&h=60&q=50&fm=webp 2x,\n//images.ctfassets.net/recq25x3mcro/7BF1qxU5TZpYKj8GMMU0Nq/40b283d854a85eab5330d06f62d330b8/I_look_pretty_good_in_a_hat.jpg?w=90&h=90&q=50&fm=webp 3x",
        width: 30,
        height: 30,
      },
    },
  },
};
export default postFixture;
