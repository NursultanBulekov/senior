import { LitElement, css, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { resolveRouterPath } from '../router';

import '@shoelace-style/shoelace/dist/components/button/button.js';
@customElement('app-navigation')
export class navigation extends LitElement {
  static styles = css`
  #navigation {
    display: flex;
    flex-direction: row;
    padding: 16px;
    position: fixed; /* Positions relative to the viewport */
    bottom: 0;      /* Aligns the bottom edge to the bottom of the screen */
    }
  `;

  render() {
    return html`
    <div class="navigation" id="navigation">
        <div class="navigation-buttons">
            <sl-button href="${resolveRouterPath('about')}" variant="primary">About</sl-button>
            <sl-button href="${resolveRouterPath('dashboards')}" variant="primary">Pcs</sl-button>
            <sl-button href="${resolveRouterPath('dashboards')}" variant="primary">Sensors</sl-button>
            <sl-button href="${resolveRouterPath('dashboards')}" variant="primary">3d Model</sl-button>
    </div>
    </div>
    `;
  }
}
