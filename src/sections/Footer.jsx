// import { mySocials } from "../constants";
import linkedinIcon from "../assets/images/linkedin.svg"
import whatsappIcon from "../assets/images/whatsapp.svg"
import instagramIcon from "../assets/images/instagram.svg"

const mySocials = [
  {
    name: "WhatsApp",
    href: "https://wa.me/5519982036909",
    icon: whatsappIcon,
  },
  {
    name: "Linkedin",
    href: "www.linkedin.com/in/isabellasilas",
    icon: linkedinIcon,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/isa_silas",
    icon: instagramIcon,
  },
];


const Footer = () => {
  return (
    <section className="flex flex-wrap items-center justify-between gap-5 pb-3 text-sm text-neutral-400 c-space">
      <div className="mb-4 bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full" />
      <div className="flex gap-2">
        {/* <p>Terms & Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p> */}
      </div>
      <div className="flex gap-3">
        {mySocials.map((social, index) => (
          <a href={social.href} key={index}>
            <img src={social.icon} className="w-7 h-7" alt={social.name} />
          </a>
        ))}
      </div>
    </section>
  );
};

export default Footer;