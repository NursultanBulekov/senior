import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

// You can also import styles from another file
// if you prefer to keep your CSS seperate from your component
import { styles } from './about-styles';

import { styles as sharedStyles } from '../../styles/shared-styles'

import '@shoelace-style/shoelace/dist/components/card/card.js';

@customElement('app-about')
export class AppAbout extends LitElement {
  static styles = [
    sharedStyles,
    styles,
    css`.cards {
      display: flex;
      flex-direction: column;
      gap: 16px;
      width: 100%;
      max-width: 600px;
    }`,
  ]

  render() {
    return html`
      <app-header ?enableBack="${true}"></app-header>

      <main>
        <h2>About Page</h2>
        <div class="cards">
          <sl-card>
            <h2>Mission</h2>
            <p>
              someththing about mission statement
            </p>
          </sl-card>
          <sl-card>
            <h2>Team</h2>
            <p>
              teammates
            </p>
          </sl-card>
          <sl-card>
            <h2>Equipment description</h2>
            <p>
              something about equipment
            </p>
          </sl-card>
          <sl-card>
            <h2>Description</h2>
            <p>
              what the project does
            </p>
          </sl-card>
        </div>
      </main>
    `;
  }
}
