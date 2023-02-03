import {
  BoxFooter,
  BoxImages,
  FooterStyle,
  FooterSubtitle,
  FooterTitle,
} from './Footer.style';
import FooterLink from './FooterLinks';
import { FooterImageStyle } from './FooterLinks.style';

const about: Array<string> = [
  'History',
  'Our Team',
  'Brand Guidelines',
  'Terms & Condition',
  'Privacy Policy',
];
const services: Array<string> = [
  'How to Order',
  'Our Product',
  'Order Status',
  'Promo',
  'Payment Method',
];
const imagesFooter: Array<string> = [
  'instagram.png',
  'facebook.png',
  'twitter.png',
  'whatsApp.png',
];
const follow: Array<string> = ['Facebook', 'Twitter', 'Instagram', 'Whatsaap'];

const Footer = () => {
  console.log(follow);
  return (
    <FooterStyle>
      <BoxFooter>
        <FooterTitle>Title Here</FooterTitle>
        <FooterSubtitle>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at
          dignissim nunc, id maximus ex. Etiam nec dignissim elit, at dignissim
          enim.
        </FooterSubtitle>
      </BoxFooter>
      <BoxFooter>
        <FooterLink titleFooter='Follow' linksFooter={about} />
      </BoxFooter>
      <BoxFooter>
        <FooterLink titleFooter='Follow' linksFooter={services} />
      </BoxFooter>
      <BoxFooter>
        <BoxImages>
          {imagesFooter.map((item) => (
            <FooterImageStyle src={item} width={31} height={32} />
          ))}
        </BoxImages>
        <FooterLink titleFooter='Follow' linksFooter={follow} />
      </BoxFooter>
    </FooterStyle>
  );
};

export default Footer;
