/////////////
// IMPORTS //
/////////////

// BÁSICO
import React from 'react';

// CONSTANTES
import SHARED from '../../utils/global-constants.js';

//////////////////////////
// COMPONENTE PRINCIPAL //
//////////////////////////
const About = () => {
  return (
    <div>
      <div className='about'>
        <h1><strong>MENÉAME EL COCHE</strong></h1>
      </div>
      <div>
        <div className='container'>
          <h2>¿Qué somos?</h2>
          <p><strong>MENÉAME EL COCHE</strong> es una plataforma para comprar y vender su automóvil de manera totalmente gratuíta. Ponemos en contacto compradores con vendedores.</p>
          <p>Si usted es un <strong>vendedor</strong>, podra poner su coche a la venta con un precio y una carácterísticas, y la comunidad, mediante votos decidirá si la oferta es adecuada.</p>
          <p>Si usted es un <strong>comprador</strong>, simplemente con ir al buscador y filtrando las opciones que usted quiera, le aparecerán en las primeras posiciones, los vehículos que la comunidad cree que son los mejores en calidad/precio.</p>
          <p>Si usted es un <strong>miembro</strong>, puede ver todos los productos y votar por ellos. Cuanta más experiencia adquieras, sus valoraciones serán cada vez mas importantes.</p>
        </div>
        <div className='container'>
          <h2>¿Cómo empiezo?</h2>
          <p>Es muy facil de usar, simplemente <a href={SHARED.SIGNUP_PATH}><strong>cree una cuenta</strong></a> y ya podrá usar todos los beneficos que ofrece esta increíble red social.</p>
        </div>
      </div>
      <div className='about'>
        <img src="https://media.giphy.com/media/Seb3lu2lYYmVq/giphy.gif" alt='the-gif' width='150' />
        <p>@meneamecoche 2020</p>
      </div>
    </div>
  );
}

////////////
// EXPORT //
////////////
export default About;