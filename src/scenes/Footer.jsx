import SocialMediaIcons from "../components/SocialMediaIcons";

const Footer = () => {
  return (
    <footer className=" bg-red pb-10">
      <div className="h-[50px] flex flex-col w-full mx-auto justify-center items-center p-10">
        <SocialMediaIcons />
        <div className="md:flex justify-center md:justify-between text-center ">
          
          <p className="flex font-playfair text-md text-yellow">
            ©2022 All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;