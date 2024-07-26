import css from './SectionInfo.module.css';

const SectionInfo = () => {
  return (
    <div className={css.section}>
      <h2 className={css.title}>Lorem ipsum dolor sit amet</h2>
      <ul className={css.list}>
        <li className={css.item}>
          <h3 className={css.cardTitle}>
            <span className={css.cardNumber}>1</span>Lorem ipsum dolor sit amet
          </h3>
          <p className={css.text}>
            Ut eget ullamcorper elit, sed aliquam dui. Integer rutrum venenatis
            elit in convallis. Ut justo libero, posuere a nibh quis,
            sollicitudin venenatis ipsum. Ut vestibulum quis mauris vel posuere.
            Pellentesque ut sem nec massa elementum ultricies. Nulla efficitur
            rutrum lacus, id mattis ligula
          </p>
        </li>
        <li className={css.item}>
          <h3 className={css.cardTitle}>
            <span className={css.cardNumber}>2</span>Lorem ipsum dolor sit amet
          </h3>
          <p className={css.text}>
            Ut eget ullamcorper elit, sed aliquam dui. Integer rutrum venenatis
            elit in convallis. Ut justo libero, posuere a nibh quis,
            sollicitudin venenatis ipsum. Ut vestibulum quis mauris vel posuere.
            Pellentesque ut sem nec massa elementum ultricies. Nulla efficitur
            rutrum lacus, id mattis ligula
          </p>
        </li>
        <li className={css.item}>
          <h3 className={css.cardTitle}>
            <span className={css.cardNumber}>3</span>Lorem ipsum dolor sit amet
          </h3>
          <p className={css.text}>
            Ut eget ullamcorper elit, sed aliquam dui. Integer rutrum venenatis
            elit in convallis. Ut justo libero, posuere a nibh quis,
            sollicitudin venenatis ipsum. Ut vestibulum quis mauris vel posuere.
            Pellentesque ut sem nec massa elementum ultricies. Nulla efficitur
            rutrum lacus, id mattis ligula
          </p>
        </li>
      </ul>
      <button type="button" className={css.btn}>Lorem</button>
    </div>
  );
};

export default SectionInfo;
