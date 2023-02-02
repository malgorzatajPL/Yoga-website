import { ButtonPrimary } from '../../shared/ButtonPrimary';
import { TitleCard } from '../ChooseClass/Card.style';
import { CardOfferStyle, ImageOffer, TextOffer } from './CardOffer.style';

interface OfferProps {
  titleOffer: string;
  priceOffer: string;
  imageOffer: string;
  textOffer: string;
}

export const CardOffer = ({
  titleOffer,
  priceOffer,
  imageOffer,
  textOffer,
}: OfferProps) => {
  return (
    <CardOfferStyle>
      <TitleCard lineHeight={true} primary={true}>
        {titleOffer}
      </TitleCard>
      <TitleCard lineHeight={true} primary={true}>
        {priceOffer}
      </TitleCard>
      <ImageOffer src={imageOffer} />
      <TextOffer>{textOffer}</TextOffer>
      <ButtonPrimary primary={false} textButton='Register now' />
    </CardOfferStyle>
  );
};
