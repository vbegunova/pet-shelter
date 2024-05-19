import PetItem from '../PetItem';
import {
  Section,
  Container,
  Title,
  List,
  MoreButton,
  BgLineFirst,
  Box,
  PaginationWrapper,
  PaginationButton,
  PaginationText,
  PaginationIcon,
} from './AdoptionFindFriend.styled';
import sprite from '../../images/sprite.svg';
import { useState } from 'react';
import { useEffect } from 'react';
import { fetchCats } from 'services/api';
import prevButton from '../../images/prev-button-desktop.svg';
import nextButton from '../../images/next-button-desktop.svg';

const AdoptionFindFriend = () => {
  const [cats, setCats] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [isPagination, setIsPagination] = useState(false);
  const [limit, setLimit] = useState(window.innerWidth <= 768 ? 3 : 6);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(prevPage => prevPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(prevPage => prevPage - 1);
    }
  };

  const updateLimit = () => {
    setLimit(window.innerWidth <= 768 ? 3 : 6);
  };

  useEffect(() => {
    window.addEventListener('resize', updateLimit);
    updateLimit();

    return () => {
      window.removeEventListener('resize', updateLimit);
    };
  }, []);

  useEffect(() => {
    const fetch = async () => {
      try {
        const resp = await fetchCats(limit, currentPage);
        setCats(resp.data);
        setTotalPages(resp.totalPages);
      } catch (error) {
        console.log(error);
      }
    };
    fetch();
  }, [limit, currentPage]);

  return (
    <Section>
      <Container>
        <Box>
          <Title>Знайти друга</Title>
          <List>
            {cats.map(({ _id, name, sex, age }) => {
              return (
                <PetItem key={_id} id={_id} name={name} sex={sex} age={age} />
              );
            })}
          </List>
          {!isPagination && (
            <MoreButton onClick={() => setIsPagination(true)}>
              Усі хвостики
            </MoreButton>
          )}
          {isPagination && (
            <PaginationWrapper>
              <PaginationButton
                onClick={handlePreviousPage}
                disabled={currentPage === 1}
              >
                <PaginationIcon src={prevButton} />
              </PaginationButton>
              <PaginationText>
                Сторінка {currentPage} з {totalPages}
              </PaginationText>
              <PaginationButton
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
              >
                <PaginationIcon src={nextButton} />
              </PaginationButton>
            </PaginationWrapper>
          )}
        </Box>
        <BgLineFirst>
          <use href={`${sprite}#icon-line-first`}></use>
        </BgLineFirst>
      </Container>
    </Section>
  );
};

export default AdoptionFindFriend;
