import { Button, Stack } from '@mui/material';
import { Link } from 'react-router-dom';
import notFound from '../../images/not_found.svg';
import {
  ContentStack,
  ErrorLayoutStack,
  HeadTypography,
  Img,
  ImgContainer,
  SubHeadTypography,
} from './NotFoundPage.styles';

interface ErrProps {
  err?: string | null;
}

const NotFoundPage = ({ err }: ErrProps) => {
  return (
    <ErrorLayoutStack>
      <ContentStack>
        <ImgContainer>
          <Img src={notFound} alt="not found picture" />
        </ImgContainer>
        <Stack gap="14px" alignItems="center" mb="24px">
          <HeadTypography variant="h2">Страница не найдена</HeadTypography>
          <SubHeadTypography>
            {err
              ? err
              : 'Возможно страницы не существует или вы ошиблись ссылкой'}
          </SubHeadTypography>
        </Stack>
        <Button size="large">
          <Link to={'/'}>На главную</Link>
        </Button>
      </ContentStack>
    </ErrorLayoutStack>
  );
};

export default NotFoundPage;
