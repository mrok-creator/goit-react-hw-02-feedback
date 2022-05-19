import s from './section.module.css';

function Section({ title, children }) {
  return (
    <div className={s.section}>
      <h2 className={s.title}>{title}</h2>
      {children}
    </div>
  );
}

export default Section;
//
