import { MutableRefObject, useEffect, useRef, useState } from 'react';
import TagButton from '../tagButton';
import { tagsObserver } from './tagsObserver';

const TagsCloud = () => {

  const [trigger, setTrigger] = useState(false)
  const containRef = useRef() as MutableRefObject<HTMLDivElement>

  useEffect(() => {
    tagsObserver(setTrigger, containRef.current)
  },[])
  const rows = [
    {
      items: [
        'Цена',
        'Цвет',
        'Содержание сахара',
        'Тип пробки',
        'Сортовой состав винограда',
      ],
      margin: '95px',
      className: "tags-1",
      direction: "left"
    },
    {
      items: [
        'Винные бренды',
        'Страна',
        'Регион',
        'Хозяйство',
        'Содержание алкоголя',
      ],
      margin: '14px',
      className: "tags-2",
      direction: "left"
    },
    {
      items: [
        'Потенциал хранения',
        'Оценка рейтинговых агенств',
        'Сортовой состав винограда',
      ],
      margin: '55px',
      className: "tags-3",
      direction: "right"
    },
    {
      items: [
        'Особенности производства',
        'Оценка пользователей',
        'Повод',
        'Год сбора',
        'Объём тары',
      ],
      margin: '0px',
      className: "tags-4",
      direction: "right"
    },
    {
      items: [
        'Особенности упаковки',
        'Гастрономическая сочетаемость',
        'Температура подачи',
      ],
      margin: '26px',
      className: "tags-5",
      direction: "left"
    },
    {
      items: [
        'Аппелласьон',
        'Терруар',
        'Год розлива',
        'Ароматические свойства',
        'Вкусовые свойства',
      ],
      margin: '55px',
      className: "tags-6",
      direction: "right"
    },
    {
      items: ['Сортовой состав винограда', 'Объём тары', 'Винные бренды'],
      margin: '127px',
      className: "tags-7",
      direction: "right"
    },
    {
      items: [
        'Объём тары',
        'Год сбора',
        'Вкусовые свойства',
        'Особенности производства',
      ],
      margin: '42px',
      className: "tags-8",
      direction: "right"
    },
  ];

  return (
    <div 
    style={{
      minWidth: "1300px"
    }}
    className={`mt-8 px-6 w-full flex flex-col items-center`} ref={containRef}>
      {rows.map((row, i) => {
        return (
          <div
            className={`mb-2.5 flex flex-nowrap w-full relative ${trigger && row.className}`}
            key={`row${i}`}
            style={{
              left: row.direction === "left" ? "-50%" : "50%",
              marginLeft: row.margin,
            }}
          >
            <div className={`${"mx-auto"}  transition-all duration-1000`}>
            {row.items.map((item, j) => {
              return <TagButton key={`item${j}row${i}`}>{item}</TagButton>;
            })}
            </div>

          </div>
        );
      })}
    </div>
  );
};

export default TagsCloud;
