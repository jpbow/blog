import Link from "next/link";

import Container from "./container";
import withPure from "./hoc/pure";

export default withPure(() => (
  <Container wide gray>
    <Container>
      <footer>
        <style jsx>
          {`
            .grid {
              display: grid;
              grid-template-columns: 1fr 1fr 1fr 1fr;
              grid-row-gap: 2rem;
            }
            footer {
              padding: 2rem 0 4rem;
              min-height: 400px;
            }
            a,
            p,
            .copyright {
              color: #8c8c8c;
            }
            h4 a {
              color: inherit;
            }
            a:hover {
              color: #111;
            }
            .copyright {
              margin-top: 3rem;
            }
            .copyright div {
              margin-top: 0.5rem;
            }
            h4 {
              margin-bottom: 0.75rem;
            }
            p {
              margin-top: 0;
              margin-bottom: 0.25rem;
            }
            @media screen and (max-width: 700px) {
              .grid {
                grid-template-columns: 1fr 1fr;
              }

              h4,
              p {
                margin: 0;
              }

              a {
                display: block;
                padding-top: 15px;
                padding-bottom: 15px;
              }
            }
          `}
        </style>
        <div className="grid f5">
          <div>
            <h4 className="fw5">About Me</h4>
            <p>
              <a
                href="https://jamiebowley.com"
                rel="noopener noreferrer"
                target="_blank"
              >
                Personal Site
              </a>
            </p>
            <p>
              <a
                href="https://github.com/jpbow"
                rel="noopener noreferrer"
                target="_blank"
              >
                GitHub
              </a>
            </p>
            <p>
              <a
                href="https://gitlab.com/jpbow"
                rel="noopener noreferrer"
                target="_blank"
              >
                GitLab
              </a>
            </p>
          </div>
        </div>
        <div className="copyright f6">
          <div>
            Copyright © {`${new Date().getFullYear()}`} Jamie Bowley. All rights
            reserved.
          </div>
        </div>
      </footer>
    </Container>
  </Container>
));
