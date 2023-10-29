import Image from "next/image";

const Footer: React.FunctionComponent = () => {
  return (
    <footer>
      <div className="footer">
        <div className="flex items-center justify-center">
          <div className="md:flex md:items-center md:justify-center border-b border-white border-solid">
            <div className="p-8 sm:mx-32 md:mx-0 text-center">
              <span className="footer-navigation">Store</span>
            </div>
            <div className="p-8 sm:mx-32 md:mx-0 text-center">
              <span className="footer-navigation">About Us</span>
            </div>
            <div className="p-8 sm:mx-32 md:mx-0 text-center">
              <span className="footer-navigation">FAQs</span>
            </div>
            <div className="p-8 sm:mx-32 md:mx-0 text-center">
              <span className="footer-navigation">Contact Us</span>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center my-16">
          <div className="flex items-center justify-center relative mx-2">
            <Image src={"/Rectangle 3267.png"} width={36} height={36} alt="facebook" />
            <Image
              src={"/Platform=Facebook, Color=Negative.png"}
              width={22}
              height={17.88}
              alt="facebook"
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            />
          </div>
          <div className="flex items-center justify-center relative mx-2">
            <Image src={"/Rectangle 3267.png"} width={36} height={36} alt="facebook" />
            <Image
              src={"/003-twitter.png"}
              width={22}
              height={17.88}
              alt="facebook"
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            />
          </div>
          <div className="flex items-center justify-center relative mx-2">
            <Image src={"/Rectangle 3267.png"} width={36} height={36} alt="facebook" />
            <Image
              src={"/Platform=Instagram, Color=Negative.png"}
              width={22}
              height={17.88}
              alt="facebook"
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            />
          </div>
        </div>
        <div className="flex items-center justify-center my-16">
          <div className="md:flex md:items-start md:justify-center">
            <div className="flex justify-center mb-8 md:mx-4">
              <Image src={"/Frame.png"} width={24} height={24} alt="phone icon" />
              <span className="footer-info">+91 96507 87318</span>
            </div>
            <div className="flex justify-center items-start mb-8 md:mx-4">
              <Image src={"/Frame (1).png"} width={24} height={24} alt="phone icon" />
              <span className="footer-info" style={{ width: "260px" }}>
                B-103, Fourth Floor, Behind Triveni Complex, Panchsheel Vihar, New Delhi, 110017
              </span>
            </div>
            <div className="flex justify-center mb-8 md:mx-4">
              <Image src={"/Frame (2).png"} width={24} height={24} alt="phone icon" />
              <span className="footer-info">orders@varamuseums.com</span>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center h-16 border-white border-t border-solid">
          <span className="footer-copyright mx-4 text-center">Copyright © 2020. Museumverse. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
