import { memo } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import cn from "classnames";
import { SkipNavLink } from "@reach/skip-nav";

import Container from "./container";

import GitHubLogo from "./icons/github";

function Navbar() {
  const { route } = useRouter();

  return (
    <Container center>
      <SkipNavLink tabIndex="0" />
      <h1 className="visually-hidden" aria-hidden="true">
        STOKED
      </h1>
      <nav className="f-reset">
        <div className="mobile-top">
          <Link href="/">
            <a className="mobile-logo">Stoked Dev</a>
          </Link>

          <div className="icons">
            <a
              href="https://github.com/jpbow/blog"
              aria-label="Stoked.dev on GitHub"
              rel="noopener noreferrer"
              target="_blank"
              className="icon mute"
            >
              <GitHubLogo color="currentColor" />
            </a>
          </div>
        </div>

        <div className="links">
          <div className="links-group spaced">
            <Link href="/">
              <a className="logo">STOKED</a>
            </Link>
          </div>

          <div className="links-group spaced-group">
            <Link href="/posts">
              <a
                className={cn("mute", {
                  selected: route.startsWith("/")
                })}
              >
                Home
              </a>
            </Link>

            <a
              className="mute"
              href="https://jamiebowley.com"
              rel="noopener"
              target="_blank"
            >
              About
            </a>

            <a
              href="https://github.com/jpbow/blog"
              aria-label="Stoked.dev on GitHub"
              rel="noopener noreferrer"
              target="_blank"
              className="icon mute"
            >
              <GitHubLogo color="currentColor" />
            </a>
          </div>
        </div>
      </nav>

      <style jsx>{`
        nav {
          position: relative;
          flex: 1;
          height: 80px;
          display: flex;
          align-items: center;
        }

        .logo {
          font-size: 24px;
          font-weight: bold;
          color: black;
        }

        .logo:hover {
          text-decoration: underline;
        }

        .links {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          z-index: 1;
        }

        .links a {
          text-decoration: none;
          transition: color 0.2s ease;
        }

        .links a:hover {
          color: #000;
        }

        .links a.selected {
          color: #0070f3;
          font-weight: 600;
        }

        .links a:first-child,
        .links a:last-child {
          display: flex;
        }

        .links-group {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          z-index: 1;
        }

        .spaced-group > a {
          padding-left: 2rem;
        }

        a.icon,
        a.icon > :global(div.container) {
          /* Remove additional space from SVG */
          display: inline-flex;
          justify-content: center;
        }

        a.icon > :global(div.container) {
          overflow: visible;
        }

        .mobile-logo,
        .mobile-top {
          display: none;
        }

        .header-feedback {
          display: inline-flex;
        }

        /* Mobile */

        @media (max-width: 640px) {
          .mobile-logo {
            display: block;
          }

          nav {
            height: unset;
            flex-direction: column;
            align-items: flex-start;
            justify-content: flex-start;
            padding: 1rem 0;
          }

          nav .links .logo,
          nav .links .icon {
            display: none;
          }

          nav .links a {
            font-size: 14px;
          }

          .mobile-top {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 0.5rem;
          }

          .mobile-top > .icons {
            display: flex;
            align-items: center;
          }

          .mobile-top > .icons a:nth-child(2) {
            margin-left: 2rem;
          }
        }

        @media (max-width: 950px) {
          .header-feedback {
            display: none;
          }
        }
      `}</style>
    </Container>
  );
}

export default memo(Navbar);
