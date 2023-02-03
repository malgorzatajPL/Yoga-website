import {
  FooterLinks,
  ItemFooter,
  ListFooter,
  TitleFooter,
} from './FooterLinks.style';

const FooterLink = ({
  titleFooter,
  linksFooter,
}: {
  images?: boolean;
  titleFooter: string;
  linksFooter: string[];
}) => {
  return (
    <FooterLinks>
      <TitleFooter> {titleFooter}</TitleFooter>
      <ListFooter>
        {linksFooter.map((item) => (
          <ItemFooter key={item}>{item}</ItemFooter>
        ))}
      </ListFooter>
    </FooterLinks>
  );
};

export default FooterLink;
