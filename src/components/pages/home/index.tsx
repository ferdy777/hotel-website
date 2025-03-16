import HeroSlider from "./heroSlider";
import BookForm from "./bookForm";
import Rooms from "./rooms";

const HomeScreen = () => {
  return (
    <>
      <HeroSlider />
      <div className=" container relative">
        <div className=" p-4 lg:shadow-xl lg:absolute lg:left-0 lg:right-0 lg:p-0 lg:z-30 mt-4 lg:-top-12">
          <BookForm />
        </div>
      </div>

      <Rooms />
    </>
  );
};

export default HomeScreen;
