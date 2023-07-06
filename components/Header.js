import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header>
      <nav>
        <ul>        
          <li><Link href="/">Sobre</Link></li>
          <li><Link href="/occupations">Ocupações anteriores</Link></li>
          <li><a href="https://github.com/alinemoraisoliveira">Github</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;