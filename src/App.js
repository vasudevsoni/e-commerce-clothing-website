import Directory from "./components/directory/directory.component";

const App = () => {
  const categories = [
    {
      id: 1,
      title: "hats",
      imageUrl:
        "https://media.gq.com/photos/5a04f9a398002d2e253679f5/master/pass/fall-hats-gq-style-0816-01-1.jpg",
    },
    {
      id: 2,
      title: "jackets",
      imageUrl:
        "https://img.freepik.com/premium-photo/strong-athletic-man-fitness-model-guy-leather-jacket-fashion-glasses-poses-camera-luxury-black-car-background-half-length-photo_116317-9431.jpg?w=2000",
    },
    {
      id: 3,
      title: "sneakers",
      imageUrl:
        "https://images.unsplash.com/photo-1556906781-9a412961c28c?ixlib=rb-1.2.1&w=1080&fit=max&q=80&fm=jpg&crop=entropy&cs=tinysrgb",
    },
    {
      id: 4,
      title: "women",
      imageUrl:
        "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2gettyimages-1325598692a-1654111038.jpg",
    },
    {
      id: 5,
      title: "men",
      imageUrl:
        "https://i1.wp.com/www.society19.com/uk/wp-content/uploads/sites/5/2018/04/mens-traditional-clothes.jpg?fit=1000%2C750&ssl=1",
    },
  ];

  return <Directory categories={categories} />;
};

export default App;
