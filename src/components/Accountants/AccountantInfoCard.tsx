import FlexBox from '../StyledComponents/FlexBox'
import { customTheme } from '../../globalConfig/customTheme'
import { AccountantType } from '../../types/Account'

import {
  AccountantProfileIcon,
  CustomBox,
  Container,
  MoreInfoButton,
  InfoParagraph,
} from '../StyledComponents/AccountantCard/AccountantStyles'


interface IAccountantInfoCard {
    accountant: AccountantType
}

const AccountantInfoCard = ({ accountant }: IAccountantInfoCard) => {
  return (
    <Container>
      <FlexBox>
        <AccountantProfileIcon src={accountant.picture.medium} alt="thumbnail" />
        <CustomBox $margin="0 0 0 16px">
          <InfoParagraph color={customTheme.colors.gray}>Twoja księgowa</InfoParagraph>
          <InfoParagraph
            fontSize={customTheme.fontSize.lg}
            fontWeight={700}
            $lineheight="32px"
            style={{ width: '172px' }}
          >{`${accountant.name.first} ${accountant.name.last}`}</InfoParagraph>
        </CustomBox>
      </FlexBox>
      <CustomBox $margin="24px 0 0 0">
        <InfoParagraph
          fontSize={customTheme.fontSize.sm}
          $lineheight="20px"
          color={customTheme.colors.gray}
        >
          E-mail
        </InfoParagraph>
        <InfoParagraph textDecoration="underline">{accountant.email}</InfoParagraph>
      </CustomBox>
      <CustomBox $margin="24px 0 0 0">
        <InfoParagraph
          fontSize={customTheme.fontSize.sm}
          $lineheight="20px"
          color={customTheme.colors.gray}
        >
          Telefon
        </InfoParagraph>
        <InfoParagraph>{accountant.cell}</InfoParagraph>
      </CustomBox>
      <CustomBox $margin="24px 0 0 0">
        <InfoParagraph color={customTheme.colors.gray} fontSize="14px" $lineheight="20px">
          Średnia cena netto usługi / m-c
        </InfoParagraph>
        <FlexBox>
          <InfoParagraph>350.00</InfoParagraph>
          <InfoParagraph
            fontSize={customTheme.fontSize.xs}
            $lineheight="16px"
            style={{ alignSelf: 'center' }}
            $marginleft="4px"
          >
            PLN
          </InfoParagraph>
        </FlexBox>
      </CustomBox>
      <CustomBox $margin="24px 0 0 0" style={{ alignItems: 'flex-start' }}>
        <MoreInfoButton>Dowiedz się więcej</MoreInfoButton>
      </CustomBox>
    </Container>
  );
};

export default AccountantInfoCard;


