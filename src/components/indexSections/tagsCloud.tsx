import TagButton from '../tagButton';

const TagsCloud = () => {
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
    },
    {
      items: [
        'Потенциал хранения',
        'Оценка рейтинговых агенств',
        'Сортовой состав винограда',
      ],
      margin: '55px',
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
    },
    {
      items: [
        'Особенности упаковки',
        'Гастрономическая сочетаемость',
        'Температура подачи',
      ],
      margin: '26px',
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
    },
    {
      items: ['Сортовой состав винограда', 'Объём тары', 'Винные бренды'],
      margin: '127px',
    },
    {
      items: [
        'Объём тары',
        'Год сбора',
        'Вкусовые свойства',
        'Особенности производства',
      ],
      margin: '42px',
    },
  ];

  return (
    <div className={`mt-8 px-6`}>
      {rows.map((row, i) => {
        return (
          <div
            className={`mb-2.5 flex flex-nowrap w-full`}
            key={`row${i}`}
            style={{
              marginLeft: row.margin,
            }}
          >
            {row.items.map((item, j) => {
              return <TagButton key={`item${j}row${i}`}>{item}</TagButton>;
            })}
          </div>
        );
      })}
    </div>
  );
};

export default TagsCloud;
