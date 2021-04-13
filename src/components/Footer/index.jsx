import React from 'react';

import { Container, Links, Link, Copyright } from './styles';

function Footer() {
  return (
    <Container>
      <Links>
        <Link>
          <a href="/">Sobre</a>
        </Link>
        <Link>
          <a href="/">Blog</a>
        </Link>
        <Link>
          <a href="/">Carreiras</a>
        </Link>
        <Link>
          <a href="/">Ajuda</a>
        </Link>
        <Link>
          <a href="/">API</a>
        </Link>
        <Link>
          <a href="/">Privacidade</a>
        </Link>
        <Link>
          <a href="/">Termos</a>
        </Link>
        <Link>
          <a href="/">Contas mais relevantes</a>
        </Link>
        <Link>
          <a href="/">Hashtags</a>
        </Link>
        <Link>
          <a href="/">Localizações</a>
        </Link>
      </Links>
      <Links>
        <Link>
          <a href="/">Beleza</a>
        </Link>
        <Link>
          <a href="/">Dança e apresentação</a>
        </Link>
        <Link>
          <a href="/">Fitness</a>
        </Link>
        <Link>
          <a href="/">Comida e bebida</a>
        </Link>
        <Link>
          <a href="/">Casa e jardim</a>
        </Link>
        <Link>
          <a href="/">Música</a>
        </Link>
        <Link>
          <a href="/">Artes visuais</a>
        </Link>
      </Links>
      <Copyright>
        <Link>
          <a href="/">
            Portugues (Brasil)
            <span>
              <svg
                aria-label="Ícone de seta para baixo"
                class="_8-yf5"
                fill="#8e8e8e"
                height="12"
                viewBox="0 0 48 48"
                width="12"
              >
                <path d="M40 33.5c-.4 0-.8-.1-1.1-.4L24 18.1l-14.9 15c-.6.6-1.5.6-2.1 0s-.6-1.5 0-2.1l16-16c.6-.6 1.5-.6 2.1 0l16 16c.6.6.6 1.5 0 2.1-.3.3-.7.4-1.1.4z" />
              </svg>
            </span>
          </a>
        </Link>
        <Link>
          <span>© 2021 Instagram do Facebook</span>
        </Link>
      </Copyright>
    </Container>
  );
}

export default Footer;
