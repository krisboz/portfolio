import confessitMobile from "../assets/confessit-mobile.png";
import confessitDesktop from "../assets/confessit-desktop.png";
import lotoMobile from "../assets/lotto-mobile.png";
import lotoDesktop from "../assets/lotto-desktop.png";
import restaurantDesktop from "../assets/restaurant-desktop.png";
import restaurantMobile from "../assets/restaurant-mobile.png";
import asteroidsMobile from "../assets/asteroids-mobile.png";
import asteroidsDesktop from "../assets/asteroids-desktop.png";

const getImages = (name) => {
  const photos = {
    confessit: {
      mobile: confessitMobile,
      desktop: confessitDesktop,
    },
    Lotto: {
      mobile: lotoMobile,
      desktop: lotoDesktop,
    },
    Pizzeria: {
      mobile: restaurantMobile,
      desktop: restaurantDesktop,
    },
    AsteroidAtlas: {
      mobile: asteroidsMobile,
      desktop: asteroidsDesktop,
    },
  };

  return photos[`${name}`];
};

export default getImages;
