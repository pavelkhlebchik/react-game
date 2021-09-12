import layout from './layout.module.css';


const Layout = ({title, descr, urlBg, colorBg = '#ff9'}) => {
  const bgStyle = urlBg ? { backgroundImage: `url(${urlBg})`} : {background: `${colorBg}`};
  return (
      <section className={layout.root} style={bgStyle}>
        <div className={layout.wrapper}>
          <article>
            <div className={layout.title}>
              {title && (<h3>{title}</h3>)}
              <span className={layout.separator}></span>
            </div>
            <div className={(layout.desc, layout.full)}>
              {descr && (<p>{descr}</p>)}
            </div>
          </article>
        </div>
      </section>
  )
}

export default Layout;
