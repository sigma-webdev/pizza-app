import React, { useEffect } from 'react';
import { Layout } from '../Layout/Layout';
import heroImage from '../assets/images/hero-image.png';
import pizza from '../assets/images/pizz1.png';
import cooking from '../assets/images/cooking1.png';
import orderfood from '../assets/images/orderFood.png';
import pickup from '../assets/images/pickup.png';
import enjoy from '../assets/images/enjoy.png';
import { scrollToSection } from '../Helper/smoothScroll';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from '../Redux/ProductSlice';
import { Link } from 'react-router-dom';

const Home = () => {
  const dispatch = useDispatch();
  const { productsData } = useSelector((state) => state.product);

  useEffect(() => {
    (async () => {
      await dispatch(getAllProducts());
    })();
  }, []);

  return (
    <Layout>
      {/* hero section */}
      <section className="flex items-center justify-center py-5 gap-7 bg-gradient-to-r from-amber-50 to-orange-300 ">
        <div className="w-2/6">
          <div className="flex text-4xl">
            <h1 className="pb-5 font-bold text-transparent bg-gradient-to-r from-orange-500 to-orange-200 bg-clip-text">
              {' '}
              Enjoy the Slice{' '}
            </h1>
            <h1 className=""> 😋</h1>
          </div>

          <p className="text-[#6B7280] pb-4">
            The Pizza Hut app lets you order your favorite pizzas, pasta, and
            wings with just a few taps. Enjoy exclusive promotions and quick
            delivery.
          </p>
          <button
            onClick={() => scrollToSection('menu-section')}
            className="px-5 py-2 text-white bg-yellow-500 border rounded-md hover:bg-yellow-600 group "
          >
            {' '}
            Order Now
            <span className="inline-block transition-transform ease-in-out group-hover:translate-x-2">
              <svg
                className="ml-4"
                width="20"
                height="20"
                viewBox="0 0 20 10"
                fill="#fff"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3 10C3 9.58579 3.33579 9.25 3.75 9.25L14.3879 9.25L10.2302 5.29062C9.93159 5.00353 9.92228 4.52875 10.2094 4.23017C10.4965 3.93159 10.9713 3.92228 11.2698 4.20937L16.7698 9.45937C16.9169 9.60078 17 9.79599 17 10C17 10.204 16.9169 10.3992 16.7698 10.5406L11.2698 15.7906C10.9713 16.0777 10.4965 16.0684 10.2094 15.7698C9.92228 15.4713 9.93159 14.9965 10.2302 14.7094L14.3879 10.75L3.75 10.75C3.33579 10.75 3 10.4142 3 10Z"
                  fill="#fff"
                />
              </svg>
            </span>
          </button>
        </div>
        <div>
          <img src={heroImage} alt="pizza image" width={550} height={500} />
        </div>
      </section>

      {/* Menu section */}
      <section id="menu-section" className="flex flex-col py-4 my-auto">
        <div className="py-4">
          <h3 className="pb-5 text-3xl font-bold text-center text-transparent bg-gradient-to-r from-orange-600 to-orange-100 bg-clip-text ">
            {' '}
            Menu{' '}
          </h3>
          <p className="w-3/4 mx-auto text-center">
            {' '}
            Pizza Menu, where every slice tells a story of flavor and freshness.
            Explore our tempting selection of handcrafted pizzas, each made with
            premium ingredients and artisanal flair.{' '}
          </p>

          {/* categories */}
          <div className="flex justify-center py-4">
            <p className="w-40 px-4 py-2 text-center border hover:text-white hover:bg-yellow-500">
              {' '}
              All{' '}
            </p>
            <p className="w-40 px-4 py-2 text-center border hover:text-white hover:bg-yellow-500">
              {' '}
              Veg Pizza
            </p>
            <p className="w-40 px-4 py-2 text-center border hover:text-white hover:bg-yellow-500">
              {' '}
              Non-Veg Pizza{' '}
            </p>
            <p className="w-40 px-4 py-2 text-center border hover:text-white hover:bg-yellow-500">
              {' '}
              Drink
            </p>
          </div>
        </div>

        {/* pizza product  */}
        <div className="container mx-auto ">
          <div className="flex flex-wrap justify-center">
            {productsData.map((items, key) => {
              return (
                items.inStock && (
                  <div className="p-4 md:w-1/3" key={items._id}>
                    <Link to={`/product/${items._id}`}>
                      <div className="overflow-hidden border rounded-lg border-opacity-60">
                        <img
                          className="object-cover object-center w-full lg:h-48 md:h-36"
                          src={
                            items?.productImage?.url
                              ? items.productImage.url
                              : pizza
                          }
                          alt="pizza image"
                        />
                        <div className="p-6 border">
                          <h2 className="text-xs font-medium tracking-widest text-gray-400 title-font">
                            {items.category}
                          </h2>
                          <h1 className="text-lg font-medium text-gray-900 title-font ">
                            {items.productName}
                          </h1>
                          <p className="font-medium tracking-widest text-orange-600 text-md title-font">
                            ₹{items.price}
                          </p>
                          <p className="leading-relaxed ">
                            {items.description}
                          </p>
                        </div>
                      </div>
                    </Link>
                  </div>
                )
              );
            })}
          </div>

          {/* more section */}
          <div className="flex justify-center py-4">
            <a className="inline-flex items-center mx-auto text-yellow-500 md:mb-2 lg:mb-0 group">
              More
              <svg
                className="w-4 h-4 ml-2 transition-transform ease-in-out transform group-hover:translate-x-2"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14"></path>
                <path d="M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Services section */}
      <section
        id="services-section"
        className="py-4 mt-6 bg-gradient-to-r from-amber-50 to-orange-300"
      >
        <div class="container flex">
          <div
            class="lg:w-1/2 rounded-lg  flex
           justify-center items-center flex-col"
          >
            <img
              alt="feature"
              className="rounded-xl"
              width={500}
              src={cooking}
            />
          </div>

          <div className="flex flex-col flex-wrap text-center lg:py-6 lg:w-1/2 lg:pl-12 lg:text-left">
            <div className="flex flex-col items-center lg:items-start">
              <div className="flex-grow">
                <h2 className="mb-2 text-5xl font-extrabold text-transparent title-font bg-gradient-to-r from-orange-600 to-orange-300 bg-clip-text">
                  Cooked by the best <br /> Chefs in the world
                </h2>
                <p className="text-base leading-relaxed text-[#6B7280]">
                  There are many benefits regarding to that but the main ones
                  are:
                </p>
              </div>
            </div>

            <div class="p-1  w-full ">
              <div class=" rounded flex p-2 h-full items-center text-2xl">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  stroke-linejoin="round"
                  stroke-width="3"
                  class="text-[#F38339] w-10 h-10 flex-shrink-0 mr-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <span class="title-font font-bold">Perfect Taste</span>
              </div>
            </div>
            <div class="p-1  w-full ">
              <div class=" rounded flex p-2 h-full items-center text-2xl">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  stroke-linejoin="round"
                  stroke-width="3"
                  class="text-[#F38339] w-10 h-10 flex-shrink-0 mr-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <span class="title-font font-bold">Done Quickly</span>
              </div>
            </div>
            <div class="p-1  w-full ">
              <div class=" rounded flex p-2 h-full items-center text-2xl">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  stroke-linejoin="round"
                  stroke-width="3"
                  class="text-[#F38339] w-10 h-10 flex-shrink-0 mr-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <span class="title-font font-bold">
                  {' '}
                  Food Guaranteed Hygienic
                </span>
              </div>
            </div>

            <div class="container px-5 py-4 mx-auto">
              <div class="flex justify-center py-4">
                <div class="w-16 h-1 rounded-full bg-yellow-500 inline-flex"></div>
              </div>

              <div class="flex flex-wrap  md:space-y-0 space-y-6">
                <div class="p-4 md:w-1/3 flex flex-col text-center items-center">
                  <div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-yellow-100 text-yellow-500 mb-5 flex-shrink-0">
                    <img src={orderfood} alt="Order food" />
                  </div>
                  <div class="flex-grow">
                    <h2 class="text-gray-900 text-lg title-font font-medium mb-3">
                      Order Food !
                    </h2>
                    <p class="leading-relaxed text-base">
                      As easy as never ever before ! Now with our advanced
                      stuff, ordering food it’s a piece of cake !
                    </p>
                  </div>
                </div>
                <div class="p-4 md:w-1/3 flex flex-col text-center items-center">
                  <div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-yellow-100 text-yellow-500 mb-5 flex-shrink-0">
                    <img src={pickup} alt="pickup" />
                  </div>
                  <div class="flex-grow">
                    <h2 class="text-gray-900 text-lg title-font font-medium mb-3">
                      Pick-Up Food !
                    </h2>
                    <p class="leading-relaxed text-base">
                      Pick-Up your food if you are taking it away or just seat,
                      relax and have it on your table when ready !
                    </p>
                  </div>
                </div>
                <div class="p-4 md:w-1/3 flex flex-col text-center items-center">
                  <div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-yellow-100 text-yellow-500 mb-5 flex-shrink-0">
                    <img src={enjoy} alt="enjoy" />
                  </div>
                  <div class="flex-grow">
                    <h2 class="text-gray-900 text-lg title-font font-medium mb-3">
                      Enjoy Food !
                    </h2>
                    <p class="leading-relaxed text-base">
                      As soon as you get your food you can enjoy it till the
                      last piece of it and come back soon for another one !
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About section */}
      <section id="about-section" className="py-4">
        <div class="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
          <div class="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
            <iframe
              width="100%"
              height="100%"
              class="absolute inset-0"
              frameborder="0"
              title="map"
              marginheight="0"
              marginwidth="0"
              src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=%C4%B0zmir+(My%20Business%20Name)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed"
              style={{ filter: 'grayscale(1) contrast(1.2) opacity(0.4)' }}
            ></iframe>
            <div class="bg-white relative flex flex-wrap py-6 rounded shadow-md">
              <div class="lg:w-1/2 px-6">
                <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs">
                  ADDRESS
                </h2>
                <p class="mt-1">
                  My Pizza app store, North Bangalore, 3rd cross church street
                  road
                </p>
              </div>
              <div class="lg:w-1/2 px-6 mt-4 lg:mt-0">
                <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs">
                  EMAIL
                </h2>
                <a class="text-yellow-500 leading-relaxed">example@email.com</a>
                <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
                  PHONE
                </h2>
                <p class="leading-relaxed">123-456-7890</p>
              </div>
            </div>
          </div>
          <div class="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
            <h2 class="pb-5 text-3xl font-bold text-left text-transparent bg-gradient-to-r from-orange-600 to-orange-100 bg-clip-text">
              About
            </h2>
            <p class="leading-relaxed mb-5 text-gray-600">
              At Pizza App, we are passionate about crafting exceptional pizzas
              that bring joy to every bite. Our journey began with a commitment
              to using the freshest, high-quality ingredients, combined with
              authentic recipes passed down through generations. Whether you're
              craving a classic Margherita or an adventurous specialty pizza,
              each creation is made with care and attention to detail. Join us
              in celebrating the art of pizza-making and indulge in flavors that
              will leave you wanting more. Welcome to the world of Pizza App ,
              where every pizza tells a delicious story
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
