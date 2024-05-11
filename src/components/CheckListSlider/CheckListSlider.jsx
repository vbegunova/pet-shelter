import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import './styles.css';

import { Navigation } from 'swiper/modules';
import { Section, Container, Title, Text } from './CheckListSlider.styled';

const CheckListSlider = () => {
  return (
    <Section>
      <Container>
        <Title>Що потрібно знати?</Title>
        <Swiper
          slidesPerView={'auto'}
          spaceBetween={19}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Text>
              Тварини не віддаються без попереднього проходження інтерв’ю та
              узгодження дати і часу приїзду з менеджером по адопції/директоркою
              притулку. Для цього зателефонуй за тел. +38 (066) 345 67 89, якщо
              хочеш взяти котика або собачку.
            </Text>
          </SwiperSlide>
          <SwiperSlide>
            <Text>
              Інтерв'ю є обов'язковим етапом процесу адопції. Менеджер задасть
              тобі питання, відповіді на які допоможуть зрозуміти твою
              готовність до появи нового члена сім'ї, а також ви отримаєте
              відповіді на ваші питання, дізнаєтеся більше про тварин та
              отримаєте консультацію щодо догляду.
            </Text>
          </SwiperSlide>
          <SwiperSlide>
            <Text>
              Менеджер по адопції має право відмовити вам у прийнятті тварини,
              якщо вважає, що для цього є об'єктивні підстави. Ми дбаємо про
              безпеку та комфорт тварин, тому важливо, щоб вони потрапили до
              відповідальних власників.
            </Text>
          </SwiperSlide>
          <SwiperSlide>
            <Text>
              Менеджер по адопції доступний для зв'язку з 10 до 19 години. Будь
              ласка, врахуйте цей час для планування вашого візиту та інтерв'ю.
            </Text>
          </SwiperSlide>
          <SwiperSlide>
            <Text>
              Ви можете заздалегідь переглянути анкети тварин на нашому сайті
              або звернутися до менеджера за порадою
            </Text>
          </SwiperSlide>
          <SwiperSlide>
            <Text>
              Ми укладаємо договір про передачу з кожним власником. Менеджер
              може надіслати вам договір для попереднього ознайомлення перед
              підписанням.
            </Text>
          </SwiperSlide>
        </Swiper>
      </Container>
    </Section>
  );
}

export default CheckListSlider;