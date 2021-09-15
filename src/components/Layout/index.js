import layout from './layout.module.css';
import classNames from 'classnames';


const Layout = ({ title, descr, urlBg, colorBg = "#ff9", children }) => {
  const bgStyle = urlBg ? { backgroundImage: `url(${urlBg})` } : { background: `${colorBg}` };
  return (
    <section className={layout.root} style={bgStyle}>
      <div className={layout.wrapper}>
        <article>
          <div className={layout.title}>
            {title && (<h3>{title}</h3>)}
            <span className={layout.separator}></span>
          </div>
          <div className={classNames(layout.desc, layout.full)}>
            {children}
          </div>
        </article>
      </div>
    </section>
  )
}

export default Layout;
