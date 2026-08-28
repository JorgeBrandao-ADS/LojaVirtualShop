function Banner() {
  function irParaProdutos() {
    document.getElementById('produtos').scrollIntoView({
      behavior: 'smooth',
    });
  }

  return (
    <section
      className="banner"
      onClick={irParaProdutos}
      role="button"
      tabIndex="0"
    ></section>
  );
}

export default Banner;
